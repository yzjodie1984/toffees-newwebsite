import { motion } from 'motion/react';

export default function Ticker() {
  const items = [
    'CFM56-7B', 'CFM56-5B', 'Trent 700', 'GE90-115B', 
    'CF6-80C2', 'V2500-A5', 'B737-700/800/900', 
    'A320/A321ceo', 'A330-200/300', 'B777-200ER'
  ];

  return (
    <div className="h-12 bg-brass text-midnight flex items-center overflow-hidden relative">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
        className="flex whitespace-nowrap min-w-max gap-12 px-10 text-[10px] font-bold uppercase tracking-[0.2em] items-center"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>{item}</span>
            <span className="opacity-50">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
