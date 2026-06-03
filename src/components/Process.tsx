export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Source',
      desc: 'Qualify assets through our network of airlines, lessors, MROs, and trading partners across Asia, Middle East, and Africa.'
    },
    {
      num: '02',
      title: 'Evaluate',
      desc: 'Commercial and technical assessment, pricing benchmarking, documentation review (NDAs / NCNDAs as applicable).'
    },
    {
      num: '03',
      title: 'Facilitate',
      desc: 'Contract negotiation, LOI and purchase agreement support, bank documentation, regulatory compliance.'
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Logistics, customs clearance, and final delivery backed by the DonherBy Group\'s freight infrastructure.'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-midnight text-white relative">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="mb-16">
          <div className="text-[10px] uppercase font-bold tracking-widest text-brass opacity-60 mb-2">
            OUR PROCESS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-white leading-tight">
            Deal Sourcing to Delivery — End to End
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[20px] left-5 right-5 h-[1px] bg-brass/40"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start gap-4">
                {/* Number Node */}
                <div className="w-10 h-10 bg-midnight border border-brass flex items-center justify-center font-bold text-lg text-brass z-10">
                  {step.num}
                </div>
                
                <div className="w-full pt-4 border-t border-brass/20 md:border-t-0">
                  <h3 className="font-bold text-[14px] tracking-widest uppercase mb-3">{step.title}</h3>
                  <p className="text-alabaster/70 text-[12px] leading-relaxed">
                    {step.desc}
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
