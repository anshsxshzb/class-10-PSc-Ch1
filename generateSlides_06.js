import fs from 'fs';

const slidesPart = `  {
    id: 13,
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
                    <p>It helps to reduce the possibility of conflict between social groups.</p>
                  </div>
               </li>
               <li className="flex items-start">
                  <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-4 mt-1 shrink-0 px-2 py-1">B</span>
                  <div>
                    <h4 className="font-bold text-lg text-[#1e3a8a]">Ensures Political Stability</h4>
                    <p>Since social conflict often leads to violence and political instability, power sharing is a good way to ensure the stability of political order.</p>
                  </div>
               </li>
             </ul>
          </div>
        </section>
        <aside className="col-span-4 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white border-2 border-[#1e3a8a] p-5 rounded-lg shadow-sm flex-1 flex flex-col relative overflow-hidden text-center justify-center">
             <AlertTriangle className="opacity-20 absolute top-4 left-4 w-24 h-24 text-white" />
             <h4 className="text-[#fbbf24] font-black text-xl mb-4 relative z-10">The Tyranny Trap</h4>
             <p className="text-sm font-semibold opacity-90 leading-relaxed relative z-10">
               Imposing the will of the majority community looks attractive in the short run...
             </p>
             <div className="bg-white/10 p-3 rounded mt-4 relative z-10 border border-white/20">
               But in the long run it undermines the unity of the nation.
               <strong className="block mt-2 text-[#fbbf24]">Tyranny of the majority is not just oppressive for the minority; it often brings ruin to the majority as well!</strong>
             </div>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 14,
    type: 'content',
    title: '2. Moral Reasons',
    focus: 'The Spirit of Democracy',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 flex flex-col space-y-4">
          <div className="bg-white border-t-4 border-b-4 border-[#9a3412] p-8 shadow-sm ring-1 ring-slate-200 text-center">
            <h3 className="text-[#9a3412] font-black text-3xl uppercase tracking-widest font-serif">"Power sharing is the very spirit of democracy"</h3>
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
                   People have a right to be consulted on how they are to be governed. A <strong>legitimate government</strong> is one where citizens, through participation, acquire a stake in the system.
                </p>
             </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 15,
    type: 'content',
    title: 'Form 1: Horizontal Distribution',
    focus: 'Checks and Balances',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">01</span> 
              Among different organs of government
            </h3>
            <p className="text-sm text-slate-700 mb-4">Power is shared among the legislature, executive, and judiciary. It is called horizontal distribution because it allows different organs of government placed at the <strong>same level</strong> to exercise different powers.</p>
            
            <div className="flex justify-between items-center bg-slate-50 p-4 border rounded">
               <div className="text-center w-1/3">
                  <div className="text-[#1e3a8a] font-bold">Legislature</div>
                  <div className="text-xs text-slate-500 uppercase mt-1">Makes Laws</div>
               </div>
               <div className="border-l h-8 border-slate-300"></div>
               <div className="text-center w-1/3">
                  <div className="text-[#1e3a8a] font-bold">Executive</div>
                  <div className="text-xs text-slate-500 uppercase mt-1">Implements Laws</div>
               </div>
               <div className="border-l h-8 border-slate-300"></div>
               <div className="text-center w-1/3">
                  <div className="text-[#1e3a8a] font-bold">Judiciary</div>
                  <div className="text-xs text-slate-500 uppercase mt-1">Interprets Laws</div>
               </div>
            </div>
          </div>
        </section>
        
        <aside className="col-span-4 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
            <h4 className="text-[#9a3412] font-black text-xl mb-3 flex items-center">System of Checks & Balances</h4>
            <p className="text-sm font-semibold mb-3 text-slate-700">
               Such a separation ensures that none of the organs can exercise unlimited power. Each organ checks the others.
            </p>
            <div className="bg-white p-3 border border-[#fed7aa] rounded text-xs leading-relaxed text-[#431407]">
               <strong>Example:</strong> Judges are appointed by the executive, but they can check the functioning of executive or laws made by the legislature.
            </div>
          </div>
        </aside>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
