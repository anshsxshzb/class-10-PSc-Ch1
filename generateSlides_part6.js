import fs from 'fs';

const slidesPart = `  {
    id: 16,
    type: 'questions',
    title: 'Board Exam Rehearsal (Descriptive)',
    focus: '3-Mark Questions',
    content: (
      <div className="flex flex-col h-full space-y-6">
         <div className="bg-[#fbbf24] text-[#9a3412] p-4 text-center rounded border-2 border-[#9a3412]">
            <h3 className="font-black text-2xl uppercase tracking-widest">3-Mark Questions (⭐⭐ Focus Pattern)</h3>
            <p className="text-sm font-bold opacity-80 mt-1">Requires 3 distinct NCERT points</p>
         </div>
         
         <div className="bg-white border-l-4 border-slate-400 p-6 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto">
            <h4 className="font-bold text-lg text-slate-800 mb-4">Q: How did the Sri Lankan government establish majoritarianism? Provide three points.</h4>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 p-4 rounded text-slate-700 italic border-l-2 border-l-[#9a3412]">
                <strong>Point 1:</strong> In 1956, an Act was passed to recognise Sinhala as the only official language, thus completely disregarding Tamil.
              </div>
              <div className="bg-orange-50 border border-orange-200 p-4 rounded text-slate-700 italic border-l-2 border-l-[#9a3412]">
                <strong>Point 2:</strong> The governments followed preferential policies that favoured Sinhala applicants for university positions and government jobs.
              </div>
              <div className="bg-orange-50 border border-orange-200 p-4 rounded text-slate-700 italic border-l-2 border-l-[#9a3412]">
                <strong>Point 3:</strong> A new constitution stipulated that the state shall protect and foster Buddhism.
              </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 17,
    type: 'questions',
    title: 'Board Exam Rehearsal (Long Questions)',
    focus: '5-Mark Questions',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col h-full space-y-6">
         <div className="bg-[#9a3412] text-white p-4 text-center rounded">
            <h3 className="font-black text-2xl uppercase tracking-widest">5-Mark Questions (⭐⭐⭐ MUST PREPARE)</h3>
            <p className="text-sm font-bold mt-1 text-[#fbbf24]">The most frequently repeated question in the last 6 years.</p>
         </div>
         
         <div className="bg-white border-x-4 border-l-[#1e3a8a] border-r-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto">
            <h4 className="font-bold text-xl text-slate-800 mb-4 flex items-center">
              <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded text-sm mr-3">2023, 2021, 2018</span>
              Q: Describe the elements of the Belgian model for accommodating diversities.
            </h4>
            <div className="space-y-3">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-sm text-slate-700">
                <strong>1. Equal Ministers:</strong> Constitution prescribes that the number of Dutch and French-speaking ministers shall be equal in the central government. Special laws require majority from both groups, preventing unilateral decisions.
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-sm text-slate-700">
                <strong>2. State Autonomy:</strong> Many powers of the Central Government have been given to State Governments. The State Governments are not subordinate to the Central Government.
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-sm text-slate-700">
                <strong>3. Separate Brussels Government:</strong> The capital has a separate government where both communities have equal representation (accepted by French-speakers due to Dutch compromise at the center).
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-sm text-slate-700">
                <strong>4. Community Government:</strong> A third kind of government elected by people of one language community, holding power over cultural, educational, and language-related issues.
              </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 18,
    type: 'title',
    title: 'Final Revision Complete',
    subtitle: 'Re-read NCERT. Focus on Key Words.\\nBest of Luck for CBSE Boards 2027!',
    focus: 'End of Presentation',
  }
];
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
