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
    <div className={`flex flex-col p-8 bg-white/70 border border-[#BAC095]/65 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 text-[#3D4127] ${className}`}>
      {/* Stat Value */}
      <span className="text-4xl sm:text-5xl font-extrabold text-[#636B2F] tracking-tight mb-2 font-heading">
        {value}
      </span>
      
      {/* Label */}
      <span className="text-sm font-semibold text-[#3D4127] uppercase tracking-wider mb-2">
        {label}
      </span>
      
      {/* Description */}
      <span className="text-xs sm:text-sm font-light text-[#3D4127]/60 leading-relaxed">
        {description}
      </span>
    </div>
  );
}
