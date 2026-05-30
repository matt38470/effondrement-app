"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoverPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground selection:bg-orange-500/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/90 via-white/55 to-white/10 dark:from-[#050505] dark:via-[#0a0a0a]/75 dark:to-transparent" />

        <img
          src="/images/scenes/scene_thomas_Bureau.jpg"
          alt="L'Effondrement - Ambiance"
          className="h-full w-full scale-105 object-cover opacity-30 blur-[2px] dark:opacity-40"
        />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-grow flex-col items-center justify-center px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10 w-full"
        >
          <span className="mb-8 block text-sm font-bold uppercase tracking-[0.4em] text-orange-600 dark:text-orange-400">
            Mathieu Briat
          </span>

          <h1 className="mb-10 text-5xl font-bold leading-none tracking-tighter text-neutral-950 drop-shadow-2xl md:text-8xl dark:text-white">
            L'EFFONDREMENT
          </h1>

          <div className="mx-auto max-w-2xl space-y-6 text-left">
            <p className="text-xl font-light leading-relaxed text-neutral-700 dark:text-gray-300">
              Le graphique est apparu à 14h37 sur les écrans du secteur nord-est.
              Pas un pic brutal ni une alarme stridente. Juste une dérive lente et
              silencieuse depuis dix-huit mois, ignorée des algorithmes.
            </p>

            <p className="text-xl font-light leading-relaxed text-neutral-700 dark:text-gray-300">
              Vous êtes Thomas, analyste au sein du centre de supervision régional.
              Face à cette anomalie nommée{" "}
              <span className="font-semibold text-neutral-950 dark:text-white">NW-7</span>,
              vous êtes le premier à comprendre la logique mathématique du désastre à venir.
            </p>

            <p className="text-xl font-light italic leading-relaxed text-neutral-700 dark:text-gray-300">
              Dans un monde de procédures qui refuse de voir le pire, ferez-vous sonner
              l'alerte au risque d'être broyé par l'institution ? Ou préparerez-vous
              votre propre survie dans le silence ?
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <Link
            href="/regles"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-12 py-4 font-semibold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-orange-500"
          >
            Ouvrir le dossier
          </Link>
        </motion.div>
      </main>
    </div>
  );
}