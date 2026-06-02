import type { NarrativeUnit } from '@/src/types/narrative';

export const scene5: NarrativeUnit[] = [
  {
    id: "ch1-s05-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.5.1",
    title: "LE PARKING",
    location: "Parking souterrain",
    timeLabel: "01:00",
    imagePrompt: "Parking_Souterrain_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est presque une heure quand Thomas éteint enfin l'écran de son téléphone.",
      "Le message de Mehdi est resté sans réponse, posé à côté du carnet refermé. Passe me voir demain matin 8h. J'ai un truc à te montrer. Les mots sont restés où ils étaient, mais ils ont changé de poids à mesure que la nuit avançait.",
      "Le couloir est vide. À cette heure-ci, l'étage n'a plus rien du lieu de travail qu'il redevient chaque matin. Les cloisons vitrées renvoient des reflets plus sombres, les néons ont cette lumière un peu creuse des bâtiments qui continuent de fonctionner sans plus servir à grand monde, et chaque bruit prend trop de place.",
      "Thomas avance vers les ascenseurs avec sa veste sur le bras, son téléphone dans la poche, et cette fatigue particulière des fins de journée qui n'ont pas réellement fini. Il descend seul.",
      "Le hall du rez-de-chaussée est presque désert. Il pousse la porte d'accès avec son badge, traverse l'odeur froide du béton, et le silence change encore de nature.",
      "Le parking souterrain n'est pas tout à fait silencieux. Il bourdonne. Néons au plafond. Ventilation basse. Un claquement métallique lointain qu'on ne situe pas tout de suite. Des rangées de voitures immobiles qui prennent dans cette lumière des formes légèrement anonymes.",
      "Thomas descend vers son niveau. C'est en atteignant le palier qu'il entend sa voix.",
      "— Monsieur Vanek.",
      "Il s'arrête. Hassan est en bas des quelques marches, près de la rampe, lampe torche allumée vers le sol. Le cône de lumière dessine une forme pâle sur le béton entre eux.",
      "Thomas le connaît de vue depuis des années — les rondes du soir, les salutations brèves, le badge lu machinalement. Une présence stable du bâtiment. Ce soir, quelque chose dans sa manière de se tenir modifie cette habitude.",
      "— Je voulais pas vous arrêter en haut, dit Hassan. Sa voix est basse. Pas secrète. Juste calibrée pour ne pas porter.",
      "— Il y a eu du passage ce soir. Pas le passage habituel.",
      "Le béton paraît soudain plus froid autour d'eux. Hassan ne poursuit pas. Il attend."
    ],
    deskUpdate: {
      systemNotes: [
        "Hassan (gardien de nuit) intercepte Thomas au parking souterrain.",
        "Signalement : passage inhabituel dans le bâtiment ce soir."
      ],
      journalEntry: {
        summary: "Thomas croise Hassan dans le parking. Le gardien l'attend et signale un passage inhabituel.",
        tone: "tense",
        tags: ["Hassan", "parking", "anomalie", "signal", "nuit"]
      }
    },
    choices: [
      {
        id: "oeillers-pro",
        label: "L'œillère professionnelle (Passer)",
        hint: "Traiter l'interruption comme une limite à ne pas franchir ce soir.",
        nextUnitId: "1.5.2",
        effects: { isolement: 15, fatigue: -10 }
      },
      {
        id: "ecoute-peripherique",
        label: "L'écoute périphérique (S'arrêter)",
        hint: "Accepter d'entendre ce qu'Hassan a vu.",
        nextUnitId: "1.5.3",
        effects: { paranoia: 15, preparation: 10 }
      }
    ]
  },

  {
    id: "ch1-s05-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.5.2",
    title: "L'ŒILLÈRE PROFESSIONNELLE",
    location: "Parking souterrain → Voiture",
    timeLabel: "01:02",
    imagePrompt: "Parking_Barriere_Sortie",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'arrête à peine.",
      "— C'est gentil, répond-il. Mais il est tard.",
      "La phrase sort sans dureté. Elle dit seulement la vérité immédiate : la journée a déjà débordé de tout ce qu'elle pouvait contenir. La courbe, Samir, les fichiers, Mehdi. Il ne reste plus beaucoup d'espace intérieur pour une parole de plus.",
      "Hassan ne bouge pas. — Il y a eu du passage ce soir, dit-il quand même. Pas le passage habituel.",
      "Thomas sent la phrase le frôler sans vraiment entrer. Il secoue légèrement la tête. — Demain, peut-être.",
      "Hassan incline simplement la tête, comme s'il savait reconnaître une porte qui ne s'ouvre pas. — Bonne nuit, monsieur Vanek.",
      "Thomas reprend sa descente. Ses pas résonnent un peu plus qu'avant dans le béton. Quelque chose a failli être dit. Ou a commencé à l'être. Il ne saura pas quoi. Pas ce soir.",
      "Il rejoint sa voiture, s'assied derrière le volant et ferme la portière. Dans le silence clos de l'habitacle, le fragment revient malgré lui : pas le passage habituel.",
      "C'est précisément comme ça que les nuits mauvaises travaillent : un détail incomplet se fixe avec une force disproportionnée parce qu'on lui a refusé son développement au moment où il se présentait.",
      "En remontant vers la sortie, il aperçoit Hassan dans le rétroviseur, déjà redevenu une silhouette de ronde parmi les autres éléments du décor nocturne.",
      "Dans cette brève attente au portail automatique, une pensée s'impose : ce n'est pas parce qu'il a choisi de ne pas écouter que ce qu'Hassan voulait dire cesse d'exister.",
      "La barrière se lève. Thomas sort du parking avec le sentiment discret d'avoir conservé une limite autour de sa propre fatigue.",
      "Mais il laisse aussi derrière lui une phrase incomplète. Et les phrases incomplètes ont parfois la mauvaise habitude de continuer à travailler seules."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas décline la conversation avec Hassan.",
        "Phrase entendue mais non développée : « pas le passage habituel »."
      ],
      journalEntry: {
        summary: "Thomas refuse l'échange et quitte le parking. La phrase d'Hassan travaille malgré lui.",
        tone: "cold",
        tags: ["clôture", "phrase incomplète", "limite", "fatigue"]
      }
    },
    choices: [
      {
        id: "conduire-d1",
        label: "Conduire",
        hint: "Le trajet commence.",
        nextUnitId: "1.6.1"
      }
    ]
  },

  {
    id: "ch1-s05-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.5.3",
    title: "L'ÉCOUTE PÉRIPHÉRIQUE",
    location: "Parking souterrain → Voiture",
    timeLabel: "01:05",
    imagePrompt: "Hassan_Ombre_Parking",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas descend encore deux marches. Juste assez pour que l'arrêt devienne visible, pour que la conversation existe.",
      "— Qu'est-ce qu'il y a ? demande Thomas.",
      "— La DSI est restée tard, dit Hassan. Plus tard que d'habitude. Pas les mêmes que d'habitude. Trois personnes. Deux badges visiteurs. Un de la DSI que j'avais jamais vu avec eux avant. Ils sont descendus par le parking B. Pas par l'entrée principale.",
      "Thomas ne dit rien. Le parking bourdonne autour d'eux. Hassan reste immobile dans son uniforme sombre, la torche toujours basse.",
      "— À quelle heure ? demande Thomas.",
      "— Vers vingt heures passées. Peut-être un peu plus.",
      "Vingt heures. Après le bar avec Samir. Avant ce message de Mehdi qui attend encore dans sa poche.",
      "Thomas sent aussitôt le rapprochement se faire en lui. Il s'en méfie presque au même moment.",
      "— Pourquoi vous me dites ça ? demande Thomas.",
      "— Parce que vous étiez encore là, dit Hassan. Et que vous n'aviez pas l'air de quelqu'un qui restait tard pour finir des mails.",
      "La phrase n'a rien d'intrusif. C'est une phrase d'observation pure.",
      "— Peut-être que c'est rien, ajoute Hassan. Mais c'était pas habituel.",
      "— D'accord, dit Thomas.",
      "Hassan hoche la tête, une seule fois. Puis il se détourne. Il ne demande rien. N'attend pas de remerciement. Une fois l'information déposée, il la laisse là où elle tombe.",
      "Thomas descend jusqu'à sa voiture. En ouvrant la portière, il sort le téléphone pour relire l'heure du message de Mehdi. 00h41.",
      "Dans le silence clos de l'habitacle, il comprend une chose simple : à partir de maintenant, il ne va plus seulement surveiller des courbes. Il va aussi commencer à surveiller les gens qui se déplacent autour d'elles."
    ],
    deskUpdate: {
      systemNotes: [
        "Hassan : DSI hors routine — 3 personnes, 2 badges visiteurs, parking B, ~20h.",
        "Chronologie : passage DSI entre bar Samir et message Mehdi."
      ],
      journalEntry: {
        summary: "Thomas écoute Hassan. Le passage DSI inhabituel s'imbrique dans le motif de la soirée.",
        tone: "tense",
        tags: ["Hassan", "DSI", "parking B", "visiteurs", "motif"]
      },
      unlockArchives: ["info_dsi_visiteurs"]
    },
    choices: [
      {
        id: "conduire-d2",
        label: "Conduire",
        hint: "Le trajet commence.",
        nextUnitId: "1.6.1",
        unlockArchive: "info_dsi_visiteurs"
      }
    ]
  }
];