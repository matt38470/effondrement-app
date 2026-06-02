import type { NarrativeUnit } from '@/src/types/narrative';

export const scene8: NarrativeUnit[] = [
  {
    id: "ch1-s08-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.8.1",
    title: "LA MAISON",
    location: "Maison — cuisine",
    timeLabel: "01:32",
    imagePrompt: "Thomas_Voiture_Garee_Maison",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas se gare devant la maison à 1h32.",
      "Le moteur tourne encore quelques secondes après qu'il a coupé les phares, comme s'il hésitait lui aussi à laisser finir la journée. Devant lui, la façade est calme, presque opaque, à l'exception de la lumière restée allumée dans la cuisine.",
      "Il coupe le contact. Le silence retombe d'un bloc dans l'habitacle. Thomas reste assis un moment, les mains posées sur le volant, sans sortir tout de suite.",
      "Il pense au dossier sur l'ordinateur. Au message de Mehdi. À Hassan. À la radio. Puis il lève les yeux vers la fenêtre éclairée et comprend qu'il va maintenant falloir rentrer, embrasser Élise, répondre à des questions ordinaires — et décider, dans le même mouvement, ce qu'il fera de ce qu'il sait.",
      "Il ouvre la portière. L'odeur de la maison le saisit d'abord. Ce soir, elle lui parvient moins comme un retour que comme un repère.",
      "Il enlève sa veste, la suspend au porte-manteau, pose ses clés avec plus de soin que nécessaire. — C'est moi.",
      "La maison répond par ses bruits habituels, puis des pas légers dans la cuisine. Élise apparaît dans l'encadrement de la porte. Elle s'avance, l'embrasse brièvement, puis le regarde. Juste cette fraction de seconde de plus qui suffit chez elle à lire ce qui, chez d'autres, passerait encore pour de la fatigue ordinaire.",
      "Thomas monte se changer, puis redescend. Le dîner n'a plus lieu vraiment, mais quelque chose de sa mécanique demeure encore dans la cuisine : le verre, l'assiette, la lumière laissée pour lui, la possibilité d'une conversation simple.",
      "Pendant quelques minutes, ils restent au bord des choses ordinaires. Mais Élise ne le quitte pas tout à fait.",
      "Le silence revient peu à peu. Élise s'appuie contre le plan de travail, croise les bras. — Thomas. Qu'est-ce qui s'est passé aujourd'hui ?"
    ],
    deskUpdate: {
      systemNotes: [
        "Retour à la maison à 1h32.",
        "Élise perçoit immédiatement que quelque chose s'est déplacé chez Thomas."
      ],
      journalEntry: {
        summary: "Thomas rentre chez lui et retrouve Élise dans la cuisine. La question tombe : que s'est-il passé aujourd'hui ?",
        tone: "tense",
        tags: ["maison", "Élise", "cuisine", "retour", "question"]
      }
    },
    choices: [
      {
        id: "pacte-intime",
        label: "Le pacte intime (Tout lui dire)",
        hint: "Partager le poids entièrement dès ce soir.",
        nextUnitId: "1.8.2",
        effects: { isolement: -20, fatigue: -5 }
      },
      {
        id: "honnetete-protectrice",
        label: "L'honnêteté protectrice (Lui dire une partie)",
        hint: "Arrêter la vérité avant qu'elle entre tout entière dans la pièce.",
        nextUnitId: "1.8.3",
        effects: { isolement: 5, fatigue: 0 }
      },
      {
        id: "epuisement",
        label: "L'épuisement (Remettre à demain)",
        hint: "Gagner quelques heures avant que le savoir ne vive à deux.",
        nextUnitId: "1.8.4",
        effects: { fatigue: 10, isolement: 10 }
      },
      {
        id: "verrouillage",
        label: "Le verrouillage (Dire que tout va bien)",
        hint: "Réduire la scène à une fatigue ordinaire.",
        nextUnitId: "1.8.5",
        effects: { isolement: 20, paranoia: 10 }
      }
    ]
  },

  {
    id: "ch1-s08-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.8.2",
    title: "LE PACTE INTIME",
    location: "Maison — cuisine",
    timeLabel: "01:40",
    imagePrompt: "Thomas_Elise_Table",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas tire une chaise et s'assied. Élise comprend immédiatement que la conversation ne se tiendra pas debout. Elle prend la chaise en face de lui et pose les mains à plat sur la table.",
      "— J'ai vu quelque chose au bureau cet après-midi, dit-il. Dans les données du réseau. En clair, j'ai vu quelque chose qui ne devrait pas être là. Ou pas comme ça.",
      "— Quelque chose de grave ? demande Élise.",
      "— Potentiellement, oui. Une défaillance en cascade. Sur une partie du réseau.",
      "Il lui dit l'essentiel : la courbe, Samir, la convergence de leurs lectures, le message de Mehdi, Hassan dans le parking, la radio et la manière dont les mots publics commencent déjà à cadrer le réel.",
      "Élise ne l'interrompt pas. Elle assemble. Puis : — Et toi, tu penses quoi ?",
      "— Je pense que je dois rester exact. Mais je pense aussi que si Samir et moi sommes arrivés à quelque chose de compatible par deux chemins différents, je n'ai plus vraiment le droit de faire comme si je n'avais qu'un mauvais pressentiment.",
      "Élise se lève, prend un verre d'eau, le pose devant lui.",
      "— D'accord, dit-elle. Alors on fait simple. Demain tu vois Mehdi. Puis Samir. Et tu me redis ensuite où ça en est. Clairement.",
      "Quand ils se lèvent enfin pour quitter la cuisine, rien n'a été résolu. Mais Thomas n'est plus seul à porter la forme que ce jour a prise."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas partage l'intégralité de la situation avec Élise.",
        "Cadre commun posé pour demain : Mehdi, puis Samir, puis retour clair vers Élise."
      ],
      journalEntry: {
        summary: "Thomas dit tout à Élise. Le poids change de distribution sans que le problème soit résolu.",
        tone: "warm",
        tags: ["Élise", "soutien", "confiance", "vérité", "alliance"]
      },
      unlockArchives: ["soutien_elise"]
    },
    choices: [
      {
        id: "dormir-f1",
        label: "Aller dormir",
        hint: "La nuit continue, mais à deux.",
        nextUnitId: "1.9.1",
        unlockArchive: "soutien_elise"
      }
    ]
  },

  {
    id: "ch1-s08-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.8.3",
    title: "L'HONNÊTETÉ PROTECTRICE",
    location: "Maison — cuisine",
    timeLabel: "01:41",
    imagePrompt: "Thomas_Assis_Fatigue",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas tire une chaise et s'assied. Élise prend place en face de lui et attend.",
      "— J'ai vu quelque chose d'inhabituel dans les données du réseau, dit-il. Une anomalie. Quelque chose qui demande à être repris sérieusement demain matin.",
      "Il choisit ses mots avec soin. Il ne mentionne ni Samir, ni la convergence entière, ni les badges visiteurs.",
      "— Et je ne suis pas le seul à penser qu'il faut regarder ça de très près.",
      "Élise baisse les yeux un instant vers la table, puis revient à lui. — D'accord. Donc il se passe quelque chose d'important, tu n'es pas seul dessus, et tu décides de ne pas me dire ce que tu crois avoir vu.",
      "— Je décide de ne pas te le dire ce soir comme si c'était déjà établi, répond-il.",
      "— Tu essaies de me protéger, ou tu essaies de garder ça dans une taille que tu peux encore contrôler ?",
      "Thomas passe une main sur son visage. — Ça peut attendre demain pour être dit mieux. Pas pour être pris au sérieux.",
      "Le silence entre eux n'est pas hostile. Mais il est entamé à l'endroit précis où une vérité partielle laisse derrière elle un bord plus net qu'un mensonge brut.",
      "Quand ils quittent la cuisine, rien n'a éclaté. Élise sait qu'il se passe quelque chose. Elle ne sait pas encore quoi. Et ce décalage commence déjà à vivre entre eux comme une dette calme."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas choisit une vérité partielle avec Élise.",
        "Déplacement relationnel : confiance maintenue, mais entamée par la retenue visible."
      ],
      journalEntry: {
        summary: "Thomas ne dit qu'une partie. La confiance tient, mais un décalage s'installe entre eux.",
        tone: "cold",
        tags: ["vérité partielle", "Élise", "retenue", "dette calme", "contrôle"]
      }
    },
    choices: [
      {
        id: "dormir-f2",
        label: "Aller dormir",
        hint: "La nuit garde ce qui n'a pas été dit.",
        nextUnitId: "1.9.1"
      }
    ]
  },

  {
    id: "ch1-s08-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.8.4",
    title: "L'ÉPUISEMENT",
    location: "Maison — cuisine",
    timeLabel: "01:42",
    imagePrompt: "Thomas_Debout_Hesitant",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas tire une chaise, puis ne s'assied pas. Le geste s'interrompt à moitié.",
      "— C'est le boulot, dit-il d'abord. Il s'est passé quelque chose au bureau. Quelque chose de sérieux, je pense. Mais je suis trop fatigué pour te le dire correctement ce soir.",
      "Élise le regarde longuement. — Tu es trop fatigué pour en parler, ou trop fatigué pour que ça devienne réel ici aussi ?",
      "La justesse de la question le traverse presque comme une gêne physique. — Les deux, dit-il finalement.",
      "La cuisine est immobile autour d'eux. Rien ne détourne la scène.",
      "— Est-ce que je dois m'inquiéter ? demande-t-elle.",
      "— Je ne sais pas encore à quel niveau, dit-il. Mais oui. Assez pour qu'on en parle demain. Vraiment.",
      "— Tu me demandes de passer la nuit avec ça, dit Élise.",
      "Elle s'assied pour marquer qu'elle entend le report comme tel. — D'accord. Demain matin, alors. Mais pas demain soir. Pas quand tu pourras. Demain matin.",
      "Quand ils quittent la cuisine, rien n'a été dit du fond. Mais la nuit, désormais, devra tenir avec ça."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas reporte la conversation au matin suivant.",
        "Engagement explicite pris envers Élise : en parler demain matin."
      ],
      journalEntry: {
        summary: "Thomas remet à demain. Le report est accepté, mais il charge la nuit d'un vide partagé.",
        tone: "tense",
        tags: ["report", "fatigue", "Élise", "matin", "vide"]
      }
    },
    choices: [
      {
        id: "dormir-f3",
        label: "Aller dormir",
        hint: "La nuit doit tenir jusqu'au matin.",
        nextUnitId: "1.9.1"
      }
    ]
  },

  {
    id: "ch1-s08-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.8.5",
    title: "LE VERROUILLAGE",
    location: "Maison — cuisine",
    timeLabel: "01:43",
    imagePrompt: "Thomas_Visage_Ferme",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas relève les yeux vers Élise. La réponse existe. Il pourrait en dire une partie. Il pourrait même simplement dire qu'il ne peut pas en parler maintenant. Il ne fait rien de tout cela.",
      "— Rien de spécial, dit-il. Je suis juste crevé.",
      "Quelque chose se referme dans la cuisine, pas violemment, mais doucement, comme une porte qu'on tire jusqu'au bout pour ne pas laisser passer le froid.",
      "Élise garde les yeux sur lui une seconde de plus. — D'accord.",
      "La maison accepte immédiatement la version la plus petite du réel. C'est peut-être cela le plus troublant : qu'il soit si facile de fournir à la scène une explication réduite, et de la voir fonctionner quand même.",
      "Plus tard, dans la même lumière, une observation revient. — Tu as une drôle de tête ce soir.",
      "— Je suis crevé, répète-t-il.",
      "— Juste crevé ?",
      "Thomas pourrait corriger. Il ne le fait pas. — Oui. Juste crevé.",
      "Élise lui tend un verre d'eau. Rien dans le geste ne dépasse, mais quelque chose dans son attention s'est déplacé. Non vers l'alarme. Vers une veille basse.",
      "Thomas comprend alors que mentir à quelqu'un qu'on connaît depuis onze ans n'a presque jamais la forme spectaculaire qu'on imagine. Cela crée plutôt une très fine différence de pression dans la pièce.",
      "Quand il quitte la cuisine, rien n'a éclaté. Mais quelque chose s'est installé avec la discrétion exacte des choses qui ne font pas de bruit en entrant.",
      "Pas une rupture. Pas encore une fissure. Plutôt une surface lisse, posée sur le vrai, et qui tiendra peut-être jusqu'à demain. Ou peut-être seulement jusqu'au prochain regard d'Élise."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas affirme que tout va bien malgré l'état réel de la situation.",
        "Élise n'adhère pas complètement ; maintien d'une vigilance basse."
      ],
      journalEntry: {
        summary: "Thomas verrouille la scène avec un mensonge simple. Rien n'éclate, mais l'air entre eux change.",
        tone: "dark",
        tags: ["mensonge", "verrouillage", "Élise", "surface", "fissure"]
      }
    },
    choices: [
      {
        id: "dormir-f4",
        label: "Aller dormir",
        hint: "La nuit continue sous une surface lisse.",
        nextUnitId: "1.9.1"
      }
    ]
  }
];