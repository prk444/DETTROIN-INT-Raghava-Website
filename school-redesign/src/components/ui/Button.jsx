import React from 'react';

/**
 * A highly polished, premium Button component built to standard-setting brand requirements.
 * Focuses on smooth transitions, premium hover scaling, and robust layout options.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon = null,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  // Styles for different variants
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all-premium cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-[#0F4C81] text-white hover:bg-[#0c3e6a] hover:-translate-y-0.5 hover:shadow-premium focus:ring-[#0F4C81]/30 border border-transparent',
    secondary: 'bg-[#e7eff8] text-[#0F4C81] hover:bg-[#d5e4f4] hover:-translate-y-0.5 focus:ring-[#0F4C81]/25 border border-transparent',
    accent: 'bg-[#F4B400] text-[#111827] hover:bg-[#db9f00] hover:-translate-y-0.5 hover:shadow-[#F4B400]/20 focus:ring-[#F4B400]/30 border border-transparent',
    outline: 'border border-slate-250 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 hover:-translate-y-0.5 focus:ring-slate-500/20',
    ghost: 'text-[#0F4C81] hover:bg-slate-100/70 focus:ring-slate-500/10',
    link: 'text-[#0F4C81] hover:underline underline-offset-4 p-0 rounded-none bg-transparent hover:bg-transparent shadow-none hover:shadow-none hover:translate-y-0 active:scale-100 focus:ring-0',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 rounded-2xl shadow-premium-soft',
  };

  const iconSize = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!loading && Icon && iconPosition === 'left' && (
        <Icon className={`${iconSize[size]} transition-transform duration-200 group-hover:-translate-x-0.5`} aria-hidden="true" />
      )}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={`${iconSize[size]} transition-transform duration-200 group-hover:translate-x-0.5`} aria-hidden="true" />
      )}
    </button>
  );
}
