import { unit_1_1 } from "@/src/content/chapters/chapter-1/scene-1";
import { unit_1_2 } from "@/src/content/chapters/chapter-1/unit-1-2";
import type { NarrativeUnit } from "@/src/types/narrative";

// Un tableau temporaire qui contient toutes nos unités pour l'instant
const allUnits: NarrativeUnit[] = [unit_1_1, unit_1_2];

export function getUnitByRouteParams(chapterNumber: string, unitNumber: string) {
  return allUnits.find(
    (unit) => unit.chapterNumber.toString() === chapterNumber && unit.unitNumber === unitNumber
  );
}

// Fonction utilitaire pour trouver l'URL d'une unité à partir de son ID (ex: "ch1-u02" -> "/read/1/1-2")
export function getUnitPathById(id: string) {
  const unit = allUnits.find(u => u.id === id);
  if (!unit) return "/";
  return `/read/${unit.chapterNumber}/${unit.unitNumber}`;
}