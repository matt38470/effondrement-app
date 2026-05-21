"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
// J'ai mis les chemins en relatif par rapport à l'ancien, ajuste si tes composants sont ailleurs
import { useGameStore } from '@/src/store/gameStore'; 
import Gauge from '@/src/components/Gauge';
import ArchivesModal from '@/src/components/ArchivesModal';
import { getUnitPathById } from '@/src/lib/narrative/units';
import type { NarrativeUnit, NarrativeChoice } from '@/src/types/narrative';

export default function UnitRenderer({ unit }: { unit: NarrativeUnit }) {
  const router = useRouter();
  // Zustand ne gère PLUS la scène actuelle, seulement les stats !
  const { gauges, archives, applyChoice, resetGame } = useGameStore();
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [unit.id]);

  // Nouvelle fonction pour gérer un choix
  const handleChoice = (choice: NarrativeChoice) => {
    // 1. Mettre à jour les jauges si le choix a des effets
    if (choice.effects) {
        applyChoice(choice.effects, choice.unlockArchive);
    }
    
    // 2. Débloquer une archive si besoin (si tu rajoutes `unlocks` dans choice)
    // if (choice.unlocks) unlockArchive(choice.unlocks);

    // 3. Changer de page avec Next.js
    const nextPath = getUnitPathById(choice.nextUnitId);
    router.push(nextPath);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans pb-20 selection:bg-orange-200">
      
      {/* HEADER JAUGES (Identique à ton code) */}
      <header className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800 p-3 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-x-2 gap-y-3">
            <Gauge label="Alerte" value={gauges.alerte} colorTheme="red" description="Le degré d'information de l'institution" />
            <Gauge label="Charge" value={gauges.charge} colorTheme="orange" description="Le stress psychologique de Thomas" />
            {/* Mets toutes tes autres jauges ici */}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6 md:p-8 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit.id} // C'est CA qui déclenche l'animation à chaque changement de page !
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* HEADER DE LA SCÈNE (Titre + Heure) */}
            <h1 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">
              SCÈNE — {unit.title} • {unit.timeLabel}
            </h1>
            
            {/* TEXTE SOUS FORME DE PARAGRAPHES PROPRES */}
            <div className="text-lg md:text-xl leading-relaxed text-gray-800 mb-12 space-y-6">
              {unit.textBlocks.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            {/* CHOIX */}
            <div className="flex flex-col gap-4">
              {unit.choices.map((choice, index) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  className="group p-4 text-left border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow-md bg-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-orange-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20"></div>
                  
                  {unit.choices.length > 1 && (
                    <span className="block text-sm font-semibold text-gray-500 group-hover:text-orange-600 mb-1 relative z-10">
                      Choix {index + 1}
                    </span>
                  )}
                  
                  <span className={`block font-medium relative z-10 ${unit.choices.length === 1 ? 'text-center text-orange-600 font-semibold' : 'text-gray-900'}`}>
                    {choice.label}
                  </span>
                </button>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* BOUTON ARCHIVES */}
      <button 
        onClick={() => setIsArchiveOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 border border-gray-700 text-orange-500 p-4 rounded-full shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all z-40 flex items-center justify-center font-bold tracking-widest text-xs uppercase"
      >
        Dossiers ({archives?.length || 0})
      </button>

      /* MODAL (Vérifie que ce chemin existe) */
      <ArchivesModal isOpen={isArchiveOpen} onClose={() => setIsArchiveOpen(false)} unlockedArchives={archives} /> 

    </div>
  );
}