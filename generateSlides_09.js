import fs from 'fs';

const slidesPart = `  {
    id: 22,
    type: 'questions',
    title: 'Question Bank: Assertion & Reason',
    focus: '2027 Edge (Competency Based)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col h-full space-y-4">
         <div className="bg-[#fbbf24] text-black p-3 text-center rounded border-2 border-[#1e3a8a] shadow-lg">
            <h3 className="font-black text-xl uppercase tracking-widest flex items-center justify-center"><Activity className="mr-2" /> Assertion & Reasoning (1 Mark)</h3>
            <p className="text-xs font-bold mt-1 text-[#1e3a8a]">The new CBSE focus area for 2027 onwards.</p>
         </div>
         
         <div className="bg-white p-4 shadow-sm ring-1 ring-slate-200 text-xs text-slate-600 bg-slate-50 italic">
            <strong>Options:</strong><br/>
            (A) Both A and R are true and R is the correct explanation of A.<br/>
            (B) Both A and R are true but R is not the correct explanation of A.<br/>
            (C) A is true but R is false.<br/>
            (D) A is false but R is true.
         </div>
         
         <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto">
            <div className="bg-white border-l-4 border-[#1e3a8a] p-4 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
               <div>
                  <p className="font-bold text-sm text-[#1e3a8a] mb-2">Question 1</p>
                  <p className="text-sm text-slate-800 mb-2"><strong>Assertion (A):</strong> Power sharing is good because it helps to reduce the possibility of conflict between social groups.</p>
                  <p className="text-sm text-slate-800 mb-4"><strong>Reason (R):</strong> Power sharing is the very spirit of democracy.</p>
               </div>
               <div className="bg-green-50 border border-green-200 p-3 rounded">
                 <p className="font-bold text-green-800 text-sm">Ans: (B)</p>
                 <p className="text-xs text-green-700 mt-1">Both are true. But R (moral reason) is not the correct explanation for A (prudential reason).</p>
               </div>
            </div>
            
            <div className="bg-white border-l-4 border-[#1e3a8a] p-4 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
               <div>
                  <p className="font-bold text-sm text-[#1e3a8a] mb-2">Question 2</p>
                  <p className="text-sm text-slate-800 mb-2"><strong>Assertion (A):</strong> In Belgium, the leaders recognized the existence of regional differences and cultural diversities.</p>
                  <p className="text-sm text-slate-800 mb-4"><strong>Reason (R):</strong> The 1956 Act recognized Sinhala as the only official language.</p>
               </div>
               <div className="bg-green-50 border border-green-200 p-3 rounded">
                 <p className="font-bold text-green-800 text-sm">Ans: (B)</p>
                 <p className="text-xs text-green-700 mt-1">Both are factually true statements, but R relates to Sri Lanka and has nothing to do with explaining A.</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 23,
    type: 'title',
    title: 'Final Revision Complete',
    subtitle: 'Re-read NCERT. Write points explicitly.\\nBest of Luck for CBSE Boards 2027!',
    focus: 'End of Presentation',
  }
];
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
