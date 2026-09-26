export interface WorldPosition {
  x: number;
  y: number;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  /** IDs of projects that heavily use skills in this category */
  linkedProjectIds: string[];
}

export interface Project {
  id: string;
  codename: string;
  title: string;
  year: string;
  tech: string[];
  missionBriefing: string;
  bossChallenge: string;
  lootStats: string[];
  headerBriefing?: string;
  headerChallenge?: string;
  headerLoot?: string;
  worldPosition: WorldPosition;
  triggerRadius: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface FixedLocation {
  id: string;
  name: string;
  /** Display label on the map */
  label: string;
  worldPosition: WorldPosition;
  triggerRadius: number;
  type: 'academy' | 'armory' | 'trophy' | 'summit';
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
