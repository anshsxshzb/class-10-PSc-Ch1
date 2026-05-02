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
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2020 (Set 1, 3):</strong> Heavy focus on <em>"Majoritarianism in Sri Lanka"</em> (3 & 5 markers).</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2022 (Term 1) & 2024:</strong> Objective/MCQs dominated by <em>Belgium\\'s ethnic composition</em>, Community Govt, and capital city percentages.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2023 & 2025:</strong> Application-based questions asking to compare Prudential vs. Moral reasons.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2026:</strong> Direct 5-marker on "Forms of Power Sharing" (Horizontal vs Vertical).</span></li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">2027 Blueprint Projection (Expected)</h3>
            <p className="text-sm leading-relaxed mb-2">Based on CBSE\\'s alternating cyclical pattern and push for competency-based questions, 2027 will likely challenge candidates with <strong>Assertion-Reasoning</strong> on <em>Power sharing in Belgium vs Sri Lanka</em>, and a long descriptive question on <em>Political Parties/Coalitions as a form of power sharing</em>.</p>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative overflow-hidden flex-1">
            <div className="absolute -right-4 -top-4 bg-[#fbbf24] text-white px-8 py-2 rotate-12 font-bold text-[10px] uppercase">Blueprint</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-4">🔥 2027 EXAM TARGETS</h4>
            <div className="space-y-3 mt-4 text-sm font-semibold text-[#431407]">
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>1. Assertion-Reasoning: Accommodation Model</p>
              </div>
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>2. Prudential vs Moral Reasoning (Case-based)</p>
              </div>
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                <p>3. Forms of Power Sharing: Coalitions & Interest Groups</p>
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
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-2">National Demographics (Over 1 Crore Population)</h3>
            <p className="text-sm mb-3 text-slate-600">A small European country (smaller than Haryana). Borders France, Netherlands, Germany, and Luxembourg.</p>
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
            <p className="text-sm font-semibold opacity-90 leading-relaxed text-left border-l-2 border-[#fbbf24] pl-3">
              <strong>The TENSION (1950s-1960s):</strong> The minority French-speaking community was relatively rich and powerful. The Dutch-speaking community (the national majority) got economic development & education much later, leading to acute tension, especially in Brussels.
            </p>
          </div>
        </aside>
      </div>
    )
  },
`;

fs.appendFileSync('src/data/slides.tsx', slidesPart);
