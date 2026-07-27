import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 glassmorphism shadow-premium border-b border-slate-100/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F4C81] text-white shadow-[#0F4C81]/20 transition-transform duration-300 group-hover:rotate-12">
              <Compass className="w-5.5 h-5.5 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-slate-900">
                HORIZON
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold leading-none">
                International
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0F4C81] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#admissions">
              <Button variant="outline" size="sm">
                Inquire
              </Button>
            </a>
            <a href="#admissions">
              <Button variant="primary" size="sm">
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism shadow-xl border-b border-slate-150 p-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#0F4C81] transition-colors py-2 border-b border-slate-100/50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a href="#admissions" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Inquire
              </Button>
            </a>
            <a href="#admissions" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
