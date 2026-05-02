import fs from 'fs';

const slidesPart = `  {
    id: 11,
    type: 'content',
    title: 'Why Power Sharing is Desirable?',
    focus: 'Prudential vs Moral Reasons',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
         <div className="col-span-12 flex items-center justify-center mb-4">
             <h2 className="text-3xl font-black text-[#1e3a8a] border-b-4 border-[#fbbf24] pb-2 uppercase tracking-tight">Two Distinct Sets of Reasons</h2>
         </div>
         
         <div className="col-span-6 flex flex-col h-full bg-white shadow-lg ring-1 ring-slate-200 rounded-lg overflow-hidden group hover:ring-2 hover:ring-[#1e3a8a] transition-all">
            <div className="bg-[#1e3a8a] text-white p-6 text-center">
               <div className="text-4xl mb-2">🧠</div>
               <h3 className="font-black text-2xl uppercase tracking-widest text-[#fbbf24]">Prudential</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
               <p className="text-lg font-medium text-slate-700 leading-relaxed text-center mb-6">
                 Based on prudence, or on careful calculation of gains and losses. 
               </p>
               <div className="bg-blue-50 p-4 border border-blue-200 rounded font-bold text-[#1e3a8a] text-center uppercase tracking-wide">
                 Focuses on Better Outcomes
               </div>
            </div>
         </div>
         
         <div className="col-span-6 flex flex-col h-full bg-white shadow-lg ring-1 ring-slate-200 rounded-lg overflow-hidden group hover:ring-2 hover:ring-[#9a3412] transition-all">
            <div className="bg-[#9a3412] text-white p-6 text-center">
               <div className="text-4xl mb-2">❤️</div>
               <h3 className="font-black text-2xl uppercase tracking-widest text-[#fbbf24]">Moral</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
               <p className="text-lg font-medium text-slate-700 leading-relaxed text-center mb-6">
                 Based purely on moral considerations. Contrasts with prudential calculations.
               </p>
               <div className="bg-orange-50 p-4 border border-orange-200 rounded font-bold text-[#9a3412] text-center uppercase tracking-wide">
                 Focuses on the Value of the Act
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 12,
    type: 'content',
    title: '1. Prudential Reasons',
    focus: 'Stability & Conflict Reduction',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200">
             <ul className="space-y-6 text-base leading-relaxed text-slate-700 font-medium">
               <li className="flex items-start">
                  <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-4 mt-1 shrink-0 px-2 py-1">A</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#1e3a8a]">Reduces Possibility of Conflict</h4>
                    <p>It helps reduce the possibility of conflict between social groups.</p>
                  </div>
               </li>
               <li className="flex items-start">
                  <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-4 mt-1 shrink-0 px-2 py-1">B</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#1e3a8a]">Ensures Political Stability</h4>
                    <p>Since social conflict often leads to violence and instability, power sharing is a good way to ensure the stability of the political order.</p>
                  </div>
               </li>
             </ul>
          </div>
        </section>
        <aside className="col-span-4 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white border-2 border-[#1e3a8a] p-5 rounded-lg shadow-sm flex-1 flex flex-col relative overflow-hidden text-center">
             <AlertTriangle className="opacity-20 absolute top-4 left-4 w-24 h-24 text-white" />
             <h4 className="text-[#fbbf24] font-black text-xl mb-4 relative z-10 z-10">The Tyranny Trap</h4>
             <p className="text-sm font-semibold opacity-90 leading-relaxed relative z-10">
               Imposing the will of the majority community looks attractive in the short run...
             </p>
             <div className="bg-white/10 p-3 rounded mt-4 relative z-10 border border-white/20">
               But in the long run it undermines national unity.
               <strong className="block mt-2 text-[#fbbf24]">Tyranny of the majority affects the majority adversely as well!</strong>
             </div>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 13,
    type: 'content',
    title: '2. Moral Reasons',
    focus: 'The Spirit of Democracy',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 flex flex-col space-y-4">
          <div className="bg-white border-t-4 border-b-4 border-[#9a3412] p-8 shadow-sm ring-1 ring-slate-200 text-center">
            <h3 className="text-[#9a3412] font-black text-3xl lowercase uppercase tracking-widest font-serif">"Power sharing is the very spirit of democracy"</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-4">
             <div className="bg-orange-50 border border-orange-200 p-6 rounded shadow-inner">
                <h4 className="text-[#9a3412] font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#1e3a8a] mr-2"></span>
                  Democratic Rule requires it
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                   A democratic rule involves sharing power with those affected by its exercise, and who have to live with its effects.
                </p>
             </div>
             
             <div className="bg-blue-50 border border-blue-200 p-6 rounded shadow-inner">
                <h4 className="text-[#1e3a8a] font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#9a3412] mr-2"></span>
                  The Concept of Legitimacy
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                   People have a right to be consulted on how they are to be governed. A <strong>legitimate government</strong> is one where citizens acquire a stake in the system through participation.
                </p>
             </div>
          </div>
        </section>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
