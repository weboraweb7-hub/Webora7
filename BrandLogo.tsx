import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div
      className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}
      onClick={onClick}
    >
      {/* 3D Arrow 'W' Logo Graphic */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
        >
          <defs>
            <linearGradient id="webora-primary" x1="10" y1="20" x2="110" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="40%" stopColor="#0070F3" />
              <stop offset="75%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            
            <linearGradient id="webora-arrow" x1="40" y1="100" x2="105" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>

            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx="60" cy="60" r="45" fill="url(#webora-primary)" opacity="0.15" filter="url(#glow-filter)" />

          {/* Left Wing of 'W' */}
          <path
            d="M16 28 C24 28, 28 36, 34 60 C38 76, 44 94, 52 94 C58 94, 62 82, 68 62 L74 42 C76 36, 78 30, 84 30 C90 30, 92 38, 90 48 L80 82 C74 100, 60 102, 48 100 C34 98, 26 78, 20 54 L14 36 C12 30, 14 28, 16 28 Z"
            fill="url(#webora-primary)"
          />

          {/* Middle Ribbon & Right Ascending Arrow */}
          <path
            d="M48 94 C64 92, 80 74, 98 42 L106 28"
            stroke="url(#webora-arrow)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Arrowhead */}
          <path
            d="M86 24 L108 26 L104 48"
            stroke="url(#webora-arrow)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`font-['Outfit'] font-black tracking-wider uppercase flex items-center leading-none ${textSizes[size]}`}>
          <span className="text-white drop-shadow-sm">WEBORA</span>
          <span className="ml-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            WEB
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mt-1">
            Websites That Grow Businesses
          </span>
        )}
      </div>
    </div>
  );
};
