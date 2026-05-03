const fs = require('fs');

let code = fs.readFileSync('src/data/slides.tsx', 'utf8');

// Replace lg: with @lg:
code = code.replace(/lg:/g, '@lg:');
// Replace md: with @md:
code = code.replace(/md:/g, '@md:');
// Replace sm: with @sm:
code = code.replace(/sm:/g, '@sm:');

fs.writeFileSync('src/data/slides.tsx', code);

// For App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf8');

// Replace md: with @md: and lg: with @lg: inside the slide viewing area only
// Let's just do it globally for App.tsx? No, the App.tsx has header/footer which depends on window width.
// Actually, App.tsx we *can* just leave it as window based, but for export we need to copy the non-mobile styles.
// So let's look at the export wrapper in App.tsx:
appCode = appCode.replace(/p-4 md:p-6/g, 'p-6');
appCode = appCode.replace(/text-\\\[10px\\\] md:text-xs/g, 'text-xs');
appCode = appCode.replace(/text-xl md:text-3xl/g, 'text-3xl');
appCode = appCode.replace(/w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3/g, 'w-6 h-6 mr-3');
appCode = appCode.replace(/md:line-clamp-none/g, '');
appCode = appCode.replace(/flex-row md:flex-col/g, 'flex-col');
appCode = appCode.replace(/items-center md:items-end/g, 'items-end');
appCode = appCode.replace(/w-full md:w-auto/g, 'w-auto');
appCode = appCode.replace(/px-2 py-0\\.5 md:px-3 md:py-1/g, 'px-3 py-1');
appCode = appCode.replace(/text-xs md:text-sm/g, 'text-sm');
appCode = appCode.replace(/md:mb-1/g, 'mb-1');
appCode = appCode.replace(/hidden md:block/g, 'block');
appCode = appCode.replace(/text-\\\[8px\\\] md:text-\\\[10px\\\]/g, 'text-[10px]');
appCode = appCode.replace(/mt-0\\.5 md:mt-1/g, 'mt-1');
appCode = appCode.replace(/md:w-3 md:h-3/g, ''); // AlertTriangle size is given explicitly
appCode = appCode.replace(/hidden md:inline/g, 'inline');
appCode = appCode.replace(/px-4 py-2 md:px-8 md:py-3/g, 'px-8 py-3');
appCode = appCode.replace(/text-xs md:text-base/g, 'text-base');
appCode = appCode.replace(/mb-2 md:mb-6/g, 'mb-6');
appCode = appCode.replace(/space-y-4 md:space-y-8/g, 'space-y-8');
appCode = appCode.replace(/text-4xl md:text-6xl lg:text-8xl/g, 'text-6xl @lg:text-8xl'); // Wait, titles 
appCode = appCode.replace(/text-sm md:text-xl lg:text-2xl/g, 'text-xl @lg:text-2xl');

fs.writeFileSync('src/App.tsx', appCode);

