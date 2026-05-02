import fs from 'fs';

const slidesPart = `  {
    id: 16,
    type: 'content',
    title: 'Form 2: Vertical Distribution',
    focus: 'Federalism',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200 h-full">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">02</span> 
              Among governments at different levels
            </h3>
            <p className="text-sm text-slate-700 mb-6 font-medium">A general government for the entire country and governments at the provincial or regional level.</p>
            
            <div className="space-y-3">
               <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Union / Central Government</h4>
                    <p className="text-xs text-blue-800">General government for the entire country.</p>
                  </div>
               </div>
               <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded flex items-center ml-8">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-blue-800">State / Provincial Government</h4>
                    <p className="text-xs text-blue-700">Governments at the provincial or regional level.</p>
                  </div>
               </div>
               <div className="bg-blue-200 border-l-4 border-blue-400 p-4 rounded flex items-center ml-16">
                  <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-blue-800">Local Government (Municipality/Panchayat)</h4>
                    <p className="text-xs text-blue-700">The same principle extended to lower levels.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
        
        <aside className="col-span-4 flex flex-col space-y-6">
          <div className="bg-[#1e3a8a] text-white border-2 border-[#1e3a8a] p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center text-center">
            <h4 className="text-[#fbbf24] font-black text-xl mb-3">Federal Division of Power</h4>
            <p className="text-sm font-semibold opacity-90 leading-relaxed">
               The constitution clearly lays down the powers of different levels of government. This is what they did in Belgium, but was refused in Sri Lanka.
            </p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 17,
    type: 'content',
    title: 'Form 3: Social Groups',
    focus: 'Accommodating Diversity',
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-sm ring-1 ring-slate-200 h-full">
            <h3 className="text-emerald-800 font-bold text-lg mb-3 flex items-center">
              <span className="bg-emerald-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">03</span> 
              Among different social groups
            </h3>
            <p className="text-sm text-slate-700 mb-4 font-medium">Power may also be shared among different social groups such as the religious and linguistic groups.</p>
            
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded mb-4">
               <h4 className="font-bold text-emerald-800 mb-1">Example: Community Government (Belgium)</h4>
               <p className="text-xs text-emerald-900 leading-relaxed">A good example of this arrangement, where specific linguistic communities have power over cultural and educational matters.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
               <h4 className="font-bold text-[#1e3a8a] mb-1 text-sm">Legal & Constitutional Arrangements</h4>
               <p className="text-xs text-slate-700 leading-relaxed">In some countries, socially weaker sections and women are represented in the legislatures and administration (e.g., system of <strong>reserved constituencies</strong> in assemblies and parliament in India).</p>
            </div>
          </div>
        </section>
        
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
            <h4 className="text-[#9a3412] font-black text-xl mb-3">Why is this used?</h4>
            <p className="text-sm font-semibold mb-3 text-slate-700 leading-relaxed">
               This method is used to give minority communities a <strong>fair share in power</strong>. It is meant to give space in the government and administration to diverse social groups who would otherwise feel alienated from the government.
            </p>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 18,
    type: 'content',
    title: 'Form 4: Political Parties & Pressure Groups',
    focus: 'Controlling Power',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-12 flex flex-col space-y-4">
          <div className="bg-white border-t-4 border-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">04</span> 
              Control or influence on those in power
            </h3>
            <p className="text-sm text-slate-700 mb-6 font-medium">In a democracy, the citizens must have freedom to choose among various contenders for power. Such competition ensures that power does not remain in one hand.</p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-blue-50 border border-blue-200 p-5 rounded">
                  <h4 className="font-bold text-[#1e3a8a] mb-2 text-sm uppercase tracking-wide">Coalition Governments</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">Sometimes this kind of sharing can be direct, when two or more parties form an alliance to contest elections.</p>
                  <p className="text-sm text-slate-700 leading-relaxed italic border-l-2 border-[#1e3a8a] pl-2">If their alliance is elected, they form a coalition government and thus share power.</p>
               </div>
               
               <div className="bg-orange-50 border border-orange-200 p-5 rounded">
                  <h4 className="font-bold text-[#9a3412] mb-2 text-sm uppercase tracking-wide">Interest Groups</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-2">We also find interest groups such as those of <strong>traders, businessmen, industrialists, farmers and industrial workers</strong>.</p>
                  <p className="text-sm text-slate-700 leading-relaxed italic border-l-2 border-[#9a3412] pl-2">They share power either through participation in governmental committees or by bringing influence on the decision-making process.</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
