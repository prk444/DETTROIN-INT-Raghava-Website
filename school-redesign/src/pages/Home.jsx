import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, Compass, Shield, Award, Users, BookOpen, 
  ChevronDown, GraduationCap, Trophy, Target, Eye, Sparkles, Tv, 
  Laptop, Globe, Activity, Lightbulb, FlaskConical, Monitor, Music, 
  Bus, HeartPulse, Waves, Star 
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
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

export default function Home({ isWelcomeActive = false }) {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Advanced Scroll-Driven Parallax and Dynamics
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Parallax mappings
  const textY = useTransform(scrollY, [0, 700], [0, -120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  
  const imageY = useTransform(scrollY, [0, 700], [0, 80]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const imageRotate = useTransform(scrollY, [0, 700], [0, -2.5]);
  
  const bgY1 = useTransform(scrollY, [0, 700], [0, 140]);
  const bgY2 = useTransform(scrollY, [0, 700], [0, -100]);
  
  // Velocity-based interactive rotation for floating elements
  const velocityRotation = useTransform(smoothVelocity, [-1000, 1000], [-8, 8]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Framer Motion Entrance Orchestration Variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 0.8
      }
    }
  };

  const floatingBadgeVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-[#3D4127] bg-[#D4DE95]/30">
      
      {/* 1. HERO SECTION */}
      <section 
        id="home" 
        className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-[#D4DE95]/20 to-[#BAC095]/20 text-[#3D4127] z-10"
      >
        {/* Parallax moving background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            style={{ y: bgY1 }}
            className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-[#636B2F]/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" 
          />
          <motion.div 
            style={{ y: bgY2 }}
            className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#BAC095]/30 rounded-full blur-[120px]" 
          />
          
          {/* Decorative SVG Line Path */}
          <svg className="absolute right-0 top-1/4 w-1/3 opacity-25 text-[#636B2F]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#636b2f0a_1px,transparent_1px),linear-gradient(to_bottom,#636b2f0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <motion.div 
              style={{ y: textY, opacity: textOpacity }}
              variants={heroContainerVariants}
              initial="hidden"
              animate={isWelcomeActive ? "hidden" : "visible"}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              
              {/* Welcome Badge */}
              <motion.div 
                variants={heroItemVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#636B2F]/10 border border-[#636B2F]/20 text-xs font-semibold text-[#636B2F] mb-8 tracking-wider uppercase backdrop-blur-xs select-none shadow-sm cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#636B2F] animate-pulse" />
                Welcome to Excellence
              </motion.div>

              {/* Headline */}
              <motion.h1 
                variants={heroItemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8 font-heading text-[#3D4127]"
              >
                Nurturing Future <br />
                <motion.span 
                  className="text-[#636B2F] inline-block relative"
                  whileHover={{ scale: 1.02 }}
                >
                  Leaders
                </motion.span> Through <br />
                Excellence.
              </motion.h1>

              {/* Supporting Paragraph */}
              <motion.p 
                variants={heroItemVariants}
                className="text-base sm:text-lg md:text-xl text-[#3D4127]/80 font-light leading-relaxed max-w-2xl mb-12"
              >
                We empower students to discover their highest potential, fostering academic brilliance, creative innovation, and strong global values for a brighter tomorrow.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div 
                variants={heroItemVariants}
                className="flex flex-wrap gap-4.5"
              >
                <motion.a href="#admissions" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="primary" size="lg" className="px-8 shadow-md transition-all duration-300">
                    Apply Now
                  </Button>
                </motion.a>
                <motion.a href="#gallery" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-[#D4DE95]/40 text-[#3D4127] border-[#BAC095] hover:bg-white hover:text-[#636B2F] hover:border-[#636B2F] transition-all duration-300 px-8"
                    icon={Compass}
                  >
                    Explore Campus
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
              initial="hidden"
              animate={isWelcomeActive ? "hidden" : "visible"}
              variants={heroContainerVariants}
              className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center"
            >
              
              {/* Dynamic Floating Badge 1 */}
              <motion.div 
                variants={floatingBadgeVariants}
                style={{ rotate: velocityRotation }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                className="absolute -left-12 top-1/4 p-4 rounded-2xl bg-white/80 border border-[#BAC095] shadow-xl flex items-center gap-3 select-none text-[#3D4127] z-20 cursor-pointer backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <BookOpen className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#636B2F] font-medium">Curriculums</p>
                  <p className="text-xs font-bold leading-tight text-[#3D4127]">IB & AP Path</p>
                </div>
              </motion.div>

              {/* Dynamic Floating Badge 2 */}
              <motion.div 
                variants={floatingBadgeVariants}
                style={{ rotate: velocityRotation }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                className="absolute -right-8 top-10 p-4 rounded-2xl bg-white/80 border border-[#BAC095] shadow-xl flex items-center gap-3 select-none text-[#3D4127] z-20 cursor-pointer backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#636B2F]/15 text-[#636B2F] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <GraduationCap className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#636B2F] font-medium">Placements</p>
                  <p className="text-xs font-bold leading-tight text-[#3D4127]">Global Alumni</p>
                </div>
              </motion.div>

              {/* Dynamic Floating Badge 3 */}
              <motion.div 
                variants={floatingBadgeVariants}
                style={{ rotate: velocityRotation }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                className="absolute -right-10 bottom-16 p-4 rounded-2xl bg-white/80 border border-[#BAC095] shadow-xl flex items-center gap-3 select-none text-[#3D4127] z-20 cursor-pointer backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-xl bg-[#3D4127] text-[#D4DE95] flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Trophy className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-[#636B2F] font-medium">Scholarships</p>
                  <p className="text-xs font-bold leading-tight text-[#3D4127]">Elite Honors</p>
                </div>
              </motion.div>

              {/* Dynamic Sparkles */}
              <motion.div 
                variants={floatingBadgeVariants}
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/3 -top-10 text-[#636B2F] flex gap-1 pointer-events-none"
              >
                <Sparkles className="w-6 h-6 animate-pulse" />
                <Star className="w-4 h-4 text-[#BAC095] fill-current" />
              </motion.div>

              {/* Campus Image Card */}
              <motion.div 
                variants={heroItemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border border-[#BAC095] bg-white/70 backdrop-blur-xs p-3 transition-shadow duration-500 hover:shadow-2xl"
              >
                <div className="w-full h-full rounded-[38px] overflow-hidden relative">
                  <img
                    src={campusImg}
                    alt="Excellence International School Premium Campus Facade"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-[#BAC095] shadow-md flex items-center justify-between text-left">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#636B2F] font-semibold">Campus Facade</p>
                      <h4 className="text-xs font-bold text-[#3D4127]">State-of-the-Art Labs & Halls</h4>
                    </div>
                    <span className="text-[10px] font-bold text-[#3D4127] border border-[#BAC095] px-2 py-0.5 rounded-md bg-[#D4DE95]/40">Aligarh</span>
                  </div>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. FACILITIES SECTION */}
      <section 
        id="facilities" 
        className="py-24 relative overflow-hidden bg-gradient-to-b from-[#D4DE95]/30 to-[#BAC095]/20 border-b border-[#BAC095]/40 z-20"
      >
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#636B2F]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3D4127]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle
              badge="Our Facilities"
              title="Premium Infrastructure for Modern Learning"
              subtitle="Explore the high-end amenities that support our comprehensive curriculum and student life in Aligarh."
              light={false}
              className="mb-16 text-[#3D4127]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Central Library', desc: 'Over 10,000 titles, digital journals, and private study pods for academic enquiry.', icon: BookOpen },
                { title: 'Science Labs', desc: 'Advanced chemistry, physics, and biology workspaces equipped for practical exploration.', icon: FlaskConical },
                { title: 'Sports Arena', desc: 'Multi-sport courts, football turf, and training pitches under expert coaches.', icon: Trophy },
                { title: 'Computer Labs', desc: 'Modern desktops loaded with coding environments and creative editing software.', icon: Monitor },
                { title: 'Music & Arts', desc: 'Acoustic rehearsal rooms, visual art displays, and recording mixers.', icon: Music },
                { title: 'Smart Transport', desc: 'GPS-enabled bus routes covering Aligarh with real-time student location tracking.', icon: Bus },
                { title: 'Medical Care', desc: 'An on-campus clinic with full-time registered nurses and periodic check-ups.', icon: HeartPulse },
                { title: 'Swimming Pool', desc: 'An indoor, temperature-controlled half-Olympic pool with life coaches on stand-by.', icon: Waves },
              ].map((item, idx) => (
                <div key={idx} className="group relative p-6 bg-white/80 border border-[#BAC095] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#636B2F] group-hover:text-white">
                    <item.icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="text-base font-bold text-[#3D4127] mb-2 font-heading">{item.title}</h4>
                  <p className="text-xs font-light text-[#3D4127]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 3. ACADEMIC PROGRAMS SECTION */}
      <section id="academics" className="py-24 relative overflow-hidden bg-[#BAC095]/15 border-b border-[#BAC095]/40">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#636B2F]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3D4127]/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle
              badge="Academic Stages"
              title="Structured for Success at Every Phase"
              subtitle="Our educational framework in Aligarh supports students through age-appropriate learning methodologies."
              light={false}
              className="mb-16 text-[#3D4127]"
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
          </motion.div>
        </Container>
      </section>

      {/* 4. ABOUT EXCELLENCE SECTION */}
      <section id="about" className="py-28 relative overflow-hidden bg-white/50 border-b border-[#BAC095]/40">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4DE95]/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#636B2F]/10 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white/70 group">
                  <img
                    src={missionVisionImg}
                    alt="Excellence International School Mission & Vision"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                  />
                  <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-white/90 border border-[#BAC095] shadow-lg text-[#3D4127]">
                    <p className="text-[10px] text-[#636B2F] font-semibold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-[#3D4127] leading-none">Aligarh, UP</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <SectionTitle
                  badge="About Excellence"
                  title="Shaping Future Leaders Through Quality Education"
                  align="left"
                  light={false}
                  className="mb-10 text-[#3D4127]"
                />

                <div className="space-y-8 w-full">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center flex-shrink-0 border border-[#BAC095] transition-colors duration-300 group-hover:bg-[#636B2F] group-hover:text-white">
                      <Target className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#3D4127] mb-1.5 font-heading">Our Mission</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#3D4127]/85 leading-relaxed list-disc list-inside">
                        <li>High-quality education</li>
                        <li>Curiosity & creativity</li>
                        <li>Strong academic foundation</li>
                        <li>Discipline & ethical values</li>
                        <li>Future-ready opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center flex-shrink-0 border border-[#BAC095] transition-colors duration-300 group-hover:bg-[#636B2F] group-hover:text-white">
                      <Eye className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#3D4127] mb-1.5 font-heading">Our Vision</h4>
                      <p className="text-sm font-light text-[#3D4127]/80 leading-relaxed">
                        To create confident, responsible, and innovative individuals who contribute positively to society.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center flex-shrink-0 border border-[#BAC095] transition-colors duration-300 group-hover:bg-[#636B2F] group-hover:text-white">
                      <Sparkles className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#3D4127] mb-1.5 font-heading">Balanced Education</h4>
                      <p className="text-sm font-light text-[#3D4127]/80 leading-relaxed">
                        Providing modern learning with a balanced approach to academics, co-curricular activities, and character development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Statistics Cards Grid */}
            <div className="border-t border-[#BAC095]/40 pt-16 mt-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Years Established', sub: 'A legacy of excellence', count: '20+', icon: Calendar },
                  { title: 'Students Enrolled', sub: 'Diverse global alumni', count: '5000+', icon: Users },
                  { title: 'Expert Educators', sub: 'Dedicated specialist coaches', count: '200+', icon: Award },
                  { title: 'Success Rate', sub: 'University admissions', count: '98%', icon: Trophy },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-6 bg-white/80 border border-[#BAC095] rounded-3xl shadow-sm transition-all duration-300 hover:-translate-y-1.5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4DE95] text-[#636B2F] flex items-center justify-center mb-4">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#3D4127] tracking-tight mb-1 font-heading">
                      <AnimatedCounter target={stat.count} />
                    </span>
                    <span className="text-xs font-semibold text-[#636B2F] uppercase tracking-wider mb-1">
                      {stat.title}
                    </span>
                    <span className="text-[11px] font-light text-[#3D4127]/70">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 4.5 WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#D4DE95]/20 border-b border-[#BAC095]/40">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#636B2F]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#BAC095]/30 rounded-full blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle
              badge="Why Choose Us"
              title="A Premium Environment for Holistic Growth"
              subtitle="Discover the pillars of excellence that distinguish our institution as the top school in Aligarh."
              light={false}
              className="mb-16 text-[#3D4127]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Smart Classrooms', icon: Tv, desc: 'Equipped with interactive screens, high-end multimedia units, and customized acoustics for an immersive audio-visual learning experience.' },
                { title: 'Digital Learning', icon: Laptop, desc: 'Synthesis of programming, virtual classroom resources, and tablet integration to build vital technological literacy early.' },
                { title: 'Experienced Faculty', icon: GraduationCap, desc: 'Guided by expert subject specialists who nurture student curiosity, support personal growth, and instill core moral discipline.' },
                { title: 'Global Curriculum', icon: Globe, desc: 'An outstanding structured curriculum combining academic basics with global methodologies to prepare students for real-world scenarios.' },
                { title: 'Sports & Athletics', icon: Activity, desc: 'Dedicated training grounds and professional instructors emphasizing physical health, collaborative teamwork, and sportsmanship.' },
                { title: 'Innovation Labs', icon: Lightbulb, desc: 'Hands-on practical labs, robotics kits, and STEM challenges to inspire innovative problem-solving and critical enquiry.' },
              ].map((card, idx) => (
                <div key={idx} className="group relative p-8 bg-white/80 border border-[#BAC095] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4DE95] text-[#3D4127] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#636B2F] group-hover:text-white">
                    <card.icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#3D4127] mb-3 font-heading">{card.title}</h4>
                  <p className="text-xs sm:text-sm font-light text-[#3D4127]/80 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 5. COMMUNITY GALLERY & TESTIMONIALS */}
      <section id="gallery" className="py-24 relative overflow-hidden bg-[#BAC095]/10 border-b border-[#BAC095]/40">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle
              badge="School Gallery"
              title="A Visual Showcase of Student Life"
              subtitle="Explore our vibrant campus and classrooms in a portfolio representation of our global community."
              light={false}
              className="mb-16 text-[#3D4127]"
            />

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mb-24">
              {[
                { img: classroomKidsImg, tag: 'Pre-Primary', title: 'Joyful Interactive Learning' },
                { img: campusImg, tag: 'Campus', title: 'State-of-the-Art Architecture' },
                { img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=400&h=550", tag: 'Library', title: 'Focused Private Study Pods' },
                { img: kidsLunchImg, tag: 'Social Habits', title: 'Healthy Lunchroom Habits' },
                { img: studentsImg, tag: 'Students', title: 'Cultivating Future-Ready Leaders' },
                { img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=400&h=300", tag: 'Technology', title: 'STEM & Coding Curriculum' },
                { img: teacherFeedingImg, tag: 'Encouragement', title: 'Empathetic Personal Attention' },
                { img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400&h=500", tag: 'Creative Arts', title: 'Studio Painting & Rehearsals' },
              ].map((item, idx) => (
                <div key={idx} className="break-inside-avoid mb-6 rounded-3xl overflow-hidden border border-[#BAC095] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group relative bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#3D4127]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4DE95] font-semibold mb-1">{item.tag}</span>
                    <h5 className="text-base font-bold font-heading">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>

            <SectionTitle
              badge="Parent & Alumni Stories"
              title="Loved by Our Global Community"
              subtitle="Read reports from parents, alumni, and teachers sharing their firsthand experiences with Excellence's pedagogy."
              light={false}
              className="mb-16 text-[#3D4127]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, index) => (
                <div 
                  key={index}
                  className="bg-white/80 border border-[#BAC095] p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-[#3D4127]"
                >
                  <div>
                    <p className="text-sm font-light text-[#3D4127]/80 italic leading-relaxed mb-8">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-[#BAC095]/40 pt-6">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover border border-[#636B2F]"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#3D4127] leading-tight">
                        {t.author}
                      </h4>
                      <p className="text-xs text-[#636B2F] font-light mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 6. INTERACTIVE FAQS & CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden bg-white/60 border-b border-[#BAC095]/40">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 text-left flex flex-col items-start">
                <SectionTitle
                  badge="Common Questions"
                  title="Frequently Asked Queries"
                  subtitle="Have a question about applications, tuition fees, or curricula? Browse quick guidelines or connect with our recruitment desk."
                  align="left"
                  light={false}
                  className="text-[#3D4127]"
                />
                <div className="mt-8">
                  <a href="mailto:info@excellencevalley.org">
                    <Button variant="primary">
                      Contact Admissions Office
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-4">
                {FAQS.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#BAC095] rounded-2xl overflow-hidden bg-white/80 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-[#D4DE95]/20 transition-colors text-[#3D4127]"
                      >
                        <span className="text-base font-semibold text-[#3D4127] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#636B2F] transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#3D4127]' : ''
                          }`}
                        />
                      </button>
                      
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-48 border-t border-[#BAC095]/40' : 'max-h-0'
                        }`}
                      >
                        <p className="p-6 text-sm font-light text-[#3D4127]/90 leading-relaxed bg-[#D4DE95]/20">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 7. ADMISSIONS CTA BANNER */}
      <section id="admissions" className="py-20 relative overflow-hidden bg-[#D4DE95]/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-[40px] bg-white/90 backdrop-blur-md text-[#3D4127] p-12 md:p-16 lg:p-20 shadow-xl overflow-hidden border border-[#BAC095]">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#D4DE95]/50 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#636B2F]/10 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#636B2F] mb-4 bg-[#636B2F]/10 px-3.5 py-1.5 rounded-full border border-[#636B2F]/20">
                  Join our Global Cohort
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3D4127] mb-6 font-heading">
                  Take the Next Step Toward Excellence
                </h2>
                <p className="text-base sm:text-lg text-[#3D4127]/80 font-light mb-10 leading-relaxed max-w-2xl">
                  Admissions for the upcoming school semester are currently open. Reach out to coordinate testing schedules or apply immediately online.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="primary" size="lg" icon={ArrowRight} className="shadow-md">
                    Apply Online Now
                  </Button>
                  <a href="mailto:info@excellencevalley.org">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-[#3D4127] border-[#BAC095] hover:bg-[#D4DE95]/30 hover:border-[#636B2F]"
                    >
                      Contact Recruitment Desk
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}