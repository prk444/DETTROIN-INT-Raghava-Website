import React from 'react';
import { Compass, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0f4c81] text-white">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight tracking-tight text-white">
                  HORIZON
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold leading-none">
                  International
                </span>
              </div>
            </a>
            <p className="text-sm font-light leading-relaxed text-slate-400">
              Nurturing global citizens through academic excellence, character building, and creative innovation.
            </p>
          </div>

          {/* Quick Academic & Admission Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Admissions & Portals
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Apply Online
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Curriculum Overview
                </a>
              </li>
              <li>
                <a href="#tuition" className="hover:text-white transition-colors">
                  Tuition & Fees
                </a>
              </li>
              <li>
                <a href="#portal" className="hover:text-white transition-colors text-[#F4B400] font-medium">
                  Parent Portal Login →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0F4C81] mt-0.5 flex-shrink-0" />
                <span>100 Academy Boulevard, Education District, TX 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0F4C81] flex-shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0F4C81] flex-shrink-0" />
                <span>admissions@horizon.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Stay Connected
            </h4>
            <p className="text-sm font-light text-slate-400">
              Subscribe to the Horizon Newsletter for admissions deadlines, news, and events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm border border-slate-700/50 focus:outline-none focus:border-[#0F4C81] transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 w-9 h-9 rounded-lg bg-[#0F4C81] text-white flex items-center justify-center hover:bg-[#0c3e6a] transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-800 pt-8 mt-8 text-xs font-light text-slate-500">
          <p>© {new Date().getFullYear()} Horizon International School. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Use</a>
            <a href="#sitemap" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
