import type { NarrativeUnit } from '@/src/types/narrative';

export const scene11: NarrativeUnit[] = [
  {
    id: "ch1-s11-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.1",
    title: "L'HEURE VOLÉE",
    location: "Maison — couloir / bureau",
    timeLabel: "02:20",
    imagePrompt: "Couloir_Nuit_Ombre",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "La maison a fini par se taire.",
      "Pas complètement. Une maison ne se tait jamais tout à fait. Il reste le bois, une canalisation, le souffle du chauffage, parfois une voiture très loin dans la rue. Mais le bloc domestique s'est refermé. Élise s'est couchée. Léa aussi. La lumière du rez-de-chaussée est éteinte.",
      "Thomas ne dort pas.",
      "Dans le couloir du premier, la porte de Léa est fermée. Il s'arrête une seconde devant. Il n'entend rien.",
      "Dans la chambre, Élise dort déjà. Ou fait semblant. Il ne cherche pas à le savoir ce soir. Il prend ses affaires sans allumer, ressort dans le couloir, referme doucement.",
      "Le bureau est au bout. La porte est entrouverte. L'ordinateur est là."
    ],
    deskUpdate: {
      systemNotes: [
        "La maison s'est refermée pour la nuit, mais Thomas reste éveillé.",
        "Le bureau et l'ordinateur deviennent le point de bascule de son insomnie."
      ],
      journalEntry: {
        summary: "Quand toute la maison dort, Thomas reste seul face à l'heure restante et à ce qu'il peut encore en faire.",
        tone: "cold",
        tags: ["nuit", "maison", "insomnie", "bureau", "silence"]
      }
    },
    choices: [
      {
        id: "avancer-vers-bureau",
        label: "S'arrêter sur le seuil",
        hint: "Le vrai choix commence devant l'écran.",
        nextUnitId: "1.11.2"
      }
    ]
  },

  {
    id: "ch1-s11-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.2",
    title: "L'OBSESSION",
    location: "Maison — bureau",
    timeLabel: "02:22",
    imagePrompt: "Ecran_Ordinateur_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas reste dans l'embrasure une seconde, la main sur le montant.",
      "Il pourrait entrer et prolonger la journée sous une autre forme. Il pourrait aussi refermer.",
      "Mais cette heure existe. Une heure volée au sommeil, à la maison, au lendemain.",
      "La question devient simple : qu'est-ce qu'il fait de cette heure ?",
      "Dans le silence du bureau, la crise n'est plus seulement une donnée. Elle devient une obsession."
    ],
    deskUpdate: {
      systemNotes: [
        "L'heure restante devient un objet de décision à part entière.",
        "La crise prend pour Thomas une dimension obsessionnelle et nocturne."
      ],
      journalEntry: {
        summary: "Devant le bureau entrouvert, Thomas comprend que l'heure qui reste peut encore déplacer toute la suite.",
        tone: "tense",
        tags: ["obsession", "heure volée", "bureau", "crise", "seuil"]
      }
    },
    choices: [
      {
        id: "archiviste",
        label: "L'archiviste (Écrire le dossier)",
        hint: "Mettre les faits hors de sa tête.",
        nextUnitId: "1.11.3",
        effects: { preparation: 15, discretion: -10 }
      },
      {
        id: "anticipation",
        label: "L'anticipation (Chercher des journalistes)",
        hint: "Cartographier un dehors possible.",
        nextUnitId: "1.11.4",
        effects: { alerte: 15, paranoia: 10 }
      },
      {
        id: "vertige",
        label: "Le vertige (Forums collapsologues)",
        hint: "Regarder comment d'autres vivent déjà dans l'hypothèse de rupture.",
        nextUnitId: "1.11.5",
        effects: { paranoia: 20, fatigue: 5 }
      },
      {
        id: "endurance",
        label: "L'endurance (Fermer l'ordinateur)",
        hint: "Refuser l'illusion d'agir à cette heure-ci.",
        nextUnitId: "1.11.6",
        effects: { fatigue: -15, preparation: -5 }
      }
    ]
  },

  {
    id: "ch1-s11-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.3",
    title: "L'ARCHIVISTE",
    location: "Maison — bureau",
    timeLabel: "02:28",
    imagePrompt: "Fichier_Texte_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'assied. L'écran s'allume. La lumière lui paraît d'abord trop forte ; il baisse la luminosité presque au minimum.",
      "Il ouvre un nouveau document. Pas dans le cloud. En local. Il tape un titre, l'efface. En tape un autre, l'efface encore. Il laisse sans nom et commence.",
      "D'abord les faits. Les chiffres. Les dates. La séquence reconstituée de mémoire. Ce que Samir a dit. Ce que Hassan a mentionné. Le message de Mehdi. La radio. Les seuils. Les convergences.",
      "Thomas écrit vite. Pas pour bien écrire. Pour sortir de sa tête ce qui y tourne depuis des heures et le mettre quelque part d'autre.",
      "Au bout d'un moment, il relit. Ce qui le frappe n'est pas le contenu. C'est la forme. Dégradation. Seuil critique. Fenêtre.",
      "Fenêtre de cent jours. La phrase le fixe un instant.",
      "Il tente ensuite : Actions prioritaires — puis s'arrête.",
      "Le problème, comprend-il, c'est qu'une liste d'actions suppose déjà qu'il sache qui il est dans cette histoire.",
      "Alors il efface et écrit à la place : Ce que je sais avec certitude.",
      "Cette formule, au moins, tient.",
      "Avant de fermer, il sauvegarde et chiffre le fichier avec un mot de passe long, inhabituel.",
      "Le dossier existe maintenant. Thomas ne sait pas si c'est un début ou une précaution. Mais demain matin, il ne repartira pas de rien."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas écrit un dossier personnel local et chiffré sur la situation.",
        "L'écriture transforme la crise diffuse en base de travail tangible."
      ],
      journalEntry: {
        summary: "En écrivant ce qu'il sait avec certitude, Thomas se donne une forme minimale de prise sur la nuit et sur le matin à venir.",
        tone: "tense",
        tags: ["archiviste", "dossier", "écriture", "certitude", "NW7"]
      }
    },
    choices: [
      {
        id: "sauvegarder-dossier-i1",
        label: "Aller dormir",
        hint: "Le matin ne repartira pas de rien.",
        nextUnitId: "1.12.1",
        unlockArchive: "dossier_personnel_nw7"
      }
    ]
  },

  {
    id: "ch1-s11-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.4",
    title: "L'ANTICIPATION",
    location: "Maison — bureau",
    timeLabel: "02:29",
    imagePrompt: "Recherche_Journalistes",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'assied, ouvre l'ordinateur, puis reste une seconde immobile devant l'écran d'accueil.",
      "Le geste qu'il s'apprête à faire n'appartient pas encore à l'action ouverte. C'est cela qui le rend plus grave qu'il n'en a l'air.",
      "Il n'écrit à personne. Il cherche seulement quels noms existent, quelles portes seraient là s'il fallait un jour sortir du circuit normal.",
      "Il ouvre un navigateur. Tape d'abord trop large, puis resserre : enquêtes énergie, journalistes infrastructures, sécurité réseau, médias indépendants, dossiers techniques.",
      "Très vite, un tri s'installe. Ceux qui commentent. Ceux qui crient. Ceux qui sauraient lire.",
      "Thomas note quelques noms dans un fichier minimal. Noms, rédactions, domaines. Parfois un mot : sérieux, spectaculaire, technique, à éviter.",
      "Ce qui le trouble n'est pas tant la liste que la ligne intérieure qu'elle lui fait franchir.",
      "Jusqu'ici, tout pouvait encore tenir dans Mehdi, dans Samir, dans le cadre professionnel. En cherchant ces noms, même sans contacter personne, il admet qu'un autre dehors pourrait devenir nécessaire.",
      "Il ajoute encore trois noms, puis renomme le fichier de manière absurde et plate : notes diverses.",
      "Quand il ferme enfin l'écran, il sait qu'il n'a rien fait de concret. Mais il a déplacé le possible."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas dresse une liste locale de contacts journalistiques potentiels.",
        "Ce geste ouvre mentalement une sortie possible hors du cadre institutionnel."
      ],
      journalEntry: {
        summary: "Sans contacter personne, Thomas cartographie déjà un dehors possible du système et en ressent immédiatement le coût intérieur.",
        tone: "tense",
        tags: ["anticipation", "journalistes", "contacts", "liste", "possible"]
      }
    },
    choices: [
      {
        id: "fermer-liste-i2",
        label: "Aller dormir",
        hint: "Le possible a été déplacé, même sans action ouverte.",
        nextUnitId: "1.12.1",
        unlockArchive: "liste_contacts_presse"
      }
    ]
  },

  {
    id: "ch1-s11-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.5",
    title: "LE VERTIGE",
    location: "Maison — bureau",
    timeLabel: "02:31",
    imagePrompt: "Navigation_Forums",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'assied et ouvre l'ordinateur avec la sensation très nette d'accomplir un geste qu'il aurait méprisé chez quelqu'un d'autre une semaine plus tôt.",
      "Il ne cherche ni données ni institutions. Il cherche ce que font les gens qui vivent déjà mentalement dans l'hypothèse d'une rupture.",
      "Les premiers résultats sont mauvais. Trop sensationnalistes. Trop sales. Il ferme, recommence, affine.",
      "Il tombe sur des forums plus calmes, des fils sur l'eau, les stocks, les coupures longues, les médicaments de base, les lampes, les routines domestiques.",
      "Il lit. Pas comme un convaincu. Comme un homme qui essaie de voir à quoi ressemble, hors des courbes, une pensée déjà traduite en gestes.",
      "Certaines discussions sont absurdes. D'autres minutieuses. Beaucoup mêlent bon sens, obsession, bricolage, fantasme.",
      "Mais au milieu de tout cela, quelque chose l'accroche : la manière dont des gens ordinaires découpent le problème en unités praticables.",
      "Combien d'eau. Combien de jours. Quelle radio. Quelle lampe.",
      "Cette pauvreté du détail lui fait plus de bien qu'elle ne devrait.",
      "Puis il tombe sur un fil concernant les enfants, et tout change.",
      "Il pense à Léa. Puis à Élise. Le problème cesse d'être seulement analytique. Il devient domestique, presque corporel.",
      "Quand il éteint l'écran, Thomas sait qu'il n'a rien appris de décisif. Mais il ne regarde plus tout à fait la crise du même endroit."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas consulte des forums de préparation domestique et de rupture systémique.",
        "La crise cesse d'être purement technique et devient aussi domestique, familiale et corporelle."
      ],
      journalEntry: {
        summary: "En lisant les gestes ordinaires de la préparation, Thomas sent le problème glisser du champ analytique vers la maison et les corps.",
        tone: "dark",
        tags: ["vertige", "forums", "préparation", "famille", "domestique"]
      }
    },
    choices: [
      {
        id: "eteindre-ecran-i3",
        label: "Aller dormir",
        hint: "Le problème a changé de texture.",
        nextUnitId: "1.12.1"
      }
    ]
  },

  {
    id: "ch1-s11-u06",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.11.6",
    title: "L'ENDURANCE",
    location: "Maison — chambre",
    timeLabel: "02:24",
    imagePrompt: "Porte_Bureau_Entrouverte",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas reste dans l'embrasure du bureau, la main sur le montant de la porte.",
      "L'ordinateur est là. Accessible. Immobile. Promesse de prolonger la journée sous une forme qui ressemblerait à de l'action.",
      "Il n'entre pas.",
      "Il comprend qu'à cette heure-ci il ne va plus améliorer grand-chose. Il peut donner une structure à sa peur. Il ne changera pas les faits avant le matin.",
      "Alors il referme doucement la porte du bureau. Pas jusqu'au bout.",
      "Le couloir lui paraît plus froid tout à coup. Ou plus honnête.",
      "Il retourne vers la chambre à pas lents. Devant la porte de Léa, il s'arrête encore une seconde. Rien.",
      "Puis il rentre dans la chambre. Élise est couchée sur le côté. Il ne sait pas si elle dort. Il ne le demande pas.",
      "Il se glisse dans le lit avec l'attention maladroite de ceux qui ne veulent pas réveiller l'autre et qui savent pourtant que leur propre tension changera déjà l'air du matelas.",
      "Le sommeil ne vient pas tout de suite.",
      "Mais quelque chose d'autre se produit : l'abandon provisoire de la maîtrise.",
      "Pas la paix. Une suspension.",
      "Dans le noir, il ferme les yeux. La journée ne se termine pas. Elle se dépose seulement dans le peu de sommeil qu'il lui reste."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas renonce à utiliser l'heure restante devant l'ordinateur.",
        "Il choisit une suspension provisoire de la maîtrise plutôt qu'une action nocturne illusoire."
      ],
      journalEntry: {
        summary: "Thomas ferme l'ordinateur sans l'ouvrir et accepte, pour quelques heures, de ne plus courir devant le réel.",
        tone: "cold",
        tags: ["endurance", "sommeil", "abandon", "nuit", "suspension"]
      }
    },
    choices: [
      {
        id: "fermer-les-yeux-i4",
        label: "Fermer les yeux",
        hint: "La nuit ne se résout pas ; elle se dépose.",
        nextUnitId: "1.12.1"
      }
    ]
  }
];