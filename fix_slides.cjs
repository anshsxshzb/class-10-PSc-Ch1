const fs = require('fs');

let code = fs.readFileSync('src/data/slides.tsx', 'utf8');
code = code.replace(/h-full/g, 'min-h-full');
fs.writeFileSync('src/data/slides.tsx', code);
