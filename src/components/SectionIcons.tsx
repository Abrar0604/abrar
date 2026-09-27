import React from 'react';

// Graduation cap + scroll
export const AcademyIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Scroll */}
    <rect x="25" y="50" width="50" height="35" rx="3" fill="#F4EFE6" stroke="#2B2620" strokeWidth="3" />
    <line x1="35" y1="60" x2="65" y2="60" stroke="#C9C0AF" strokeWidth="2" />
    <line x1="35" y1="67" x2="60" y2="67" stroke="#C9C0AF" strokeWidth="2" />
    <line x1="35" y1="74" x2="55" y2="74" stroke="#C9C0AF" strokeWidth="2" />
    {/* Graduation cap */}
    <polygon points="50,15 15,32 50,49 85,32" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
    <polygon points="50,25 35,32 50,39 65,32" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" />
    {/* Tassel */}
    <line x1="78" y1="32" x2="78" y2="50" stroke="#2B2620" strokeWidth="2" />
    <circle cx="78" cy="52" r="3" fill="#D8A0A6" stroke="#2B2620" strokeWidth="1.5" />
  </svg>
);

// Shield with crossed tools
export const ArmoryIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Shield */}
    <path d="M50 10 L80 25 L80 55 C80 75 50 92 50 92 C50 92 20 75 20 55 L20 25 Z" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
    {/* Inner shield plate */}
    <path d="M50 20 L70 30 L70 52 C70 66 50 78 50 78 C50 78 30 66 30 52 L30 30 Z" fill="#F4EFE6" stroke="#2B2620" strokeWidth="2" />
    {/* Wrench */}
    <line x1="38" y1="35" x2="62" y2="70" stroke="#8FA6B2" strokeWidth="4" strokeLinecap="round" />
    <circle cx="36" cy="33" r="5" fill="none" stroke="#8FA6B2" strokeWidth="3" />
    {/* Hammer */}
    <line x1="62" y1="35" x2="38" y2="70" stroke="#9CB88F" strokeWidth="4" strokeLinecap="round" />
    <rect x="55" y="28" width="14" height="8" rx="2" fill="#9CB88F" stroke="#2B2620" strokeWidth="2" transform="rotate(-45 62 32)" />
    {/* Center bolt */}
    <circle cx="50" cy="52" r="4" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" />
  </svg>
);
