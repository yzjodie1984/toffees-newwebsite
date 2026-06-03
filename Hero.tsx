import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-midnight overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80"
          alt="Wide-body aircraft on tarmac"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-midnight/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/60 to-midnight"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 flex flex-col items-start gap-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brass text-[11px] font-bold tracking-[0.3em] uppercase"
        >
          HONG KONG · INTERNATIONAL ASSET TRADING · EST. 2024
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-light text-5xl md:text-6xl text-white max-w-4xl leading-[1.1]"
        >
          Backed by a Decade of Logistics.<br className="hidden md:block" /> Built for Global Trade
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[13px] md:text-[15px] text-alabaster/80 max-w-2xl leading-relaxed"
        >
          Toffees Technology Co., Ltd. is an international trading company affiliated with DonherBy — a freight forwarding and logistics organisation with over a decade of cross-border operational experience. We operate as buyers, sellers, and intermediaries across commercial aviation assets, industrial machinery, and furniture — connecting markets across Europe, the Americas, Asia, the Middle East, and Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <a
            href="#what-we-trade"
            className="flex items-center justify-center gap-2 bg-brass text-midnight px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-brass-hover transition-colors"
          >
            What We Trade
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center border border-alabaster/30 px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:border-brass text-alabaster transition-colors"
          >
            Submit an Enquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
