"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NarrativeUnit, Condition } from "@/src/types/narrative"; // !!! importer Condition
import { useGameStore } from "@/src/store/gameStore";
import { useEffect } from "react";

export default function SceneReaderClient({ scene }: { scene: NarrativeUnit }) {
  const router = useRouter();

  const { applyChoice, addChoiceToHistory, settings, gauges } = useGameStore();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [scene.id]);

  const getFontClass = () => {
    switch (settings.fontFamily) {
      case "serif":
        return "font-serif";
      case "mono":
        return "font-mono tracking-tight";
      case "sans":
      default:
        return "font-sans";
    }
  };

  const checkChoiceConditions = (conditions?: Condition[]): boolean => {
    if (!conditions || conditions.length === 0) return true;

    return conditions.every((cond) => {
      const current = (gauges as any)[cond.key];

      switch (cond.operator) {
        case "eq":
          return current === cond.value;
        case "neq":
          return current !== cond.value;
        case "gte": {
          const target =
            typeof cond.value === "number" ? cond.value : Number(cond.value);
          return typeof current === "number" && current >= target;
        }
        case "lte": {
          const target =
            typeof cond.value === "number" ? cond.value : Number(cond.value);
          return typeof current === "number" && current <= target;
        }
        case "includes":
          return Array.isArray(current) && current.includes(cond.value);
        default:
          return true;
      }
    });
  };

  return (
    <main
      className={`max-w-2xl mx-auto p-6 md:p-8 mt-6 ${getFontClass()}`}
      style={{ fontSize: `${settings.fontSize}px`, lineHeight: 1.8 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {scene.imagePrompt && scene.imagePrompt !== "None" && (
            <div className="w-full mb-8 overflow-hidden rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <img
                src={`/images/${scene.imagePrompt}.jpg`}
                alt={scene.title}
                className="w-full object-cover max-h-64 md:max-h-80 opacity-90 transition-opacity hover:opacity-100 duration-500"
              />
            </div>
          )}

          <div className="flex justify-between items-end mb-6">
            <h1 className="text-sm font-bold text-orange-600 uppercase tracking-widest font-sans">
              {scene.title}
            </h1>
            <span className="text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
              {scene.timeLabel}
            </span>
          </div>

          <div className="leading-relaxed mb-12 space-y-6 text-gray-900 dark:text-gray-200">
            {scene.textBlocks.map((block, idx) => (
              <div key={idx} dangerouslySetInnerHTML={{ __html: block }} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {scene.choices.map((choice) => {
              const available = checkChoiceConditions(choice.conditions);

              return (
                <button
                  key={choice.id}
                  disabled={!available}
                  onClick={() => {
                    if (!available) return;

                    applyChoice(
                      choice.effects,
                      choice.unlockArchive,
                      choice.id
                    );

                    const updatedGauges = useGameStore.getState().gauges;

                    const hasGaugeChange =
                      !!choice.effects &&
                      Object.values(choice.effects).some(
                        (value) =>
                          typeof value === "number" && value !== 0
                      );

                    const hasArchiveUnlock = !!choice.unlockArchive;

                    if (hasGaugeChange || hasArchiveUnlock) {
                      addChoiceToHistory({
                        choiceId: choice.id,
                        unitId: scene.id,
                        chapterNumber: scene.chapterNumber,
                        unitNumber: scene.unitNumber,
                        sceneTitle: scene.title,
                        location: scene.location,
                        timeLabel: scene.timeLabel,
                        choiceLabel: choice.label,
                        otherOptions: scene.choices
                          .filter((c) => c.id !== choice.id)
                          .map((c) => c.label),
                        gaugesSnapshot: updatedGauges,
                        gaugeChanges: choice.effects,
                      });
                    }

                    let unitNumberForUrl = choice.nextUnitId;
                    if (choice.nextUnitId.startsWith("ch1-u")) {
                      const numPart = choice.nextUnitId.split("-u")[1];
                      const num = parseInt(numPart, 10);
                      unitNumberForUrl = `1.${num}`;
                    }

                    router.push(`/read/1/${unitNumberForUrl}`);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group font-sans
                    ${
                      available
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md border border-orange-600"
                        : "bg-gray-800 text-gray-400 border border-gray-700 opacity-60 cursor-not-allowed"
                    }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {choice.label}
                    </span>
                    {choice.hint && (
                      <span className="text-xs mt-1 italic opacity-90">
                        {choice.hint}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}