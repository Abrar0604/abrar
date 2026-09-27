import React from 'react';

export const ProjectIcons: Record<string, React.FC> = {
  'nvidia-mcp-swarm': () => (
    // Council of servers/brains
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <rect x="20" y="30" width="60" height="50" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      <rect x="30" y="40" width="40" height="8" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" />
      <rect x="30" y="55" width="40" height="8" fill="#9CB88F" stroke="#2B2620" strokeWidth="2" />
      {/* 4 models selected */}
      <circle cx="35" cy="20" r="6" fill="#D8A0A6" stroke="#2B2620" strokeWidth="2" />
      <circle cx="50" cy="15" r="6" fill="#D8A0A6" stroke="#2B2620" strokeWidth="2" />
      <circle cx="65" cy="20" r="6" fill="#D8A0A6" stroke="#2B2620" strokeWidth="2" />
      {/* connecting lines */}
      <path d="M35 26 L40 30 M50 21 L50 30 M65 26 L60 30" stroke="#2B2620" strokeWidth="2" />
    </svg>
  ),
  'mirsad': () => (
    // Watchtower / Radar
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <polygon points="30,80 70,80 60,40 40,40" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      <rect x="35" y="25" width="30" height="15" fill="#8FA6B2" stroke="#2B2620" strokeWidth="3" />
      {/* Radar dish */}
      <path d="M30 20 C40 10 60 10 70 20" fill="none" stroke="#2B2620" strokeWidth="3" />
      <circle cx="50" cy="20" r="4" fill="#D8A0A6" stroke="#2B2620" strokeWidth="2" />
      {/* Signal waves */}
      <path d="M40 5 C50 -5 60 5" fill="none" stroke="#E4B65C" strokeWidth="2" />
    </svg>
  ),
  'coding-coliseum': () => (
    // Coding Coliseum: Brackets facing off behind a Roman Coliseum
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Background Brackets < > */}
      {/* Left Bracket < */}
      <path d="M 40 15 L 20 35 L 40 55" fill="none" stroke="#2B2620" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 40 15 L 20 35 L 40 55" fill="none" stroke="#8FA6B2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Right Bracket > */}
      <path d="M 60 15 L 80 35 L 60 55" fill="none" stroke="#2B2620" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 60 15 L 80 35 L 60 55" fill="none" stroke="#D8A0A6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Coliseum Top Tier (Broken) */}
      <path d="M 30 50 L 30 35 L 45 35 L 45 42 L 55 42 L 55 35 L 70 35 L 70 50 Z" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" strokeLinejoin="round" />
      {/* Top Arches */}
      <path d="M 33 50 L 33 42 A 4.5 4.5 0 0 1 42 42 L 42 50 Z" fill="#2B2620" />
      <path d="M 58 50 L 58 42 A 4.5 4.5 0 0 1 67 42 L 67 50 Z" fill="#2B2620" />

      {/* Coliseum Middle Tier */}
      <rect x="25" y="50" width="50" height="15" fill="#F4EFE6" stroke="#2B2620" strokeWidth="3" />
      {/* Middle Arches */}
      <path d="M 30 65 L 30 57 A 5 5 0 0 1 40 57 L 40 65 Z" fill="#2B2620" />
      <path d="M 45 65 L 45 57 A 5 5 0 0 1 55 57 L 55 65 Z" fill="#2B2620" />
      <path d="M 60 65 L 60 57 A 5 5 0 0 1 70 57 L 70 65 Z" fill="#2B2620" />

      {/* Coliseum Bottom Tier */}
      <rect x="20" y="65" width="60" height="20" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      {/* Bottom Arches */}
      <path d="M 24 85 L 24 75 A 5 5 0 0 1 34 75 L 34 85 Z" fill="#2B2620" />
      <path d="M 38 85 L 38 75 A 5 5 0 0 1 48 75 L 48 85 Z" fill="#2B2620" />
      <path d="M 52 85 L 52 75 A 5 5 0 0 1 62 75 L 62 85 Z" fill="#2B2620" />
      <path d="M 66 85 L 66 75 A 5 5 0 0 1 76 75 L 76 85 Z" fill="#2B2620" />
    </svg>
  ),
  'stellar-classification': () => (
    // Telescope / Stars
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Stars */}
      <polygon points="80,10 82,18 90,20 82,22 80,30 78,22 70,20 78,18" fill="#E4B65C" stroke="#2B2620" strokeWidth="1" />
      <polygon points="20,20 21,24 25,25 21,26 20,30 19,26 15,25 19,24" fill="#9CB88F" stroke="#2B2620" strokeWidth="1" />
      {/* Telescope */}
      <rect x="30" y="40" width="50" height="20" rx="4" fill="#8FA6B2" stroke="#2B2620" strokeWidth="3" transform="rotate(-30 55 50)" />
      {/* Stand */}
      <line x1="50" y1="65" x2="30" y2="90" stroke="#2B2620" strokeWidth="4" />
      <line x1="50" y1="65" x2="70" y2="90" stroke="#2B2620" strokeWidth="4" />
      <line x1="50" y1="65" x2="50" y2="90" stroke="#2B2620" strokeWidth="4" />
    </svg>
  ),
  'store-intelligence': () => (
    // CCTV Camera
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Mount */}
      <path d="M20 20 L40 20 L40 40 L20 40 Z" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      <line x1="40" y1="30" x2="50" y2="50" stroke="#2B2620" strokeWidth="4" />
      {/* Camera Body */}
      <rect x="45" y="40" width="45" height="25" rx="4" fill="#8FA6B2" stroke="#2B2620" strokeWidth="3" transform="rotate(20 67 52)" />
      {/* Lens */}
      <ellipse cx="85" cy="59" rx="8" ry="12" fill="#2B2620" transform="rotate(20 85 59)" />
      <circle cx="85" cy="59" r="4" fill="#D8A0A6" />
    </svg>
  ),
  'voice-synthesis': () => (
    // Microphone / Sound waves
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Mic */}
      <rect x="40" y="20" width="20" height="35" rx="10" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      {/* Stand */}
      <path d="M30 45 C30 60 70 60 70 45" fill="none" stroke="#2B2620" strokeWidth="3" />
      <line x1="50" y1="58" x2="50" y2="80" stroke="#2B2620" strokeWidth="3" />
      <line x1="35" y1="80" x2="65" y2="80" stroke="#2B2620" strokeWidth="3" />
      {/* Sound waves */}
      <path d="M20 30 Q10 37 20 45" fill="none" stroke="#9CB88F" strokeWidth="3" />
      <path d="M80 30 Q90 37 80 45" fill="none" stroke="#9CB88F" strokeWidth="3" />
    </svg>
  )
};
