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
    // Crossed swords / Coliseum
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Coliseum base */}
      <path d="M20 70 C20 60 80 60 80 70 L75 90 L25 90 Z" fill="#E8DFD0" stroke="#2B2620" strokeWidth="3" />
      <rect x="30" y="75" width="10" height="15" fill="#2B2620" />
      <rect x="45" y="75" width="10" height="15" fill="#2B2620" />
      <rect x="60" y="75" width="10" height="15" fill="#2B2620" />
      {/* Swords */}
      <line x1="30" y1="20" x2="70" y2="60" stroke="#8FA6B2" strokeWidth="4" />
      <line x1="70" y1="20" x2="30" y2="60" stroke="#D8A0A6" strokeWidth="4" />
      <rect x="25" y="15" width="10" height="10" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" transform="rotate(45 30 20)" />
      <rect x="65" y="15" width="10" height="10" fill="#E4B65C" stroke="#2B2620" strokeWidth="2" transform="rotate(-45 70 20)" />
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
