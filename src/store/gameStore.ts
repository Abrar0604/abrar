import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SPAWN_POSITION } from '../data/world';

interface GameState {
  /** Has the player dismissed the boot screen? */
  entered: boolean;
  /** Set of discovered location IDs */
  discovered: string[];
  /** Currently open panel location ID, or null */
  activePanel: string | null;
  /** Player position in world units */
  playerX: number;
  playerY: number;
  /** 'idle' | 'walk' */
  playerAnim: 'idle' | 'walk';
  /** Direction the player faces: 0 = down, 1 = left, 2 = right, 3 = up */
  facing: number;
  /** Whether the resume plain-text view is shown */
  showResume: boolean;
  /** Whether the fast-travel menu is open */
  showFastTravel: boolean;

  enter: () => void;
  discover: (id: string) => void;
  openPanel: (id: string | null) => void;
  setPlayer: (x: number, y: number) => void;
  setAnim: (anim: 'idle' | 'walk') => void;
  setFacing: (dir: number) => void;
  teleport: (x: number, y: number) => void;
  toggleResume: () => void;
  toggleFastTravel: () => void;
  reset: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      entered: false,
      discovered: [],
      activePanel: null,
      playerX: SPAWN_POSITION.x,
      playerY: SPAWN_POSITION.y,
      playerAnim: 'idle',
      facing: 0,
      showResume: false,
      showFastTravel: false,

      enter: () => set({ entered: true }),
      discover: (id) =>
        set((s) => ({
          discovered: s.discovered.includes(id) ? s.discovered : [...s.discovered, id],
        })),
      openPanel: (id) => set({ activePanel: id }),
      setPlayer: (x, y) => set({ playerX: x, playerY: y }),
      setAnim: (anim) => set({ playerAnim: anim }),
      setFacing: (dir) => set({ facing: dir }),
      teleport: (x, y) =>
        set({ playerX: x, playerY: y, activePanel: null, showFastTravel: false }),
      toggleResume: () => set((s) => ({ showResume: !s.showResume })),
      toggleFastTravel: () => set((s) => ({ showFastTravel: !s.showFastTravel })),
      reset: () =>
        set({
          entered: false,
          discovered: [],
          activePanel: null,
          playerX: SPAWN_POSITION.x,
          playerY: SPAWN_POSITION.y,
          playerAnim: 'idle',
          facing: 0,
          showResume: false,
          showFastTravel: false,
        }),
    }),
    { name: 'abrar-portfolio-rpg' }
  )
);
