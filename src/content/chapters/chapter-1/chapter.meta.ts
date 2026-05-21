import type { Chapter } from "@/src/types/narrative";

export const chapter1Meta: Chapter = {
  id: "chapter-1",
  chapterNumber: 1,
  title: "La pente",
  accessLevel: "public", // Accès gratuit pour tout le monde
  teaser: "Thomas regarde l'écran depuis plusieurs minutes. Quelque chose dans la courbe résiste.",
  unitIds: ["ch1-u01", "ch1-u02"] // Tu pourras ajouter les autres ID au fur et à mesure (ch1-u03, etc.)
};