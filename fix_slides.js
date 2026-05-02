import fs from "fs";

let code = fs.readFileSync('src/data/slides.tsx', 'utf8');
code = code.replace(/className=\"([^\"]*)h-full([^\"]*)\"/g, (match, p1, p2) => {
  return \`className=\"\${p1}min-h-full\${p2}\"\`;
});
fs.writeFileSync('src/data/slides.tsx', code);
