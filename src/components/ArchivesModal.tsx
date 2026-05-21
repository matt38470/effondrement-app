"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Plus tard, cette base de données pourra être dans un vrai fichier JSON/TS séparé
const ARCHIVES_DB = {
  "thomas_dossier": {
    id: "thomas_dossier",
    name: "THOMAS",
    role: "Analyste de données",
    status: "SUJET D'OBSERVATION",
    image: "ThomasBureau", // Le nom de l'image de profil
    details: [
      "Employé depuis 8 ans au pôle supervision.",
      "Profil psychologique : méthodique, tendance à l'isolement en situation de crise."
    ]
  },
  "samirdossier": {
    id: "samirdossier",
    name: "SAMIR HADJ",
    role: "Direction Technique RFT",
    status: "ALLIÉ POTENTIEL",
    image: "None", 
    details: [
      "Rencontré en formation interministérielle.",
      "Expert en structures de charge."
    ]
  }
};

interface ArchivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedArchives: string[];
}

export default function ArchivesModal({ isOpen, onClose, unlockedArchives }: ArchivesModalProps) {
  
  // Bloquer le scroll de la page quand le modal est ouvert
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* L'arrière-plan flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* La fenêtre du Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl h-[85vh] bg-[#0a0a0a] border border-gray-800 rounded-xl shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            {/* Header du Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-white text-lg font-bold tracking-widest uppercase">Base de données NW-7</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenu : Liste des dossiers */}
            <div className="p-6 overflow-y-auto flex-grow bg-[#111]">
              {unlockedArchives.length === 0 ? (
                <p className="text-gray-500 text-center mt-10 italic">Aucun dossier déverrouillé pour le moment.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {unlockedArchives.map(id => {
                    // @ts-ignore : On ignore l'erreur TypeScript pour le dictionnaire
                    const data = ARCHIVES_DB[id];
                    if (!data) return null;

                    return (
                      <div key={id} className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden flex">
                        {/* Photo (optionnelle) */}
                        <div className="w-1/3 bg-gray-900 border-r border-gray-800">
                           {data.image !== "None" ? (
                             <img src={`/images/${data.image}.jpg`} alt={data.name} className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center text-gray-700">?</div>
                           )}
                        </div>
                        {/* Infos */}
                        <div className="w-2/3 p-4">
                          <h3 className="text-white font-bold tracking-wider">{data.name}</h3>
                          <p className="text-orange-500 text-xs uppercase mb-3">{data.role}</p>
                          <span className="inline-block px-2 py-1 border border-red-900 text-red-500 text-[10px] uppercase font-bold rounded mb-4">
                            STATUT : {data.status}
                          </span>
                          <ul className="text-gray-400 text-xs space-y-2">
                            {data.details.map((detail: string, i: number) => (
                              <li key={i} className="flex gap-2"><span className="text-orange-500">▪</span> {detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}