import fs from 'fs';

let content = fs.readFileSync('src/data/slides.tsx', 'utf8');

// Theming replacements
const replacements = [
  // Primary dark
  { regex: /text-blue-900/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-slate-800/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-slate-900/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-indigo-900/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-emerald-800/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-rose-800/g, replacement: 'text-[#9a3412]' },
  { regex: /text-amber-800/g, replacement: 'text-[#9a3412]' },
  { regex: /text-sky-800/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-teal-800/g, replacement: 'text-[#1e3a8a]' },
  { regex: /text-indigo-800/g, replacement: 'text-[#1e3a8a]' },
  
  // Borders
  { regex: /border-blue-300/g, replacement: 'border-[#1e3a8a]/20' },
  { regex: /border-red-300/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-green-300/g, replacement: 'border-[#1e3a8a]/20' },
  { regex: /border-blue-600/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-red-600/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-orange-500/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-green-600/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-purple-600/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-teal-500/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-emerald-500/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-rose-500/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-amber-400/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-amber-500/g, replacement: 'border-[#fbbf24]' },
  { regex: /border-sky-400/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-indigo-500/g, replacement: 'border-[#1e3a8a]' },
  { regex: /border-slate-500/g, replacement: 'border-[#1e3a8a]' },

  // Backgrounds
  { regex: /bg-blue-100/g, replacement: 'bg-white ring-1 ring-slate-200' },
  { regex: /bg-red-100/g, replacement: 'bg-[#fff7ed] ring-1 ring-slate-200' },
  { regex: /bg-green-100/g, replacement: 'bg-white ring-1 ring-slate-200' },
  { regex: /bg-amber-50/g, replacement: 'bg-[#fff7ed]' },
  { regex: /bg-red-50/g, replacement: 'bg-[#fff7ed]' },
  { regex: /bg-slate-100/g, replacement: 'bg-white ring-1 ring-slate-200' },
  { regex: /bg-blue-50/g, replacement: 'bg-white border-l-4 border-[#1e3a8a] shadow-sm ring-1 ring-slate-200' },
  { regex: /bg-teal-50/g, replacement: 'bg-white border-l-4 border-[#1e3a8a] shadow-sm ring-1 ring-slate-200' },
  { regex: /bg-emerald-50/g, replacement: 'bg-white border-l-4 border-[#1e3a8a] shadow-sm ring-1 ring-slate-200' },
  { regex: /bg-rose-50/g, replacement: 'bg-[#fff7ed] border-l-4 border-[#fbbf24] shadow-sm ring-1 ring-slate-200' },
  { regex: /bg-sky-50/g, replacement: 'bg-white border-l-4 border-[#1e3a8a] shadow-sm ring-1 ring-slate-200' },
  { regex: /bg-white p-6 rounded shadow border-t-4/g, replacement: 'bg-white p-6 shadow-sm ring-1 ring-slate-200 border-l-4' },
  { regex: /bg-white rounded-xl shadow-lg border-2/g, replacement: 'bg-white rounded-lg shadow-sm ring-1 ring-slate-200 border-l-4 border-[#1e3a8a]' },
  { regex: /bg-slate-800 text-white/g, replacement: 'bg-[#1e3a8a] text-white' },

  // Headings
  { regex: /font-bold text-2xl text-red-700/g, replacement: 'font-bold text-2xl text-[#9a3412]' },
  { regex: /font-bold text-2xl text-red-900/g, replacement: 'font-bold text-2xl text-[#9a3412]' },
  { regex: /font-bold text-2xl/g, replacement: 'font-black text-xl text-[#1e3a8a] uppercase tracking-tight' },
  { regex: /font-bold text-3xl/g, replacement: 'font-black text-2xl text-[#1e3a8a] uppercase tracking-tight' },
  
  // Specific blocks
  { regex: /bg-emerald-600/g, replacement: 'bg-[#1e3a8a]' },
  { regex: /bg-rose-600/g, replacement: 'bg-[#9a3412]' },
  { regex: /bg-indigo-600/g, replacement: 'bg-[#1e3a8a]' },
  { regex: /bg-indigo-50/g, replacement: 'bg-white ring-1 ring-slate-200 shadow-sm' },

  { regex: /text-red-700/g, replacement: 'text-[#9a3412]' },
  { regex: /bg-red-700/g, replacement: 'bg-[#9a3412]' },
];

replacements.forEach(({ regex, replacement }) => {
  content = content.replace(regex, replacement);
});

// For slide 22 specifically, we want to align it more with the visual pedagogy.
content = content.replace(
  /grid grid-cols-2 gap-4 mt-6/,
  'grid grid-cols-2 gap-4 mt-6'
);

fs.writeFileSync('src/data/slides.tsx', content);
