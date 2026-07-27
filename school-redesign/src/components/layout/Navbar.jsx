import React, { useState, useEffect } from 'react';
import { X, Compass } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Transition padding & backdrop-blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer to track scrolled section
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => link.href.substring(1)).filter(Boolean);

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'py-4 bg-[#F5F2EB]/80 backdrop-blur-md shadow-premium border-b border-[#E8E2D5]/60'
            : 'py-6 bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-2.5 group select-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F4C81] text-white shadow-[#0F4C81]/20 transition-transform duration-500 group-hover:rotate-12">
                <Compass className="w-5.5 h-5.5 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight tracking-tight text-slate-900">
                  EXCELLENCE
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold leading-none">
                  International
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative py-1.5 text-sm font-semibold tracking-wide transition-all duration-350 ${
                      isActive
                        ? 'text-[#0F4C81]'
                        : 'text-slate-600 hover:text-[#0F4C81]'
                    } group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#0F4C81] transition-transform duration-350 ease-out origin-left ${
                        isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-slate-200/80"
                >
                  Inquire
                </Button>
              </a>
              <a href="#admissions">
                <Button
                  variant="primary"
                  size="md"
                  className="shadow-premium-soft font-semibold px-6 transition-all duration-300"
                >
                  Apply Now
                </Button>
              </a>
            </div>

            {/* Modern Hamburger Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center group cursor-pointer focus:outline-none z-50"
              aria-label="Toggle navigation drawer"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ease-out ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ease-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ease-out ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/15 backdrop-blur-xs transition-opacity duration-500 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[320px] bg-[#F5F2EB] border-l border-[#E8E2D5]/60 p-8 shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 pb-6">
          <a href="#" className="flex items-center gap-2 group select-none">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0F4C81] text-white">
              <Compass className="w-4.5 h-4.5" />
            </div>
            <span className="font-heading font-bold text-base text-slate-900 tracking-tight">
              EXCELLENCE
            </span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer focus:outline-none"
          >
            <X className="w-5.5 h-5.5" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-all duration-300 py-1.5 ${
                  isActive
                    ? 'text-[#0F4C81] border-l-4 border-[#0F4C81] pl-4 font-bold'
                    : 'text-slate-650 hover:text-[#0F4C81] hover:pl-2 pl-0'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full py-3 text-slate-700 border border-slate-200">
              Inquire
            </Button>
          </a>
          <a href="#admissions" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full py-3 shadow-premium-soft font-semibold">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
