import { ConvertResult } from "./conversion-types";
import { convertWithCanvas } from "./canvas-conversion";

async function convertWithHeic2Any(file: File): Promise<ConvertResult> {
  const { default: heic2any } = await import("heic2any");
  const output = await heic2any({
    blob: file,
    toType: "image/jpeg",
  });

  const blob = Array.isArray(output) ? output[0] : (output as Blob);
  return { blob };
}

export async function convertToJpeg(file: File): Promise<ConvertResult> {
  try {
    return await convertWithCanvas(file);
  } catch (canvasError) {
    console.warn("[conversion] Canvas conversion failed, falling back to heic2any", canvasError);
    return convertWithHeic2Any(file);
  }
}
