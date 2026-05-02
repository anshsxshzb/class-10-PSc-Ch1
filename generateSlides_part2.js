import fs from 'fs';

const slidesPart = `  {
    id: 1,
    type: 'title',
    title: 'Power Sharing',
    subtitle: 'Class 10 Political Science • NCERT Chapter 1\\nDeep-Dive Revision & 2027 Board Exam Strategy',
    focus: 'Chapter Overview & Strategy',
  },
  {
    id: 2,
    type: 'content',
    title: 'CBSE Trend Analysis (2020-2026) & 2027 Projection',
    focus: 'Exam Blueprint',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">Historical Board Patterns (2020-2026)</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2020 & 2023:</strong> Heavy focus on <em>"Majoritarianism in Sri Lanka"</em> (3 & 5 markers).</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2021 & 2024:</strong> Objective questions dominated by <em>Belgium\'s ethnic composition</em> and <em>Community Govt</em>.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2022 & 2025:</strong> Application-based questions asking to compare Prudential vs. Moral reasons.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2026:</strong> 5-marker directly on "Forms of Power Sharing" (Horizontal vs Vertical).</span></li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">2027 Blueprint Projection (Expected)</h3>
            <p className="text-sm leading-relaxed mb-2">Based on the alternating cycle, 2027 will likely challenge candidates with <strong>Assertion-Reasoning</strong> on <em>Power sharing in Belgium</em> and a descriptive question on <em>Accommodation vs Majoritarianism</em>.</p>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden flex-1">
            <div className="absolute -right-4 -top-4 bg-[#fbbf24] text-white px-8 py-2 rotate-12 font-bold text-[10px] uppercase">Blueprint</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-4">🔥 2027 EXAM TARGETS</h4>
            <div className="space-y-3 mt-4 text-sm font-semibold text-[#431407]">
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>1. The Accommodation model of Belgium</p>
              </div>
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>2. Prudential vs Moral Reasoning</p>
              </div>
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>3. Vertical vs Horizontal Power Sharing</p>
              </div>
            </div>
            <p className="text-xs italic text-slate-500 mt-4 text-center">Data modeled from NCERT standard testing patterns.</p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 3,
    type: 'content',
    title: 'Belgium: Complex Ethnic Composition',
    focus: 'Belgium Demographics',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 lg:col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-2">National Averages</h3>
            <p className="text-sm mb-3 text-slate-600">A small European country (smaller than Haryana). Population slightly over 1 crore. Borders France, Netherlands, Germany, and Luxembourg.</p>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-center justify-between p-3 bg-slate-50 border rounded text-lg font-bold">
                 <div className="flex flex-col"><span className="text-[#1e3a8a]">59%</span><span className="text-xs font-normal text-slate-500 uppercase">Flemish Region</span></div>
                 <span>Dutch Speaking</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-slate-50 border rounded text-lg font-bold">
                 <div className="flex flex-col"><span className="text-[#9a3412]">40%</span><span className="text-xs font-normal text-slate-500 uppercase">Wallonia Region</span></div>
                 <span>French Speaking</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-slate-50 border rounded text-lg font-bold">
                 <div className="flex flex-col"><span className="text-emerald-700">1%</span><span className="text-xs font-normal text-slate-500 uppercase">Overall</span></div>
                 <span>German Speaking</span>
              </li>
            </ul>
          </div>
        </section>
        <aside className="col-span-12 lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white border-2 border-[#1e3a8a] p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center text-center">
            <h4 className="text-[#fbbf24] font-black text-xl mb-3 uppercase tracking-wider">The Brussels Paradox</h4>
            <div className="bg-white text-[#1e3a8a] p-4 rounded mb-4">
              <p className="font-semibold text-sm mb-2 text-slate-600 uppercase tracking-widest text-left">Capital City Composition</p>
              <div className="flex justify-around items-center py-2">
                 <div className="text-center">
                    <div className="text-3xl font-black">80%</div>
                    <div className="text-xs uppercase font-bold text-slate-500">French</div>
                 </div>
                 <div className="text-center">
                    <div className="text-3xl font-black opacity-60">20%</div>
                    <div className="text-xs uppercase font-bold text-slate-500">Dutch</div>
                 </div>
              </div>
            </div>
            <p className="text-sm font-semibold opacity-90 leading-relaxed text-left border-l-2 border-white/30 pl-3">
              The minority French-speaking community was relatively rich and powerful. The Dutch-speaking community (the national majority) resented this, leading to acute tension in Brussels (1950s-1960s).
            </p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 4,
    type: 'content',
    title: 'Sri Lanka: Diverse Population Structure',
    focus: 'Sri Lanka Demographics',
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-2">Island Nation Geography</h3>
            <p className="text-sm mb-3">Just off the southern coast of Tamil Nadu. Population about 2 crore.</p>
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
             <p className="text-sm mb-4">You MUST differentiate between the two subsets of Tamils in board answers.</p>
             <div className="space-y-3 text-sm">
                <div className="bg-white p-3 border border-orange-200 rounded">
                   <h5 className="font-bold text-[#1e3a8a] mb-1 text-xs uppercase uppercase">1. Sri Lankan Tamils (13%)</h5>
                   <p className="text-slate-600 leading-tight">Native to the country. Concentrated in the North and East of Sri Lanka.</p>
                </div>
                <div className="bg-white p-3 border border-orange-200 rounded">
                   <h5 className="font-bold text-[#1e3a8a] mb-1 text-xs uppercase uppercase">2. Indian Tamils (5%)</h5>
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
                  <span><strong>Religion:</strong> A new constitution stipulated that the state shall <em>protect and foster Buddhism</em>.</span>
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
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
