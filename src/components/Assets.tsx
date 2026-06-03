import { Plane, Fan, Cog } from 'lucide-react';

export default function Assets() {
  const cards = [
    {
      title: 'Commercial Jet Engines',
      icon: <Fan size={32} />,
      desc: 'CFM56-7B, CFM56-5B, Trent 700, GE90-115B, CF6-80C2, V2500-A5 and beyond. Serviceable, run-out, and teardown condition. Full QEC and bare engine configurations available.'
    },
    {
      title: 'Aircraft',
      icon: <Plane size={32} />,
      desc: 'Narrowbody and widebody airframes for passenger conversion, freighter modification, or parts-out. B737-700/800/900, A320/A321ceo, A330-200/300, B777-200ER families.'
    },
    {
      title: 'Components & Parts',
      icon: <Cog size={32} />,
      desc: 'LLPs, rotables, expendables, and APUs. Traceable documentation as standard. Sourced directly from airlines, MROs, and approved lessors across the global network.'
    }
  ];

  return (
    <section id="what-we-trade" className="pt-10 pb-20 bg-alabaster">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            <div className="flex-1 space-y-2">
              <span className="text-[10px] font-bold tracking-widest opacity-60 text-midnight uppercase">AVIATION ASSETS</span>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase text-midnight leading-tight max-w-2xl">
                Engines. Aircraft. Components. — We Source, Trade, and Deliver
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-[13px] text-midnight/80 leading-relaxed italic border-l-2 border-brass pl-4">
                We focus exclusively on commercial aviation — leveraging DonHerBy's established logistics network to source and facilitate trades across Asia, the Middle East, Africa, and Europe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="bg-midnight p-8 text-alabaster flex flex-col gap-4 border border-brass/20 hover:border-brass/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-brass">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-bold uppercase tracking-tight text-white text-lg">
                  {card.title}
                </h3>
                <p className="text-alabaster/70 leading-relaxed text-[12px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
