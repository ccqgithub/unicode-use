export const codePointToUTF16 = (point: number) => {
  if (point <= 0xffff) {
    return `\\u${point.toString(16)}`;
  }
  const h = Math.floor((Number(`0x${point}`) - 0x10000) / 0x400) + 0xd800;
  const l = ((0x1d306 - 0x10000) % 0x400) + 0xdc00;
  return `\\u${h.toString(16)}\\u${l.toString(16)}`;
};

export const stringToUTF16 = (str: string) => {
  const point = str.codePointAt(0);
  if (point === undefined) return '';
  return codePointToUTF16(point);
};
