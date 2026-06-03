import { Plane } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-10">
          <div className="bg-midnight p-10 border border-brass/20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl uppercase font-bold mb-4">
                Ready to Source or Sell?
              </h2>
              <p className="text-alabaster/70 text-[13px] leading-relaxed mb-10 max-w-md">
                Whether you have an asset to offer or a requirement to fill — across any of our trading verticals and in any market — our team responds within 24 hours.
              </p>

              <div className="space-y-4 pt-10 border-t border-white/10">
                <div className="text-[12px] font-bold tracking-widest uppercase text-brass">
                  Toffees Technology Co., Ltd.
                </div>
                <div className="text-alabaster/60 text-[11px] uppercase tracking-wide space-y-2">
                  <p>Room A27, 24/F, Hoi To Building, 706 Prince Edward Rd E</p>
                  <p>San Po Kong, Kowloon, Hong Kong</p>
                  <p className="lowercase pt-2">xiaocai@toffees.com.cn</p>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-4 text-[11px] tracking-wide" name="enquiry" data-netlify="true">
              <input type="hidden" name="form-name" value="enquiry" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="FULL NAME" 
                  className="bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:border-brass transition-colors uppercase"
                />
                <input 
                  type="text" 
                  name="company"
                  placeholder="COMPANY" 
                  className="bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:border-brass transition-colors uppercase"
                />
              </div>
              
              <input 
                type="email" 
                name="email"
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:border-brass transition-colors uppercase"
              />

              <select name="enquiryType" defaultValue="" className="bg-white/5 border border-white/10 p-3 text-white/40 focus:text-white focus:outline-none focus:border-brass transition-colors appearance-none uppercase">
                <option value="" disabled>ENQUIRY TYPE</option>
                <option value="selling" className="text-midnight">SELLING AN ASSET</option>
                <option value="sourcing" className="text-midnight">SOURCING AN ASSET</option>
                <option value="general" className="text-midnight">GENERAL ENQUIRY</option>
              </select>

              <textarea 
                name="message"
                placeholder="ASSET DESCRIPTION & DETAILS" 
                rows={4}
                className="bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:border-brass transition-colors resize-none uppercase"
              ></textarea>

              <button 
                type="submit" 
                className="bg-brass text-midnight font-bold uppercase tracking-widest text-[12px] py-4 px-8 hover:bg-brass-hover transition-colors mt-2 self-start"
              >
                Send Enquiry
              </button>
            </form>

          </div>
        </div>
      </section>

      <footer className="w-full flex flex-col">
        <div className="py-12 bg-alabaster px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 border-t border-midnight/10 text-midnight">
          
          {/* Left: Toffees wordmark + tagline */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border-2 border-midnight">
                <span className="text-midnight font-bold">T</span>
              </div>
              <span className="font-bold tracking-tight text-lg text-midnight">TOFFEES TECHNOLOGY CO., LIMITED</span>
            </div>
            <div className="text-[11px] md:text-[12px] font-medium opacity-80 leading-relaxed max-w-sm">
              International Aviation Asset Trading · Engines · Aircraft · Components
            </div>
          </div>

          {/* Right: Legal */}
          <div className="flex flex-col gap-2 w-full lg:w-1/2 lg:text-right">
            <div className="text-[10px] uppercase tracking-wider opacity-60">
              © 2025–2026 Toffees Technology Co., Limited.<br className="hidden lg:block"/> All rights reserved.
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 mt-1">
              Company Profile available upon request.
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="bg-midnight text-brass text-[10px] md:text-[11px] tracking-[0.15em] uppercase py-4 flex justify-center text-center px-4 font-bold">
          <span>
            Toffees Technology Co., Limited — An Affiliate of <a href="https://donherby.com" target="_blank" rel="noopener noreferrer" className="text-brass hover:underline underline-offset-4 transition-all">DonHerBy</a>
          </span>
        </div>
      </footer>
    </>
  );
}
