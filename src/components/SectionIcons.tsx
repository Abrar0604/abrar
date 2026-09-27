import React from 'react';

// Graduation cap + scroll
export const AcademyIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Diploma Scroll */}
    <rect x="30" y="65" width="40" height="14" fill="#F4EFE6" stroke="#2B2620" strokeWidth="3" />
    <ellipse cx="30" cy="72" rx="5" ry="7" fill="#F4EFE6" stroke="#2B2620" strokeWidth="3" />
    <ellipse cx="70" cy="72" rx="5" ry="7" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
    <rect x="46" y="65" width="8" height="14" fill="#D8A0A6" stroke="#2B2620" strokeWidth="3" />
    <path d="M 48 79 L 45 88 L 50 85 L 55 88 L 52 79 Z" fill="#D8A0A6" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />

    {/* Graduation Cap Base (Skullcap) */}
    <path d="M 35 43 L 35 52 Q 50 62 65 52 L 65 43" fill="#8FA6B2" stroke="#2B2620" strokeWidth="3" />
    
    {/* Graduation Cap Board (Diamond) */}
    <polygon points="50,20 20,35 50,50 80,35" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
    <polygon points="50,27 30,35 50,43 70,35" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Tassel Button */}
    <circle cx="50" cy="35" r="4" fill="#2B2620" />
    
    {/* Tassel string */}
    <path d="M 50 35 Q 75 40 75 55" fill="none" stroke="#2B2620" strokeWidth="3" />
    
    {/* Tassel end */}
    <path d="M 71 55 L 79 55 L 77 65 L 73 65 Z" fill="#D8A0A6" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

// Shield with crossed swords
export const ArmoryIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    {/* Swords Group */}
    <g>
      {/* Sword 1 (Bottom-Left to Top-Right) */}
      <g transform="rotate(45 50 50)">
        <path d="M 47 15 L 50 5 L 53 15 L 53 75 L 47 75 Z" fill="#8FA6B2" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
        <rect x="38" y="75" width="24" height="6" rx="3" fill="#E4B65C" stroke="#2B2620" strokeWidth="3" />
        <rect x="46" y="81" width="8" height="12" fill="#D8A0A6" stroke="#2B2620" strokeWidth="3" />
        <circle cx="50" cy="95" r="4" fill="#E4B65C" stroke="#2B2620" strokeWidth="3" />
      </g>
      {/* Sword 2 (Bottom-Right to Top-Left) */}
      <g transform="rotate(-45 50 50)">
        <path d="M 47 15 L 50 5 L 53 15 L 53 75 L 47 75 Z" fill="#F4EFE6" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
        <rect x="38" y="75" width="24" height="6" rx="3" fill="#E4B65C" stroke="#2B2620" strokeWidth="3" />
        <rect x="46" y="81" width="8" height="12" fill="#D8A0A6" stroke="#2B2620" strokeWidth="3" />
        <circle cx="50" cy="95" r="4" fill="#E4B65C" stroke="#2B2620" strokeWidth="3" />
      </g>
    </g>

    {/* Shield */}
    <path d="M 50 25 L 75 35 L 75 60 C 75 75 50 85 50 85 C 50 85 25 75 25 60 L 25 35 Z" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
    <path d="M 50 34 L 66 41 L 66 58 C 66 69 50 77 50 77 C 50 77 34 69 34 58 L 34 41 Z" fill="#9CB88F" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
    
    {/* Center Emblem */}
    <circle cx="50" cy="54" r="5" fill="#E4B65C" stroke="#2B2620" strokeWidth="3" />
  </svg>
);
