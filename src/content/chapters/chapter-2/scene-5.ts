import type { NarrativeUnit } from '@/src/types/narrative';

export const scene5: NarrativeUnit[] = [

  // ─── INTRO — LE PARKING ───────────────────────────────────────────────────────
  {
    id: "ch2-s05-u01",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.5.1",
    title: "LE PARKING",
    location: "Parking souterrain de l'immeuble",
    timeLabel: "01:00",
    imagePrompt: "Parking_Souterrain_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est presque une heure quand Thomas éteint enfin l'écran de son téléphone.",
      "Le message de Mehdi est resté sans réponse, posé à côté du carnet refermé. Les mots sont restés où ils étaient, mais ils ont changé de poids à mesure que la nuit avançait. Thomas les emporte avec lui en quittant le bureau, comme on emporte une phrase inachevée dont le sens n'a pas encore choisi sa forme.",
      "Le couloir est vide. À cette heure-ci, l'étage n'a plus rien du lieu de travail qu'il redevient chaque matin. Les cloisons vitrées renvoient des reflets plus sombres, les néons ont cette lumière un peu creuse des bâtiments qui continuent de fonctionner sans plus servir à grand monde.",
      "Thomas avance vers les ascenseurs avec sa veste sur le bras, son téléphone dans la poche, et cette fatigue particulière des fins de journée qui n'ont pas réellement fini. Il descend seul.",
      "Le hall du rez-de-chaussée est presque désert. Il pousse la porte d'accès avec son badge, traverse l'odeur froide du béton, et le silence change encore de nature.",
      "Le parking souterrain n'est pas tout à fait silencieux. Il bourdonne. Néons au plafond. Ventilation basse. Un claquement métallique lointain qu'on ne situe pas tout de suite. Des rangées de voitures immobiles qui prennent dans cette lumière des formes légèrement anonymes.",
      "Thomas descend vers son niveau. C'est en atteignant le palier qu'il entend sa voix.",
      "— Monsieur Vanek.",
      "Il s'arrête. Hassan est en bas des quelques marches, près de la rampe, lampe torche allumée vers le sol. Le cône de lumière dessine une forme pâle sur le béton entre eux. Thomas le connaît de vue depuis des années — les rondes du soir, les salutations brèves, le badge lu machinalement à force de le croiser. Ce soir, quelque chose dans sa manière de se tenir modifie cette habitude.",
      "— Je voulais pas vous arrêter en haut, dit Hassan. Il y a eu du passage ce soir. Pas le passage habituel.",
      "Le béton paraît soudain plus froid autour d'eux. Hassan ne poursuit pas. Il attend que l'autre accepte d'entrer dans la conversation."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas quitte l'immeuble à 01h00 environ.",
        "Hassan (vigile) l'interpelle dans le parking souterrain.",
        "Formule : \"Pas le passage habituel.\""
      ],
      journalEntry: {
        summary: "Thomas est intercepté dans le parking par Hassan qui signale un passage inhabituel. Un choix s'impose.",
        tone: "tense",
        tags: ["parking", "Hassan", "vigile", "anomalie", "nuit"]
      }
    },
    choices: [
      {
        id: "ignore-hassan",
        label: "L'œillère professionnelle (Passer)",
        hint: "La journée a déjà débordé de tout ce qu'elle pouvait contenir.",
        nextUnitId: "2.5.2",
        effects: { isolement: 15, fatigue: -10 }
      },
      {
        id: "listen-hassan",
        label: "L'écoute périphérique (S'arrêter)",
        hint: "Hassan observe les corps, les horaires, les anomalies du bâtiment.",
        nextUnitId: "2.5.4",
        effects: { paranoia: 15, preparation: 10 }
      }
    ]
  },

  // ─── BRANCHE D1 — L'ŒILLÈRE PROFESSIONNELLE ──────────────────────────────────
  {
    id: "ch2-s05-u02",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.5.2",
    title: "L'ŒILLÈRE PROFESSIONNELLE",
    location: "Parking souterrain",
    timeLabel: "01:02",
    imagePrompt: "Thomas_Voiture_Seul",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'arrête à peine.",
      "— C'est gentil, répond-il. Mais il est tard.",
      "La phrase sort sans dureté. Elle dit seulement la vérité immédiate : la journée a déjà débordé de tout ce qu'elle pouvait contenir. Il ne reste plus beaucoup d'espace intérieur pour une parole de plus.",
      "Hassan ne bouge pas. — Il y a eu du passage ce soir, dit-il quand même. Pas le passage habituel.",
      "Thomas sent la phrase le frôler sans vraiment entrer. Il pourrait s'arrêter. À la place, il secoue légèrement la tête. — Demain, peut-être, dit-il. C'est une manière polie de refermer.",
      "Il rejoint sa voiture, s'assied derrière le volant et ferme la portière. Dans cette brève attente avant de démarrer, une pensée s'impose avec une netteté sans confort : ce n'est pas parce qu'il a choisi de ne pas écouter que ce qu'Hassan voulait dire cesse d'exister."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas refuse d'écouter Hassan et repart.",
        "Fragment persistant : \"pas le passage habituel\"."
      ],
      journalEntry: {
        summary: "Thomas referme poliment la conversation et laisse derrière lui une phrase incomplète.",
        tone: "cold",
        tags: ["refus", "Hassan", "phrase incomplète", "fermeture"]
      }
    },
    choices: [
      {
        id: "leave-d1",
        label: "Quitter le parking",
        hint: "Les phrases incomplètes ont parfois la mauvaise habitude de continuer à travailler seules.",
        nextUnitId: "2.5.3"
      }
    ]
  },

  // ─── SUITE D1 ─────────────────────────────────────────────────────────────────
  {
    id: "ch2-s05-u03",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.5.3",
    title: "L'ŒILLÈRE PROFESSIONNELLE (suite)",
    location: "Parking souterrain → sortie",
    timeLabel: "01:07",
    imagePrompt: "Parking_Barriere_Sortie",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il démarre. En remontant vers la sortie, Thomas aperçoit Hassan dans le rétroviseur, déjà redevenu une silhouette de ronde parmi les autres éléments du décor nocturne. Lampe basse. Pas mesurés. Rien d'insistant.",
      "C'est peut-être cela qui le gêne le plus : ne pas avoir été retenu.",
      "Au niveau de la rampe, il ralentit assez pour laisser passer une voiture qui entre. Un véhicule gris. Puis il rejoint la sortie, présente son badge au portail automatique, attend l'ouverture.",
      "Thomas sort du parking avec le sentiment discret d'avoir conservé quelque chose — du temps, de l'ordre, une limite autour de sa propre fatigue. Mais il laisse aussi derrière lui une phrase incomplète. Et les phrases incomplètes, il le sait mieux que d'autres, ont parfois la mauvaise habitude de continuer à travailler seules."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas sort du parking à 01h07.",
        "Hassan reste dans le parking. Information non recueillie."
      ],
      journalEntry: {
        summary: "Thomas quitte le bâtiment avec une phrase incomplète persistante.",
        tone: "cold",
        tags: ["départ", "résidu", "phrase incomplète"]
      }
    },
    choices: [
      {
        id: "drive-d1",
        label: "Conduire vers la maison",
        hint: "L'A14 de nuit, une zone intermédiaire entre l'immeuble et la maison.",
        nextUnitId: "2.6.1"
      }
    ]
  },

  // ─── BRANCHE D2 — L'ÉCOUTE PÉRIPHÉRIQUE ──────────────────────────────────────
  {
    id: "ch2-s05-u04",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.5.4",
    title: "L'ÉCOUTE PÉRIPHÉRIQUE",
    location: "Parking souterrain",
    timeLabel: "01:02",
    imagePrompt: "Hassan_Ombre_Parking",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas descend encore deux marches. Juste assez pour que l'arrêt devienne visible, pour que la conversation existe. Hassan hoche à peine la tête.",
      "— Qu'est-ce qu'il y a ? demande Thomas.",
      "— La DSI est restée tard, dit-il. Plus tard que d'habitude. Pas les mêmes que d'habitude. Trois personnes. Deux badges visiteurs. Un de la DSI que j'avais jamais vu avec eux avant. Ils sont descendus par le parking B. Pas par l'entrée principale.",
      "Thomas ne dit rien. Le parking bourdonne autour d'eux. Hassan reste immobile dans son uniforme sombre, la torche toujours basse.",
      "— À quelle heure ? demande Thomas.",
      "— Vers vingt heures passées. Peut-être un peu plus.",
      "Vingt heures. Après le bar avec Samir. Avant ce message de Mehdi qui attend encore dans sa poche. Thomas sent aussitôt le rapprochement se faire en lui. Il s'en méfie presque au même moment. Les rapprochements sont faciles, surtout la nuit.",
      "— Vous savez ce qu'ils faisaient ?",
      "Hassan secoue la tête. — Non. Mais c'était pas une ronde technique normale.",
      "— Pourquoi vous me dites ça ?",
      "— Parce que vous étiez encore là, dit-il. Et que vous n'aviez pas l'air de quelqu'un qui restait tard pour finir des mails.",
      "— Vous dites ça à beaucoup de monde ?",
      "— Non.",
      "Hassan déplace légèrement sa torche. — Peut-être que c'est rien, ajoute-t-il. Mais c'était pas habituel."
    ],
    deskUpdate: {
      systemNotes: [
        "Hassan : DSI restée tard — 3 personnes, 2 badges visiteurs.",
        "Passage par parking B, pas l'entrée principale. Vers 20h00.",
        "Non confirmé comme lié au dossier NW-7."
      ],
      journalEntry: {
        summary: "Hassan décrit un passage inhabituel de la DSI. Thomas écoute et fait le lien potentiel avec Mehdi et Samir.",
        tone: "tense",
        tags: ["DSI", "badges visiteurs", "Hassan", "anomalie", "parking B"]
      }
    },
    choices: [
      {
        id: "leave-d2",
        label: "Croiser les informations",
        hint: "À partir de maintenant, il va aussi surveiller les gens qui se déplacent autour des courbes.",
        nextUnitId: "2.5.5",
        effects: { paranoia: 10, preparation: 15 }
      }
    ]
  },

  // ─── SUITE D2 ─────────────────────────────────────────────────────────────────
  {
    id: "ch2-s05-u05",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.5.5",
    title: "L'ÉCOUTE PÉRIPHÉRIQUE (suite)",
    location: "Parking souterrain → voiture",
    timeLabel: "01:07",
    imagePrompt: "Thomas_Voiture_Tension",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas reste encore quelques secondes sur les marches. Autour de lui, le parking a repris son anonymat presque parfait. Rien de visible n'a changé. Et pourtant quelque chose a bougé une fois de plus.",
      "Il descend jusqu'à sa voiture. En ouvrant la portière, il sort son téléphone, non pour répondre à Mehdi, mais simplement pour relire l'heure du message.",
      "00h41.",
      "Il reste un instant debout à côté de la voiture, téléphone à la main. Puis il s'assoit enfin, referme la portière, et dans le silence clos de l'habitacle il comprend une chose simple : à partir de maintenant, il ne va plus seulement surveiller des courbes. Il va aussi commencer à surveiller les gens qui se déplacent autour d'elles."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas sort du parking à 01h07.",
        "Départ avec un nouveau cadre de lecture : les corps autour des données."
      ],
      journalEntry: {
        summary: "Thomas intègre la dimension humaine de la surveillance. Un seuil de perception est franchi.",
        tone: "dark",
        tags: ["surveillance", "corps", "seuil", "lecture", "DSI"]
      },
      unlockArchives: ["info_dsi_visiteurs"]
    },
    choices: [
      {
        id: "drive-d2",
        label: "Conduire vers la maison",
        hint: "L'A14 de nuit, une zone intermédiaire.",
        nextUnitId: "2.6.1",
        unlockArchive: "info_dsi_visiteurs"
      }
    ]
  }

];
