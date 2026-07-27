import React from 'react';

/**
 * A highly reusable typography title component for page sections.
 * Features an optional overline badge, main heading with Poppins weighting,
 * and body text description with optimal line-height.
 */
export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const badgeColors = light
    ? 'text-[#F4B400] bg-white/10 border border-white/20'
    : 'text-[#0F4C81] bg-[#e7eff8] border border-[#0F4C81]/10';

  const titleColors = light
    ? 'text-white'
    : 'text-slate-900';

  const subtitleColors = light
    ? 'text-slate-200'
    : 'text-slate-600';

  return (
    <div className={`flex flex-col ${alignments[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${badgeColors}`}>
          {badge}
        </span>
      )}
      
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${titleColors}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl ${subtitleColors}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
