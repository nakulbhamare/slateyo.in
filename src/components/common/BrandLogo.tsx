import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
  variant?: 'dark' | 'light' | 'pill' | 'plain';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showBadge = false,
  variant = 'plain',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const isPill = variant === 'pill';

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${
        isPill
          ? 'bg-brand-slate px-4 py-2 rounded-2xl border border-white/15 shadow-soft-sm hover:border-pink-brand/40 transition-all'
          : ''
      } ${className}`}
    >
      <img
        src="/assets/logo.png"
        alt="Slateyo Logo"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]`}
        loading="eager"
      />
    </div>
  );
};
