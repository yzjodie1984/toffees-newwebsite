import { Globe2, Landmark, Layers, Award } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: <Globe2 className="text-brass shrink-0" size={24} />,
      title: 'Group-Backed Infrastructure',
      desc: 'Backed by the DonherBy Group\'s decade-long freight forwarding network — sea, air, rail, and road across four continents. Every deal has real logistics execution behind it, not just a handshake'
    },
    {
      icon: <Landmark className="text-brass shrink-0" size={24} />,
      title: 'Hong Kong at the Centre',
      desc: 'Incorporated and operating from Hong Kong SAR — a globally trusted free-trade hub with transparent legal, banking, and contract frameworks that give international counterparties confidence'
    },
    {
      icon: <Layers className="text-brass shrink-0" size={24} />,
      title: 'Operational Depth Across Verticals',
      desc: 'Aviation engines, electronics, furniture, FMCG — the same cross-border compliance expertise, documentation rigour, and freight execution applied consistently across every product category we trade'
    },
    {
      icon: <Award className="text-brass shrink-0" size={24} />,
      title: 'Leadership with Real Track Record',
      desc: 'Founded and led by supply chain professionals with senior roles at IKEA Group, BrandLoyalty, and Jebsen & Co. — names that speak for themselves in international trade'
    }
  ];

  return (
    <section id="why-toffees" className="py-20 bg-alabaster">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="text-[10px] font-bold tracking-widest opacity-60 text-midnight uppercase mb-4">
              WHY WORK WITH US
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase leading-tight text-midnight">
              The Trusted Intermediary for Cross-Border Trades
            </h2>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-start gap-4 border-t border-midnight/10 pt-6">
                <div className="w-12 h-12 bg-midnight rounded-full flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-[12px] font-bold tracking-widest uppercase text-midnight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-midnight/70 leading-relaxed text-[12px]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
