export type ImageKind =
  | "jpeg"
  | "png"
  | "gif"
  | "webp"
  | "bmp"
  | "avif"
  | "heif"
  | "unknown";

const HEIF_BRANDS = new Set([
  "heic",
  "heix",
  "hevc",
  "hevx",
  "heis",
  "heim",
  "hevs",
  "hevm",
  "mif1",
  "msf1",
  "heif",
]);

const AVIF_BRANDS = new Set(["avif", "avis"]);

export async function detectImageKind(file: Blob): Promise<ImageKind> {
  const type = file.type.toLowerCase();
  if (type === "image/jpeg") return "jpeg";
  if (type === "image/png") return "png";
  if (type === "image/gif") return "gif";
  if (type === "image/webp") return "webp";
  if (type === "image/bmp") return "bmp";
  if (type === "image/avif") return "avif";
  if (type === "image/heic" || type === "image/heif") return "heif";

  const header = await readHeader(file, 512);
  if (isJpeg(header)) return "jpeg";
  if (isPng(header)) return "png";
  if (isGif(header)) return "gif";
  if (isWebp(header)) return "webp";
  if (isBmp(header)) return "bmp";

  const brands = readFtypBrands(header);
  for (const brand of brands) {
    if (HEIF_BRANDS.has(brand)) return "heif";
    if (AVIF_BRANDS.has(brand)) return "avif";
  }

  return "unknown";
}

async function readHeader(file: Blob, length: number) {
  const buffer = await file.slice(0, length).arrayBuffer();
  return new Uint8Array(buffer);
}

function isJpeg(header: Uint8Array) {
  return header.length >= 3 && header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
}

function isPng(header: Uint8Array) {
  return (
    header.length >= 8 &&
    header[0] === 0x89 &&
    header[1] === 0x50 &&
    header[2] === 0x4e &&
    header[3] === 0x47 &&
    header[4] === 0x0d &&
    header[5] === 0x0a &&
    header[6] === 0x1a &&
    header[7] === 0x0a
  );
}

function isGif(header: Uint8Array) {
  if (header.length < 6) return false;
  const signature = toAscii(header, 0, 6);
  return signature === "GIF87a" || signature === "GIF89a";
}

function isWebp(header: Uint8Array) {
  return (
    header.length >= 12 &&
    toAscii(header, 0, 4) === "RIFF" &&
    toAscii(header, 8, 4) === "WEBP"
  );
}

function isBmp(header: Uint8Array) {
  return header.length >= 2 && header[0] === 0x42 && header[1] === 0x4d;
}

function readFtypBrands(header: Uint8Array) {
  const ftypIndex = findFtypIndex(header);
  if (ftypIndex === null) return [];
  const brands: string[] = [];
  const majorBrand = readBrand(header, ftypIndex + 4);
  if (majorBrand) {
    brands.push(majorBrand);
  }

  const start = ftypIndex + 8;
  for (let offset = start; offset + 4 <= header.length && offset < start + 64; offset += 4) {
    const brand = readBrand(header, offset);
    if (brand) {
      brands.push(brand);
    }
  }
  return brands;
}

function findFtypIndex(header: Uint8Array) {
  for (let i = 4; i + 4 <= header.length; i += 1) {
    if (
      header[i] === 0x66 &&
      header[i + 1] === 0x74 &&
      header[i + 2] === 0x79 &&
      header[i + 3] === 0x70
    ) {
      return i;
    }
  }
  return null;
}

function readBrand(header: Uint8Array, offset: number) {
  if (offset + 4 > header.length) return null;
  return toAscii(header, offset, 4).toLowerCase();
}

function toAscii(buffer: Uint8Array, offset: number, length: number) {
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += String.fromCharCode(buffer[offset + i]);
  }
  return out;
}
