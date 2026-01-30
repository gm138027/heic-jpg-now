export type Box = {
  type: string;
  offset: number;
  size: number;
  headerSize: number;
};

export function startsWith(source: Uint8Array, target: Uint8Array) {
  if (source.length < target.length) return false;
  for (let i = 0; i < target.length; i += 1) {
    if (source[i] !== target[i]) {
      return false;
    }
  }
  return true;
}

export function readUint32(data: Uint8Array, offset: number) {
  return (
    (data[offset] << 24) |
    (data[offset + 1] << 16) |
    (data[offset + 2] << 8) |
    data[offset + 3]
  ) >>> 0;
}

export function readUint(view: DataView, offset: number, size: number) {
  let value = BigInt(0);
  const shift = BigInt(8);
  for (let i = 0; i < size; i += 1) {
    value = (value << shift) + BigInt(view.getUint8(offset + i));
  }
  return value;
}

export function toNumber(value: bigint) {
  if (value > BigInt(Number.MAX_SAFE_INTEGER)) {
    return null;
  }
  return Number(value);
}

export function readString(view: DataView, offset: number, length: number) {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += String.fromCharCode(view.getUint8(offset + i));
  }
  return result;
}

export function readBox(view: DataView, offset: number, end: number): Box | null {
  if (offset + 8 > end) return null;
  let size = view.getUint32(offset);
  const type = readString(view, offset + 4, 4);
  let headerSize = 8;

  if (size === 1) {
    if (offset + 16 > end) return null;
    size = Number(view.getBigUint64(offset + 8));
    headerSize = 16;
  } else if (size === 0) {
    size = end - offset;
  }

  if (size < headerSize || offset + size > end) {
    return null;
  }

  return { type, offset, size, headerSize };
}

export function* iterateBoxes(view: DataView, start: number, end: number) {
  let offset = start;
  while (offset + 8 <= end) {
    const box = readBox(view, offset, end);
    if (!box) {
      break;
    }
    yield box;
    offset = box.offset + box.size;
  }
}

export function findBox(view: DataView, start: number, end: number, targetType: string) {
  for (const box of iterateBoxes(view, start, end)) {
    if (box.type === targetType) {
      return box;
    }
  }
  return null;
}
