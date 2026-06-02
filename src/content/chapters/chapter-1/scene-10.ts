import type { NarrativeUnit } from '@/src/types/narrative';

export const scene10: NarrativeUnit[] = [
  {
    id: "ch1-s10-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.10.1",
    title: "LÉA",
    location: "Maison — cuisine",
    timeLabel: "02:02",
    imagePrompt: "EscalierNuitOmbre",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas l'entend avant de la voir.",
      "La porte de sa chambre, puis ses pas dans le couloir. Le grincement de la troisième marche. Ce soir, elle ne l'évite pas.",
      "Léa entre dans la cuisine. Elle balaie la pièce d'un seul regard, rapide, presque sec.",
      "— Je tombe mal ?",
      "La question est posée sans ménagement.",
      "Thomas la regarde. Quinze ans. Le verre vide à deux mains. Le pyjama trop court aux poignets. Elle ne cherche pas à rassurer la pièce. Elle la mesure.",
      "Elle regarde son père, puis Élise, puis revient au centre de la table comme si la vérité allait finir par s'y déposer.",
      "Elle remplit son verre, boit une gorgée, repose le verre.",
      "— D'accord.",
      "Elle ne demande rien de plus. Pas encore. Elle attend seulement de voir jusqu'où l'on tiendra le mensonge.",
      "La cuisine reste derrière elle comme une porte entrouverte."
    ],
    deskUpdate: {
      systemNotes: [
        "Léa descend dans la cuisine et perçoit immédiatement une tension entre Thomas et Élise.",
        "Sa réaction est courte, sèche, et sans effort pour apaiser."
      ],
      journalEntry: {
        summary: "Léa surprend la scène nocturne et comprend tout de suite qu'on ne lui dira pas tout.",
        tone: "tense",
        tags: ["Léa", "famille", "cuisine", "nuit", "vérité"]
      }
    },
    choices: [
      {
        id: "ecran-fumee",
        label: "L'écran de fumée (La rassurer)",
        hint: "Produire une version simple, habitable pour la nuit.",
        nextUnitId: "1.10.2",
        effects: { isolement: 10, fatigue: -5 }
      },
      {
        id: "contrat",
        label: "Le contrat (Demain, on parle)",
        hint: "Faire du lendemain une promesse claire.",
        nextUnitId: "1.10.3",
        effects: { fatigue: 10, preparation: 5 }
      },
      {
        id: "inclusion-lucide",
        label: "L'inclusion lucide (Dire quelque chose de vrai)",
        hint: "Ne pas nier ce qu'elle perçoit déjà.",
        nextUnitId: "1.10.4",
        effects: { isolement: -15, paranoia: 5 }
      }
    ]
  },

  {
    id: "ch1-s10-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.10.2",
    title: "L'ÉCRAN DE FUMÉE",
    location: "Maison — cuisine",
    timeLabel: "02:04",
    imagePrompt: "ThomasEliseCuisine",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas se redresse légèrement.",
      "— Oui. On est juste fatigués.",
      "Le mot sort trop vite.",
      "Léa garde les yeux sur lui.",
      "— Fatigués de quoi ?",
      "La question n'insiste pas. Elle coupe.",
      "— Longue journée, dit Élise. C'est tout.",
      "La phrase se referme aussitôt après l'avoir ouverte.",
      "Léa la reçoit sans bouger.",
      "Elle voit bien que la version tient à peine. Mais elle voit aussi qu'elle ne gagnera rien à pousser maintenant.",
      "— D'accord.",
      "Elle rince son verre, le repose dans l'égouttoir.",
      "— Je remonte.",
      "Elle quitte la cuisine sans se retourner.",
      "Thomas reste avec l'impression qu'elle a tout pris, sans rien demander."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas et Élise produisent une version minimale de la situation pour Léa.",
        "Léa choisit de ne pas insister, sans adhérer à l'explication."
      ],
      journalEntry: {
        summary: "Thomas rassure Léa sans vraiment la convaincre. Elle voit la faille, mais décide de ne pas la forcer cette nuit.",
        tone: "cold",
        tags: ["écran de fumée", "Léa", "différé", "famille", "tension"]
      }
    },
    choices: [
      {
        id: "laisser-partir-lea-h1",
        label: "La laisser repartir",
        hint: "La réponse tient pour la nuit, pas au-delà.",
        nextUnitId: "1.11.1"
      }
    ]
  },

  {
    id: "ch1-s10-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.10.3",
    title: "LE CONTRAT",
    location: "Maison — cuisine",
    timeLabel: "02:05",
    imagePrompt: "ThomasSerieuxCuisine",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas la regarde une seconde avant de répondre.",
      "— Pas complètement. Mais ce n'est pas le moment.",
      "Léa ne bouge pas.",
      "— Donc il y a quelque chose.",
      "Ce n'est pas une question. C'est une lame.",
      "— Oui. Mais rien qu'on puisse t'expliquer correctement à cette heure-là. Demain, on en parle.",
      "Léa garde son verre en main.",
      "— Demain quand ?",
      "Thomas hésite. Elle vient de lui voler l'abstraction.",
      "— Demain matin.",
      "Elle acquiesce à peine.",
      "— D'accord.",
      "Pas de colère. Pas de plainte. Elle enregistre seulement la limite.",
      "Quand elle repart, le mot demain cesse d'être un report. Il devient une date."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas promet explicitement à Léa une explication pour le lendemain.",
        "La promesse transforme la crise en rendez-vous familial à honorer."
      ],
      journalEntry: {
        summary: "En promettant à Léa de parler demain, Thomas convertit l'inquiétude diffuse en engagement précis.",
        tone: "tense",
        tags: ["contrat", "promesse", "Léa", "demain", "engagement"]
      }
    },
    choices: [
      {
        id: "tenir-promesse-h2",
        label: "Tenir jusqu'à demain",
        hint: "Le mot donné à Léa oblige déjà la suite.",
        nextUnitId: "1.11.1",
        unlockArchive: "promesselea"
      }
    ]
  },

  {
    id: "ch1-s10-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.10.4",
    title: "L'INCLUSION LUCIDE",
    location: "Maison — cuisine",
    timeLabel: "02:06",
    imagePrompt: "LeaBrasCroises",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas regarde Léa, puis son verre.",
      "— Pas vraiment. Il se passe quelque chose au travail.",
      "Léa reste immobile.",
      "— Quelque chose de grave ?",
      "Elle ne cherche pas le détail. Elle veut la charnière.",
      "Thomas hésite.",
      "— Assez pour qu'on en reparle demain.",
      "Léa jette un coup d'œil vers Élise. Non pour se rassurer, mais pour vérifier l'alignement.",
      "Élise hoche légèrement la tête.",
      "— D'accord, dit Léa.",
      "Puis, après une seconde :",
      "— Merci de ne pas dire n'importe quoi.",
      "La phrase est sèche. Presque trop exacte pour la fatigue qu'elle porte.",
      "Elle repose son verre, le laisse dans l'égouttoir, puis remonte.",
      "Quand sa porte se referme à l'étage, la cuisine garde son silence. Léa sait qu'il se passe quelque chose. Elle sait aussi qu'on n'a pas essayé de la prendre pour une enfant."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas choisit de donner à Léa une part réelle de la situation.",
        "Léa distingue la retenue honnête du déni adulte."
      ],
      journalEntry: {
        summary: "Thomas inclut Léa dans une vérité partielle. À partir de là, elle n'est plus à l'extérieur du réel, mais dans son attente consciente.",
        tone: "cold",
        tags: ["inclusion", "Léa", "vérité partielle", "travail", "attente"]
      }
    },
    choices: [
      {
        id: "laisser-remonter-lea-h3",
        label: "La laisser remonter",
        hint: "Le silence qui suit n'est plus un secret complet.",
        nextUnitId: "1.11.1"
      }
    ]
  }
];