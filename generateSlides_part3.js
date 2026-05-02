import fs from 'fs';

const slidesPart = `  {
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
               <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>They launched struggles for <strong>recognition of Tamil as an official language</strong>, regional autonomy, and equal opportunity in education/jobs.</span></li>
             </ul>
             <div className="flex items-center space-x-2 mt-4 p-3 bg-red-50 text-red-800 rounded border border-red-200 font-bold text-sm">
                <span>Reaction:</span> 
                <span className="opacity-90">Demand for autonomy repeatedly denied.</span>
             </div>
          </div>
          <div className="bg-white border-l-4 border-[#9a3412] p-5 shadow-sm ring-1 ring-slate-200">
             <h3 className="text-[#9a3412] font-bold text-lg mb-2">Descent into Civil War (1980s)</h3>
             <p className="text-sm leading-relaxed mb-3">Political organisations formed demanding an independent <strong>Tamil Eelam (state)</strong> in northern/eastern Sri Lanka. Distrust turned into widespread conflict.</p>
             <div className="bg-slate-100 p-3 rounded text-sm italic text-slate-700 border-l-2 border-slate-400">
               <strong>Consequences:</strong> Thousands killed from both sides. Many forced to leave as refugees. Terrible setback to social, cultural, and economic life (Ended 2009).
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
  {
    id: 7,
    type: 'content',
    title: 'Accommodation in Belgium (Model Part I)',
    focus: 'Innovative Power Sharing',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-emerald-800 font-bold text-lg mb-2">A Different Path</h3>
            <p className="text-sm leading-relaxed">
              Between 1970 and 1993, Belgian leaders <strong>amended their constitution four times</strong>. They worked out an arrangement to enable everyone to live together within the same country.
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">1</span> 
              Equal Representation at the Center
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Constitution prescribes that the number of Dutch and French-speaking ministers shall be <strong>equal</strong> in the central govt.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>No Unilateral Decisions:</strong> Special laws require the support of a majority of members from <em>each</em> linguistic group.</span></li>
            </ul>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative flex-1">
            <div className="absolute -right-4 -top-4 bg-[#fbbf24] text-white px-8 py-2 rotate-12 font-bold text-[10px] uppercase">5 Marks</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-4">🔥 BOARD TIP</h4>
            <div className="space-y-3 mt-4 text-sm font-semibold text-[#431407]">
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p className="italic">"Explain any three elements of the Belgian model of power sharing."</p>
              </div>
              <p className="mt-3 leading-relaxed">
                You must memorize the 4 elements precisely. The phrase <strong>"No single community can make decisions unilaterally"</strong> is a high-value keyword required by CBSE marking schemes.
              </p>
            </div>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 8,
    type: 'content',
    title: 'Accommodation in Belgium (Model Part II)',
    focus: 'Federalism & Capital Sharing',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">2</span> 
              State Governments are NOT Subordinate
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed mb-3">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Many powers of the Central Government have been given to State Governments of the two regions.</span></li>
            </ul>
            <div className="bg-blue-50 text-[#1e3a8a] p-3 rounded border border-blue-200 font-bold text-sm">
               Crucial: The State Governments are NOT subordinate to the Central Government.
            </div>
          </div>
          
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">3</span> 
              Separate Government for Brussels
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Brussels has a separate government in which both communities have <strong>equal representation</strong>.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><em>The Mutual Agreement:</em> French-speaking people accepted equal representation in Brussels because Dutch-speaking community accepted equal representation in Central Govt.</span></li>
            </ul>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white border-2 border-[#1e3a8a] p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden">
             
             <div className="absolute top-0 right-0 p-4 opacity-20">
               <span className="text-6xl text-[#fbbf24]">⚖️</span>
             </div>
             
             <h4 className="text-[#fbbf24] font-black text-xl mb-4 relative z-10">The Genius of Reciprocity</h4>
             <p className="text-sm font-semibold opacity-90 leading-relaxed border-l-2 border-[#fbbf24]/50 pl-3 relative z-10 text-justify">
               The Brussels arrangement works because it\'s a trade-off. The Dutch compromised at the Center (where they were a majority), and the French compromised in Brussels (where they were a majority). This is the hallmark of <strong>Accommodation</strong>.
             </p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 9,
    type: 'content',
    title: 'The Belgian Community Government',
    focus: 'Social Group Accommodation',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-emerald-800 font-bold text-2xl mb-4 flex items-center">
              <span className="bg-emerald-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm mr-3">4</span> 
              The 3rd Kind of Government
            </h3>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <div className="bg-slate-50 p-4 rounded border border-slate-200 shadow-inner">
                <h4 className="font-bold text-[#1e3a8a] uppercase tracking-wider mb-2">How is it elected?</h4>
                <p>Elected by people belonging to one language community (Dutch, French and German-speaking) <strong>no matter where they live</strong>.</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded border border-slate-200 shadow-inner">
                <h4 className="font-bold text-[#1e3a8a] uppercase tracking-wider mb-2">What powers does it have?</h4>
                <p className="font-medium text-slate-700 mb-2">It has the power regarding 3 specific issues:</p>
                <div className="flex space-x-3">
                   <div className="bg-white border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-bold shadow-sm">1. Cultural</div>
                   <div className="bg-white border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-bold shadow-sm">2. Educational</div>
                   <div className="bg-white border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-bold shadow-sm">3. Language-related</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-4 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm flex-1 flex flex-col text-center justify-center">
            <div className="text-5xl mb-4">🇪🇺</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-3">Proof of Success</h4>
            <p className="text-sm font-semibold mb-3 text-slate-700 leading-relaxed text-justify">
               The model helped avoid civic strife and potential linguistic division of the country. 
            </p>
            <p className="text-sm font-black bg-[#fbbf24] text-[#9a3412] py-2 px-3 rounded uppercase tracking-wide">
               When the European Union was formed, Brussels was chosen as its headquarters!
            </p>
          </div>
        </aside>
      </div>
    )
  },
  {
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
             <div className="text-emerald-700 uppercase font-black tracking-widest">Outcome</div>
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
             <div className="text-red-700 uppercase font-black tracking-widest">Outcome</div>
             <div className="text-xl font-bold mt-1 text-red-900">Undermines the Unity of the Country</div>
          </div>
        </div>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
