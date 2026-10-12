import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
}) => {
  const dimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const primaryStroke = variant === 'dark' ? '#1E4D3B' : '#FAF8F5';
  const accentFill = '#C59B27';
  const bgCircle = variant === 'dark' ? '#F2EFE9' : 'rgba(255,255,255,0.12)';

  return (
    <span className="inline-flex items-center gap-2 sm:gap-3 select-none">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        aria-hidden="true"
      >
        {/* Outer Sanctuary Seal */}
        <circle
          cx="32"
          cy="32"
          r="30"
          fill={bgCircle}
          stroke={accentFill}
          strokeWidth="1.5"
        />
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke={primaryStroke}
          strokeWidth="0.75"
          strokeDasharray="3 3"
          opacity="0.45"
        />

        {/* Stylized Botanical Olive & Leaf Arch on Left */}
        <path
          d="M21 44C17.5 38 17.5 27 23 20C23.5 26.5 21.5 33 24 40"
          stroke={primaryStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 31C15.5 29 14.5 25 16.5 22C19.5 23.5 20.5 27.5 19 31Z"
          fill={accentFill}
          opacity="0.85"
        />
        <path
          d="M21 23C19.5 19.5 20.5 15.5 23.5 14C25.5 16.5 24.5 20.5 21 23Z"
          fill={primaryStroke}
        />

        {/* Monogram 'R' intertwined with Cellular Balance Stem */}
        <path
          d="M28 46V18H36.5C41.2 18 44 20.6 44 24.8C44 28.5 41.5 31 37.2 31.4L45 46"
          stroke={primaryStroke}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 31.2H36"
          stroke={primaryStroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Golden Drop of Vitality / Holistic Apex */}
        <path
          d="M32 10C32 10 35 13.2 35 15.2C35 16.8569 33.6569 18.2 32 18.2C30.3431 18.2 29 16.8569 29 15.2C29 13.2 32 10 32 10Z"
          fill={accentFill}
        />

        {/* Subtle Baseline Medical Cross / Equilibrium Mark */}
        <circle cx="32" cy="51" r="2" fill={accentFill} />
      </svg>
      <div className="flex flex-col text-right leading-tight">
        <span className="font-display font-bold tracking-tight whitespace-nowrap text-sm sm:text-base text-current">
          د. راندا <span className="hidden sm:inline font-normal opacity-75">| Dr. Randa</span>
        </span>
        <span className="text-[10px] font-medium opacity-75 whitespace-nowrap">
          للتغذية العلاجية
        </span>
      </div>
    </span>
  );
};
