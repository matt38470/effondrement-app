import type { NarrativeUnit } from '@/src/types/narrative';

// On importe toutes nos scènes (chaque scène est un tableau d'unités)
import { scene1 } from './chapters/chapter-1/scene-1';
import { scene2 } from './chapters/chapter-1/scene-2'; // Quand tu l'auras créée
// import { scene3 } from './chapter-1/scene-3';

// On fusionne toutes les scènes du Chapitre 1 dans un seul grand tableau
const chapter1Units = [
  ...scene1,
  ...scene2,
  // ...scene3,
];

// Le registre global
export const gameContent: Record<number, NarrativeUnit[]> = {
  1: chapter1Units,
};

// La fonction magique qui trouve la scène à partir de l'URL
export const getScene = (chapterNumber: string | number, unitNumber: string): NarrativeUnit | null => {
  const chapter = gameContent[Number(chapterNumber)];
  if (!chapter) return null;
  return chapter.find(scene => scene.unitNumber === unitNumber) || null;
};