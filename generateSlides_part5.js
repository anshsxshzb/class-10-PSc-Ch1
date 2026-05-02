import fs from 'fs';

const slidesPart = `  {
    id: 14,
    type: 'content',
    title: 'Forms of Power Sharing',
    focus: 'Classification of Power Sharing',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">01</span> 
              Horizontal Distribution of Power
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2">•</span><span>Power is shared among different organs of government: <strong>Legislature, Executive, and Judiciary</strong>.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2">•</span><span><strong>System of Checks & Balances:</strong> Each organ exercises a check on the others, ensuring balance.</span></li>
            </ul>
          </div>
          
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">02</span> 
              Vertical Distribution of Power
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2">•</span><span>Power shared among governments at different levels: <strong>Central/Federal</strong> and <strong>Provincial/State</strong>.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2">•</span><span>Commonly referred to as a <strong>Federal Government</strong> structure.</span></li>
            </ul>
          </div>
          
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">03</span> 
              Social Groups & Interest Groups
            </h3>
            <p className="text-sm leading-relaxed mb-2">Power sharing among religious and linguistic groups (e.g., <strong>Community Government</strong> in Belgium).</p>
            <p className="text-sm italic text-slate-500">Also involves political parties, pressure groups, and movements influencing those in power.</p>
          </div>
        </section>
        
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 bg-[#fbbf24] text-white px-8 py-2 rotate-12 font-bold text-[10px] uppercase">5 Marks</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-4 flex items-center">🔥 MOST IMPORTANT FOR 2027</h4>
            <p className="text-sm font-semibold mb-3">Board Tip: Common 5-Mark Question</p>
            <div className="bg-white p-3 border border-[#fed7aa] rounded text-xs leading-relaxed text-[#431407]">
              <strong>Question Trend:</strong> "Explain the four different forms of power sharing in modern democracies with examples."<br/><br/>
              <strong>Setter's Insight:</strong> Students often miss the 'System of Checks & Balances' terminology. Mentioning it earns higher credit.
            </div>
          </div>
          
          <div className="bg-[#1e3a8a] text-white p-5 rounded-lg shadow-xl flex-1 flex flex-col">
            <h4 className="text-[#fbbf24] font-bold text-sm uppercase tracking-widest mb-4">Visual Pedagogy: The Power Grid</h4>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="bg-white/10 p-3 border border-white/20 rounded flex flex-col justify-center items-center text-center">
                <div className="w-8 h-1 bg-[#fbbf24] mb-2"></div>
                <span className="text-[10px] uppercase font-bold">Horizontal</span>
                <span className="text-[9px] opacity-70 mt-1">Same Level / Separation</span>
              </div>
              <div className="bg-white/10 p-3 border border-white/20 rounded flex flex-col justify-center items-center text-center">
                <div className="w-1 h-8 bg-[#fbbf24] mb-2"></div>
                <span className="text-[10px] uppercase font-bold">Vertical</span>
                <span className="text-[9px] opacity-70 mt-1">Hierarchical / Federal</span>
              </div>
              <div className="bg-white/10 p-3 border border-white/20 rounded flex flex-col justify-center items-center text-center">
                <div className="flex space-x-1 mb-2">
                  <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                </div>
                <span className="text-[10px] uppercase font-bold">Social Groups</span>
                <span className="text-[9px] opacity-70 mt-1">Linguistic/Religious</span>
              </div>
              <div className="bg-white/10 p-3 border border-white/20 rounded flex flex-col justify-center items-center text-center">
                <div className="w-8 h-8 border border-[#fbbf24] border-dashed rounded-full flex items-center justify-center text-[8px] font-bold">P.P.</div>
                <span className="text-[10px] uppercase font-bold">Coalitions</span>
                <span className="text-[9px] opacity-70 mt-1">Parties & Movements</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    )
  },
  {
    id: 15,
    type: 'questions',
    title: 'Board Exam Rehearsal (Short Answers)',
    focus: '2-Mark Questions',
    content: (
      <div className="flex flex-col h-full space-y-6">
         <div className="bg-[#1e3a8a] text-white p-4 text-center rounded">
            <h3 className="font-black text-2xl uppercase tracking-widest">2-Mark Questions (⭐ Highly Probable)</h3>
            <p className="text-sm opacity-80 mt-1">Strict NCERT exact-phrasing required</p>
         </div>
         
         <div className="bg-white border-l-4 border-slate-400 p-6 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-bold text-lg text-slate-800 mb-2">Q1: What is Majoritarianism? Explain with reference to Sri Lanka.</h4>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded text-slate-700 italic border-l-2 border-l-[#1e3a8a]">
              <strong>Ans:</strong> Majoritarianism is a belief that the majority community should be able to rule a country in whichever way it wants, by disregarding the wishes and needs of the minority. Example: The democratically elected government in Sri Lanka adopted a series of majoritarian measures (like the 1956 Act) to establish Sinhala supremacy.
            </div>
         </div>
         
         <div className="bg-white border-l-4 border-slate-400 p-6 shadow-sm ring-1 ring-slate-200 mt-4">
            <h4 className="font-bold text-lg text-slate-800 mb-2">Q2: Name one prudential reason and one moral reason for power sharing.</h4>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded text-slate-700 italic border-l-2 border-l-[#9a3412]">
              <strong>Ans:</strong> <br/>
              <strong>Prudential:</strong> Power sharing is good because it helps to reduce the possibility of conflict between social groups and ensures the stability of political order.<br/>
              <strong>Moral:</strong> Power sharing is the very spirit of democracy; people have a right to be consulted on how they are to be governed.
            </div>
         </div>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
