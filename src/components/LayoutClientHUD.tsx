"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReaderMenu from "./ReaderMenu";
import Gauge from "./Gauge";
import ArchivesModal from "./ArchivesModal";
import { useGameStore } from "@/src/store/gameStore";

export default function LayoutClientHUD({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
  gauges,
  archives,
  unlockedCharacters,
  newArchives,
  newCharacters,
  settings,
  choiceHistory,
  currentUnitId,
  markArchivesSeen,
  markCharactersSeen,
  resetGame,
} = useGameStore();

  const [isDeskOpen, setIsDeskOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const readingFontClass =
    settings.fontFamily === "serif"
      ? "font-serif"
      : settings.fontFamily === "mono"
      ? "font-mono tracking-tight"
      : "font-sans";

  const notes = useMemo(() => {
    const output: string[] = [];

    if (gauges.charge >= 70) {
      output.push("Charge mentale élevée : risque de décisions impulsives.");
    }
    if (gauges.alerte >= 70) {
      output.push("Niveau d’alerte en hausse : l’anomalie attire l’attention.");
    }
    if (gauges.integrite <= 35) {
      output.push("Intégrité fragilisée : arbitrages moraux sous tension.");
    }
    if (gauges.preparation <= 30) {
      output.push("Préparation insuffisante : vulnérabilité en cas de bascule rapide.");
    }
    if (gauges.discretion <= 30) {
      output.push("Discrétion compromise : exposition accrue au radar hiérarchique.");
    }
    if (gauges.cohesion <= 35) {
      output.push("Cohésion en baisse : isolement progressif vis-à-vis de l’extérieur.");
    }

    if (output.length === 0) {
      output.push("Aucune dérive critique immédiate détectée.");
    }

    return output.slice(0, 2);
  }, [gauges]);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-40 w-full border-b border-black/10 bg-white/75 backdrop-blur-md dark:border-white/10 dark:bg-[#0b0b0c]/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-orange-700 dark:text-orange-400">
              Dossier NW-7
            </div>

            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Lecture en cours · chapitre 1
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDeskOpen(true)}
              className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700 transition hover:bg-orange-500/15 dark:text-orange-300"
            >
              Bureau NW-7
            </button>

            <ReaderMenu />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl gap-10 px-4 pb-16 pt-28 md:px-6">
        <main className="min-w-0 flex-1">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
            <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
              Roman interactif
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
              Lecture immersive
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/10">
              Décisions persistantes
            </span>
          </div>

          <article
            className={`max-w-2xl ${readingFontClass}`}
            style={{
              fontSize: `${settings.fontSize}px`,
              lineHeight: 1.9,
            }}
          >
            {children}
          </article>
        </main>

        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-28 space-y-4">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                État système
              </div>

              <div className="space-y-2">
                <Gauge
                  idKey="alerte"
                  label="Alerte"
                  value={gauges.alerte}
                  colorTheme="red"
                  description="Le degré d’information de l’institution."
                />
                <Gauge
                  idKey="charge"
                  label="Charge"
                  value={gauges.charge}
                  colorTheme="orange"
                  description="Le stress psychologique de Thomas."
                />
                <Gauge
                  idKey="integrite"
                  label="Intégrité"
                  value={gauges.integrite}
                  colorTheme="blue"
                  description="Votre boussole éthique dans la crise."
                />
                <Gauge
                  idKey="preparation"
                  label="Préparation"
                  value={gauges.preparation}
                  colorTheme="green"
                  description="Votre capacité à encaisser l’arrivée de NW-7."
                />
                <Gauge
                  idKey="discretion"
                  label="Discrétion"
                  value={gauges.discretion}
                  colorTheme="purple"
                  description="Votre exposition au radar hiérarchique."
                />
                <Gauge
                  idKey="cohesion"
                  label="Cohésion"
                  value={gauges.cohesion}
                  colorTheme="teal"
                  description="La solidité de vos liens avec l’extérieur."
                />
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 text-sm leading-relaxed text-neutral-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                Note rapide
              </div>

              {notes[0]}
            </div>
          </div>
        </aside>
      </div>

      <ArchivesModal
        isOpen={isDeskOpen}
        onClose={() => setIsDeskOpen(false)}
        unlockedArchives={archives}
        unlockedCharacters={unlockedCharacters}
        newArchives={newArchives}
        newCharacters={newCharacters}
        markArchivesSeen={markArchivesSeen}
        markCharactersSeen={markCharactersSeen}
        choiceHistory={choiceHistory}
        gauges={gauges}
        notes={notes}
        currentUnitId={currentUnitId}
        onRestart={resetGame}
      />
    </div>
  );
}