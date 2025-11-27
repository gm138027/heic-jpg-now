import { ConvertResult } from "./conversion-types";

function isCreateImageBitmapSupported() {
  return typeof createImageBitmap === "function";
}

async function loadBitmap(file: File): Promise<ImageBitmap | null> {
  if (!isCreateImageBitmapSupported()) {
    return null;
  }
  try {
    return await createImageBitmap(file);
  } catch {
    return null;
  }
}

function loadImageElement(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = (event) => {
      URL.revokeObjectURL(url);
      reject(event instanceof ErrorEvent ? event.error : new Error("Image loading failed"));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, quality = 0.92): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to create preview blob"));
    }, "image/jpeg", quality);
  });
}

export async function convertWithCanvas(file: File): Promise<ConvertResult> {
  if (typeof document === "undefined") {
    throw new Error("Canvas conversion is not supported in this environment");
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Unable to create canvas context");
  }

  const bitmap = await loadBitmap(file);
  if (bitmap) {
    canvas.width = bitmap.width || 1;
    canvas.height = bitmap.height || 1;
    context.drawImage(bitmap, 0, 0);
    bitmap.close();
  } else {
    const image = await loadImageElement(file);
    canvas.width = image.naturalWidth || image.width || 1;
    canvas.height = image.naturalHeight || image.height || 1;
    context.drawImage(image, 0, 0);
  }

  const blob = await canvasToBlob(canvas);
  return { blob };
}
