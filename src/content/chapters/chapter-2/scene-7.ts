import type { NarrativeUnit } from '@/src/types/narrative';

export const scene7: NarrativeUnit[] = [

  // ─── INTRO — LA RADIO ─────────────────────────────────────────────────────────
  {
    id: "ch2-s07-u01",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.7.1",
    title: "LA RADIO",
    location: "A14 — habitacle",
    timeLabel: "01:20",
    imagePrompt: "Autoradio_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il roule depuis plusieurs minutes quand un son revient dans l'habitacle.",
      "D'abord, il le prend pour un reste de ventilation, une variation du souffle mécanique à bas volume. Puis il comprend qu'autre chose est resté allumé, quelque part sous le silence qu'il croyait complet. Une voix, lointaine encore, commence à reprendre forme.",
      "Thomas comprend que la radio est restée allumée à bas volume.",
      "La voix a cette neutralité étudiée des émissions de nuit. D'ordinaire, Thomas l'aurait laissée passer comme un fond sonore. Ce soir, quelque chose en lui s'y accroche avant même d'avoir décidé pourquoi.",
      "Le porte-parole répond depuis quelques minutes à une question sur les \"scénarios de défaillance en cascade\" dans le réseau européen. Sa voix reste ferme. Technique. Appropriée. Il dit que l'ensemble des modèles disponibles situe ces scénarios dans le champ du \"purement théorique\".",
      "Thomas monte légèrement le volume.",
      "— Purement théorique.",
      "Il répète le mot pour lui-même. Doucement. Non comme une provocation. Comme un homme qui teste la solidité d'une surface en la frappant du bout des doigts pour savoir si elle est pleine ou creuse.",
      "La phrase ne ment pas nécessairement. Elle peut tenir dans le registre des communications institutionnelles ordinaires — prudence de langage, précision calibrée, gestion du signal. Thomas le sait. Il sait aussi qu'une phrase suffisamment vraie pour une certaine définition du mot peut être simultanément insuffisante pour une autre. Et que c'est précisément cette zone d'entre-deux qui est son métier.",
      "Le porte-parole continue. Thomas baisse de nouveau le volume. Il ne cherche pas à démontrer quoi que ce soit. Seulement à mesurer la distance entre ce qu'il a vu aujourd'hui et ce que la parole publique est capable d'en faire pour l'instant.",
      "Cette distance-là, il la connaît maintenant. Elle a un nom, une courbe, deux rendez-vous demain matin à huit heures."
    ],
    deskUpdate: {
      systemNotes: [
        "Radio allumée sur l'A14 vers 01h20.",
        "Porte-parole : scénarios de défaillance en cascade qualifiés de \"purement théoriques\".",
        "Thomas mesure l'écart entre ce qu'il sait et le discours public."
      ],
      journalEntry: {
        summary: "Thomas entend un porte-parole qualifier de 'purement théorique' ce qu'il a observé. La distance entre le réel et la parole publique prend forme.",
        tone: "dark",
        tags: ["radio", "discours public", "porte-parole", "écart", "théorique"]
      }
    },
    choices: [
      {
        id: "keep-driving-radio",
        label: "Continuer à rouler",
        hint: "La maison approche. Il va falloir décider ce qu'il fait de ce qu'il sait.",
        nextUnitId: "2.8.1",
        effects: { alerte: 10 }
      }
    ]
  }

];
