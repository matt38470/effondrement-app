import type { MentalState } from "@/src/store/gameStore";
import type { DeskJournalEntry } from "@/src/types/narrative";

type JournalTone = NonNullable<DeskJournalEntry["tone"]>;

export type MentalStateConfig = {
  label: string;
  quickNote: string;
  journalTone: JournalTone;
  statusLabel: string;
  blockedChoiceThemes: string[];
  narrativeCue: string;
};

export const MENTAL_STATE_CONFIG: Record<MentalState, MentalStateConfig> = {
  stable: {
    label: "Stable",
    quickNote: "État stable : capacité de discernement préservée.",
    journalTone: "lucid",
    statusLabel: "Lucide",
    blockedChoiceThemes: [],
    narrativeCue: "Thomas conserve une lecture claire des faits et de leurs implications.",
  },

  fatigue: {
    label: "Fatigue",
    quickNote: "Charge mentale élevée : risque de décisions impulsives.",
    journalTone: "anxious",
    statusLabel: "Fatigué",
    blockedChoiceThemes: ["patience", "analyse longue", "temporisation"],
    narrativeCue: "Les pensées se contractent, l’effort d’analyse devient plus coûteux.",
  },

  pression: {
    label: "Pression",
    quickNote: "Pression critique : difficulté à temporiser.",
    journalTone: "focused",
    statusLabel: "Sous pression",
    blockedChoiceThemes: ["attente", "négociation lente", "prise de recul"],
    narrativeCue: "L’urgence prend le dessus et pousse Thomas à agir avant de tout relier.",
  },

  paranoia: {
    label: "Paranoïa",
    quickNote: "Hypervigilance accrue : tendance à surinterpréter les signaux.",
    journalTone: "anxious",
    statusLabel: "Hypervigilant",
    blockedChoiceThemes: ["confiance", "transparence", "coopération ouverte"],
    narrativeCue: "Chaque détail paraît chargé d’intention, même lorsqu’il ne l’est pas forcément.",
  },

  isolement: {
    label: "Isolement",
    quickNote: "Repli relationnel : demander de l’aide devient plus difficile.",
    journalTone: "cold",
    statusLabel: "En retrait",
    blockedChoiceThemes: ["alliance", "appel à l’aide", "coordination"],
    narrativeCue: "Thomas se retire peu à peu du lien aux autres et se replie sur ses propres arbitrages.",
  },
};

export function getMentalStateConfig(state: MentalState): MentalStateConfig {
  return MENTAL_STATE_CONFIG[state];
}