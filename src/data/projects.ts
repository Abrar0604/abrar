import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'nvidia-mcp-swarm',
    codename: 'LLMcouncil-MCP',
    title: 'Multi-Agent AI Collaboration Framework',
    year: '2025',
    tech: ['Python', 'FastAPI', 'React', 'LangGraph', 'ChromaDB'],
    oneLiner:
      'Full-stack multi-agent AI system using MCP, governed by a Rotational LLM Council that selects 4 of 7 NVIDIA NIM models per query for consensus-driven answers.',
    keyStats: [
      '22% improvement in task completion',
      '11.5% reduction in hallucination rates',
      '91% cross-session fact recall',
      '40% context window redundancy reduction via RAG',
    ],
    githubUrl: 'https://github.com/Abrar0604/LLMcouncil-MCP',
    worldPosition: { x: 1000, y: 400 },
    triggerRadius: 80,
  },
  {
    id: 'mirsad',
    codename: 'MIRSAD',
    title: 'AI-Powered Energy Supply Chain Resilience Platform',
    year: '2026',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Gemini 2.0 Flash', 'RAG', 'Leaflet.js'],
    oneLiner:
      "Real-time geopolitical risk monitoring and disruption scenario modeling for India's crude oil security — a live Command Center fusing news feeds and supply data.",
    keyStats: [
      '9-node LangGraph pipeline with RAG-grounded analysis',
      '30-day predictive risk trajectories',
      'War-gaming simulations of cascading economic impacts',
    ],
    githubUrl: 'https://github.com/Abrar0604/mirsad-energy-intel',
    worldPosition: { x: 600, y: 700 },
    triggerRadius: 80,
  },
  {
    id: 'coding-coliseum',
    codename: 'Coding Coliseum',
    title: 'Real-Time Competitive Programming Battle Platform',
    year: '2025',
    tech: ['React', 'Express.js', 'AWS', 'WebSocket'],
    oneLiner:
      'LeetCode-style real-time coding battle platform where matched users compete head-to-head with live matchmaking over WebSockets.',
    keyStats: [
      'Chess-style Elo rating system',
      'Real-time matchmaking over WebSockets',
      'AWS-hosted for concurrent multi-user sessions',
    ],
    // TODO: Replace with actual GitHub link once uploaded
    githubUrl: 'https://github.com/Abrar0604',
    worldPosition: { x: 1400, y: 750 },
    triggerRadius: 80,
  },
  {
    id: 'store-intelligence',
    codename: 'Store Intelligence',
    title: 'Real-Time Retail Analytics — Purplle Tech Challenge 2026',
    year: '2026',
    tech: ['YOLOv8-nano', 'ByteTrack', 'FastAPI', 'SSE'],
    oneLiner:
      'Real-time retail analytics reading CCTV feeds to surface in-store intelligence, streaming live object detection to a dashboard.',
    keyStats: [
      'YOLOv8-nano + ByteTrack real-time pipeline',
      'Live dashboard via Server-Sent Events',
      'Built for Purplle Tech Challenge 2026',
    ],
    githubUrl: 'https://github.com/Abrar0604/store-intelligence',
    worldPosition: { x: 1100, y: 1150 },
    triggerRadius: 80,
  },
  {
    id: 'voice-synthesis',
    codename: 'Chatterbox',
    title: 'AI Voice Synthesis Application',
    year: '2025',
    tech: ['StyleTTS2', 'Flask', 'AWS'],
    oneLiner:
      'AI-powered voice synthesis turning text into natural speech, deployed on AWS with low-latency inference.',
    keyStats: [
      'StyleTTS2 model integration',
      'Low-latency Flask service layer',
      'Deployed on AWS',
    ],
    githubUrl: 'https://github.com/Abrar0604/chatterbox',
    worldPosition: { x: 1600, y: 300 },
    triggerRadius: 80,
  },
];
