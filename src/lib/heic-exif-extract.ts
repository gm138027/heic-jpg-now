import {
  Box,
  iterateBoxes,
  readBox,
  readString,
  readUint,
  readUint32,
  startsWith,
  toNumber,
} from "./binary-utils";
import { readBoxHeader, readRange } from "./file-read";

const EXIF_HEADER = new Uint8Array([0x45, 0x78, 0x69, 0x66, 0x00, 0x00]);

export async function extractExifFromHeic(file: Blob): Promise<Uint8Array | null> {
  for await (const metaBox of findMetaBoxesInFile(file)) {
    const exif = await extractExifFromMeta(file, metaBox);
    if (exif) {
      return exif;
    }
  }
  return null;
}

function normalizeExifPayload(exifData: Uint8Array) {
  if (exifData.length < 4) {
    return null;
  }

  if (startsWith(exifData, EXIF_HEADER)) {
    const tiffBytes = exifData.slice(EXIF_HEADER.length);
    return isTiffHeader(tiffBytes) ? tiffBytes : null;
  }

  if (isTiffHeader(exifData)) {
    return exifData;
  }

  const offset = readUint32(exifData, 0);
  if (offset > 0 && offset < exifData.length - 4) {
    const tiffBytes = exifData.slice(offset);
    return isTiffHeader(tiffBytes) ? tiffBytes : null;
  }

  return null;
}

async function extractExifFromMeta(file: Blob, metaBox: Box): Promise<Uint8Array | null> {
  const metaBuffer = await readRange(file, metaBox.offset, metaBox.size);
  const view = new DataView(metaBuffer.buffer, metaBuffer.byteOffset, metaBuffer.byteLength);

  const metaDataOffset = metaBox.offset + metaBox.headerSize;
  const metaChildrenStart = metaDataOffset + 4 - metaBox.offset; // version + flags
  const metaEnd = metaBox.offset + metaBox.size;
  const metaEndOffset = metaEnd - metaBox.offset;

  let exifItemId: number | null = null;
  let ilocBox: Box | null = null;
  let idatBox: Box | null = null;

  for (const box of iterateBoxes(view, metaChildrenStart, metaEndOffset)) {
    if (box.type === "iinf") {
      exifItemId = findExifItemId(view, box);
    } else if (box.type === "iloc") {
      ilocBox = box;
    } else if (box.type === "idat") {
      idatBox = box;
    }
  }

  if (exifItemId === null || !ilocBox) {
    return null;
  }

  const idatOffset = idatBox
    ? BigInt(metaBox.offset + idatBox.offset + idatBox.headerSize)
    : null;
  const location = findItemLocation(view, ilocBox, exifItemId, idatOffset);
  if (!location) {
    return null;
  }

  const chunks: Uint8Array[] = [];
  let totalLength = 0;
  for (let i = 0; i < location.offsets.length; i += 1) {
    const offset = toNumber(location.offsets[i]);
    const length = toNumber(location.lengths[i]);
    if (offset === null || length === null) {
      return null;
    }
    if (offset + length > file.size) {
      return null;
    }
    chunks.push(await readRange(file, offset, length));
    totalLength += length;
  }
  if (totalLength === 0) {
    return null;
  }

  let exifData: Uint8Array;
  if (chunks.length === 1) {
    exifData = chunks[0];
  } else {
    exifData = new Uint8Array(totalLength);
    let cursor = 0;
    for (const chunk of chunks) {
      exifData.set(chunk, cursor);
      cursor += chunk.length;
    }
  }
  const tiffBytes = normalizeExifPayload(exifData);
  if (!tiffBytes) {
    return null;
  }
  return tiffBytes;
}

async function* findMetaBoxesInFile(file: Blob) {
  const stack: Array<{ start: number; end: number }> = [{ start: 0, end: file.size }];
  while (stack.length) {
    const range = stack.pop();
    if (!range) break;
    let offset = range.start;
    while (offset + 8 <= range.end) {
      const header = await readBoxHeader(file, offset);
      if (!header) break;
      const box: Box = {
        type: header.type,
        offset,
        size: header.size,
        headerSize: header.headerSize,
      };
      if (box.type === "meta") {
        yield box;
      }
      if (isContainerBox(box.type)) {
        let childStart = box.offset + box.headerSize;
        if (box.type === "meta") {
          childStart += 4;
        }
        const childEnd = box.offset + box.size;
        if (childStart < childEnd) {
          stack.push({ start: childStart, end: childEnd });
        }
      }
      offset += box.size;
    }
  }
}

function isContainerBox(type: string) {
  return (
    type === "meta" ||
    type === "iprp" ||
    type === "ipco" ||
    type === "moov" ||
    type === "trak" ||
    type === "mdia" ||
    type === "minf" ||
    type === "stbl" ||
    type === "stsd" ||
    type === "dinf" ||
    type === "edts" ||
    type === "udta" ||
    type === "moof" ||
    type === "traf"
  );
}

function isTiffHeader(data: Uint8Array) {
  if (data.length < 4) return false;
  const littleEndian = data[0] === 0x49 && data[1] === 0x49 && data[2] === 0x2a && data[3] === 0x00;
  const bigEndian = data[0] === 0x4d && data[1] === 0x4d && data[2] === 0x00 && data[3] === 0x2a;
  return littleEndian || bigEndian;
}

