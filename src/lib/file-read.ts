export type BoxHeader = {
  type: string;
  size: number;
  headerSize: number;
};

export async function readRange(file: Blob, start: number, length: number) {
  const buffer = await file.slice(start, start + length).arrayBuffer();
  return new Uint8Array(buffer);
}

export async function readBoxHeader(file: Blob, offset: number): Promise<BoxHeader | null> {
  if (offset + 8 > file.size) {
    return null;
  }

  const header = await readRange(file, offset, Math.min(16, file.size - offset));
  const view = new DataView(header.buffer, header.byteOffset, header.byteLength);
  const size32 = view.getUint32(0);
  const type = readAscii(view, 4, 4);
  let size = size32;
  let headerSize = 8;

  if (size32 === 1) {
    if (offset + 16 > file.size || header.length < 16) {
      return null;
    }
    size = Number(view.getBigUint64(8));
    headerSize = 16;
  } else if (size32 === 0) {
    size = file.size - offset;
  }

  if (size < headerSize || offset + size > file.size) {
    return null;
  }

  return { type, size, headerSize };
}

function readAscii(view: DataView, offset: number, length: number) {
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += String.fromCharCode(view.getUint8(offset + i));
  }
  return out;
}
