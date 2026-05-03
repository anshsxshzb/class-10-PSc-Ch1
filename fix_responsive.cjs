const fs = require('fs');

let code = fs.readFileSync('src/data/slides.tsx', 'utf8');

code = code.replace(/className="(.*?)grid-cols-12(.*?)"/g, 'className="$1grid-cols-1 lg:grid-cols-12$2"');
code = code.replace(/className="(.*?)grid-cols-2([^:]*?)"/g, 'className="$1grid-cols-1 lg:grid-cols-2$2"');
code = code.replace(/className="(?:([^"]*?)\\s+)?col-span-(\\d+)(.*?)"/g, function(match, prefix, num, suffix) {
    var spacePrefix = prefix ? prefix + ' ' : '';
    return 'className="' + spacePrefix + 'lg:col-span-' + num + suffix + '"';
});

code = code.replace(/gap-6/g, 'gap-4 lg:gap-6');
code = code.replace(/gap-8/g, 'gap-4 lg:gap-8');
code = code.replace(/p-6/g, 'p-4 md:p-6');
code = code.replace(/p-8/g, 'p-4 md:p-8');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(/text-6xl font-black text-\\[#1e3a8a\\] uppercase/g, 'text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a8a] uppercase');
appCode = appCode.replace(/w-24/g, 'w-12 md:w-24');
appCode = appCode.replace(/p-8/g, 'p-4 md:p-8');
appCode = appCode.replace(/p-6/g, 'p-4 md:p-6');
appCode = appCode.replace(/gap-6/g, 'gap-4 lg:gap-6');

fs.writeFileSync('src/data/slides.tsx', code);
fs.writeFileSync('src/App.tsx', appCode);
