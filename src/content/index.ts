import type { NarrativeUnit } from '@/src/types/narrative';

import { scene1 } from './chapters/chapter-1/scene-1';
import { scene2 } from './chapters/chapter-1/scene-2';
import { scene3 } from './chapters/chapter-1/scene-3';
import { scene4 } from './chapters/chapter-1/scene-4';
import { scene5 } from './chapters/chapter-1/scene-5';
import { scene6 } from './chapters/chapter-1/scene-6';
import { scene7 } from './chapters/chapter-1/scene-7';
import { scene8 } from './chapters/chapter-1/scene-8';
import { scene9 } from './chapters/chapter-1/scene-9';
import { scene10 } from './chapters/chapter-1/scene-10';
import { scene11 } from './chapters/chapter-1/scene-11';
import { scene12 } from './chapters/chapter-1/scene-12';

const chapter1Units: NarrativeUnit[] = [
  ...scene1,
  ...scene2,
  ...scene3,
  ...scene4,
  ...scene5,
  ...scene6,
  ...scene7,
  ...scene8,
  ...scene9,
  ...scene10,
  ...scene11,
  ...scene12,
];

export const gameContent: Record<number, NarrativeUnit[]> = {
  1: chapter1Units,
};

export const getScene = (
  chapterNumber: string | number,
  unitNumber: string
): NarrativeUnit | null => {
  const chapter = gameContent[Number(chapterNumber)];
  if (!chapter) return null;

  return chapter.find((scene) => scene.unitNumber === unitNumber) || null;
};
