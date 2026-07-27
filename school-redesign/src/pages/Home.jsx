import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, Shield, Award, Users, BookOpen, ChevronDown, GraduationCap, Trophy, Target, Eye, Sparkles, Tv, Laptop, Globe, Activity, Lightbulb, FlaskConical, Monitor, Music, Bus, HeartPulse, Waves } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProgramCard from '../components/cards/ProgramCard';
import StatCard from '../components/cards/StatCard';
import { SCHOOL_STATS, ACADEMIC_PROGRAMS, TESTIMONIALS, FAQS } from '../constants';
import campusImg from '../assets/campus.jpg';
import studentsImg from '../assets/students.jpg';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import missionVisionImg from '../assets/mission_vision.png';
import classroomKidsImg from '../assets/classroom_kids.png';
import kidsLunchImg from '../assets/kids_lunch.png';
import teacherFeedingImg from '../assets/teacher_feeding.png';

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
      <section id="home" className="relative pt-36 pb-28 md:pt-44 md:pb-36 lg:pt-48 lg:pb-44 overflow-hidden bg-gradient-to-br from-[#F5F2EB] via-[#FAF6EE] to-[#EBE6DC] text-[#2E2A24]">
        
        {/* Glowing Blurred Background Blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0F4C81]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#F4B400]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F4C8103_1px,transparent_1px),linear-gradient(to_bottom,#0F4C8103_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 animate-fade-in-up">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Premium Welcome Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F4C81]/8 border border-[#0F4C81]/15 text-xs font-semibold text-[#0F4C81] mb-8 tracking-wider uppercase backdrop-blur-xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C81] animate-ping" />
                Best School in Aligarh, UP
              </div>

              {/* Outstanding Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 font-heading text-[#2E2A24]">
                Shaping Future <br />
                <span className="text-[#0F4C81] relative">Leaders</span> Through <br />
                Quality Education.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-[#2E2A24]/70 font-light leading-relaxed max-w-2xl mb-12">
                Excellence International School is one of the best schools in Aligarh, Uttar Pradesh, known for quality learning, discipline, and holistic character development.
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
                  <p className="text-xs font-bold text-slate-855 leading-tight">IB & AP Path</p>
                </div>
              </div>

              {/* Floating Decorative Element 2: Graduation Cap (Top Right) */}
              <div className="absolute -right-8 top-12 p-4 rounded-2xl glassmorphism border border-slate-200/50 shadow-xl flex items-center gap-3 animate-float-gentle max-w-[170px] select-none text-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#F4B400]/10 text-[#F4B400] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Placements</p>
                  <p className="text-xs font-bold text-slate-855 leading-tight">Global Alumni</p>
                </div>
              </div>

              {/* Floating Decorative Element 3: Achievement (Bottom Right) */}
              <div className="absolute -right-10 bottom-20 p-4 rounded-2xl glassmorphism border border-slate-200/50 shadow-xl flex items-center gap-3 animate-float-reverse max-w-[175px] select-none text-slate-800">
                <div className="w-9 h-9 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Scholarships</p>
                  <p className="text-xs font-bold text-slate-855 leading-tight">Elite Honors</p>
                </div>
              </div>
              
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FACILITIES SECTION */}
      <section id="facilities" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#EBE6DC] to-[#F5F2EB] border-b border-[#E8E2D5]/30">
        {/* Glowing Blobs */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#0F4C81]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10">
          <SectionTitle
            badge="Our Facilities"
            title="Premium Infrastructure for Modern Learning"
            subtitle="Explore the high-end amenities that support our comprehensive curriculum and student life in Aligarh."
            light={false}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Facility 1: Library */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <BookOpen className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Central Library</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                Over 10,000 titles, digital journals, and private study pods for academic enquiry.
              </p>
            </div>

            {/* Facility 2: Science Labs */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <FlaskConical className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Science Labs</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                Advanced chemistry, physics, and biology workspaces equipped for practical exploration.
              </p>
            </div>

            {/* Facility 3: Sports Arena */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Trophy className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Sports Arena</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                Multi-sport courts, football turf, and training pitches under expert coaches.
              </p>
            </div>

            {/* Facility 4: Computer Labs */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Monitor className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Computer Labs</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                Modern desktops loaded with coding environments and creative editing software.
              </p>
            </div>

            {/* Facility 5: Music & Arts Studio */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Music className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Music & Arts</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                Acoustic rehearsal rooms, visual art displays, and recording mixers.
              </p>
            </div>

            {/* Facility 6: Smart Transport */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Bus className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Smart Transport</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                GPS-enabled bus routes covering Aligarh with real-time student location tracking.
              </p>
            </div>

            {/* Facility 7: Medical Care */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <HeartPulse className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Medical Care</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                An on-campus clinic with full-time registered nurses and periodic check-ups.
              </p>
            </div>

            {/* Facility 8: Swimming Pool */}
            <div className="group relative p-6 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Waves className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-base font-bold text-[#2E2A24] mb-2 font-heading">Swimming Pool</h4>
              <p className="text-xs font-light text-[#2E2A24]/75 leading-relaxed">
                An indoor, temperature-controlled half-Olympic pool with life coaches on stand-by.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. ACADEMICS SECTION */}
      <section id="academics" className="py-24 relative overflow-hidden bg-[#F5F2EB] border-b border-[#E8E2D5]/30">
        {/* Ambient Glowing Blobs (Indigo/Purple) */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            badge="Academic Stages"
            title="Structured for Success at Every Phase"
            subtitle="Our educational framework in Aligarh supports students through age-appropriate learning methodologies."
            light={false}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACADEMIC_PROGRAMS.map((program) => {
              let progImg = classroomKidsImg;
              if (program.id === 'primary-school') progImg = kidsLunchImg;
              if (program.id === 'middle-school') progImg = studentsImg;

              return (
                <ProgramCard
                  key={program.id}
                  image={progImg}
                  title={program.title}
                  ageRange={program.ageRange}
                  description={program.description}
                  tagColor={program.tagColor}
                  onClick={() => alert(`Showing details for ${program.title}`)}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. ABOUT EXCELLENCE SECTION */}
      <section id="about" className="py-28 relative overflow-hidden bg-[#F5F2EB] border-b border-[#E8E2D5]/30">
        {/* Ambient Glowing Blobs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0F4C81]/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
            
            {/* Left Column: High-quality Mission/Vision Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#FCFAF2] group">
                <img
                  src={missionVisionImg}
                  alt="Excellence International School Mission & Vision"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                />
                {/* UP Location Overlay Tag */}
                <div className="absolute bottom-6 left-6 p-4 rounded-xl glassmorphism shadow-lg text-slate-800">
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-[#0F4C81] leading-none">Aligarh, UP</p>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Mission, Vision, Philosophy */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <SectionTitle
                badge="About Excellence"
                title="Shaping Future Leaders Through Quality Education"
                align="left"
                light={false}
                className="mb-10"
              />

              {/* Visually Appealing Blocks */}
              <div className="space-y-8 w-full">
                
                {/* Mission Block */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center flex-shrink-0 border border-[#E8E2D5]/70 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                    <Target className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2E2A24] mb-1.5 font-heading">Our Mission</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#2E2A24]/80 leading-relaxed list-disc list-inside">
                      <li>High-quality education</li>
                      <li>Curiosity & creativity</li>
                      <li>Strong academic foundation</li>
                      <li>Discipline & ethical values</li>
                      <li>Future-ready opportunities</li>
                    </ul>
                  </div>
                </div>

                {/* Vision Block */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center flex-shrink-0 border border-[#E8E2D5]/70 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                    <Eye className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2E2A24] mb-1.5 font-heading">Our Vision</h4>
                    <p className="text-sm font-light text-[#2E2A24]/75 leading-relaxed">
                      To create confident, responsible, and innovative individuals who contribute positively to society.
                    </p>
                  </div>
                </div>

                {/* Balanced Education Block */}
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center flex-shrink-0 border border-[#E8E2D5]/70 transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white">
                    <Sparkles className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#2E2A24] mb-1.5 font-heading">Balanced Education</h4>
                    <p className="text-sm font-light text-[#2E2A24]/75 leading-relaxed">
                      Providing modern learning with a balanced approach to academics, co-curricular activities, and character development.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Animated Statistics Cards Grid */}
          <div className="border-t border-slate-200/40 pt-16 mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 1: 20+ Years */}
              <div className="flex flex-col items-center text-center p-6 bg-white/60 border border-slate-200/50 rounded-3xl shadow-premium-soft transition-all-premium hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0F4C81] flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] tracking-tight mb-1 font-heading">
                  <AnimatedCounter target="20+" />
                </span>
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                  Years Established
                </span>
                <span className="text-[11px] font-light text-slate-400">
                  A legacy of excellence
                </span>
              </div>

              {/* Stat 2: 5000+ Students */}
              <div className="flex flex-col items-center text-center p-6 bg-white/60 border border-slate-200/50 rounded-3xl shadow-premium-soft transition-all-premium hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4B400]/10 text-[#F4B400] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] tracking-tight mb-1 font-heading">
                  <AnimatedCounter target="5000+" />
                </span>
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                  Students Enrolled
                </span>
                <span className="text-[11px] font-light text-slate-400">
                  Diverse global alumni
                </span>
              </div>

              {/* Stat 3: 200+ Teachers */}
              <div className="flex flex-col items-center text-center p-6 bg-white/60 border border-slate-200/50 rounded-3xl shadow-premium-soft transition-all-premium hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] tracking-tight mb-1 font-heading">
                  <AnimatedCounter target="200+" />
                </span>
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                  Expert Educators
                </span>
                <span className="text-[11px] font-light text-slate-400">
                  Dedicated specialist coaches
                </span>
              </div>

              {/* Stat 4: 98% Success Rate */}
              <div className="flex flex-col items-center text-center p-6 bg-white/60 border border-slate-200/50 rounded-3xl shadow-premium-soft transition-all-premium hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F4C81] tracking-tight mb-1 font-heading">
                  <AnimatedCounter target="98%" />
                </span>
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">
                  Success Rate
                </span>
                <span className="text-[11px] font-light text-slate-400">
                  University admissions
                </span>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 4.5 WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#F5F2EB] border-b border-[#E8E2D5]/30">
        {/* Soft Decorative Blobs */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#0F4C81]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            badge="Why Choose Us"
            title="A Premium Environment for Holistic Growth"
            subtitle="Discover the pillars of excellence that distinguish our institution as the top school in Aligarh."
            light={false}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Smart Classrooms */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Tv className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Smart Classrooms</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                Equipped with interactive screens, high-end multimedia units, and customized acoustics for an immersive audio-visual learning experience.
              </p>
            </div>

            {/* Card 2: Digital Learning */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Laptop className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Digital Learning</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                Synthesis of programming, virtual classroom resources, and tablet integration to build vital technological literacy early.
              </p>
            </div>

            {/* Card 3: Experienced Faculty */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <GraduationCap className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Experienced Faculty</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                Guided by expert subject specialists who nurture student curiosity, support personal growth, and instill core moral discipline.
              </p>
            </div>

            {/* Card 4: Global Curriculum */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Globe className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Global Curriculum</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                An outstanding structured curriculum combining academic basics with global methodologies to prepare students for real-world scenarios.
              </p>
            </div>

            {/* Card 5: Sports & Athletics */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Activity className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Sports & Athletics</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                Dedicated training grounds and professional instructors emphasizing physical health, collaborative teamwork, and sportsmanship.
              </p>
            </div>

            {/* Card 6: Innovation Labs */}
            <div className="group relative p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-[#0F4C81]/5 text-[#0F4C81] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0F4C81] group-hover:text-white">
                <Lightbulb className="w-6 h-6 stroke-[2]" />
              </div>
              <h4 className="text-lg font-bold text-[#2E2A24] mb-3 font-heading">Innovation Labs</h4>
              <p className="text-xs sm:text-sm font-light text-[#2E2A24]/70 leading-relaxed">
                Hands-on practical labs, robotics kits, and STEM challenges to inspire innovative problem-solving and critical enquiry.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. COMMUNITY GALLERY & TESTIMONIALS */}
      <section id="gallery" className="py-24 relative overflow-hidden bg-[#F5F2EB] border-b border-[#E8E2D5]/30">
        {/* Ambient Glowing Blobs */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            badge="School Gallery"
            title="A Visual Showcase of Student Life"
            subtitle="Explore our vibrant campus and classrooms in a portfolio representation of our global community."
            light={false}
            className="mb-16"
          />

          {/* Pinterest Masonry Image Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mb-24">
            
            {/* Item 1: Pre-Primary Kids */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src={classroomKidsImg}
                alt="Interactive Pre-Primary classroom"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Pre-Primary</span>
                <h5 className="text-base font-bold font-heading">Joyful Interactive Learning</h5>
              </div>
            </div>

            {/* Item 2: Central Facade */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src={campusImg}
                alt="Modern School Campus Facade"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Campus</span>
                <h5 className="text-base font-bold font-heading">State-of-the-Art Architecture</h5>
              </div>
            </div>

            {/* Item 3: Library (Unsplash) */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=400&h=550"
                alt="Central Library study pods"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Library</span>
                <h5 className="text-base font-bold font-heading">Focused Private Study Pods</h5>
              </div>
            </div>

            {/* Item 4: Kids eating lunch */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src={kidsLunchImg}
                alt="Social interaction lunch tables"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Social Habits</span>
                <h5 className="text-base font-bold font-heading">Healthy Lunchroom Habits</h5>
              </div>
            </div>

            {/* Item 5: High school students */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src={studentsImg}
                alt="Excellence International Students"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Students</span>
                <h5 className="text-base font-bold font-heading">Cultivating Future-Ready Leaders</h5>
              </div>
            </div>

            {/* Item 6: Coding Lab (Unsplash) */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=400&h=300"
                alt="Technology Integration lab"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Technology</span>
                <h5 className="text-base font-bold font-heading">STEM & Coding Curriculum</h5>
              </div>
            </div>

            {/* Item 7: Teacher feeding student */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src={teacherFeedingImg}
                alt="Personal attention by teacher"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Encouragement</span>
                <h5 className="text-base font-bold font-heading">Empathetic Personal Attention</h5>
              </div>
            </div>

            {/* Item 8: Art Studio (Unsplash) */}
            <div className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 group relative bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Visual arts studio painting"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F4C81]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4B400] font-semibold mb-1">Creative Arts</span>
                <h5 className="text-base font-bold font-heading">Studio Painting & Rehearsals</h5>
              </div>
            </div>

          </div>

          {/* Testimonials Header and Cards */}
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
                className="bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 p-8 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium flex flex-col justify-between text-[#2E2A24]"
              >
                <div>
                  <p className="text-sm font-light text-[#2E2A24]/80 italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-[#E8E2D5]/40 pt-6">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#0F4C81]/15"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2E2A24] leading-tight">
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
      <section id="contact" className="py-24 relative overflow-hidden bg-[#F5F2EB] border-b border-[#E8E2D5]/30">
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
                    className="border border-[#E8E2D5]/60 rounded-2xl overflow-hidden bg-[#FCFAF2]/80 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50/50 transition-colors text-[#2E2A24]"
                    >
                      <span className="text-base font-semibold text-[#2E2A24] pr-4">
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
                        isOpen ? 'max-h-48 border-t border-[#E8E2D5]/40' : 'max-h-0'
                      }`}
                    >
                      <p className="p-6 text-sm font-light text-[#2E2A24]/85 leading-relaxed bg-[#F5F2EB]/30">
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
      <section id="admissions" className="py-20 relative overflow-hidden bg-[#F5F2EB]">
        <Container>
          <div className="relative rounded-[40px] bg-[#FCFAF2]/80 backdrop-blur-md text-[#2E2A24] p-12 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-[#E8E2D5]/70">
            {/* Visual accent highlights */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0F4C81]/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F4C81] mb-4 bg-[#0f4c81]/5 px-3.5 py-1.5 rounded-full border border-[#0f4c81]/10">
                Join our Global Cohort
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2E2A24] mb-6 font-heading">
                Take the Next Step Toward Excellence
              </h2>
              <p className="text-base sm:text-lg text-[#2E2A24]/70 font-light mb-10 leading-relaxed max-w-2xl">
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
                    className="bg-transparent text-slate-700 border-[#E8E2D5] hover:bg-slate-50 hover:text-slate-900 hover:border-slate-350"
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
