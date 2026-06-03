import { Plane, Factory, Armchair } from 'lucide-react';

export default function Assets() {
  const verticals = [
    {
      title: 'Commercial Aviation Assets',
      icon: <Plane size={32} />,
      desc: 'Mid-life and end-of-life commercial jet engines, aircraft, and aviation components. We source from airlines, lessors, and MROs globally and facilitate trades across Asia, the Middle East, Africa, Europe, and the Americas. CFM56, Trent 700, GE90, CF6, V2500 families and beyond.',
      isLead: true
    },
    {
      title: 'Industrial Machinery & Machine Tools',
      icon: <Factory size={24} />,
      desc: 'CNC machining centres, lathes, milling machines, grinding equipment, and precision industrial machinery. We facilitate import and export of machine tools across manufacturing hubs in China, Europe, Japan, and Korea — supplying operators and industrial buyers across Asia, Africa, and the Middle East.'
    },
    {
      title: 'Furniture & Interior Products',
      icon: <Armchair size={24} />,
      desc: 'Commercial and designer furniture — import and export across Asia, Europe, and beyond. Backed by deep sourcing relationships built over a decade of supply chain management in the furniture sector.'
    }
  ];

  return (
    <section id="what-we-trade" className="pt-10 pb-20 bg-alabaster">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            <div className="flex-1 space-y-2">
              <span className="text-[10px] font-bold tracking-widest opacity-60 text-midnight uppercase">OUR TRADING VERTICALS</span>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase text-midnight leading-tight max-w-2xl">
                Specialists in High-Value Assets. Experienced Across Industries.
              </h2>
            </div>
            <div className="lg:w-[40%]">
              <p className="text-[13px] text-midnight/80 leading-relaxed italic border-l-2 border-brass pl-4">
                Aviation is our focus — but our trading capability spans three distinct verticals, backed by the same supply chain infrastructure and international compliance expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {verticals.map((vertical, i) => (
              <div 
                key={i} 
                className={`bg-midnight p-8 text-alabaster flex flex-col gap-4 border border-brass/20 hover:border-brass/50 transition-colors ${vertical.isLead ? 'lg:col-span-2 border-t-2 border-t-brass bg-[#0d343b] shadow-lg transform -translate-y-1' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-brass">
                    {vertical.icon}
                  </div>
                  {vertical.isLead && (
                    <span className="text-brass bg-brass/10 px-3 py-1 text-[9px] font-bold tracking-widest uppercase border border-brass/20">
                      SPECIALIST VERTICAL
                    </span>
                  )}
                </div>
                <h3 className={`font-bold uppercase tracking-tight text-white ${vertical.isLead ? 'text-xl' : 'text-[14px]'}`}>
                  {vertical.title}
                </h3>
                <p className="text-alabaster/70 leading-relaxed text-[12px]">
                  {vertical.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
