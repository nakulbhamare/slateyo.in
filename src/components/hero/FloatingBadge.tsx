import React from 'react';

interface FloatingBadgeProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  points?: string;
  className?: string;
  delay?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  icon,
  title,
  subtitle,
  points,
  className = '',
  delay = '0s',
}) => {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`glass-card rounded-2xl px-3.5 py-2.5 shadow-soft-lg flex items-center gap-3 border border-white/80 animate-float-slow backdrop-blur-md ${className}`}
    >
      {icon && (
        <div className="w-8 h-8 rounded-xl bg-pink-light flex items-center justify-center text-pink-brand shrink-0 shadow-inner">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-brand-slate tracking-tight">{title}</span>
          {points && (
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-pink-brand text-white shadow-sm">
              {points}
            </span>
          )}
        </div>
        {subtitle && <span className="text-[11px] font-medium text-brand-muted">{subtitle}</span>}
      </div>
    </div>
  );
};
