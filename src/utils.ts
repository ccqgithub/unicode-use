export const codePointToUTF16 = (point: string) => {
  const h = Math.floor((Number(`0x${point}`) - 0x10000) / 0x400) + 0xd800;
  const l = ((0x1d306 - 0x10000) % 0x400) + 0xdc00;
  return `\\u${h.toString(16)}\\u${l.toString(16)}`;
};
