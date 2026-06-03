import { motion, useScroll, useTransform } from 'motion/react';
import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 47, 53, 0)', 'rgba(10, 47, 53, 0.95)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(10px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(212, 175, 55, 0)', '1px solid rgba(212, 175, 55, 0.2)']
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-brass">
            <span className="text-brass font-bold text-xl">T</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold tracking-tight text-lg text-white">TOFFEES</span>
            <span className="text-[10px] tracking-[0.2em] text-white/80 uppercase mt-1">Technology Co., Ltd.</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-semibold text-alabaster/70">
          <a href="#about" className="hover:text-brass transition-colors">About</a>
          <a href="#what-we-trade" className="hover:text-brass transition-colors">What We Trade</a>
          <a href="#why-toffees" className="hover:text-brass transition-colors">Why Toffees</a>
          <a href="#contact" className="hover:text-brass transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="border border-brass px-6 py-2 text-[11px] uppercase tracking-[0.1em] text-brass hover:bg-brass hover:text-midnight transition-colors font-bold"
          >
            Submit an Enquiry
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-midnight border-t border-brass/20 p-6 flex flex-col gap-4 text-alabaster">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#what-we-trade" onClick={() => setIsOpen(false)}>What We Trade</a>
          <a href="#why-toffees" onClick={() => setIsOpen(false)}>Why Toffees</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-3 border border-brass text-brass text-center font-medium"
          >
            Submit an Enquiry
          </a>
        </div>
      )}
    </motion.nav>
  );
}
