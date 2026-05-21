"use client";
import React, { useState } from 'react';
import Gauge from './Gauge';
import ReaderMenu from './ReaderMenu'; // 1. On importe le menu !
import { useGameStore } from '@/src/store/gameStore'; 
import ArchivesModal from './ArchivesModal';


export default function LayoutClientHUD({ children }: { children: React.ReactNode }) {
  const { gauges, archives, settings } = useGameStore(); // 2. On récupère les settings
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isHudOpen, setIsHudOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-200">
      
      {/* HEADER */}
<header className="fixed top-0 w-full bg-[#F9FAFB]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm transition-all">
        
        {/* Barre de contrôle toujours visible */}
        <div className="p-3 max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setIsHudOpen(!isHudOpen)} 
            className="md:hidden flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-gray-900 px-3 py-2 rounded"
          >
            {isHudOpen ? "Masquer les Jauges" : "Afficher les Jauges"}
          </button>
          
          
          <ReaderMenu />
        </div>

        {/* Panneau des jauges (Caché sur mobile sauf si isHudOpen est true, toujours visible sur bureau) */}
        <div className={`
          max-w-4xl mx-auto px-3 pb-3 transition-all duration-300 ease-in-out
          ${isHudOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:max-h-96 md:opacity-100 md:overflow-visible'}
        `}>
          <div className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-x-2 gap-y-3 pt-2 border-t border-gray-200 dark:border-gray-800 md:border-t-0 md:pt-0">
            <Gauge idKey="alerte" label="Alerte" value={gauges.alerte} colorTheme="red" description="Le degré d'information de l'institution" />
            <Gauge idKey="charge" label="Charge" value={gauges.charge} colorTheme="orange" description="Le stress psychologique de Thomas" />
            <Gauge idKey="integrite" label="Intégrité" value={gauges.integrite} colorTheme="blue" description="Votre boussole éthique" />
            <Gauge idKey="preparation" label="Préparation" value={gauges.preparation} colorTheme="green" description="Capacité à encaisser NW-7" />
            <Gauge idKey="discretion" label="Discrétion" value={gauges.discretion} colorTheme="purple" description="Radar hiérarchique" />
            <Gauge idKey="cohesion" label="Cohésion" value={gauges.cohesion} colorTheme="teal" description="Relations avec l'extérieur" />
          </div>
        </div>
      </header>

      {/* ZONE DE TEXTE */}
      <div 
        className={`flex-grow pt-32 pb-24 max-w-2xl mx-auto w-full transition-all duration-300 ${settings.fontFamily === 'serif' ? 'font-serif' : 'font-sans'}`}
        style={{ fontSize: `${settings.fontSize}px` }}
      >
        {children}
      </div>

      {/* BOUTON DOSSIERS */}
      <button 
        onClick={() => setIsArchiveOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 border border-gray-700 text-orange-500 p-4 rounded-full shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all z-40 flex items-center justify-center font-bold tracking-widest text-xs uppercase"
      >
        Dossiers ({archives?.length || 0})
      </button>

      {isArchiveOpen && (
        <ArchivesModal 
          isOpen={isArchiveOpen} 
          onClose={() => setIsArchiveOpen(false)} 
          unlockedArchives={archives} 
        />
      )}
    </div>
  );
}