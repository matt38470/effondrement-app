"use client";

import { useGameStore } from '@/src/store/gameStore';

const initialGauges = {
  alerte: 10,
  charge: 50,
  integrite: 80,
  preparation: 20,
  cohesion: 60,
  discretion: 40,
};

const gaugeConfig = {
  alerte: {
    label: 'Alerte',
    className: 'text-red-400',
  },
  charge: {
    label: 'Charge',
    className: 'text-orange-400',
  },
  integrite: {
    label: 'Intégrité',
    className: 'text-blue-400',
  },
  preparation: {
    label: 'Préparation',
    className: 'text-green-400',
  },
  cohesion: {
    label: 'Cohésion',
    className: 'text-teal-400',
  },
  discretion: {
    label: 'Discrétion',
    className: 'text-purple-400',
  },
} as const;

export default function HistoryPage() {
  const choiceHistory = useGameStore((state) => state.choiceHistory);

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 min-h-screen">
      <div className="mb-12 flex justify-between items-end border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold font-sans uppercase tracking-widest text-orange-500">
            Archives des Décisions
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Reconstitution des moments clés de votre parcours
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
        >
          ✕ Fermer
        </button>
      </div>

      {choiceHistory.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-20">
          Aucune décision majeure prise pour le moment.
        </div>
      ) : (
        <div className="relative border-l border-gray-700 ml-4 md:ml-8 space-y-12 py-4">
          {/* État initial */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[6.5px] top-1.5" />
            <div className="flex flex-col">
              <span className="text-xs font-mono text-gray-500 mb-1">
                ÉTAT INITIAL
              </span>

              <div className="p-3 bg-[#111111] border border-gray-800 rounded-lg">
                <div className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                  Jauges de départ
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div className="text-red-400">Alerte : {initialGauges.alerte}</div>
                  <div className="text-orange-400">Charge : {initialGauges.charge}</div>
                  <div className="text-blue-400">Intégrité : {initialGauges.integrite}</div>
                  <div className="text-green-400">Préparation : {initialGauges.preparation}</div>
                  <div className="text-teal-400">Cohésion : {initialGauges.cohesion}</div>
                  <div className="text-purple-400">Discrétion : {initialGauges.discretion}</div>
                </div>
              </div>
            </div>
          </div>

          {choiceHistory.map((node, index) => {
            const gaugeChangesEntries = Object.entries(node.gaugeChanges ?? {}).filter(
              ([, value]) => typeof value === 'number' && value !== 0
            );

            return (
              <div key={`${node.choiceId}-${index}`} className="relative pl-8 md:pl-12">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 mb-1">
                    CHAPITRE {node.chapterNumber} — {node.timeLabel}
                  </span>

                  <span className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">
                    {node.location} : {node.sceneTitle}
                  </span>

                  <div className="p-3 bg-[#1A1A1A] border border-orange-500/50 rounded-lg shadow-[0_0_10px_rgba(249,115,22,0.1)] text-sm mb-2">
                    <span className="text-orange-500 font-bold mr-2">✓</span>
                    <span className="text-white font-medium">{node.choiceLabel}</span>
                  </div>

                  {/* Chemins non pris : conservés */}
                  {node.otherOptions?.length > 0 && (
                    <div className="pl-4 border-l-2 border-gray-800 space-y-1 mt-1 mb-3">
                      {node.otherOptions.map((optLabel, i) => (
                        <div key={i} className="text-xs text-gray-600 italic">
                          <span className="mr-2">✕</span>
                          Chemin ignoré : {optLabel}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Variations réelles */}
                  {gaugeChangesEntries.length > 0 && (
                    <div className="mt-2 p-3 bg-[#101010] border border-gray-800 rounded-lg">
                      <div className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                        Variations des jauges
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {gaugeChangesEntries.map(([key, value]) => {
                          const typedKey = key as keyof typeof gaugeConfig;
                          const config = gaugeConfig[typedKey];
                          const numericValue = value as number;

                          return (
                            <div key={key} className={config.className}>
                              {config.label} : {numericValue > 0 ? `+${numericValue}` : numericValue}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Snapshot complet, repliable */}
                  {node.gaugesSnapshot && gaugeChangesEntries.length > 0 && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-300 transition-colors">
                        Voir l’état complet des jauges
                      </summary>

                      <div className="mt-3 p-3 bg-[#0d0d0d] border border-gray-800 rounded-lg">
                        <div className="text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                          État complet après décision
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                          <div className="text-red-400">
                            Alerte : {node.gaugesSnapshot.alerte}
                          </div>
                          <div className="text-orange-400">
                            Charge : {node.gaugesSnapshot.charge}
                          </div>
                          <div className="text-blue-400">
                            Intégrité : {node.gaugesSnapshot.integrite}
                          </div>
                          <div className="text-green-400">
                            Préparation : {node.gaugesSnapshot.preparation}
                          </div>
                          <div className="text-teal-400">
                            Cohésion : {node.gaugesSnapshot.cohesion}
                          </div>
                          <div className="text-purple-400">
                            Discrétion : {node.gaugesSnapshot.discretion}
                          </div>
                        </div>
                      </div>
                    </details>
                  )}
                </div>
              </div>
            );
          })}

          <div className="relative pl-8 md:pl-12 mt-12">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="text-sm italic text-gray-500">En cours...</span>
          </div>
        </div>
      )}
    </div>
  );
}