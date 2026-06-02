import type { NarrativeUnit } from '@/src/types/narrative';

export const scene12: NarrativeUnit[] = [

  // ─── INTRO 1 — LE PREMIER MATIN ───────────────────────────────────────────
  {
    id: "ch1-s12-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.12.1",
    title: "LE PREMIER MATIN",
    location: "Maison — cuisine",
    timeLabel: "06:30",
    imagePrompt: "Cuisine_Matin_Froid",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas se réveille à six heures trente.",
      "Le sommeil, quand il est venu, n'a rien effacé de la nuit. Il l'a seulement découpée en blocs plus opaques. Élise dort encore, ou du moins elle en garde la forme. Thomas sort du lit sans bruit, descend, lance le café.",
      "Dans la cuisine, le jour entre par la fenêtre avec ce blanc pâle, ce froid de printemps qui ne choisit pas encore entre le soulagement et l'alarme.",
      "La maison du matin a quelque chose d'indécent dans sa normalité. La table. Les tasses. Le pain. Tout recommence comme si le monde n'avait pas changé de pente.",
      "À sept heures dix, Léa descend. Habillée, sac sur l'épaule, tartine à la main. Elle s'arrête en bas de l'escalier, le regarde, puis vient s'asseoir."
    ],
    deskUpdate: {
      systemNotes: [
        "Le matin revient sans avoir effacé la nuit.",
        "Léa rejoint Thomas dans la cuisine pour obtenir la vérité promise."
      ],
      journalEntry: {
        summary: "Dans la normalité presque indécente du matin, Thomas attend le moment où il devra tenir sa promesse faite à Léa pendant la nuit.",
        tone: "cold",
        tags: ["matin", "cuisine", "Léa", "promesse", "normalité"]
      }
    },
    choices: [
      {
        id: "ecouter-lea",
        label: "L'écouter",
        hint: "Le vrai matin commence avec sa question.",
        nextUnitId: "1.12.2"
      }
    ]
  },

  // ─── INTRO 2 — LA PROMESSE ────────────────────────────────────────────────
  {
    id: "ch1-s12-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.12.2",
    title: "LA PROMESSE",
    location: "Maison — cuisine",
    timeLabel: "07:10",
    imagePrompt: "Lea_Tartine_Matin",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— C'est maintenant ? demande-t-elle.",
      "La question n'est ni prudente ni nerveuse. Elle est exacte. Elle rappelle ce qui a été promis la nuit dernière.",
      "— C'est maintenant, dit-il.",
      "Elle s'assied en face de lui. Sa tartine est à moitié mangée, posée sur le bord de l'assiette. Elle a ce visage des matins d'adolescence — les yeux à demi ouverts, mais la conscience déjà au travail.",
      "— Alors, dit-elle.",
      "Pas alors papa, pas alors c'est quoi. Juste le mot nu, le plus économique pour exiger le vrai. C'est le premier matin des cent derniers jours. Léa attend que Thomas tienne sa promesse de la nuit."
    ],
    deskUpdate: {
      systemNotes: [
        "Léa demande explicitement à Thomas de tenir la promesse faite dans la nuit.",
        "Thomas doit choisir comment transmettre le réel : l'expliquer, le contourner ou l'imposer sous forme de consignes."
      ],
      journalEntry: {
        summary: "Au matin, Léa ne cherche ni réconfort ni détour. Elle demande simplement que la promesse soit tenue.",
        tone: "tense",
        tags: ["promesse", "Léa", "vérité", "matin", "demande"]
      }
    },
    choices: [
      {
        id: "instruction",
        label: "L'instruction (Lui parler du réel)",
        hint: "Expliquer sans tricher.",
        nextUnitId: "1.12.3",
        effects: { preparation: 15, isolement: -10, paranoia: 5 }
      },
      {
        id: "theorie",
        label: "La théorie (Décaler vers l'abstrait)",
        hint: "Parler des systèmes sans ouvrir complètement la boîte.",
        nextUnitId: "1.12.4",
        effects: { isolement: 15, fatigue: 5 }
      },
      {
        id: "autorite",
        label: "L'autorité (Annoncer des changements)",
        hint: "Passer directement aux habitudes à modifier.",
        nextUnitId: "1.12.5",
        effects: { preparation: 10, paranoia: 10 }
      }
    ]
  },

  // ─── BRANCHE J1 — L'INSTRUCTION (fusionnée) ───────────────────────────────
  {
    id: "ch1-s12-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.12.3",
    title: "L'INSTRUCTION",
    location: "Maison — cuisine",
    timeLabel: "07:12",
    imagePrompt: "Thomas_Explication_Serieuse",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas pose sa tasse.",
      "Il ne commence ni par la peur, ni par l'alerte. Il pose le cadre. Il lui explique l'architecture d'une infrastructure critique, l'invisibilité des charges, les signaux faibles, la différence entre un incident isolé et une dégradation profonde. Il cherche la langue juste, sans jargon ni condescendance.",
      "Léa ne l'interrompt pas. Elle a ce visage d'écoute pure, les sourcils à peine froncés pour reconfigurer les données.",
      "Quand il arrive au point de rupture — ce qu'il a vu, ce qui converge — il dose, mais il ne triche pas.",
      "— Donc tu crois qu'il peut y avoir une grosse panne ? demande-t-elle.",
      "Thomas hoche la tête.",
      "— Oui. Pas demain matin forcément. Mais oui, c'est une possibilité réelle.",
      "Léa baisse les yeux une seconde, pour intégrer le choc. Puis elle relève la tête.",
      "— Et nous, on fait quoi ?",
      "La question claque, vive, immédiatement tournée vers l'action. Thomas comprend que nommer le réel ne produit pas l'affolement, mais l'entrée brute dans le monde des conséquences.",
      "— Moi je vois quelqu'un ce matin. Après, on décidera clairement de ce qu'on fait.",
      "Dans la lumière blanche, il vient de faire entrer sa fille dans la chambre des adultes. Assez pour qu'elle ne regarde plus ce matin de la même manière. Ni lui non plus."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas choisit d'expliquer à Léa la possibilité réelle d'une panne majeure.",
        "Léa transforme immédiatement cette vérité en question pratique : que fait-on ?"
      ],
      journalEntry: {
        summary: "En parlant franchement, Thomas fait entrer Léa dans le monde des conséquences plutôt que dans celui des suppositions.",
        tone: "tense",
        tags: ["instruction", "vérité", "panne", "Léa", "conséquences"]
      }
    },
    choices: [
      {
        id: "partir-rendezvous-j1",
        label: "Partir au rendez-vous",
        hint: "La vérité donnée à Léa appelle maintenant la suite extérieure.",
        nextUnitId: "1.13.1",
        unlockArchive: "verite_lea"
      }
    ]
  },

  // ─── BRANCHE J2 — LA THÉORIE (fusionnée) ──────────────────────────────────
  {
    id: "ch1-s12-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.12.4",
    title: "LA THÉORIE",
    location: "Maison — cuisine",
    timeLabel: "07:13",
    imagePrompt: "Thomas_Evitement",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas pose sa tasse.",
      "Il choisit l'esquive. Non pas un mensonge brut, mais un glissement vers la théorie. Il lui parle des systèmes en général, de la fragilité de la modernité, de cette illusion de robustesse qui masque nos dépendances quotidiennes.",
      "Léa écoute. Mais la résistance s'installe. Ce qu'il dit est intelligent, mais sonne creux ici. L'adolescente entend très bien qu'il tourne autour du centre sans y entrer.",
      "— D'accord, dit-elle. Mais pourquoi tu me racontes ça ce matin ?",
      "— Parce que c'est utile de réfléchir à ce qui paraît solide, lâche-t-il.",
      "La phrase n'est pas fausse. Elle est juste en dessous du niveau de vérité promis.",
      "Léa le regarde, sans agressivité. Son visage s'ouvre légèrement, comme pour faire place à la faiblesse d'un adulte qui n'a pas le courage d'ouvrir la boîte.",
      "— Donc soit tu me prépares à quelque chose, dit-elle, soit tu réfléchis tout haut. Je ne sais pas encore lequel des deux.",
      "Il ne répond pas. Elle remet son sac sur l'épaule et termine sa tartine debout.",
      "Quand elle quitte la cuisine, Thomas sait qu'il a acheté le silence au prix de la distance. Parler en abstractions amortit la charge, mais laisse l'autre seul avec l'ombre du problème."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas contourne la vérité concrète en parlant des systèmes de manière abstraite.",
        "Léa perçoit immédiatement l'écart entre l'intelligence du discours et le niveau de vérité promis."
      ],
      journalEntry: {
        summary: "Thomas amortit la scène par l'abstraction, mais ce choix transforme la promesse tenue en distance nouvelle.",
        tone: "cold",
        tags: ["théorie", "esquive", "distance", "Léa", "abstraction"]
      }
    },
    choices: [
      {
        id: "partir-rendezvous-j2",
        label: "Partir au rendez-vous",
        hint: "Le silence est sauvé, pas le lien.",
        nextUnitId: "1.13.1"
      }
    ]
  },

  // ─── BRANCHE J3 — L'AUTORITÉ (fusionnée) ──────────────────────────────────
  {
    id: "ch1-s12-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.12.5",
    title: "L'AUTORITÉ",
    location: "Maison — cuisine",
    timeLabel: "07:14",
    imagePrompt: "Consignes_Matin",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas pose sa tasse.",
      "Il coupe court à l'explication théorique et au diagnostic complet. Il part de la maison, des gestes, de ce qui va changer.",
      "— Je ne vais pas tout t'expliquer ce matin. Mais on va modifier quelques habitudes.",
      "Le mot habitudes redessine l'espace. Il lui demande d'avoir un peu d'eau d'avance, de vérifier les lampes, de garder les téléphones chargés. Le ton est sec, fonctionnel. Celui d'un régime d'exception.",
      "Léa écoute avec une attention chirurgicale.",
      "— C'est à cause de ton boulot ? demande-t-elle.",
      "— En partie, oui, répond Thomas.",
      "Léa hoche la tête, croisant les bras.",
      "— Donc on fait comme si tout était normal, mais pas complètement.",
      "— Oui. Quelque chose comme ça.",
      "Elle l'accepte. Parce qu'elle reconnaît dans ces directives fragmentaires la forme d'une alerte en devenir.",
      "En quittant la cuisine, Léa jette un regard circulaire. La même cuisine que la veille, mais l'adolescente n'y cherche plus des anomalies ; elle y traque déjà des indices. Thomas ne lui a pas donné la vérité, mais il lui a donné un rôle."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas choisit de traduire la crise en consignes domestiques immédiates.",
        "Léa n'obtient pas toute la vérité, mais elle reçoit une place active dans ce qui commence."
      ],
      journalEntry: {
        summary: "En donnant des consignes plutôt qu'une explication complète, Thomas fait entrer Léa dans le régime d'exception sans lui ouvrir tout le réel.",
        tone: "tense",
        tags: ["autorité", "consignes", "habitudes", "Léa", "rôle"]
      }
    },
    choices: [
      {
        id: "partir-rendezvous-j3",
        label: "Partir au rendez-vous",
        hint: "Léa n'a pas toute la vérité, mais elle a déjà une fonction.",
        nextUnitId: "1.13.1",
        unlockArchive: "role_lea"
      }
    ]
  }

];