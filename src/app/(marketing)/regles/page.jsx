"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/src/store/gameStore";
import { useEffect, useState } from "react";

export default function RulesPage() {
  const router = useRouter();
  const { currentUnitId, choiceHistory, resetGame } = useGameStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasRunInProgress =
    mounted &&
    choiceHistory.length > 0 &&
    !!currentUnitId &&
    currentUnitId !== "1.1.1";

  const handleContinue = () => {
    router.push(`/read/1/${currentUnitId}`);
  };

  const handleStartFresh = () => {
    router.push("/read/1/1.1.1");
  };

  const handleReset = () => {
    resetGame();
    router.replace("/read/1/1.1.1");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-10 text-foreground selection:bg-orange-500/30 md:px-12">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold uppercase tracking-widest text-neutral-950 dark:text-white">
            Avertissement Système
          </h1>

          <p className="text-lg text-neutral-600 dark:text-gray-400">
            Ce roman est interactif. Les conséquences de vos choix modifieront la psychologie
            de Thomas et son environnement. Surveillez ces 6 métriques vitales :
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-red-500">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Alerte
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Le degré d'information de l'institution. Lancer l'alerte trop tôt déclenche la panique,
              trop tard, la catastrophe.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-orange-500">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Charge Mentale
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Le stress de Thomas. Mensonges et isolement saturent cette jauge. Si elle explose,
              vous perdrez le contrôle sur vos décisions.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-blue-500">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              Intégrité
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Votre boussole éthique. Jouer le jeu de l'entreprise ou rester fidèle à la vérité
              technique, quitte à être limogé.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-green-500">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Préparation
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Votre capacité matérielle et intellectuelle à encaisser l'effondrement du réseau NW-7.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-purple-500">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              Discrétion
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              Rester sous le radar de la direction informatique. Trop de fouilles attireront
              la surveillance sur vous.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-[#151515]">
            <h3 className="mb-2 flex items-center gap-2 font-bold uppercase tracking-wider text-teal-500">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              Cohésion
            </h3>
            <p className="text-sm text-neutral-600 dark:text-gray-400">
              L'état de vos relations avec vos proches (famille, amis). Ne laissez pas la crise
              vous couper de vos alliés.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          {mounted && hasRunInProgress ? (
            <>
              <button
                type="button"
                onClick={handleContinue}
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-500"
              >
                Continuer l'analyse
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
              >
                Recommencer depuis le début
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleStartFresh}
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-500"
            >
              J'ai compris. Lancer l'analyse.
            </button>
          )}
        </div>
      </div>
    </div>
  );
}