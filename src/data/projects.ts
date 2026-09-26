import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'nvidia-mcp-swarm',
    codename: 'Operation NIM Council',
    title: 'NVIDIA-MCP-Swarm: Multi-Agent AI Collaboration Framework',
    year: '2025',
    tech: ['Python', 'FastAPI', 'React', 'LangGraph', 'ChromaDB'],
    missionBriefing:
      'Full-stack multi-agent AI system using the Model Context Protocol (MCP), governed by a Rotational LLM Council that randomly selects 4 of 7 heterogeneous NVIDIA NIM models per query for consensus-driven answers.',
    bossChallenge:
      'Designing a LangGraph StateGraph orchestration pipeline with typed state management, conditional routing, and parallel execution.',
    lootStats: [
      '22% improvement in task completion',
      '11.5% reduction in hallucination rates',
      '40% reduction in context window redundancy (RAG + ChromaDB + Sentence Transformers, 384-dim embeddings)',
      '91% cross-session fact recall',
      'Three MCP primitives (Resources, Prompts, Tools) with VS Code/Cursor integration via JSON-RPC 2.0',
    ],
    worldPosition: { x: 1000, y: 400 },
    triggerRadius: 80,
  },
  {
    id: 'mirsad',
    codename: 'Mission Watchtower',
    title: 'MIRSAD: AI-Powered Energy Supply Chain Resilience Platform',
    year: '2026',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Gemini 2.0 Flash', 'RAG', 'Leaflet.js', 'Chart.js'],
    missionBriefing:
      "Real-time geopolitical risk monitoring and disruption scenario modeling platform for India's crude oil security — a live Command Center fusing news feeds and supply data.",
    bossChallenge:
      '9-node LangGraph pipeline with RAG-grounded analysis (Gemini 2.0 Flash) producing quantitative risk scores, 30-day predictive risk trajectories, and deterministic supply security metrics (SSI, HHI).',
    lootStats: [
      'War-gaming simulations of cascading economic impacts',
      'Dynamic re-ranking of procurement sources',
      'SPR drawdown optimization',
    ],
    worldPosition: { x: 600, y: 700 },
    triggerRadius: 80,
  },
  {
    id: 'coding-coliseum',
    codename: 'The Coding Coliseum',
    title: 'Real-Time Competitive Programming Battle Platform',
    year: '2025',
    tech: ['React', 'Express.js', 'AWS', 'WebSocket'],
    missionBriefing:
      'LeetCode-style real-time coding battle platform where matched users compete head-to-head on programming problems.',
    bossChallenge:
      'Real-time matchmaking over WebSockets, secure authentication, and AWS-hosted infrastructure scaled for concurrent multi-user sessions.',
    lootStats: ['Chess-style Elo rating system'],
    worldPosition: { x: 1400, y: 750 },
    triggerRadius: 80,
  },
  {
    id: 'stellar-classification',
    codename: 'Star Cartography',
    title: 'Stellar Classification (Kaggle Playground Series S6E6)',
    year: '2026',
    tech: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Logistic Regression', 'Google Colab T4'],
    missionBriefing:
      'Stacking-ensemble ML pipeline classifying stellar objects, combining LightGBM, XGBoost, and CatBoost base learners under a logistic regression meta-learner.',
    bossChallenge:
      'Engineering GPU acceleration on Google Colab T4 to make the stacking ensemble tractable at competition scale.',
    lootStats: ['Targeting >99% accuracy on the leaderboard'],
    worldPosition: { x: 400, y: 1100 },
    triggerRadius: 80,
  },
  {
    id: 'store-intelligence',
    codename: 'Aisle Vision',
    title: 'Store Intelligence — Purplle Tech Challenge 2026',
    year: '2026',
    tech: ['YOLOv8-nano', 'ByteTrack', 'FastAPI', 'Server-Sent Events (SSE)'],
    missionBriefing:
      'Real-time retail analytics system reading CCTV feeds to surface in-store intelligence, built for the Purplle Tech Challenge 2026 hackathon.',
    bossChallenge:
      'Real-time object detection (YOLOv8-nano) plus multi-object tracking (ByteTrack) streamed live to a dashboard via SSE.',
    lootStats: ['Built for Purplle Tech Challenge 2026 hackathon'],
    worldPosition: { x: 1100, y: 1150 },
    triggerRadius: 80,
  },
  {
    id: 'voice-synthesis',
    codename: 'The Voice Forge',
    title: 'AI Voice Synthesis Application',
    year: '2025',
    tech: ['StyleTTS2', 'Flask', 'AWS'],
    missionBriefing:
      'AI-powered voice synthesis application turning text into natural speech, deployed on AWS.',
    bossChallenge:
      'Integrating the StyleTTS2 model behind a Flask service for low-latency synthesis.',
    lootStats: ['Deployed on AWS with a Flask service layer'],
    worldPosition: { x: 1600, y: 300 },
    triggerRadius: 80,
  },
];
