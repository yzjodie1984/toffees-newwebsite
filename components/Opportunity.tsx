import { motion } from 'motion/react';
import { Anchor, ShieldCheck, Ship, Network, FileKey, Globe2 } from 'lucide-react';

export default function Opportunity() {
  const pillars = [
    {
      icon: <Anchor size={24} />,
      title: "10+ Years Logistics Heritage",
      detail: "Rooted in international freight forwarding — sea, air, rail, and road across Asia, Middle East, Europe, and Africa",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cross-Border Compliance",
      detail: "In-house expertise in customs documentation, import/export regulations, CIQ, and trade compliance across multiple jurisdictions",
    },
    {
      icon: <Ship size={24} />,
      title: "Multi-Modal Freight",
      detail: "We move goods by air charter, sea freight, and road — with full routing, handling, and last-mile coordination",
    },
    {
      icon: <Network size={24} />,
      title: "Supplier & Carrier Network",
      detail: "Built over a decade: airlines, lessors, MROs, manufacturers, 3PLs, and freight forwarders across 4 continents",
    },
    {
      icon: <FileKey size={24} />,
      title: "Aviation-Focused Expertise",
      detail: "Deep familiarity with commercial aviation asset classes, engine families, documentation standards, and the regulatory requirements of cross-border aviation trades",
    },
    {
      icon: <Globe2 size={24} />,
      title: "HK-Registered, Globally Trusted",
      detail: "Incorporated in Hong Kong SAR — a free-trade jurisdiction with transparent legal, banking, and contract enforcement frameworks",
    }
  ];

  return (
    <section id="about" className="pt-20 pb-10 bg-alabaster">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col gap-16">
          
          {/* Text Content */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-bold tracking-widest opacity-60 text-midnight uppercase">OUR FOUNDATION</span>
              <h2 className="text-3xl lg:text-4xl font-bold uppercase text-midnight leading-tight max-w-xl">
                A Decade of Moving the World's Cargo — Now Focused on Aviation Trading
              </h2>
            </div>
            
            <div className="flex-1 space-y-4 text-midnight/80 leading-relaxed text-[13px]">
              <p>
                We are the international trading arm of the DonherBy Group — an organisation with over a decade of operational experience moving high-value goods across borders, managing customs compliance, coordinating multi-modal freight, and building the supplier and carrier relationships that make complex deals close.
              </p>
              <p>
                That foundation is what powers our aviation trading business. Rather than building from scratch, Toffees leverages DonHerBy's established logistics network — its carrier relationships, customs expertise, and freight infrastructure — to source, facilitate, and deliver aviation assets with a level of operational depth that pure brokers cannot match.
              </p>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-midnight border border-brass/20 p-8 flex flex-col gap-4"
              >
                <div className="text-brass bg-brass/10 w-12 h-12 flex items-center justify-center rounded-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-[13px] text-alabaster tracking-widest uppercase mt-2">
                  {pillar.title}
                </h3>
                <p className="text-alabaster/60 text-[11px] uppercase tracking-tight leading-relaxed">
                  {pillar.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Global Infrastructure & Map Section */}
          <div className="pt-16 mt-8 border-t border-midnight/10 flex flex-col gap-8">
            <div className="space-y-1">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase text-midnight leading-tight">
                Our Global Reach
              </h2>
            </div>
            
            <div className="w-full relative aspect-[16/9] md:aspect-[2.5/1] bg-midnight border border-brass/20 overflow-hidden shadow-lg/50">
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Abstract globe graticule over Midnight Teal */}
                <g stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15">
                  <ellipse cx="500" cy="250" rx="450" ry="220" />
                  <path d="M 500 30 C 300 30 150 130 150 250 C 150 370 300 470 500 470 C 700 470 850 370 850 250 C 850 130 700 30 500 30" />
                  <path d="M 500 30 C 400 30 280 130 280 250 C 280 370 400 470 500 470 C 600 470 720 370 720 250 C 720 130 600 30 500 30" />
                  <path d="M 50 250 H 950" />
                  <ellipse cx="500" cy="250" rx="400" ry="110" />
                </g>

                {/* Arcs radiating from HK (500, 230) */}
                <g stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4">
                  {/* Europe */}
                  <path d="M 500 230 Q 380 120 280 160" /> {/* Frankfurt */}
                  <path d="M 500 230 Q 360 100 250 160" /> {/* London */}
                  
                  {/* Americas */}
                  <path d="M 500 230 Q 640 120 800 180" /> {/* NYC */}
                  <path d="M 500 230 Q 600 130 700 200" /> {/* LA */}
                  
                  {/* Middle East */}
                  <path d="M 500 230 Q 400 210 320 240" /> {/* Dubai */}
                  
                  {/* Africa */}
                  <path d="M 500 230 Q 380 230 300 280" /> {/* Addis Ababa */}
                  <path d="M 500 230 Q 380 240 300 300" /> {/* Nairobi */}
                  <path d="M 500 230 Q 340 200 230 290" /> {/* Lagos */}
                  <path d="M 500 230 Q 410 295 280 360" /> {/* Johannesburg */}
                  
                  {/* Asia-Pacific */}
                  <path d="M 500 230 Q 520 215 540 200" /> {/* Shanghai */}
                  <path d="M 500 230 Q 495 225 490 220" /> {/* Shenzhen */}
                  <path d="M 500 230 Q 505 195 510 160" /> {/* Beijing */}
                  <path d="M 500 230 Q 540 205 580 180" /> {/* Tokyo */}
                  <path d="M 500 230 Q 480 260 460 290" /> {/* Singapore */}
                </g>

                {/* Nodes */}
                <g fill="#D4AF37">
                  {/* Hub */}
                  <circle cx="500" cy="230" r="5" filter="url(#glow)" />
                  <circle cx="500" cy="230" r="2.5" fill="#F9F8F6" />
                  
                  {/* Sub Nodes */}
                  <g r="2.5">
                    <circle cx="280" cy="160" r="2.5" /> {/* Frankfurt */}
                    <circle cx="250" cy="160" r="2.5" /> {/* London */}
                    <circle cx="800" cy="180" r="2.5" /> {/* NYC */}
                    <circle cx="700" cy="200" r="2.5" /> {/* LA */}
                    <circle cx="320" cy="240" r="2.5" /> {/* Dubai */}
                    <circle cx="300" cy="280" r="2.5" /> {/* Addis Ababa */}
                    <circle cx="300" cy="300" r="2.5" /> {/* Nairobi */}
                    <circle cx="230" cy="290" r="2.5" /> {/* Lagos */}
                    <circle cx="280" cy="360" r="2.5" /> {/* Johannesburg */}
                    <circle cx="540" cy="200" r="2.5" /> {/* Shanghai */}
                    <circle cx="490" cy="220" r="2.5" /> {/* Shenzhen */}
                    <circle cx="510" cy="160" r="2.5" /> {/* Beijing */}
                    <circle cx="580" cy="180" r="2.5" /> {/* Tokyo */}
                    <circle cx="460" cy="290" r="2.5" /> {/* Singapore */}
                  </g>
                </g>

                {/* Labels */}
                <g fill="#F9F8F6" fontSize="11" fontFamily="Inter" className="tracking-widest opacity-90">
                  <text x="510" y="234" fill="#D4AF37" className="font-bold">HONG KONG</text>
                  
                  {/* Europe */}
                  <text x="290" y="164">FRANKFURT</text>
                  <text x="240" y="164" textAnchor="end">LONDON</text>
                  
                  {/* Americas */}
                  <text x="810" y="184">NEW YORK</text>
                  <text x="710" y="204">LOS ANGELES</text>
                  
                  {/* Middle East */}
                  <text x="310" y="244" textAnchor="end">DUBAI</text>
                  
                  {/* Africa */}
                  <text x="290" y="284" textAnchor="end">ADDIS ABABA</text>
                  <text x="290" y="304" textAnchor="end">NAIROBI</text>
                  <text x="220" y="294" textAnchor="end">LAGOS</text>
                  <text x="270" y="364" textAnchor="end">JOHANNESBURG</text>

                  {/* Asia */}
                  <text x="550" y="204">SHANGHAI</text>
                  <text x="485" y="218" textAnchor="end">SHENZHEN</text>
                  <text x="520" y="164">BEIJING</text>
                  <text x="590" y="184">TOKYO</text>
                  <text x="470" y="294">SINGAPORE</text>
                </g>
              </svg>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
