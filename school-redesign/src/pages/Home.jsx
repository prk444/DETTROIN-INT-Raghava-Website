import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, Shield, Award, Users, BookOpen, ChevronDown } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/cards/ProgramCard';
import StatCard from '../components/cards/StatCard';
import { SCHOOL_STATS, ACADEMIC_PROGRAMS, TESTIMONIALS, FAQS } from '../constants';

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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        {/* Abstract Architectural Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0F4C81]/[0.02] rounded-bl-[100px] -z-10" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F4B400]/[0.02] rounded-full blur-3xl -z-10" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Admissions Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7eff8] border border-[#0F4C81]/10 text-xs font-semibold text-[#0F4C81] mb-6 tracking-wide animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-ping" />
                Admissions Now Open for 2026 / 2027
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Shaping the <span className="text-[#0F4C81] relative">Future Leaders</span> of Tomorrow.
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-10">
                Horizon International School provides an elite, forward-thinking academic environment combining international curricula with tech-integrated learning and global citizenship.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#admissions">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Apply Online
                  </Button>
                </a>
                <a href="#about">
                  <Button variant="outline" size="lg" icon={Calendar} iconPosition="left">
                    Book Campus Tour
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Graphic/Mockup Column (Apple/Stripe Style Overlay Grid) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              {/* Main Image Wrapper */}
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                  alt="Horizon International School Campus"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Overlay Glass Card 1 - Admissions Metric */}
              <div className="absolute -left-8 bottom-24 p-5 rounded-2xl glassmorphism border border-white/40 shadow-premium max-w-[200px] flex items-center gap-3.5 hover:scale-102 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Accreditation</p>
                  <p className="text-sm font-bold text-slate-800 leading-tight">CIS & IB World</p>
                </div>
              </div>

              {/* Overlay Glass Card 2 - Award Notice */}
              <div className="absolute -right-6 top-16 p-5 rounded-2xl glassmorphism border border-white/40 shadow-premium max-w-[210px] flex items-center gap-3.5 hover:scale-102 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#F4B400]/10 text-[#F4B400] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Rankings</p>
                  <p className="text-sm font-bold text-slate-800 leading-tight">#1 STEAM School</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 bg-white border-y border-slate-100">
        <Container>
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
      <section id="academics" className="py-24 bg-slate-50">
        <Container>
          <SectionTitle
            badge="Academic Pathways"
            title="Nurturing Brilliance At Every Stage"
            subtitle="Explore our comprehensive curriculum modules, tailored to cultivate independent thinking, innovation, and leadership."
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

      {/* 4. WHY HORIZON SECTION (Split Screen Accent Grid) */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Columns */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-premium border border-slate-100 bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=400"
                      alt="Modern classroom lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#0F4C81] text-white p-6 rounded-3xl flex flex-col justify-between aspect-square">
                    <BookOpen className="w-8 h-8 text-[#F4B400]" />
                    <div>
                      <p className="text-xl font-bold font-heading">50+</p>
                      <p className="text-xs text-slate-200">Elective programs & STEM projects available.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-[#e7eff8] text-[#0F4C81] p-6 rounded-3xl flex flex-col justify-between aspect-square">
                    <Users className="w-8 h-8" />
                    <div>
                      <p className="text-xl font-bold font-heading">100%</p>
                      <p className="text-xs text-slate-600">English immersion with dual-lingual support.</p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-premium border border-slate-100 bg-slate-100">
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
                badge="The Horizon Difference"
                title="A Premium Standard of Holistic Education"
                subtitle="We integrate cognitive advancement, technological expertise, and character development into a cohesive framework that prepares pupils for global demands."
                align="left"
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
                  <Button variant="outline" icon={ArrowRight}>
                    Learn more about our methodology
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="student-life" className="py-24 bg-slate-50">
        <Container>
          <SectionTitle
            badge="Parent & Alumni Stories"
            title="Loved by Our Global Community"
            subtitle="Read reports from parents, alumni, and teachers sharing their firsthand experiences with Horizon's pedagogy."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-100/50 p-8 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-light text-slate-600 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
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

      {/* 6. INTERACTIVE FAQS SECTION */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Header Columns */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
              <SectionTitle
                badge="Common Questions"
                title="Frequently Asked Queries"
                subtitle="Have a question about applications, tuition fees, or curricula? Browse quick guidelines or connect with our recruitment desk."
                align="left"
              />
              <div className="mt-8">
                <a href="mailto:admissions@horizon.edu">
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
                    className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-base font-semibold text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
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
                      <p className="p-6 text-sm font-light text-slate-600 leading-relaxed bg-white">
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
      <section id="admissions" className="py-20 bg-slate-50 relative overflow-hidden">
        <Container>
          <div className="relative rounded-[40px] bg-gradient-to-br from-[#0F4C81] to-[#082a47] text-white p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-[#0F4C81]/20">
            {/* Visual accent highlights */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0f4c81]/40 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4B400] mb-4 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Join our Global Cohort
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Take the Next Step Toward Excellence
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-light mb-10 leading-relaxed max-w-2xl">
                Admissions for the upcoming school semester are currently open. Reach out to coordinate testing schedules or apply immediately online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Apply Online Now
                </Button>
                <a href="mailto:admissions@horizon.edu">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white hover:text-[#0F4C81] hover:border-white"
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
