import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/banner_logo.png';

/**
 * Cinematic Load Screen welcome experience.
 * Plays only once per browser session.
 */
export default function WelcomeScreen({ onComplete }) {
  useEffect(() => {
    // Delay for the entire welcome sequence to finish, then trigger complete
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, filter: 'blur(0px)' }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: 'blur(30px)',
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#F3F7FA] to-[#EBF3FC] select-none"
    >
      {/* Premium blurred gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#636B2F]/8 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4DE95]/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Center content container */}
      <div className="flex flex-col items-center text-center max-w-xl px-6 relative z-10">
        
        {/* 0.3s: School logo appears */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          {logoImg ? (
            <img 
              src={logoImg} 
              alt="Excellence International School Logo" 
              className="h-16 object-contain"
            />
          ) : (
            <div className="text-xl font-bold tracking-wider text-[#636B2F] font-heading">
              EXCELLENCE
            </div>
          )}
        </motion.div>

        {/* 0.8s: WELCOME TO animates upward */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[0.25em] font-bold text-[#3D4127] uppercase mb-4 font-mono"
        >
          Welcome To
        </motion.span>

        {/* 1.2s: School name fades and slides upward */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3D4127] font-heading mb-4 leading-tight"
        >
          Excellence International School
        </motion.h1>

        {/* 1.6s: Tagline fades in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.6, duration: 1.0, ease: 'easeOut' }}
          className="text-xs sm:text-sm font-light text-[#3D4127] italic max-w-md mb-10"
        >
          "Inspiring Excellence. Building Future Leaders."
        </motion.p>

        {/* 2.0s: Progress line slowly fills */}
        <div className="w-56 h-[2px] bg-[#636B2F]/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 2.0, duration: 0.8, ease: 'easeInOut' }}
            className="h-full bg-[#636B2F] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
