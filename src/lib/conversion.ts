import { ConvertResult } from "./conversion-types";
import { convertWithCanvas } from "./canvas-conversion";
import { extractExifFromHeic, injectExifIntoJpeg } from "./exif";
import { detectImageKind, type ImageKind } from "./image-signature";

async function convertWithHeic2Any(file: File): Promise<ConvertResult> {
  const { default: heic2any } = await import("heic2any");
  const output = await heic2any({
    blob: file,
    toType: "image/jpeg",
  });

  const blob = Array.isArray(output) ? output[0] : (output as Blob);
  return { blob };
}

function normalizeJpegBlob(file: File): Blob {
  if (file.type === "image/jpeg") {
    return file;
  }
  return new Blob([file], { type: "image/jpeg" });
}

async function applyExif(
  result: ConvertResult,
  exifBytes: Uint8Array | null,
): Promise<ConvertResult> {
  if (!exifBytes) {
    return result;
  }
  try {
    const blob = await injectExifIntoJpeg(result.blob, exifBytes);
    return { blob };
  } catch {
    return result;
  }
}

export async function convertToJpeg(file: File): Promise<ConvertResult> {
  const kind = await detectImageKind(file);
  if (kind === "jpeg") {
    return { blob: normalizeJpegBlob(file) };
  }

  const isHeifFamily = kind === "heif";

  let exifBytes: Uint8Array | null = null;
  if (isHeifFamily) {
    try {
      exifBytes = await extractExifFromHeic(file);
    } catch {
      exifBytes = null;
    }
  }

  let result: ConvertResult;
  try {
    result = await convertWithCanvas(file);
  } catch (canvasError) {
    if (shouldUseHeic2Any(kind)) {
      result = await convertWithHeic2Any(file);
    } else {
      throw canvasError;
    }
  }

  if (isHeifFamily) {
    return applyExif(result, exifBytes);
  }
  return result;
}

function shouldUseHeic2Any(kind: ImageKind) {
  return kind === "heif" || kind === "unknown";
}
