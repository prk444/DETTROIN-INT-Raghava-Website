import React from 'react';

/**
 * A premium stat card displaying key performance metrics.
 * Uses bold typography, large border radius, and premium soft shadows to present metrics cleanly.
 */
export default function StatCard({
  value,
  label,
  description,
  className = '',
}) {
  return (
    <div className={`flex flex-col p-8 bg-white border border-slate-100/50 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1 ${className}`}>
      {/* Stat Value */}
      <span className="text-4xl sm:text-5xl font-extrabold text-[#0F4C81] tracking-tight mb-2 font-heading">
        {value}
      </span>
      
      {/* Label */}
      <span className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-2">
        {label}
      </span>
      
      {/* Description */}
      <span className="text-xs sm:text-sm font-light text-slate-500 leading-relaxed">
        {description}
      </span>
    </div>
  );
}
