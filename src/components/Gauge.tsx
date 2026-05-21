"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useGameStore } from '@/src/store/gameStore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface GaugeProps {
  idKey: "alerte" | "charge" | "integrite" | "preparation" | "discretion" | "cohesion";
  label: string;
  value: number;
  colorTheme: "red" | "orange" | "blue" | "green" | "purple" | "teal";
  description: string;
}

export default function Gauge({ idKey, label, value, colorTheme, description }: GaugeProps) {
  const { lastEffects } = useGameStore();
  const [showFeedback, setShowFeedback] = useState(false);
  const [impactValue, setImpactValue] = useState<number | null>(null);

  useEffect(() => {
    if (lastEffects && lastEffects[idKey] !== undefined) {
      setImpactValue(lastEffects[idKey]!);
      setShowFeedback(true);
      
      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [lastEffects, idKey]);

  const colorMap = {
    red: { bg: 'bg-red-500', text: 'text-red-500', shadow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', shadow: 'shadow-[0_0_8px_rgba(249,115,22,0.6)]' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', shadow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]' },
    green: { bg: 'bg-green-500', text: 'text-green-500', shadow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', shadow: 'shadow-[0_0_8px_rgba(168,85,247,0.6)]' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-500', shadow: 'shadow-[0_0_8px_rgba(20,184,166,0.6)]' },
  };

  const theme = colorMap[colorTheme] || colorMap.orange;

  return (
    <div className="group relative flex flex-col w-24 md:w-32 cursor-default">
      
      <div className="flex justify-between items-end mb-1 relative h-4">
        {/* Le Label (Alerte, Charge...) */}
        <span className={`absolute left-0 bottom-0 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${showFeedback ? theme.text : 'text-gray-400 group-hover:' + theme.text}`}>
          {label}
        </span>
        
        {/* Le Feedback (+10 / -5) avec Framer Motion */}
        <AnimatePresence>
          {showFeedback && (
            <motion.span 
              key="feedback"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className={`absolute right-0 bottom-0 text-[10px] md:text-xs font-bold ${impactValue! > 0 ? theme.text : 'text-gray-500'}`}
            >
              {impactValue! > 0 ? '+' : ''}{impactValue}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Le Pourcentage (%) : Géré purement par Tailwind (CSS natif) pour le hover */}
        {/* On utilise un ternaire pour le cacher s'il y a une animation en cours */}
        <span 
          className={`absolute right-0 bottom-0 text-[10px] md:text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme.text} ${showFeedback ? 'hidden' : 'block'}`}
        >
          {value}%
        </span>
      </div>

      <div className={`w-full h-2 md:h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden transition-all duration-300 ${showFeedback ? 'ring-2 ring-offset-1 ring-offset-white dark:ring-offset-[#0a0a0a] ' + theme.shadow : ''}`}>
        <motion.div 
          className={`h-full rounded-full ${theme.bg} ${showFeedback ? theme.shadow : ''}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 p-2 bg-[#1A1A1A] border border-gray-700 text-gray-300 text-[10px] md:text-xs text-center rounded opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-[100] shadow-xl">
        {description}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A1A1A] border-t border-l border-gray-700 transform rotate-45"></div>
      </div>
    </div>
  );
}