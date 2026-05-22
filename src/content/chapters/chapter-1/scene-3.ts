import type { NarrativeUnit } from "@/src/types/narrative";

export const scene3: NarrativeUnit[] = [
  {
    id: "ch1-s03-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.1",
    title: "LA NUIT",
    location: "Bureau Thomas",
    timeLabel: "23:48",
    imagePrompt: "Thomas_Bureau_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est 23h48 quand Thomas rallume l’ordinateur.<br/><br/>La maison dort presque. À l’étage, une porte a cessé de bouger depuis longtemps ; dans la cuisine, le lave-vaisselle tourne derrière la cloison avec cette régularité mécanique des appareils qu’on n’entend jamais vraiment avant d’avoir l’esprit occupé ailleurs.",
      "Il a dit qu’il montait répondre à deux mails. Ce n’était pas tout à fait faux.<br/><br/>Le bureau est étroit, rangé, provisoire comme tous les espaces de travail domestiques qu’on prétend ne pas vraiment habiter.",
      "Une lampe allumée. Un carnet fermé. Le reflet de l’écran noir dans la vitre.",
      "Dehors, le quartier est presque immobile.",
      "Il s’assied sans allumer la grande lumière. Pendant quelques secondes, il reste devant l’écran de connexion, les mains posées à plat sur le bureau, sans taper son mot de passe. La soirée au bar est encore là, non comme un souvenir mais comme une couche supplémentaire sur tout le reste.",
      "Les phrases de Samir. Les silences. Le chiffre qu’aucun des deux n’avait envie d’écrire. Entre quatre et six mois, peut-être moins.<br/><br/>Il se connecte. Le dossier NW-7 est là où il l’a laissé, sur la partition chiffrée."
    ],
    choices: [
      {
        id: "wait-samir-reaction",
        label: "Attendre sa réaction",
        hint: "Le laisser analyser les données seul.",
        nextUnitId: "1.2.2"
      },
      {
        id: "explain-immediately",
        label: "Lui expliquer directement",
        hint: "Orienter sa lecture.",
        nextUnitId: "1.2.3",
        effects: { cohesion: -5, preparation: 5 } // Samir aime comprendre par lui-même
      }
    ]
  },
  {
    id: "ch1-s02-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2",
    title: "LE DIAGNOSTIC",
    location: "Le Bar",
    timeLabel: "19:22",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'est tu. Il a regardé les yeux de Samir balayer l'écran de gauche à droite. Une fois. Deux fois. Puis Samir a arrêté de bouger. Il a fait défiler la page vers le bas. Il a cliqué sur un deuxième fichier. Puis un troisième.",
      "L'ambiance du bar semblait avoir disparu autour de leur table. Samir a croisé les bras, s'enfonçant dans la banquette.",
      "— Depuis quand tu as ça ? a demandé Samir, la voix soudainement très basse.<br>— Depuis cet après-midi.<br>— Et personne d'autre n'est dessus ?<br>— Personne. C'est passé sous les radars. Dix-huit mois de dérive, Samir.",
      "Samir a frotté son visage avec ses deux mains. Quand il a relevé la tête, il n'y avait plus aucune trace de fatigue, juste une tension électrique, aiguë."
    ],
    choices: [
      {
        id: "ask-samir-opinion",
        label: "Lui demander son avis",
        hint: "Chercher confirmation.",
        nextUnitId: "1.2.4",
        effects: { cohesion: 5 }
      }
    ]
  },
  {
    id: "ch1-s02-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.3",
    title: "L'EXPLICATION",
    location: "Le Bar",
    timeLabel: "19:22",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— C'est le secteur nord-est, a dit Thomas en pointant l'écran du doigt. Trois nœuds majeurs. Regarde la courbe de charge, elle dévie lentement mais constamment depuis dix-huit mois.",
      "Samir a froncé les sourcils, agacé qu'on lui mâche le travail, mais ses yeux ont suivi le doigt de Thomas. Il a fait défiler les fichiers en silence.",
      "— Je sais lire un graphique, Thomas, a-t-il fini par lâcher, sèchement. Et je sais ce que ça veut dire.",
      "Samir a fermé le clapet de son ordinateur d'un coup sec. Le bruit a été couvert par un éclat de rire à la table d'à côté.",
      "— Tu te rends compte de ce que tu m'amènes là ? C'est pas une anomalie. C'est un putain de cancer silencieux."
    ],
    choices: [
      {
        id: "ask-samir-opinion-2",
        label: "Évaluer la gravité",
        hint: "Demander ce qu'il en pense techniquement.",
        nextUnitId: "1.2.4"
      }
    ]
  },
  {
    id: "ch1-s02-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.4",
    title: "LE POINT DE RUPTURE",
    location: "Le Bar",
    timeLabel: "19:28",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— Ça va lâcher, a dit Samir. C'est pas une question de 'si', c'est une question de 'quand'. Le réseau compense, il redirige la charge, mais la marge de manœuvre fond.",
      "— Combien de temps ? a demandé Thomas.<br>— Impossible à dire précisément. Trois mois ? Trois semaines ? Si on a une vague de froid précoce, ça peut être dans dix jours.",
      "Thomas a senti son pouls accélérer. Il l'avait deviné, mais l'entendre de la bouche de Samir rendait la chose réelle.",
      "— Il faut remonter ça à la direction demain matin à la première heure, a repris Samir. Faut qu'ils coupent des secteurs entiers pour purger la charge et réparer.",
      "Thomas a secoué la tête lentement.",
      "— Tu les connais, Samir. Si on arrive avec ça demain, ils vont nommer une commission d'évaluation. Ils vont commander une contre-expertise. Ils ne couperont pas deux millions de personnes sur la base d'une seule projection. Pas avec les élections qui approchent."
    ],
    choices: [
      {
        id: "push-for-action",
        label: "Pousser pour agir vite",
        hint: "Proposer de forcer la main à la direction.",
        nextUnitId: "1.2.5",
        effects: { alerte: 10, discretion: -10 },
        conditions: [
          { key: "preparation", operator: "gte", value: 20 },
          { key: "charge", operator: "lte", value: 70 }
        ]
      },
      {
        id: "suggest-more-proofs",
        label: "Chercher d'autres preuves",
        hint: "Proposer d'approfondir le dossier avant d'en parler.",
        nextUnitId: "1.2.6",
        effects: { preparation: 10, charge: 5 }
      }
    ]
  },
  {
    id: "ch1-s02-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.5",
    title: "L'URGENCE",
    location: "Le Bar",
    timeLabel: "19:35",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— On n'a pas le temps pour leurs conneries politiques, a dit Thomas. Il faut qu'on déclenche une procédure d'alerte rouge nous-mêmes. S'ils ne veulent pas écouter, on les force à regarder.",
      "Samir l'a fixé, incrédule.",
      "— Tu veux contourner le protocole ? Tu sais ce que ça veut dire, Thomas ? C'est la porte. Direct. Ils te détruiront professionnellement pour avoir créé la panique.",
      "— Et s'ils ne font rien et que le réseau tombe en plein hiver ? C'est quoi la conséquence ?",
      "Samir a baissé les yeux vers la clé USB. Il a pris une longue gorgée de bière, la première depuis que Thomas était arrivé.",
      "— D'accord, a-t-il dit finalement. Mais on ne peut pas y aller les mains vides. Il nous faut le code source du correctif qu'ils ont appliqué il y a deux ans. C'est là que la faille a commencé. Si je trouve ce code, on a la preuve irréfutable."
    ],
    choices: [
      {
        id: "agree-to-find-code",
        label: "Accepter de chercher le code",
        hint: "C'est dangereux, mais nécessaire.",
        nextUnitId: "1.3.1", // Redirige vers la Scène 3 (L'ordinateur)
        unlockArchive: "code_source_mission"
      }
    ]
  },
  {
    id: "ch1-s02-u06",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.6",
    title: "LA PRUDENCE",
    location: "Le Bar",
    timeLabel: "19:35",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— On ne peut pas y aller juste avec ça, a dit Thomas. Il nous faut un dossier en béton armé. Le genre de dossier qu'un directeur ne peut pas classer sans suite sans risquer la prison.",
      "Samir a hoché la tête, soulagé.",
      "— T'as raison. Si on se loupe, on passe pour des alarmistes et ils enterrent le sujet pour toujours.",
      "— Qu'est-ce qu'il nous manque ? a demandé Thomas.",
      "Samir a tapoté le couvercle de son ordinateur.",
      "— Le code source de la mise à jour système d'il y a dix-huit mois. C'est le point de départ de ta courbe. Si on prouve que la dérive vient de là, et qu'ils l'ont validée en connaissance de cause, on les tient.",
      "Thomas a grimacé. Le code source était sur des serveurs sécurisés de niveau 4. Y accéder en dehors des heures de bureau, sans ordre de mission, laissait des traces numériques indélébiles."
    ],
    choices: [
      {
        id: "decide-to-hack",
        label: "Décider d'infiltrer le serveur",
        hint: "S'engager dans une action illégale.",
        nextUnitId: "1.3.1", // Redirige vers la Scène 3 (L'ordinateur)
        effects: { integrite: -10, charge: 15 },
        unlockArchive: "serveur_n4_rules"
      }
    ]
  }
];