import type { SkillCategory } from '../types/content';

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'R', 'SQL'],
    linkedProjectIds: ['nvidia-mcp-swarm', 'mirsad', 'coding-coliseum', 'stellar-classification', 'store-intelligence', 'voice-synthesis'],
  },
  {
    category: 'AI / ML / GenAI',
    skills: [
      'LangGraph', 'LangChain', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost',
      'LightGBM', 'PaddleOCR', 'Sentence Transformers', 'RAG',
      'Multi-Agent Systems', 'Prompt Engineering', 'NLP',
    ],
    linkedProjectIds: ['nvidia-mcp-swarm', 'mirsad', 'stellar-classification'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI', '.NET'],
    linkedProjectIds: ['nvidia-mcp-swarm', 'mirsad', 'coding-coliseum', 'voice-synthesis', 'store-intelligence'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Git', 'CI/CD'],
    linkedProjectIds: ['coding-coliseum', 'voice-synthesis'],
  },
  {
    category: 'Databases & Tools',
    skills: ['ChromaDB', 'SQLite', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Server-Sent Events (SSE)'],
    linkedProjectIds: ['nvidia-mcp-swarm', 'store-intelligence'],
  },
  {
    category: 'Concepts',
    skills: ['Data Analysis', 'Generative AI', 'Large Language Models', 'Vector Databases', 'Distributed Systems', 'Agile'],
    linkedProjectIds: ['nvidia-mcp-swarm', 'mirsad'],
  },
];
