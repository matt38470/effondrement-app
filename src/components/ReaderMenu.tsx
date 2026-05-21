"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useGameStore } from '@/src/store/gameStore';
import Link from 'next/link';

export default function ReaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const { settings, updateSettings } = useGameStore();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div className="relative flex gap-2 items-center">
      
      {/* 1. NOUVEAU BOUTON : HISTORIQUE */}
      <Link 
        href="/history"
        className="px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md font-bold text-sm hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors border border-gray-300 dark:border-gray-700 flex items-center gap-2"
        title="Voir l'historique de vos choix"
      >
        <span>📂</span>
        <span className="hidden md:inline">Historique</span>
      </Link>

      {/* 2. TON BOUTON DE PARAMÈTRES (Aa) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md font-bold text-sm hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors border border-gray-300 dark:border-gray-700"
      >
        Aa
      </button>

      {/* LE MENU DÉROULANT (Identique à avant) */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#151515] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl p-4 z-50 flex flex-col gap-4">
          
          {/* Thème */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Luminosité</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setTheme('light')} 
                className={`flex-1 py-2 rounded border ${currentTheme === 'light' ? 'border-orange-500 text-orange-500 bg-orange-50' : 'border-gray-300 text-gray-600 dark:text-gray-400'}`}>
                ☀️ Clair
              </button>
              <button 
                onClick={() => setTheme('dark')} 
                className={`flex-1 py-2 rounded border ${currentTheme === 'dark' ? 'border-orange-500 text-orange-500 bg-orange-900/20' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}>
                🌙 Sombre
              </button>
            </div>
          </div>

          {/* Typographie */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Typographie</span>
            <div className="flex gap-2">
              <button 
                onClick={() => updateSettings({ fontFamily: 'sans' })} 
                className={`flex-1 py-2 rounded border font-sans ${settings.fontFamily === 'sans' ? 'border-orange-500 text-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}>
                Moderne
              </button>
              <button 
                onClick={() => updateSettings({ fontFamily: 'serif' })} 
                className={`flex-1 py-2 rounded border font-serif ${settings.fontFamily === 'serif' ? 'border-orange-500 text-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}>
                Classique
              </button>
            </div>
          </div>

          {/* Taille */}
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-bold">Taille</span>
            <div className="flex gap-2 text-gray-600 dark:text-gray-400">
              <button onClick={() => updateSettings({ fontSize: Math.max(14, settings.fontSize - 2) })} className="flex-1 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">A-</button>
              <div className="flex-1 py-2 text-center font-mono text-sm flex items-center justify-center">{settings.fontSize}px</div>
              <button onClick={() => updateSettings({ fontSize: Math.min(26, settings.fontSize + 2) })} className="flex-1 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">A+</button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}