function findExifItemId(view: DataView, iinfBox: Box) {
  const dataStart = iinfBox.offset + iinfBox.headerSize;
  if (dataStart + 4 > iinfBox.offset + iinfBox.size) {
    return null;
  }
  const version = view.getUint8(dataStart);
  const entryCountOffset = dataStart + 4;
  if (entryCountOffset + 2 > iinfBox.offset + iinfBox.size) {
    return null;
  }

  const entryCount = version === 0 ? view.getUint16(entryCountOffset) : view.getUint32(entryCountOffset);
  let cursor = entryCountOffset + (version === 0 ? 2 : 4);
  let parsed = 0;

  while (cursor + 8 <= iinfBox.offset + iinfBox.size && parsed < entryCount) {
    const box = readBox(view, cursor, iinfBox.offset + iinfBox.size);
    if (!box) break;
    if (box.type === "infe") {
      const item = parseInfe(view, box);
      if (item && isExifInfe(item)) {
        return item.id;
      }
    }
    parsed += 1;
    cursor = box.offset + box.size;
  }

  return null;
}

function parseInfe(view: DataView, box: Box) {
  const dataStart = box.offset + box.headerSize;
  if (dataStart + 4 > box.offset + box.size) return null;
  const version = view.getUint8(dataStart);
  if (version === 0) return null;

  let cursor = dataStart + 4;
  let itemId: number;
  if (version <= 2) {
    itemId = view.getUint16(cursor);
    cursor += 2;
  } else {
    itemId = view.getUint32(cursor);
    cursor += 4;
  }

  cursor += 2; // item_protection_index
  if (version === 1) {
    const name = readCString(view, cursor, box.offset + box.size);
    return { id: itemId, type: null, name, contentType: null };
  }

  if (cursor + 4 > box.offset + box.size) return null;
  const itemType = readString(view, cursor, 4);
  cursor += 4;

  const name = readCString(view, cursor, box.offset + box.size);
  cursor += name.byteLength;

  let contentType: string | null = null;
  if (itemType === "mime" && cursor < box.offset + box.size) {
    const mime = readCString(view, cursor, box.offset + box.size);
    contentType = mime.value || null;
  }

  return { id: itemId, type: itemType, name: name.value, contentType };
}

function isExifInfe(item: {
  type: string | null;
  name: string | null;
  contentType: string | null;
}) {
  if (item.type && item.type.toLowerCase() === "exif") {
    return true;
  }
  if (item.name && item.name.toLowerCase() === "exif") {
    return true;
  }
  if (item.contentType && item.contentType.toLowerCase().includes("exif")) {
    return true;
  }
  return false;
}

function readCString(view: DataView, start: number, end: number) {
  let cursor = start;
  let value = "";
  while (cursor < end) {
    const byte = view.getUint8(cursor);
    cursor += 1;
    if (byte === 0x00) {
      break;
    }
    value += String.fromCharCode(byte);
  }
  return { value, byteLength: cursor - start };
}

function findItemLocation(
  view: DataView,
  ilocBox: Box,
  itemId: number,
  idatOffset: bigint | null,
) {
  const dataStart = ilocBox.offset + ilocBox.headerSize;
  if (dataStart + 6 > ilocBox.offset + ilocBox.size) {
    return null;
  }

  const version = view.getUint8(dataStart);
  const sizeByte1 = view.getUint8(dataStart + 4);
  const sizeByte2 = view.getUint8(dataStart + 5);
  const offsetSize = sizeByte1 >> 4;
  const lengthSize = sizeByte1 & 0x0f;
  const baseOffsetSize = sizeByte2 >> 4;
  const indexSize = version === 1 || version === 2 ? sizeByte2 & 0x0f : 0;

  let cursor = dataStart + 6;
  const itemCount = version < 2 ? view.getUint16(cursor) : view.getUint32(cursor);
  cursor += version < 2 ? 2 : 4;

  for (let i = 0; i < itemCount; i += 1) {
    if (cursor + 2 > ilocBox.offset + ilocBox.size) return null;
    const currentItemId =
      version < 2 ? view.getUint16(cursor) : view.getUint32(cursor);
    cursor += version < 2 ? 2 : 4;

    let constructionMethod = 0;
    if (version === 1 || version === 2) {
      const tmp = view.getUint16(cursor);
      cursor += 2;
      constructionMethod = tmp & 0x000f;
    }

    const dataReferenceIndex = view.getUint16(cursor);
    cursor += 2;

    const baseOffset = readUint(view, cursor, baseOffsetSize);
    cursor += baseOffsetSize;
    const extentCount = view.getUint16(cursor);
    cursor += 2;

    const extents: Array<{ offset: bigint; length: bigint }> = [];

    for (let extentIndex = 0; extentIndex < extentCount; extentIndex += 1) {
      if (version === 1 || version === 2) {
        cursor += indexSize;
      }
      const extentOffset = readUint(view, cursor, offsetSize);
      cursor += offsetSize;
      const extentLength = readUint(view, cursor, lengthSize);
      cursor += lengthSize;

      if (currentItemId === itemId) {
        extents.push({ offset: extentOffset, length: extentLength });
      }
    }

    if (currentItemId === itemId) {
      if (dataReferenceIndex !== 0 || extents.length === 0) {
        return null;
      }
      let base = baseOffset;
      if (constructionMethod === 1) {
        if (idatOffset === null) {
          return null;
        }
        base = base + idatOffset;
      } else if (constructionMethod !== 0) {
        return null;
      }
      return {
        offsets: extents.map((extent) => base + extent.offset),
        lengths: extents.map((extent) => extent.length),
      };
    }
  }

  return null;
}
