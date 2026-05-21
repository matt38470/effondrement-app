"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-200 selection:bg-orange-500/30 font-sans flex flex-col relative overflow-hidden">
      
      {/* Image de fond atmosphérique */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#111]/80 to-transparent z-10"></div>
        <img 
          src="/images/Thomas_Bureau.jpg" 
          alt="L'Effondrement - Ambiance" 
          className="w-full h-full object-cover opacity-40 blur-[2px] scale-105"
        />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-grow py-12 px-6 text-center max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10 w-full"
        >
          <span className="uppercase tracking-[0.4em] text-orange-500 text-sm font-bold mb-8 block">
            Mathieu Briat
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10 leading-none drop-shadow-2xl">
            L'EFFONDREMENT
          </h1>
          
          {/* Pitch purement littéraire */}
          <div className="max-w-2xl mx-auto text-left space-y-6">
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Le graphique est apparu à 14h37 sur les écrans du secteur nord-est. Pas un pic brutal ni une alarme stridente. Juste une dérive lente et silencieuse depuis dix-huit mois, ignorée des algorithmes.
            </p>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Vous êtes Thomas, analyste au sein du centre de supervision régional. Face à cette anomalie nommée <span className="font-semibold text-white">NW-7</span>, vous êtes le premier à comprendre la logique mathématique du désastre à venir.
            </p>
            <p className="text-xl text-gray-300 font-light leading-relaxed italic">
              Dans un monde de procédures qui refuse de voir le pire, ferez-vous sonner l'alerte au risque d'être broyé par l'institution ? Ou préparerez-vous votre propre survie dans le silence ?
            </p>
          </div>
        </motion.div>

        {/* Le bouton envoie vers la page d'explication des jauges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <Link href="/regles" className="group inline-flex items-center justify-center px-12 py-4 text-white bg-orange-600 rounded-full hover:bg-orange-500 transition-colors shadow-lg font-semibold tracking-widest uppercase">
            Ouvrir le dossier
          </Link>
        </motion.div>

      </main>
    </div>
  );
}