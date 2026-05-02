import fs from 'fs';

const slidesPart = `  {
    id: 19,
    type: 'questions',
    title: 'Question Bank: 1-Mark & MCQs',
    focus: 'Historical Boards (2020 & 2024)',
    content: (
      <div className="flex flex-col h-full space-y-4">
         <div className="bg-[#1e3a8a] text-white p-3 text-center rounded border border-[#1e3a8a]">
            <h3 className="font-black text-xl uppercase tracking-widest">Objective Section (1 Mark)</h3>
         </div>
         
         <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto pr-2">
            <div className="bg-white border-l-4 border-slate-400 p-4 shadow-sm ring-1 ring-slate-200">
               <span className="text-xs font-bold bg-slate-200 text-slate-800 px-2 py-1 rounded inline-block mb-2">Q1 (CBSE 2020)</span>
               <p className="font-semibold text-sm text-slate-800 mb-3">Which of the following communities is in majority in Sri Lanka?</p>
               <ol className="text-xs text-slate-700 space-y-1 list-none pl-0">
                  <li className="p-1 border rounded bg-slate-50">a) Tamil</li>
                  <li className="p-1 border rounded bg-green-100 font-bold border-green-300">b) Sinhala</li>
                  <li className="p-1 border rounded bg-slate-50">c) Buddhist</li>
                  <li className="p-1 border rounded bg-slate-50">d) Hindu</li>
               </ol>
               <p className="text-[10px] text-slate-500 mt-2 italic">Note: While they are Buddhist, the community identity asked is Sinhala (74%).</p>
            </div>
            
            <div className="bg-white border-l-4 border-slate-400 p-4 shadow-sm ring-1 ring-slate-200">
               <span className="text-xs font-bold bg-slate-200 text-slate-800 px-2 py-1 rounded inline-block mb-2">Q2 (CBSE 2022 Term 1)</span>
               <p className="font-semibold text-sm text-slate-800 mb-3">Who elects the community government in Belgium?</p>
               <ol className="text-xs text-slate-700 space-y-1 list-none pl-0">
                  <li className="p-1 border rounded bg-green-100 font-bold border-green-300">a) People belonging to one language community only</li>
                  <li className="p-1 border rounded bg-slate-50">b) By the leader of Belgium</li>
                  <li className="p-1 border rounded bg-slate-50">c) The citizens of the whole country</li>
                  <li className="p-1 border rounded bg-slate-50">d) The community leaders of Belgium</li>
               </ol>
            </div>

            <div className="bg-white border-l-4 border-slate-400 p-4 shadow-sm ring-1 ring-slate-200">
               <span className="text-xs font-bold bg-slate-200 text-slate-800 px-2 py-1 rounded inline-block mb-2">Q3 (CBSE 2024)</span>
               <p className="font-semibold text-sm text-slate-800 mb-3">The power of the judicial branch to review the actions of the executive is a part of...</p>
               <ol className="text-xs text-slate-700 space-y-1 list-none pl-0">
                  <li className="p-1 border rounded bg-slate-50">a) Vertical division</li>
                  <li className="p-1 border rounded bg-green-100 font-bold border-green-300">b) System of checks and balances</li>
                  <li className="p-1 border rounded bg-slate-50">c) Federalism</li>
                  <li className="p-1 border rounded bg-slate-50">d) Community government</li>
               </ol>
            </div>
            
            <div className="bg-white border-l-4 border-slate-400 p-4 shadow-sm ring-1 ring-slate-200">
               <span className="text-xs font-bold bg-slate-200 text-slate-800 px-2 py-1 rounded inline-block mb-2">Q4 (NCERT Concept)</span>
               <p className="font-semibold text-sm text-slate-800 mb-2">What is the capital city of Belgium?</p>
               <p className="text-sm font-bold text-green-700 bg-green-50 border border-green-200 p-2 rounded">Ans: Brussels</p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 20,
    type: 'questions',
    title: 'Question Bank: 2-3 Mark Descriptive',
    focus: 'Historical Boards (2020, 2023)',
    content: (
      <div className="flex flex-col h-full space-y-6">
         <div className="bg-[#fbbf24] text-[#9a3412] p-4 text-center rounded border-2 border-[#9a3412]">
            <h3 className="font-black text-2xl uppercase tracking-widest">Descriptive Questions (2-3 Marks)</h3>
            <p className="text-sm font-bold opacity-80 mt-1">Requires distinct NCERT points</p>
         </div>
         
         <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto space-y-5">
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-xs mr-2 shrink-0">CBSE 2020</span>
                 Q: How did the Sri Lankan government establish majoritarianism? Provide three points.
               </h4>
               <div className="space-y-2 pl-12 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>1.</strong> In 1956, an Act recognised Sinhala as the only official language, disregarding Tamil.</p>
                 <p><strong>2.</strong> Preferential policies favoured Sinhala applicants for university positions and government jobs.</p>
                 <p><strong>3.</strong> A new constitution stipulated that the state shall protect and foster Buddhism.</p>
               </div>
            </div>
            
            <hr className="border-slate-200" />
            
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-xs mr-2 shrink-0">CBSE 2023</span>
                 Q: Differentiate between prudential and moral reasons for power sharing.
               </h4>
               <div className="space-y-2 pl-12 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>Prudential:</strong> Stresses that power sharing will bring out better outcomes (reduces conflict, ensures political stability).</p>
                 <p><strong>Moral:</strong> Emphasizes the very act of power sharing is valuable (it is the spirit of democracy, people have a right to be consulted).</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 21,
    type: 'questions',
    title: 'Question Bank: 5-Mark Heavyweights',
    focus: 'Historical Boards (2018, 2021, 2026)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col h-full space-y-4">
         <div className="bg-[#9a3412] text-white p-3 text-center rounded">
            <h3 className="font-black text-xl uppercase tracking-widest">Long Answers (5 Marks)</h3>
            <p className="text-xs font-bold mt-1 text-[#fbbf24]">These form the core of the Chapter Weightage.</p>
         </div>
         
         <div className="flex space-x-4 flex-1 h-full overflow-hidden">
             <div className="bg-white border-t-4 border-emerald-600 p-5 shadow-sm ring-1 ring-slate-200 w-1/2 overflow-y-auto">
                <h4 className="font-bold text-sm text-slate-800 mb-4 flex flex-col">
                  <span className="bg-emerald-600 text-white px-2 py-1 rounded text-[10px] w-fit mb-2">2018, 2021, 2025 (Expected)</span>
                  Q: Describe the elements of the Belgian model for accommodating diversities.
                </h4>
                <div className="space-y-3 text-xs text-slate-700">
                  <p><strong>1. Equal Ministers:</strong> Constitution prescribes equal Dutch and French-speaking ministers in the central government. No unilateral decisions.</p>
                  <p><strong>2. State Autonomy:</strong> Many powers given to State Governments. They are not subordinate to the Central Government.</p>
                  <p><strong>3. Separate Brussels Government:</strong> Capital has equal representation (accepted by French because Dutch compromised at the center).</p>
                  <p><strong>4. Community Government:</strong> Elected by people of one language community (educational/cultural power).</p>
                </div>
             </div>
             
             <div className="bg-white border-t-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200 w-1/2 overflow-y-auto">
                <h4 className="font-bold text-sm text-slate-800 mb-4 flex flex-col">
                  <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-[10px] w-fit mb-2">2019, 2026</span>
                  Q: Explain the four different forms of power sharing in modern democracies.
                </h4>
                <div className="space-y-3 text-xs text-slate-700">
                  <p><strong>1. Horizontal:</strong> Among organs of govt (Legislature, Executive, Judiciary). Creates checks and balances.</p>
                  <p><strong>2. Vertical:</strong> Among levels of govt (Central, State/Provincial, Local). Federal division.</p>
                  <p><strong>3. Social Groups:</strong> Linguistic and religious groups (e.g., Community Govt in Belgium). Gives minorities fair share.</p>
                  <p><strong>4. Political Parties/Pressure Groups:</strong> Influence power through coalition governments and interest group committees.</p>
                </div>
             </div>
         </div>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
