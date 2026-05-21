"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-orange-500/30 font-sans p-6 md:p-12 flex flex-col items-center justify-center">
      
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-4 uppercase tracking-widest">Avertissement Système</h1>
          <p className="text-gray-400 text-lg">Ce roman est interactif. Les conséquences de vos choix modifieront la psychologie de Thomas et son environnement. Surveillez ces 6 métriques vitales :</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Les 6 Jauges détaillées */}
          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-red-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Alerte</h3>
            <p className="text-gray-400 text-sm">Le degré d'information de l'institution. Lancer l'alerte trop tôt déclenche la panique, trop tard, la catastrophe.</p>
          </div>
          
          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Charge Mentale</h3>
            <p className="text-gray-400 text-sm">Le stress de Thomas. Mensonges et isolement saturent cette jauge. Si elle explose, vous perdrez le contrôle sur vos décisions.</p>
          </div>

          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-blue-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Intégrité</h3>
            <p className="text-gray-400 text-sm">Votre boussole éthique. Jouer le jeu de l'entreprise ou rester fidèle à la vérité technique, quitte à être limogé.</p>
          </div>

          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-green-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Préparation</h3>
            <p className="text-gray-400 text-sm">Votre capacité matérielle et intellectuelle à encaisser l'effondrement du réseau NW-7.</p>
          </div>

          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-purple-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Discrétion</h3>
            <p className="text-gray-400 text-sm">Rester sous le radar de la direction informatique. Trop de fouilles attireront la surveillance sur vous.</p>
          </div>

          <div className="bg-[#151515] p-6 rounded-xl border border-gray-800">
            <h3 className="text-teal-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-teal-500"></span> Cohésion</h3>
            <p className="text-gray-400 text-sm">L'état de vos relations avec vos proches (famille, amis). Ne laissez pas la crise vous couper de vos alliés.</p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <Link href="/read/1/1.1.1" className="text-orange-500 font-semibold border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors uppercase tracking-widest text-sm">
            J'ai compris. Lancer l'analyse.
          </Link>
        </div>
      </div>
    </div>
  );
}