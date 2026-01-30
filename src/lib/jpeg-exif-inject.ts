import { startsWith } from "./binary-utils";

const EXIF_HEADER = new Uint8Array([0x45, 0x78, 0x69, 0x66, 0x00, 0x00]);

export async function injectExifIntoJpeg(jpegBlob: Blob, exifBytes: Uint8Array): Promise<Blob> {
  const buffer = await jpegBlob.arrayBuffer();
  const jpegData = new Uint8Array(buffer);
  if (!isJpeg(jpegData)) {
    return jpegBlob;
  }

  const exifPayload = buildExifPayload(exifBytes);
  const segmentLength = exifPayload.length + 2;
  if (segmentLength > 0xffff) {
    throw new Error("EXIF data is too large for a JPEG APP1 segment.");
  }

  const exifSegment = new Uint8Array(2 + segmentLength);
  exifSegment[0] = 0xff;
  exifSegment[1] = 0xe1;
  exifSegment[2] = (segmentLength >> 8) & 0xff;
  exifSegment[3] = segmentLength & 0xff;
  exifSegment.set(exifPayload, 4);

  const segments = stripExifSegments(jpegData);
  const totalLength =
    2 + exifSegment.length + segments.reduce((sum, segment) => sum + segment.length, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;

  output.set(jpegData.slice(0, 2), offset);
  offset += 2;
  output.set(exifSegment, offset);
  offset += exifSegment.length;

  for (const segment of segments) {
    output.set(segment, offset);
    offset += segment.length;
  }

  return new Blob([output], { type: "image/jpeg" });
}

function isJpeg(data: Uint8Array) {
  return data.length >= 2 && data[0] === 0xff && data[1] === 0xd8;
}

function buildExifPayload(exifBytes: Uint8Array) {
  if (startsWith(exifBytes, EXIF_HEADER)) {
    return exifBytes;
  }
  const payload = new Uint8Array(EXIF_HEADER.length + exifBytes.length);
  payload.set(EXIF_HEADER, 0);
  payload.set(exifBytes, EXIF_HEADER.length);
  return payload;
}

function stripExifSegments(jpegData: Uint8Array) {
  const segments: Uint8Array[] = [];
  let offset = 2;

  while (offset + 1 < jpegData.length) {
    if (jpegData[offset] !== 0xff) {
      segments.push(jpegData.slice(offset));
      break;
    }

    const marker = jpegData[offset + 1];
    if (marker === 0xda) {
      segments.push(jpegData.slice(offset));
      break;
    }

    if (marker === 0xd9) {
      segments.push(jpegData.slice(offset, offset + 2));
      break;
    }

    if (marker >= 0xd0 && marker <= 0xd7) {
      segments.push(jpegData.slice(offset, offset + 2));
      offset += 2;
      continue;
    }

    if (offset + 3 >= jpegData.length) {
      segments.push(jpegData.slice(offset));
      break;
    }

    const length = (jpegData[offset + 2] << 8) | jpegData[offset + 3];
    const segmentEnd = offset + 2 + length;
    if (segmentEnd > jpegData.length) {
      segments.push(jpegData.slice(offset));
      break;
    }

    const isExif =
      marker === 0xe1 &&
      length >= 8 &&
      startsWith(jpegData.subarray(offset + 4, offset + 10), EXIF_HEADER);
    if (!isExif) {
      segments.push(jpegData.slice(offset, segmentEnd));
    }
    offset = segmentEnd;
  }

  return segments;
}
