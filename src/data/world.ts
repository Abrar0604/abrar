import type { FixedLocation, ContactInfo } from '../types/content';

export const fixedLocations: FixedLocation[] = [
  {
    id: 'the-academy',
    name: 'The Academy',
    label: 'The Academy',
    worldPosition: { x: 300, y: 200 },
    triggerRadius: 90,
    type: 'academy',
  },
  {
    id: 'the-armory',
    name: 'The Armory',
    label: 'The Armory',
    worldPosition: { x: 700, y: 250 },
    triggerRadius: 90,
    type: 'armory',
  },
  {
    id: 'trophy-coast',
    name: 'Trophy Coast',
    label: 'Trophy Coast',
    worldPosition: { x: 1800, y: 900 },
    triggerRadius: 90,
    type: 'trophy',
  },
  {
    id: 'the-summit',
    name: 'The Summit',
    label: 'The Summit',
    worldPosition: { x: 1900, y: 1300 },
    triggerRadius: 100,
    type: 'summit',
  },
];

export const contact: ContactInfo = {
  email: 'abrar2004myself@gmail.com',
  phone: '+91-6300508010',
  linkedin: 'linkedin.com/in/abrar-ahammad',
  github: 'github.com/Abrar0604',
};

/** Player spawn point — just south of The Academy */
export const SPAWN_POSITION = { x: 300, y: 320 };

/** World dimensions in logical units */
export const WORLD_WIDTH = 2100;
export const WORLD_HEIGHT = 1500;
