import type { AccessLevel, EntitlementKey } from "./access";

export type StateEffect = {
  key: "fatigue" | "preparation" | "isolement" | "paranoia"; // Ajoute tes propres jauges ici
  delta: number; // ex: +1 ou -1
};

export type Condition = {
  key: string;
  operator: "eq" | "neq" | "gte" | "lte" | "includes";
  value: string | number | boolean;
};

export type Unlock = {
  type: "memory" | "archive" | "history";
  id: string;
};

export type NarrativeChoice = {
  id: string;
  label: string;
  hint?: string;
  nextUnitId: string;
  effects?: GaugeEffects;     // <-- On utilise notre système simple de jauges
  conditions?: Condition[];
  unlockArchive?: string;  
}

export type NarrativeUnit = {
  id: string;
  chapterId: string;
  chapterNumber: number;
  unitNumber: string;
  title: string;
  location: string;
  timeLabel: string;
  accessLevel: AccessLevel;
  countdownVisible: boolean;
  countdownLabel?: string;
  textBlocks: string[];
  imagePrompt?: string;    
  choices: NarrativeChoice[];
  unlocks?: Unlock[];
};

export type Chapter = {
  id: string;
  chapterNumber: number;
  title: string;
  accessLevel: AccessLevel;
  requiredEntitlement?: EntitlementKey;
  teaser?: string;
  unitIds: string[];
};

export interface GaugeEffects {
  alerte?: number;
  charge?: number;
  integrite?: number;
  preparation?: number;
  discretion?: number;
  cohesion?: number;
}

