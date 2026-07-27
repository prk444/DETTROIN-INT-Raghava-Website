import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * A highly polished, modern Program Card.
 * Includes an image header with scale animations, tag metadata, title, short description,
 * and a hovering arrow-button that shifts to the right on hover.
 */
export default function ProgramCard({
  image,
  title,
  ageRange,
  description,
  tagColor = 'bg-[#636B2F]/5 text-[#636B2F] border-[#636B2F]/10',
  onClick,
}) {
  return (
    <div 
      className="group relative flex flex-col justify-between bg-white/70 border border-[#BAC095]/65 rounded-3xl p-6 sm:p-7 shadow-premium hover:shadow-premium-hover transition-all-premium hover:-translate-y-1.5 overflow-hidden text-[#3D4127]"
    >
      {/* Subtle hover gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#636B2F]/[0.02] to-[#D4DE95]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Card Image Header */}
        {image && (
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-[#BAC095]/45 bg-slate-100 shadow-sm">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
          </div>
        )}

        {/* Header Tag */}
        <div className="flex justify-between items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${tagColor}`}>
            {ageRange}
          </span>
          <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Stage</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#3D4127] mb-3 group-hover:text-[#636B2F] transition-colors duration-200 font-heading leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm font-light text-[#3D4127]/70 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Action Footer with Arrow Icon */}
      <div className="mt-auto pt-4 border-t border-[#E8E2D5]/30">
        <button
          onClick={onClick}
          className="flex items-center text-xs sm:text-sm font-bold text-[#636B2F] gap-2 hover:text-[#0c3e6a] transition-all-premium cursor-pointer group/btn"
        >
          <span>Explore Stage Details</span>
          <div className="w-8 h-8 rounded-full bg-[#636B2F]/5 text-[#636B2F] flex items-center justify-center transition-transform duration-350 transform group-hover/btn:translate-x-1.5 group-hover:bg-[#636B2F] group-hover:text-white">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </button>
      </div>
    </div>
  );
}
