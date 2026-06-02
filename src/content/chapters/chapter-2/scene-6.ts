import type { NarrativeUnit } from '@/src/types/narrative';

export const scene6: NarrativeUnit[] = [

  // ─── INTRO — LE TRAJET RETOUR A14 ────────────────────────────────────────────
  {
    id: "ch2-s06-u01",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.6.1",
    title: "LE TRAJET RETOUR",
    location: "A14 — direction maison",
    timeLabel: "01:07",
    imagePrompt: "Conduite_Nuit_A14",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas sort du parking à 1h07.",
      "La barrière se lève avec sa lenteur habituelle, le bras métallique montant par à-coups comme s'il hésitait entre mécanique et fatigue. Puis la voiture s'engage sur l'avenue presque vide, croise deux feux successifs au vert, un bus de nuit, une file de taxis à l'arrêt.",
      "Il traverse encore quelques rues avant de rejoindre l'autoroute. Les gestes de conduite restent simples, acquis depuis longtemps. Accélérer. Vérifier l'angle mort. S'insérer. Tenir la file. C'est presque reposant, cette part du corps qui sait encore faire ce qu'on lui demande sans y mêler la pensée.",
      "Quand il rejoint l'A14, la circulation se fluidifie encore. Le monde routier de nuit a quelque chose de provisoirement stable, de suffisamment réglé pour donner l'illusion qu'aucune rupture majeure n'est possible tant que les lignes restent à leur place, les lampadaires allumés, les échangeurs correctement nommés."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas sort du parking à 01h07.",
        "Trajet A14 en cours."
      ],
      journalEntry: {
        summary: "La conduite de nuit offre une zone tampon entre l'immeuble et la maison.",
        tone: "cold",
        tags: ["trajet", "A14", "nuit", "conduite"]
      }
    },
    choices: [
      {
        id: "keep-driving",
        label: "Continuer à rouler",
        hint: "Les éléments passent en lui par blocs.",
        nextUnitId: "2.6.2"
      }
    ]
  },

  // ─── LE DÉDOUBLEMENT ──────────────────────────────────────────────────────────
  {
    id: "ch2-s06-u02",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.6.2",
    title: "LE DÉDOUBLEMENT",
    location: "A14",
    timeLabel: "01:15",
    imagePrompt: "Reflet_Retroviseur_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas garde les yeux sur la route. Il ne pense pas de façon suivie. Les éléments passent plutôt en lui par blocs. La courbe. La voix de Samir dans le bar. Le visage de Hassan dans la lumière rasante du parking. Le message de Mehdi à 00h41.",
      "Puis, entre deux images, quelque chose de plus diffus : la sensation très nette que le monde a commencé à se dédoubler quelques heures plus tôt.",
      "Il y a toujours ce que tout le monde voit. Et désormais, pour lui, il y a aussi ce qui travaille en dessous.",
      "Pendant quelques minutes, il pourrait presque croire que le trajet suffit. Non pour apaiser quoi que ce soit. Seulement pour créer une zone intermédiaire entre l'immeuble et la maison. Il comprend alors qu'il avait besoin de cette portion impersonnelle du monde — ces voies, ces glissières, ces kilomètres sans visage — pour retarder encore un peu le moment où les choses devront redevenir humaines, dites, partageables ou non."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas roule sur l'A14 vers 01h15.",
        "Conscience du dédoublement du monde : visible / dessous."
      ],
      journalEntry: {
        summary: "Thomas prend conscience de la scission entre le monde visible et ce qui travaille en dessous. Le trajet comme espace de transition.",
        tone: "tense",
        tags: ["dédoublement", "conscience", "trajet", "transition"]
      }
    },
    choices: [
      {
        id: "arrive-home",
        label: "Arriver chez soi",
        hint: "Il va maintenant falloir rentrer, poser ses clés, embrasser Élise.",
        nextUnitId: "2.7.1",
        effects: { fatigue: 5 }
      }
    ]
  }

];
