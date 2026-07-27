import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, Shield, Award, Users, BookOpen, ChevronDown, GraduationCap, Trophy } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/cards/ProgramCard';
import StatCard from '../components/cards/StatCard';
import { SCHOOL_STATS, ACADEMIC_PROGRAMS, TESTIMONIALS, FAQS } from '../constants';
import campusImg from '../assets/campus.jpg';
import studentsImg from '../assets/students.jpg';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-36 pb-28 md:pt-44 md:pb-36 lg:pt-48 lg:pb-44 overflow-hidden bg-gradient-to-br from-[#f0f6fc] via-[#e7eff8] to-[#d5e4f4] text-slate-900">
        
        {/* Glowing Blurred Background Blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0F4C81]/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#F4B400]/8 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F4C8105_1px,transparent_1px),linear-gradient(to_bottom,#0F4C8105_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 animate-fade-in-up">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Premium Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F4C81]/8 border border-[#0F4C81]/15 text-xs font-semibold text-[#0F4C81] mb-8 tracking-wider uppercase backdrop-blur-xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C81] animate-ping" />
                Welcome to Excellence
              </div>

              {/* Outstanding Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 font-heading text-slate-900">
                Reimagining <br />
                <span className="text-[#0F4C81] relative">Education</span> for a <br />
                Global Era.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mb-12">
                Excellence International School combines world-class academic curriculums, elite technology integration, and exceptional arts and athletics to cultivate future-ready leaders.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4.5">
                <a href="#admissions">
                  <Button variant="primary" size="lg" className="px-8 shadow-premium-soft font-bold">
                    Apply Now
                  </Button>
                </a>
                <a href="#gallery">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/40 text-slate-700 border-slate-200 hover:bg-white hover:text-[#0F4C81] hover:border-slate-350 px-8"
                    icon={Compass}
                  >
                    Explore Campus
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column (High-quality student image with floating decorations & blobs) */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
              
              {/* Glowing decorative gradient circle background */}
              <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] bg-gradient-to-br from-[#0F4C81] to-[#F4B400] rounded-full opacity-10 blur-2xl -z-10" />

              {/* Backdrop organic blob */}
              <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-[#0F4C81]/5 border border-[#0F4C81]/10 rounded-[60px] rotate-6 -z-10 animate-float-reverse" />
              
              {/* High-quality Main Student Image */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 transition-transform duration-700 hover:scale-102">
                <img
                  src={studentsImg}
                  alt="Excellence International School Students"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Floating Decorative Element 1: Books (Left Mid) */}
              <div className="absolute -left-10 top-1/3 p-4 rounded-2xl glassmorphism border border-slate-200/50 shadow-xl flex items-center gap-3 animate-float-slow max-w-[170px] select-none text-slate-800">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0F4C81] flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Curriculums</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight">IB & AP Path</p>
                </div>
              </div>

              {/* Floating Decorative Element 2: Graduation Cap (Top Right) */}
              <div className="absolute -right-8 top-12 p-4 rounded-2xl glassmorphism border border-slate-200/50 shadow-xl flex items-center gap-3 animate-float-gentle max-w-[170px] select-none text-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#F4B400]/10 text-[#F4B400] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Placements</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Global Alumni</p>
                </div>
              </div>

              {/* Floating Decorative Element 3: Achievement (Bottom Right) */}
              <div className="absolute -right-10 bottom-20 p-4 rounded-2xl glassmorphism border border-slate-200/50 shadow-xl flex items-center gap-3 animate-float-reverse max-w-[175px] select-none text-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Scholarships</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Elite Honors</p>
                </div>
              </div>
              
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STATS & FACILITIES SECTION */}
      <section id="facilities" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#d5e4f4] to-[#f0f4f8] border-b border-slate-200/30">
        {/* Ambient Glowing Blobs (Emerald Green) */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#16A34A]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHOOL_STATS.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. ACADEMICS SECTION */}
      <section id="academics" className="py-24 relative overflow-hidden bg-[#f0f4f8] border-b border-slate-200/30">
        {/* Ambient Glowing Blobs (Indigo/Purple) */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            badge="Academic Pathways"
            title="Nurturing Brilliance At Every Stage"
            subtitle="Explore our comprehensive curriculum modules, tailored to cultivate independent thinking, innovation, and leadership."
            light={false}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACADEMIC_PROGRAMS.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                ageRange={program.ageRange}
                description={program.description}
                features={program.features}
                tagColor={program.tagColor}
                onClick={() => alert(`Showing details for ${program.title}`)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY EXCELLENCE SECTION (Split Screen Accent Grid) */}
      <section id="about" className="py-24 relative overflow-hidden bg-[#f0f4f8] border-b border-slate-200/30">
        {/* Ambient Glowing Blobs (Rose/Orange) */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Columns */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-premium border border-slate-200 bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=400"
                      alt="Modern classroom lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#0F4C81] text-white p-6 rounded-3xl flex flex-col justify-between aspect-square border border-[#0F4C81]/10 shadow-premium">
                    <BookOpen className="w-8 h-8 text-[#F4B400]" />
                    <div>
                      <p className="text-xl font-bold font-heading">50+</p>
                      <p className="text-xs text-slate-200">Elective programs & STEM projects available.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/70 text-slate-800 p-6 rounded-3xl flex flex-col justify-between aspect-square border border-slate-200/50 shadow-premium-soft">
                    <Users className="w-8 h-8 text-[#0F4C81]" />
                    <div>
                      <p className="text-xl font-bold font-heading text-slate-950">100%</p>
                      <p className="text-xs text-slate-500">English immersion with dual-lingual support.</p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-premium border border-slate-200 bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400"
                      alt="Classroom reading environment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <SectionTitle
                badge="The Excellence Difference"
                title="A Premium Standard of Holistic Education"
                subtitle="We integrate cognitive advancement, technological expertise, and character development into a cohesive framework that prepares pupils for global demands."
                align="left"
                light={false}
                className="mb-8"
              />

              <div className="space-y-6 w-full">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Global Accreditations</h4>
                    <p className="text-sm font-light text-slate-500 leading-relaxed">
                      Fully accredited IB World School and CIS member, certifying international transferability and highest pedagogical compliance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">Exceptional Placement Support</h4>
                    <p className="text-sm font-light text-slate-500 leading-relaxed">
                      Exclusive partnership pathways and full-time college counselors helping graduates secure placements in Ivy League and global top 50 institutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href="#about">
                  <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-55 hover:text-slate-900" icon={ArrowRight}>
                    Learn more about our methodology
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. COMMUNITY GALLERY & TESTIMONIALS */}
      <section id="gallery" className="py-24 relative overflow-hidden bg-[#f0f4f8] border-b border-slate-200/30">
        {/* Ambient Glowing Blobs (Fuchsia/Violet) */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            badge="Parent & Alumni Stories"
            title="Loved by Our Global Community"
            subtitle="Read reports from parents, alumni, and teachers sharing their firsthand experiences with Excellence's pedagogy."
            light={false}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <div 
                key={index}
                className="bg-white/70 border border-slate-200/50 p-8 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium flex flex-col justify-between text-slate-800"
              >
                <div>
                  <p className="text-sm font-light text-slate-600 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#0F4C81]/15"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-400 font-light mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. INTERACTIVE FAQS & CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden bg-[#f0f4f8] border-b border-slate-200/30">
        {/* Ambient Glowing Blobs (Gold/Orange) */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Header Columns */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
              <SectionTitle
                badge="Common Questions"
                title="Frequently Asked Queries"
                subtitle="Have a question about applications, tuition fees, or curricula? Browse quick guidelines or connect with our recruitment desk."
                align="left"
                light={false}
              />
              <div className="mt-8">
                <a href="mailto:info@excellencevalley.org">
                  <Button variant="secondary">
                    Contact Admissions Office
                  </Button>
                </a>
              </div>
            </div>

            {/* Accordion Columns */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200/60 rounded-2xl overflow-hidden bg-white/70 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50/50 transition-colors text-slate-900"
                    >
                      <span className="text-base font-semibold text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#0F4C81]' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Collapsible Content */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-48 border-t border-slate-100' : 'max-h-0'
                      }`}
                    >
                      <p className="p-6 text-sm font-light text-slate-650 leading-relaxed bg-slate-55/30">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. ADMISSIONS CTA BANNER */}
      <section id="admissions" className="py-20 relative overflow-hidden bg-[#f0f4f8]">
        <Container>
          <div className="relative rounded-[40px] bg-white/70 backdrop-blur-md text-slate-900 p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-slate-200/60">
            {/* Visual accent highlights */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0F4C81]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F4C81] mb-4 bg-[#0f4c81]/5 px-3.5 py-1.5 rounded-full border border-[#0f4c81]/10">
                Join our Global Cohort
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-heading">
                Take the Next Step Toward Excellence
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light mb-10 leading-relaxed max-w-2xl">
                Admissions for the upcoming school semester are currently open. Reach out to coordinate testing schedules or apply immediately online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" icon={ArrowRight} className="font-bold shadow-premium-soft">
                  Apply Online Now
                </Button>
                <a href="mailto:info@excellencevalley.org">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-350"
                  >
                    Contact Recruitment Desk
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
