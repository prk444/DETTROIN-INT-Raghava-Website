import React from 'react';

/**
 * A reusable, premium layout container to constrain width and manage standard padding.
 * Matches Stripe & Apple modern layout grid standards.
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  clean = false,
  ...props
}) {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl ${
        clean ? '' : 'px-6 sm:px-8 lg:px-12'
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
