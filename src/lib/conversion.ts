import { ConvertResult } from "./conversion-types";
import { convertWithCanvas } from "./canvas-conversion";

async function convertWithHeic2Any(file: File): Promise<ConvertResult> {
  const scope = globalThis as typeof globalThis & { window?: typeof globalThis };
  if (typeof scope.window === "undefined") {
    scope.window = scope;
  }

  const { default: heic2any } = await import("heic2any");
  const output = await heic2any({
    blob: file,
    toType: "image/jpeg",
    force: true,
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
