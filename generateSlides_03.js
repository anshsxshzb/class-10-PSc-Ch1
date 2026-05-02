import fs from 'fs';

const slidesPart = `  {
    id: 4,
    type: 'content',
    title: 'Sri Lanka: Diverse Island Demographics',
    focus: 'Sri Lanka Demographics',
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-2">Island Nation Geography (Post-1948)</h3>
            <p className="text-sm mb-3">Just off the southern coast of Tamil Nadu. Emerged as an independent country in <strong>1948</strong>. Population about 2 crore.</p>
            <div className="space-y-4 mt-6">
               <div className="relative pt-1">
                 <div className="flex mb-2 items-center justify-between">
                   <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#1e3a8a] bg-blue-100">Sinhala-speakers (Mostly Buddhist)</span></div>
                   <div className="text-right"><span className="text-xs font-semibold inline-block text-[#1e3a8a]">74%</span></div>
                 </div>
                 <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-100">
                   <div style={{ width: "74%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1e3a8a]"></div>
                 </div>
               </div>
               
               <div className="relative pt-1">
                 <div className="flex mb-2 items-center justify-between">
                   <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#9a3412] bg-[#fff7ed]">Tamil-speakers (Hindus/Muslims)</span></div>
                   <div className="text-right"><span className="text-xs font-semibold inline-block text-[#9a3412]">18%</span></div>
                 </div>
                 <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-[#fff7ed]">
                   <div style={{ width: "18%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#9a3412]"></div>
                 </div>
               </div>
               
                <div className="relative pt-1">
                 <div className="flex mb-2 items-center justify-between">
                   <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-800 bg-slate-200">Christians (Both Tamil/Sinhala)</span></div>
                   <div className="text-right"><span className="text-xs font-semibold inline-block text-slate-800">7%</span></div>
                 </div>
                 <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-slate-200">
                   <div style={{ width: "7%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-600"></div>
                 </div>
               </div>
            </div>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden flex-1">
             <h4 className="text-[#9a3412] font-black text-xl mb-4">Board Tip: Tamil Sub-groups</h4>
             <p className="text-sm mb-4">You MUST differentiate between the two subsets of Tamils and identify their geographic concentration.</p>
             <div className="space-y-3 text-sm">
                <div className="bg-white p-3 border border-orange-200 rounded">
                   <h5 className="font-bold text-[#1e3a8a] mb-1 text-xs uppercase">1. Sri Lankan Tamils (13%)</h5>
                   <p className="text-slate-600 leading-tight">Native to the country. Strongly concentrated in the <strong>North and East</strong> of Sri Lanka.</p>
                </div>
                <div className="bg-white p-3 border border-orange-200 rounded">
                   <h5 className="font-bold text-[#1e3a8a] mb-1 text-xs uppercase">2. Indian Tamils (5%)</h5>
                   <p className="text-slate-600 leading-tight">Forefathers came from India as plantation workers during the colonial period.</p>
                </div>
             </div>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 5,
    type: 'content',
    title: 'Majoritarianism in Sri Lanka (1956 Act)',
    focus: 'Sinhala Supremacy',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
           <div className="bg-[#1e3a8a] border-l-4 border-[#fbbf24] p-5 shadow-sm ring-1 ring-slate-200 text-white">
            <h3 className="text-white font-bold text-lg mb-2">Definition: Majoritarianism</h3>
            <p className="text-sm font-medium italic opacity-90 leading-relaxed border-l-2 border-white/30 pl-3">
               "A belief that the majority community should be able to rule a country in whichever way it wants, by disregarding the wishes and needs of the minority."
            </p>
          </div>
          <div className="bg-white border-l-4 border-red-600 p-5 shadow-sm ring-1 ring-slate-200 relative">
             <h3 className="text-red-700 font-bold text-lg mb-4 flex items-center">
              <AlertTriangle className="mr-2" size={20} />
              The 1956 Act (Discriminatory Measures)
             </h3>
             <ul className="space-y-4 text-sm leading-relaxed text-slate-700 font-medium select-text">
               <li className="flex items-start bg-red-50 p-3 rounded border border-red-100">
                  <span className="bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs mr-3 mt-0.5 shrink-0">1</span>
                  <span><strong>Language:</strong> Recognised <em>Sinhala</em> as the only official language, thus totally disregarding Tamil.</span>
               </li>
               <li className="flex items-start bg-red-50 p-3 rounded border border-red-100">
                  <span className="bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs mr-3 mt-0.5 shrink-0">2</span>
                  <span><strong>Employment:</strong> Followed preferential policies favouring Sinhala applicants for university positions and government jobs.</span>
               </li>
               <li className="flex items-start bg-red-50 p-3 rounded border border-red-100">
                  <span className="bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs mr-3 mt-0.5 shrink-0">3</span>
                  <span><strong> Religion:</strong> A new constitution stipulated that the state shall <em>protect and foster Buddhism</em>.</span>
               </li>
             </ul>
          </div>
        </section>
        <aside className="col-span-4 flex flex-col space-y-6">
           <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm flex-1 flex flex-col">
             <h4 className="text-[#9a3412] font-black text-lg mb-3">🔥 BOARD TIP</h4>
             <p className="text-sm font-medium mb-3 text-slate-700 leading-relaxed">
               Students often lose 1 mark in this 3-marker by forgetting point 3. You MUST mention <strong>Buddhism</strong> alongside Language and Jobs to get full credit.
             </p>
             <div className="mt-auto bg-white p-3 border border-[#fed7aa] rounded text-xs">
                <strong>NCERT Keyword Focus:</strong> "Preferential policies" and "Protect and foster"
             </div>
           </div>
        </aside>
      </div>
    )
  },
  {
    id: 6,
    type: 'content',
    title: 'The Fallout: Alienation to Civil War',
    focus: 'Causes of Civil War',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 lg:col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
             <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">Feeling of Alienation</h3>
             <ul className="space-y-3 text-sm leading-relaxed mb-4">
               <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Sri Lankan Tamils felt government policies denied them equal political rights & ignored their interests/culture.</span></li>
               <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>Their Demands:</strong> Recognition of Tamil as an official language, regional autonomy, and equal opportunity in securing education and jobs. <em>(Their demand for autonomy was repeatedly denied.)</em></span></li>
             </ul>
          </div>
          <div className="bg-white border-l-4 border-[#9a3412] p-5 shadow-sm ring-1 ring-slate-200">
             <h3 className="text-[#9a3412] font-bold text-lg mb-2">Descent into Civil War (1980s)</h3>
             <p className="text-sm leading-relaxed mb-3">By 1980s, several political organisations were formed demanding an independent <strong>Tamil Eelam (state)</strong> in northern and eastern parts of Sri Lanka. The distrust turned into a Civil War.</p>
             <div className="bg-slate-100 p-3 rounded text-sm italic text-slate-700 border-l-2 border-slate-400">
               <strong>Consequences:</strong> Thousands killed from both sides. Families forced to leave as refugees. Terrible setback to social, cultural, and economic life (Ended 2009).
             </div>
          </div>
        </section>
        <aside className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center text-center">
            <h4 className="text-[#fbbf24] font-black text-4xl mb-2">2009</h4>
            <p className="text-xs uppercase font-bold tracking-widest opacity-80 mb-6">End of Civil War</p>
            <hr className="border-white/20 mb-6 w-1/2 mx-auto" />
            <h5 className="font-bold text-sm mb-2 text-[#fbbf24] uppercase">Key Definition</h5>
            <p className="text-sm font-semibold opacity-90 leading-relaxed border-l-2 border-white/30 pl-3 text-left italic">
              "Civil War: A violent conflict between opposing groups within a country that becomes so intense that it appears like a war."
            </p>
          </div>
        </aside>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
