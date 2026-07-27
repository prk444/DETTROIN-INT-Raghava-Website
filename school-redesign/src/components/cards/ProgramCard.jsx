import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

/**
 * A light theme premium card representing an educational program.
 * Features a semi-transparent white glass backdrop, large border-radius, clean spacing, and gold/blue hover micro-animations.
 */
export default function ProgramCard({
  title,
  ageRange,
  description,
  features = [],
  tagColor = 'bg-[#0f4c81]/5 text-[#0F4C81] border-[#0f4c81]/10',
  onClick,
}) {
  return (
    <div 
      className="group relative flex flex-col justify-between bg-white/70 border border-slate-200/50 rounded-3xl p-8 sm:p-10 shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden text-slate-800"
    >
      {/* Decorative Accent Highlight on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/[0.02] to-[#F4B400]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header Tag */}
        <div className="flex justify-between items-center mb-6">
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${tagColor}`}>
            {ageRange}
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">Pathway</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#0F4C81] transition-colors duration-200 font-heading">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base font-light text-slate-500 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-3.5 mb-8 border-t border-slate-100 pt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm text-slate-650 gap-3">
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-auto">
        <button
          onClick={onClick}
          className="flex items-center text-sm font-semibold text-[#0F4C81] gap-2 hover:text-[#0c3e6a] transition-all-premium cursor-pointer group/btn"
        >
          <span>Explore curriculum</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-350 transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
