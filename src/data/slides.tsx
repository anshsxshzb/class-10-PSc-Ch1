import { ReactNode } from 'react';
import { AlertCircle, BookOpen, AlertTriangle, Lightbulb, Landmark, Scale, Users, Activity } from 'lucide-react';

export type SlideData = {
  id: number;
  type: 'title' | 'content' | 'comparison' | 'interactive' | 'questions';
  title?: string;
  subtitle?: string;
  focus: string;
  isHighWeightage?: boolean;
  content?: ReactNode;
};

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: 'Power Sharing',
    subtitle: 'Class 10 Political Science • NCERT Chapter 1\nDeep-Dive Revision & 2027 Board Exam Strategy',
    focus: 'Chapter Overview & Strategy',
  },
  {
    id: 2,
    type: 'content',
    title: 'CBSE Trend Analysis (2020-2026) & 2027 Projection',
    focus: 'Exam Blueprint',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">Historical Board Patterns (2020-2026)</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2020 (Set 1, 3):</strong> Heavy focus on <em>"Majoritarianism in Sri Lanka"</em> (3 & 5 markers).</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2022 (Term 1) & 2024:</strong> Objective/MCQs dominated by <em>Belgium\'s ethnic composition</em>, Community Govt, and capital city percentages.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2023 & 2025:</strong> Application-based questions asking to compare Prudential vs. Moral reasons.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>2026:</strong> Direct 5-marker on "Forms of Power Sharing" (Horizontal vs Vertical).</span></li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">2027 Blueprint Projection (Expected)</h3>
            <p className="text-sm leading-relaxed mb-2">Based on CBSE\'s alternating cyclical pattern and push for competency-based questions, 2027 will likely challenge candidates with <strong>Assertion-Reasoning</strong> on <em>Power sharing in Belgium vs Sri Lanka</em>, and a long descriptive question on <em>Political Parties/Coalitions as a form of power sharing</em>.</p>
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
  {
    id: 4,
    type: 'content',
    title: 'Sri Lanka: Diverse Island Demographics',
    focus: 'Sri Lanka Demographics',
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
  {
    id: 7,
    type: 'content',
    title: 'Accommodation in Belgium (Model Part I)',
    focus: 'Innovative Power Sharing',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-emerald-800 font-bold text-lg mb-2">A Different Path</h3>
            <p className="text-sm leading-relaxed">
              Between <strong>1970 and 1993</strong>, Belgian leaders amended their constitution <strong>four times</strong>. They worked out an innovative arrangement to enable everyone to live together within the same country.
            </p>
          </div>
          
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">1</span> 
              Equal Representation at the Center
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Constitution prescribes that the number of Dutch and French-speaking ministers shall be <strong>equal</strong> in the central govt.</span></li>
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span><strong>No Unilateral Decisions:</strong> Some special laws require the support of a majority of members from <em>each</em> linguistic group. Thus, no single community can make decisions unilaterally.</span></li>
            </ul>
          </div>
        </section>
        <aside className="col-span-5 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm relative flex-1">
            <div className="absolute -right-4 -top-4 bg-[#fbbf24] text-white px-8 py-2 rotate-12 font-bold text-[10px] uppercase">5 Marks</div>
            <h4 className="text-[#9a3412] font-black text-xl mb-4">🔥 BOARD TIP</h4>
            <div className="space-y-3 mt-4 text-sm font-semibold text-[#431407]">
              <div className="bg-white p-3 border border-[#fed7aa] border-l-4 border-l-[#f97316] rounded shadow-sm">
                 <p className="italic">"No single community can make decisions unilaterally"</p>
              </div>
              <p className="mt-3 leading-relaxed">
                You must memorize the 4 elements precisely. The phrase above is a high-value keyword required by CBSE marking schemes for the 5-mark question on the Belgian Model.
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-[#1e3a8a] font-bold text-lg mb-3 flex items-center">
              <span className="bg-[#1e3a8a] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs mr-2">2</span> 
              State Governments are NOT Subordinate
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed mb-3">
              <li className="flex items-start"><span className="text-[#1e3a8a] mr-2 text-lg leading-none">•</span><span>Many powers of the Central Government have been given to State Governments of the two regions.</span></li>
            </ul>
            <div className="bg-blue-50 text-[#1e3a8a] p-3 rounded border border-blue-200 font-bold text-center text-sm">
               Crucial Concept: The State Governments are NOT subordinate to the Central Government.
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
               <Scale className="w-24 h-24 text-[#fbbf24]"/>
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-emerald-800 font-bold text-2xl mb-4 flex items-center">
              <span className="bg-emerald-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm mr-3">4</span> 
              The 3rd Kind of Government
            </h3>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <div className="bg-slate-50 p-4 rounded border border-slate-200 shadow-inner">
                <h4 className="font-bold text-[#1e3a8a] uppercase tracking-wider mb-2 flex items-center"><Users size={16} className="mr-2"/> How is it elected?</h4>
                <p>Elected by people belonging to one language community (Dutch, French and German-speaking) <strong>no matter where they live</strong>.</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded border border-slate-200 shadow-inner">
                <h4 className="font-bold text-[#1e3a8a] uppercase tracking-wider mb-2 flex items-center"><Landmark size={16} className="mr-2"/> What powers does it have?</h4>
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
               The model helped avoid civic strife between the two major communities and a possible linguistic division of the country. 
            </p>
            <p className="text-sm font-black bg-[#fbbf24] text-[#9a3412] py-2 px-3 rounded uppercase tracking-wide shadow">
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
      <div className="grid grid-cols-2 gap-8 text-[#1e293b] min-h-full pb-8">
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
    title: "Khalil\'s Dilemma (Lebanon Story)",
    focus: 'Understanding Power Sharing in Practice',
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-12 lg:col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200">
             <h3 className="text-[#1e3a8a] font-bold text-lg mb-3">The Unwritten Rules of Beirut</h3>
             <p className="text-sm mb-3 text-slate-600">After a bitter civil war in Lebanon, leaders came together to agree on basic rules for power sharing among different communities.</p>
             <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">President:</strong> Maronite sect of Catholic Christians</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Prime Minister:</strong> Sunni Muslim</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Deputy PM:</strong> Orthodox Christian</div>
                <div className="bg-slate-50 p-2 border rounded text-xs"><strong className="text-[#1e3a8a]">Speaker:</strong> Shi\'a Muslim</div>
             </div>
             <div className="bg-blue-50 p-3 text-sm text-[#1e3a8a] border border-blue-200 rounded font-medium italic">
                Pact: Christians agreed not to seek French protection, Muslims agreed not to seek unification with Syria.
             </div>
          </div>
        </section>
        <aside className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-[#fff7ed] border-2 border-[#fbbf24] p-5 rounded-lg shadow-sm flex-1 flex flex-col justify-center text-center">
            <h4 className="text-[#9a3412] font-black text-xl mb-3">Khalil\'s Frustration</h4>
            <p className="text-sm font-semibold opacity-90 leading-relaxed text-justify mb-4">
              Khalil does not practice his parents\' religion. He is a popular man, but under the current rules, he cannot become the top official (President or PM).
            </p>
            <p className="text-sm font-semibold text-[#1e3a8a] bg-white p-3 border rounded shadow-inner">
               He asks: <br/><em>"Why can\'t we be like any other normal democracy? Just hold elections, allow everyone to contest, and whoever wins maximum votes becomes president."</em>
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
         <div className="col-span-12 flex items-center justify-center mb-4">
             <h2 className="text-3xl font-black text-[#1e3a8a] border-b-4 border-[#fbbf24] pb-2 uppercase tracking-tight">Two Distinct Sets of Reasons</h2>
         </div>
         
         <div className="col-span-6 flex flex-col min-h-full bg-white shadow-lg ring-1 ring-slate-200 rounded-lg overflow-hidden group hover:ring-2 hover:ring-[#1e3a8a] transition-all">
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
         
         <div className="col-span-6 flex flex-col min-h-full bg-white shadow-lg ring-1 ring-slate-200 rounded-lg overflow-hidden group hover:ring-2 hover:ring-[#9a3412] transition-all">
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
    id: 13,
    type: 'content',
    title: '1. Prudential Reasons',
    focus: 'Stability & Conflict Reduction',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
  {
    id: 16,
    type: 'content',
    title: 'Form 2: Vertical Distribution',
    focus: 'Federalism',
    isHighWeightage: true,
    content: (
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-8 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-[#1e3a8a] p-6 shadow-sm ring-1 ring-slate-200 min-h-full">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
        <section className="col-span-7 flex flex-col space-y-4">
          <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-sm ring-1 ring-slate-200 min-h-full">
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
      <div className="grid grid-cols-12 gap-6 min-h-full text-[#1e293b]">
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
  {
    id: 19,
    type: 'questions',
    title: 'Question Bank: 1-Mark & MCQs',
    focus: 'Historical Boards (2020 & 2024)',
    content: (
      <div className="flex flex-col min-h-full space-y-4">
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
    title: 'Question Bank: 2-Mark Descriptive',
    focus: 'Direct Concept Checks',
    content: (
      <div className="flex flex-col min-h-full space-y-6">
         <div className="bg-[#fbbf24] text-[#9a3412] p-4 text-center rounded border-2 border-[#9a3412]">
            <h3 className="font-black text-2xl uppercase tracking-widest">Descriptive Questions (2 Marks)</h3>
            <p className="text-sm font-bold opacity-80 mt-1">Requires 2 distinct points</p>
         </div>
         
         <div className="bg-white border-l-4 border-emerald-600 p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto space-y-5">
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs mr-2 shrink-0">Q1</span>
                 Differentiate between prudential and moral reasons for power sharing.
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>Point 1:</strong> Prudential reasons stress that power sharing will bring out better outcomes (e.g. reduces conflict).</p>
                 <p><strong>Point 2:</strong> Moral reasons emphasize that the very act of power sharing is valuable (e.g. it is the spirit of democracy, and people have a right to be consulted).</p>
               </div>
            </div>
            
            <hr className="border-slate-200" />
            
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs mr-2 shrink-0">Q2</span>
                 What is a system of checks and balances?
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>Point 1:</strong> It is the system where power is shared among different organs of government like the legislature, executive, and judiciary.</p>
                 <p><strong>Point 2:</strong> This ensures that none of the organs can exercise unlimited power, as each organ checks the others (e.g., judges are appointed by executive, but can check the executive).</p>
               </div>
            </div>
            
            <hr className="border-slate-200" />
            
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs mr-2 shrink-0">Q3</span>
                 What does Majoritarianism mean?
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>Point 1:</strong> It is a belief that the majority community should be able to rule a country in whichever way it wants.</p>
                 <p><strong>Point 2:</strong> It often involves disregarding the wishes and needs of the minority community, which can lead to conflict (like in Sri Lanka).</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 21,
    type: 'questions',
    title: 'Question Bank: 3-Mark Descriptive (Part I)',
    focus: 'Concept Explanations',
    content: (
      <div className="flex flex-col min-h-full space-y-6">
         <div className="bg-[#fbbf24] text-[#1e3a8a] p-4 text-center rounded border-2 border-[#1e3a8a]">
            <h3 className="font-black text-2xl uppercase tracking-widest">Descriptive Questions (3 Marks)</h3>
            <p className="text-sm font-bold opacity-80 mt-1">Requires 3 distinct, elaborated points</p>
         </div>
         
         <div className="bg-white border-l-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto space-y-5">
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-[10px] mr-2 shrink-0">CBSE 2020</span>
                 Q1: How did the Sri Lankan government establish majoritarianism? Provide three points.
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>1.</strong> In 1956, an Act was passed to recognise Sinhala as the only official language, disregarding Tamil.</p>
                 <p><strong>2.</strong> The governments followed preferential policies that favoured Sinhala applicants for university positions and government jobs.</p>
                 <p><strong>3.</strong> A new constitution stipulated that the state shall protect and foster Buddhism.</p>
               </div>
            </div>
            
            <hr className="border-slate-200" />
            
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-[10px] mr-2 shrink-0">CBSE 2019</span>
                 Q2: What is Community Government? How is it formed in Belgium?
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>1.</strong> It is a third kind of government in Belgium, apart from Central and State governments.</p>
                 <p><strong>2.</strong> It is elected by people belonging to one language community – Dutch, French and German-speaking – no matter where they live.</p>
                 <p><strong>3.</strong> It has the power regarding cultural, educational and language-related issues, helping avoid civic strife between major communities.</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 22,
    type: 'questions',
    title: 'Question Bank: 3-Mark Descriptive (Part II)',
    focus: 'Detailed Reasons & Demands',
    content: (
      <div className="flex flex-col min-h-full space-y-6">
         <div className="bg-[#fbbf24] text-[#1e3a8a] p-4 text-center rounded border-2 border-[#1e3a8a]">
            <h3 className="font-black text-2xl uppercase tracking-widest">Descriptive Questions (3 Marks)</h3>
            <p className="text-sm font-bold opacity-80 mt-1">Requires 3 distinct, elaborated points</p>
         </div>
         
         <div className="bg-white border-l-4 border-orange-500 p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto space-y-5">
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] mr-2 shrink-0">CBSE 2018</span>
                 Q3: Why is power sharing desirable? Explain any three reasons.
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>1. Reduces Conflict (Prudential):</strong> It helps to reduce the possibility of conflict and violence between social groups.</p>
                 <p><strong>2. Political Stability (Prudential):</strong> By preventing the tyranny of the majority, power sharing ensures the stability of political order.</p>
                 <p><strong>3. Spirit of Democracy (Moral):</strong> A legitimate democratic government involves sharing power with those affected by its exercise and creating participation.</p>
               </div>
            </div>
            
            <hr className="border-slate-200" />
            
            <div>
               <h4 className="font-bold text-md text-slate-800 mb-2 flex items-center">
                 <span className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] mr-2 shrink-0">CBSE 2015</span>
                 Q4: Describe any three demands of the Sri Lankan Tamils.
               </h4>
               <div className="space-y-2 pl-10 text-sm text-slate-700 italic border-l-2 border-slate-300 ml-4">
                 <p><strong>1. Language:</strong> They demanded the recognition of Tamil as an official language.</p>
                 <p><strong>2. Autonomy:</strong> They wanted regional autonomy for the northern and eastern parts of Sri Lanka where they were concentrated.</p>
                 <p><strong>3. Equality in Opportunity:</strong> They demanded equal opportunity in securing education and jobs, ending the preferential policies for Sinhalese.</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 23,
    type: 'questions',
    title: 'Question Bank: 5-Mark Heavyweights (I)',
    focus: 'Historical Boards (2018, 2021, 2025)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col min-h-full space-y-4">
         <div className="bg-[#9a3412] text-white p-3 text-center rounded">
            <h3 className="font-black text-xl uppercase tracking-widest">Long Answers (5 Marks)</h3>
            <p className="text-xs font-bold mt-1 text-[#fbbf24]">Always write 5 distinct points.</p>
         </div>
         
         <div className="bg-white border-t-4 border-emerald-600 p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto">
            <h4 className="font-bold text-md text-slate-800 mb-4 flex flex-col">
              <span className="bg-emerald-600 text-white px-2 py-1 rounded text-[10px] w-fit mb-2">Q1: 2018, 2021, 2025 (Expected)</span>
              Describe the elements of the Belgian model for accommodating diversities.
            </h4>
            <div className="space-y-4 text-sm text-slate-700">
               <p className="flex items-start">
                 <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">1</span>
                 <span><strong>Equal Representation at the Center:</strong> The Constitution prescribes that the number of Dutch and French-speaking ministers shall be equal in the central government.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">2</span>
                 <span><strong>No Unilateral Decisions:</strong> Some special laws require the support of a majority of members from each linguistic group. No single community can make decisions alone.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">3</span>
                 <span><strong>State Autonomy:</strong> Many powers of the Central Government have been given to State Governments. State Governments are not subordinate to the Central Government.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">4</span>
                 <span><strong>Separate Brussels Government:</strong> Brussels has a separate government where both communities have equal representation.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">5</span>
                 <span><strong>Community Government:</strong> A third kind of government elected by people of one language community, which has power regarding cultural, educational and language-related issues.</span>
               </p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 24,
    type: 'questions',
    title: 'Question Bank: 5-Mark Heavyweights (II)',
    focus: 'Historical Boards (2019, 2026)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col min-h-full space-y-4">
         <div className="bg-[#9a3412] text-white p-3 text-center rounded">
            <h3 className="font-black text-xl uppercase tracking-widest">Long Answers (5 Marks)</h3>
            <p className="text-xs font-bold mt-1 text-[#fbbf24]">Always write 5 distinct points.</p>
         </div>
         
         <div className="bg-white border-t-4 border-[#1e3a8a] p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto">
            <h4 className="font-bold text-md text-slate-800 mb-4 flex flex-col">
              <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded text-[10px] w-fit mb-2">Q2: 2019, 2026 (Expected)</span>
              Explain the different forms of power sharing in modern democracies.
            </h4>
            <div className="space-y-4 text-sm text-slate-700">
               <p className="flex items-start">
                 <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">1</span>
                 <span><strong>Horizontal Distribution:</strong> Power is shared among different organs of government like the legislature, executive, and judiciary.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">2</span>
                 <span><strong>Checks and Balances:</strong> In horizontal distribution, each organ checks the others, ensuring that none can exercise unlimited power.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">3</span>
                 <span><strong>Vertical Distribution (Federalism):</strong> Power is shared among governments at different levels (e.g., Central, State, and Local governments).</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">4</span>
                 <span><strong>Social Groups:</strong> Power is shared among different linguistic and religious groups, such as the 'community government' in Belgium.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">5</span>
                 <span><strong>Political Parties & Pressure Groups:</strong> Power is shared through coalition governments when multiple parties form an alliance, and by interest groups influencing decision making.</span>
               </p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 25,
    type: 'questions',
    title: 'Question Bank: 5-Mark Heavyweights (III)',
    focus: 'Historical Boards (2017, NCERT Core)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col min-h-full space-y-4">
         <div className="bg-[#9a3412] text-white p-3 text-center rounded">
            <h3 className="font-black text-xl uppercase tracking-widest">Long Answers (5 Marks)</h3>
            <p className="text-xs font-bold mt-1 text-[#fbbf24]">Always write 5 distinct points.</p>
         </div>
         
         <div className="bg-white border-t-4 border-red-600 p-5 shadow-sm ring-1 ring-slate-200 flex-1 overflow-y-auto">
            <h4 className="font-bold text-md text-slate-800 mb-4 flex flex-col">
              <span className="bg-red-600 text-white px-2 py-1 rounded text-[10px] w-fit mb-2">Q3: 2017, CBSE Sample Paper</span>
              Describe the majoritarian measures taken by the Sri Lankan government to establish Sinhala supremacy and its consequences.
            </h4>
            <div className="space-y-4 text-sm text-slate-700">
               <p className="flex items-start">
                 <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">1</span>
                 <span><strong>Language Policy (1956 Act):</strong> Sri Lanka passed an Act to recognise Sinhala as the only official language, disregarding Tamil completely.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">2</span>
                 <span><strong>Preferential Job Policies:</strong> The government followed preferential policies that favoured Sinhala applicants for university positions and government employment.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">3</span>
                 <span><strong>Fostering Buddhism:</strong> A new constitution stipulated that the state shall protect and foster Buddhism, ignoring the religious practices of the minority.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">4</span>
                 <span><strong>Feeling of Alienation:</strong> These measures gradually increased the feeling of alienation among the Sri Lankan Tamils, making them feel their culture and rights were ignored.</span>
               </p>
               <p className="flex items-start">
                 <span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded mr-3 shrink-0">5</span>
                 <span><strong>Resulting Civil War:</strong> The repeated denial of their demands for autonomy led to distrust, which eventually turned into a devastating civil war causing thousands of deaths.</span>
               </p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 26,
    type: 'questions',
    title: 'Question Bank: Assertion & Reason',
    focus: '2027 Edge (Competency Based)',
    isHighWeightage: true,
    content: (
      <div className="flex flex-col min-h-full space-y-4">
         <div className="bg-[#fbbf24] text-black p-3 text-center rounded border-2 border-[#1e3a8a] shadow-lg">
            <h3 className="font-black text-xl uppercase tracking-widest flex items-center justify-center"><Activity className="mr-2" /> Assertion & Reasoning (1 Mark)</h3>
            <p className="text-xs font-bold mt-1 text-[#1e3a8a]">The new CBSE focus area for 2027 onwards.</p>
         </div>
         
         <div className="bg-white p-4 shadow-sm ring-1 ring-slate-200 text-xs text-slate-600 bg-slate-50 italic">
            <strong>Options:</strong><br/>
            (A) Both A and R are true and R is the correct explanation of A.<br/>
            (B) Both A and R are true but R is not the correct explanation of A.<br/>
            (C) A is true but R is false.<br/>
            (D) A is false but R is true.
         </div>
         
         <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto">
            <div className="bg-white border-l-4 border-[#1e3a8a] p-4 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
               <div>
                  <p className="font-bold text-sm text-[#1e3a8a] mb-2">Question 1</p>
                  <p className="text-sm text-slate-800 mb-2"><strong>Assertion (A):</strong> Power sharing is good because it helps to reduce the possibility of conflict between social groups.</p>
                  <p className="text-sm text-slate-800 mb-4"><strong>Reason (R):</strong> Power sharing is the very spirit of democracy.</p>
               </div>
               <div className="bg-green-50 border border-green-200 p-3 rounded">
                 <p className="font-bold text-green-800 text-sm">Ans: (B)</p>
                 <p className="text-xs text-green-700 mt-1">Both are true. But R (moral reason) is not the correct explanation for A (prudential reason).</p>
               </div>
            </div>
            
            <div className="bg-white border-l-4 border-[#1e3a8a] p-4 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between">
               <div>
                  <p className="font-bold text-sm text-[#1e3a8a] mb-2">Question 2</p>
                  <p className="text-sm text-slate-800 mb-2"><strong>Assertion (A):</strong> In Belgium, the leaders recognized the existence of regional differences and cultural diversities.</p>
                  <p className="text-sm text-slate-800 mb-4"><strong>Reason (R):</strong> The 1956 Act recognized Sinhala as the only official language.</p>
               </div>
               <div className="bg-green-50 border border-green-200 p-3 rounded">
                 <p className="font-bold text-green-800 text-sm">Ans: (B)</p>
                 <p className="text-xs text-green-700 mt-1">Both are factually true statements, but R relates to Sri Lanka and has nothing to do with explaining A.</p>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 27,
    type: 'title',
    title: 'Final Revision Complete',
    subtitle: 'Re-read NCERT. Write points explicitly.\nBest of Luck for CBSE Boards 2027!',
    focus: 'End of Presentation',
  }
];
