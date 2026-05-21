import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GaugeEffects {
  alerte?: number;
  charge?: number;
  integrite?: number;
  preparation?: number;
  cohesion?: number;
  discretion?: number;
}

export interface GaugeState {
  alerte: number;
  charge: number;
  integrite: number;
  preparation: number;
  cohesion: number;
  discretion: number;
}

export interface ChoiceHistoryEntry {
  choiceId: string;
  unitId: string;
  chapterNumber: number;
  unitNumber: string;
  sceneTitle: string;
  location: string;
  timeLabel: string;
  choiceLabel: string;
  otherOptions?: string[];
  gaugesSnapshot: GaugeState;
  gaugeChanges?: GaugeEffects;
}

export interface GameState {
  gauges: GaugeState;
  archives: string[];
  settings: {
    soundEnabled: boolean;
    textSpeed: number;
    fontSize: number;
    fontFamily: 'sans' | 'serif' | 'mono';
  };
  lastEffects: GaugeEffects | null;
  madeChoices: string[];
  choiceHistory: ChoiceHistoryEntry[];

  applyChoice: (effects?: GaugeEffects, newArchive?: string, choiceId?: string) => void;
  addChoiceToHistory: (entry: ChoiceHistoryEntry) => void;
  clearLastEffects: () => void;
  resetGame: () => void;
  updateSettings: (newSettings: Partial<GameState['settings']>) => void;
}

const initialGauges: GaugeState = {
  alerte: 10,
  charge: 50,
  integrite: 80,
  preparation: 20,
  cohesion: 60,
  discretion: 40,
};

const initialArchives: string[] = [];
const initialChoices: string[] = [];

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      gauges: initialGauges,
      archives: initialArchives,
      settings: {
        soundEnabled: true,
        textSpeed: 50,
        fontSize: 18,
        fontFamily: 'sans',
      },
      lastEffects: null,
      madeChoices: initialChoices,
      choiceHistory: [],

      applyChoice: (effects, newArchive, choiceId) =>
        set((state) => {
          if (choiceId && state.madeChoices.includes(choiceId)) {
            return state;
          }

          const updatedArchives =
            newArchive && !state.archives.includes(newArchive)
              ? [...state.archives, newArchive]
              : state.archives;

          const updatedChoices = choiceId
            ? [...state.madeChoices, choiceId]
            : state.madeChoices;

          return {
            archives: updatedArchives,
            madeChoices: updatedChoices,
            lastEffects: effects || null,
            gauges: {
              alerte: Math.min(100, Math.max(0, state.gauges.alerte + (effects?.alerte || 0))),
              charge: Math.min(100, Math.max(0, state.gauges.charge + (effects?.charge || 0))),
              integrite: Math.min(100, Math.max(0, state.gauges.integrite + (effects?.integrite || 0))),
              preparation: Math.min(100, Math.max(0, state.gauges.preparation + (effects?.preparation || 0))),
              cohesion: Math.min(100, Math.max(0, state.gauges.cohesion + (effects?.cohesion || 0))),
              discretion: Math.min(100, Math.max(0, state.gauges.discretion + (effects?.discretion || 0))),
            },
          };
        }),

      addChoiceToHistory: (entry) =>
        set((state) => ({
          choiceHistory: [...state.choiceHistory, entry],
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      clearLastEffects: () => set({ lastEffects: null }),

      resetGame: () =>
        set({
          gauges: initialGauges,
          archives: initialArchives,
          madeChoices: initialChoices,
          lastEffects: null,
          choiceHistory: [],
          settings: {
            soundEnabled: true,
            textSpeed: 50,
            fontSize: 18,
            fontFamily: 'sans',
          },
        }),
    }),
    {
      name: 'game-storage',
    }
  )
);