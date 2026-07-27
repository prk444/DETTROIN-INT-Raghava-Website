import React from 'react';

/**
 * A light theme premium stat card displaying key performance metrics.
 * Uses bold primary brand blue typography, a semi-transparent white glass background, and soft shadow styling.
 */
export default function StatCard({
  value,
  label,
  description,
  className = '',
}) {
  return (
    <div className={`flex flex-col p-8 bg-[#FCFAF2]/80 border border-[#E8E2D5]/70 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 text-[#2E2A24] ${className}`}>
      {/* Stat Value */}
      <span className="text-4xl sm:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-2 font-heading">
        {value}
      </span>
      
      {/* Label */}
      <span className="text-sm font-semibold text-[#2E2A24] uppercase tracking-wider mb-2">
        {label}
      </span>
      
      {/* Description */}
      <span className="text-xs sm:text-sm font-light text-[#2E2A24]/60 leading-relaxed">
        {description}
      </span>
    </div>
  );
}
