import fs from 'fs';

const slidesPart = `  {
    id: 10,
    type: 'comparison',
    title: 'Comparing the Case Studies',
    focus: 'Accommodation vs Majoritarianism',
    content: (
      <div className="grid grid-cols-2 gap-8 text-[#1e293b] h-full pb-8">
        <div className="bg-white border-t-8 border-emerald-600 rounded-lg shadow-lg p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-4 text-emerald-100 text-8xl opacity-30 pointer-events-none font-serif">"</div>
          <h3 className="font-black text-3xl text-emerald-800 mb-6 uppercase tracking-tight">🇧🇪 Belgium</h3>
          <h4 className="font-bold text-[#1e3a8a] text-lg mb-4">The Realisation</h4>
          <p className="flex-grow text-slate-700 font-medium leading-relaxed mb-6">
            Leaders understood that unity of the country is possible <strong>only by respecting</strong> the feelings and interests of different communities and regions.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded text-center">
             <div className="text-emerald-700 uppercase font-black tracking-widest text-sm">Outcome</div>
             <div className="text-xl font-bold mt-1 text-emerald-900">Mutually Acceptable Power Sharing</div>
          </div>
        </div>
        
        <div className="bg-white border-t-8 border-red-600 rounded-lg shadow-lg p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-4 right-4 text-red-100 text-8xl opacity-30 pointer-events-none font-serif">"</div>
          <h3 className="font-black text-3xl text-red-800 mb-6 uppercase tracking-tight">🇱🇰 Sri Lanka</h3>
          <h4 className="font-bold text-[#1e3a8a] text-lg mb-4">The Warning</h4>
          <p className="flex-grow text-slate-700 font-medium leading-relaxed mb-6">
            Shows a contrasting example. If a majority community wants to <strong>force its dominance</strong> over others and refuses to share power...
          </p>
          <div className="bg-red-50 border border-red-200 p-4 rounded text-center">
             <div className="text-red-700 uppercase font-black tracking-widest text-sm">Outcome</div>
             <div className="text-xl font-bold mt-1 text-red-900">Undermines the Unity of the Country</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    type: 'content',
    title: "Khalil\\'s Dilemma (Lebanon Story)",
    focus: 'Understanding Power Sharing in Practice',
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 lg:col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
             <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">The Unwritten Rules of Beirut</h3>
             <p className="text-sm mb-3 text-slate-600">After a bitter civil war in Lebanon, leaders came together to agree on basic rules for power sharing among different communities.</p>
             <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">President:</strong> Maronite sect of Catholic Christians</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Prime Minister:</strong> Sunni Muslim</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Deputy PM:</strong> Orthodox Christian</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Speaker:</strong> Shi\\'a Muslim</div>
             </div>
             <div className="bg-blue-50 p-3 text-sm text-[#1e3a8a] border border-blue-200 rounded font-medium italic">
                Pact: Christians agreed not to seek French protection, Muslims agreed not to seek unification with Syria.
             </div>
          </div>
        </section>
        <aside className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center text-center">
            <h4 className="text-[#9a3412] font-black text-xl mb-3">Khalil\\'s Frustration</h4>
            <p className="text-sm font-semibold opacity-90 leading-relaxed text-justify mb-4">
              Khalil does not practice his parents\\' religion. He is a popular man, but under the current rules, he cannot become the top official (President or PM).
            </p>
            <p className="text-sm font-semibold text-[#1e3a8a] bg-white p-3 border rounded shadow-inner">
               He asks: <br/><em>"Why can\\'t we be like any other normal democracy? Just hold elections, allow everyone to contest, and whoever wins maximum votes becomes president."</em>
            </p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 12,
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
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
