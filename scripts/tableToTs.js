const table = `E0000-E007F	标签	Tags
E0100-E01EF	选择器变化补充	Variation Selectors Supplement
`;

const str = table.replace(
  /(\w{4,5})-(\w{4,5})\s([^\s]+)\s(.+)/g,
  (v, p1, p2, p3, p4) => {
    const names = p4.split(/\s/);
    names[0] = names[0].replace(/^\S/, (s) => s.toLowerCase());
    return `// ${p3}\nexport const ${names.join('')} = ["${p1}", "${p2}"];`;
  }
);

console.log(str);
