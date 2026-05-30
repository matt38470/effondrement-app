"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useGameStore } from "@/src/store/gameStore";

export default function ReaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const { settings, updateSettings } = useGameStore();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme;

  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-sm font-bold text-gray-800 transition-colors hover:bg-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-orange-900/30"
      >
        Aa
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-[#151515]">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
              Luminosité
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex-1 rounded border py-2 ${
                  currentTheme === "light"
                    ? "border-orange-500 bg-orange-50 text-orange-500"
                    : "border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400"
                }`}
              >
                ☀️ Clair
              </button>

              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex-1 rounded border py-2 ${
                  currentTheme === "dark"
                    ? "border-orange-500 bg-orange-900/20 text-orange-500"
                    : "border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400"
                }`}
              >
                🌙 Sombre
              </button>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
              Typographie
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => updateSettings({ fontFamily: "sans" })}
                className={`flex-1 rounded border py-2 font-sans ${
                  settings.fontFamily === "sans"
                    ? "border-orange-500 bg-orange-50 text-orange-500 dark:bg-orange-900/20"
                    : "border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400"
                }`}
              >
                Moderne
              </button>

              <button
                type="button"
                onClick={() => updateSettings({ fontFamily: "serif" })}
                className={`flex-1 rounded border py-2 font-serif ${
                  settings.fontFamily === "serif"
                    ? "border-orange-500 bg-orange-50 text-orange-500 dark:bg-orange-900/20"
                    : "border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-400"
                }`}
              >
                Classique
              </button>
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
              Taille
            </span>

            <div className="flex gap-2 text-gray-600 dark:text-gray-400">
              <button
                type="button"
                onClick={() =>
                  updateSettings({ fontSize: Math.max(14, settings.fontSize - 2) })
                }
                className="flex-1 rounded border border-gray-300 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                A-
              </button>

              <div className="flex flex-1 items-center justify-center py-2 text-center font-mono text-sm">
                {settings.fontSize}px
              </div>

              <button
                type="button"
                onClick={() =>
                  updateSettings({ fontSize: Math.min(26, settings.fontSize + 2) })
                }
                className="flex-1 rounded border border-gray-300 py-2 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}