import type { NarrativeUnit } from '@/src/types/narrative';

export const scene9: NarrativeUnit[] = [
  {
    id: "ch1-s09-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.9.1",
    title: "LES PÂTES FROIDES",
    location: "Maison — cuisine",
    timeLabel: "01:50",
    imagePrompt: "Cuisine_Assiette_Pates_Froides",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "La cuisine ne change presque pas après le départ d'Élise.",
      "La même lumière basse au-dessus du plan de travail. Le même verre sur la table. Le torchon replié. L'assiette laissée pour lui sous une autre assiette retournée, comme pour garder un peu de chaleur qui n'est plus là maintenant.",
      "Thomas reste debout quelques secondes sans bouger. La maison continue autour de lui avec ses bruits ordinaires. Ces bruits ne le rassurent pas. Ils lui rappellent seulement qu'il est encore dedans, physiquement, alors qu'une partie de lui est restée ailleurs.",
      "Il soulève l'assiette retournée. Des pâtes. Un peu collées déjà. La sauce figée sur les bords. Rien de triste en soi. Juste un repas de semaine attendu trop longtemps.",
      "L'odeur remonte à peine. Thomas comprend qu'il a faim uniquement parce que son corps reconnaît les formes du repas, pas parce qu'un appétit clair revient vraiment.",
      "Il tire une chaise, s'assied, regarde l'assiette sans commencer tout de suite.",
      "Selon ce qui vient de se passer avec Élise, elle n'a pas tout à fait la même densité. Reste partagé de travers, signe d'une soirée suspendue, ou chose laissée dans une pièce où le vrai n'a pas eu le droit d'entrer.",
      "Il prend la fourchette. Le métal touche l'assiette avec un bruit minuscule, presque trop clair dans le silence.",
      "Et la question se pose, simple, dérisoire en apparence : qu'est-ce qu'il fait de ce reste ?"
    ],
    deskUpdate: {
      systemNotes: [
        "Après le départ d'Élise, Thomas reste seul dans la cuisine.",
        "Un repas laissé pour lui devient un point de décision minuscule mais révélateur."
      ],
      journalEntry: {
        summary: "Seul dans la cuisine, Thomas se retrouve face aux pâtes laissées pour lui et à ce qu'elles représentent désormais.",
        tone: "cold",
        tags: ["cuisine", "solitude", "pâtes", "reste", "corps"]
      }
    },
    choices: [
      {
        id: "ancrage",
        label: "L'ancrage (Manger quand même)",
        hint: "S'appuyer sur un geste banal pour rester présent au monde.",
        nextUnitId: "1.9.2",
        effects: { fatigue: -5, preparation: 5 }
      },
      {
        id: "renoncement",
        label: "Le renoncement (Laisser l'assiette)",
        hint: "Reconnaître que même manger est devenu impossible ce soir.",
        nextUnitId: "1.9.3",
        effects: { fatigue: 5, isolement: 10 }
      },
      {
        id: "mecanique",
        label: "La mécanique (Réchauffer et s'occuper)",
        hint: "Occuper les mains pour ne pas rester livré à l'informe.",
        nextUnitId: "1.9.4",
        effects: { paranoia: 10, fatigue: -5 }
      }
    ]
  },

  {
    id: "ch1-s09-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.9.2",
    title: "L'ANCRAGE",
    location: "Maison — cuisine",
    timeLabel: "01:55",
    imagePrompt: "Fourchette_Pates",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas enroule quelques pâtes autour de sa fourchette et les porte à sa bouche. Elles sont froides, plus fermes qu'elles ne devraient. Il mâche lentement, comme si le corps devait d'abord se souvenir qu'il est encore censé faire ce genre de chose.",
      "Il continue. Pas parce qu'il a retrouvé l'appétit. Parce qu'il lui faut un geste qui ne pense pas. Un rythme simple : piquer, porter, mâcher, avaler.",
      "La cuisine reste silencieuse autour de lui. À l'étage, un bruit léger. Le plancher, une porte, peut-être. Élise ne redescend pas.",
      "Cette absence n'a rien d'hostile. Elle donne seulement à ce moment sa forme exacte : il est seul avec une assiette qu'on lui a laissée, dans une maison où quelque chose a bougé sans se déclarer entièrement.",
      "Il pose sa fourchette un instant. Ce n'est plus vraiment le repas qu'il mange. C'est le fait de ne pas se lever tout de suite.",
      "Quand l'assiette est à moitié vide, il s'arrête. Il n'ira pas au bout. Mais il a mangé assez pour que quelque chose tienne encore — pas le sens, seulement la présence matérielle au monde.",
      "Il boit un peu d'eau et reste là, la fourchette posée de travers sur l'assiette, à écouter la maison autour de lui.",
      "Thomas comprend qu'avaler quelque chose ce soir revenait moins à se nourrir qu'à refuser de disparaître complètement dans ce qu'il n'a pas encore su faire de la vérité."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas mange une partie du repas laissé pour lui.",
        "Le geste alimentaire devient un ancrage plus qu'un réconfort."
      ],
      journalEntry: {
        summary: "Thomas mange malgré tout. Le repas ne le nourrit pas vraiment, mais l'empêche de se dissoudre complètement dans la nuit.",
        tone: "cold",
        tags: ["ancrage", "corps", "présence", "nuit", "continuité"]
      }
    },
    choices: [
      {
        id: "quitter-cuisine-g1",
        label: "Quitter la cuisine",
        hint: "La nuit se referme sur ce minimum tenu.",
        nextUnitId: "1.10.1"
      }
    ]
  },

  {
    id: "ch1-s09-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.9.3",
    title: "LE RENONCEMENT",
    location: "Maison — cuisine",
    timeLabel: "01:54",
    imagePrompt: "Assiette_Pates_Intacte",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas s'assied. Prend la fourchette. Essaie.",
      "Les pâtes sont froides, collées entre elles. Il porte une bouchée à sa bouche, mâche à peine, puis s'arrête. Son corps refuse sans drame. Juste l'impossibilité très nette de continuer.",
      "Il repose la fourchette. Pendant quelques secondes, il regarde l'assiette comme si elle appartenait à une autre version de lui-même.",
      "Celle qui serait rentrée fatiguée, mais encore capable d'y trouver au moins la consolation mécanique de la faim.",
      "Ce soir, rien ne vient. Tout ce qui devrait le ramener à une mesure supportable du monde lui rappelle au contraire l'écart entre cette scène minuscule et ce qui tourne encore en lui sans se résoudre.",
      "Il pousse légèrement l'assiette. Le geste est presque poli.",
      "Il n'a pas seulement perdu l'appétit. Il a perdu l'usage ordinaire des choses simples.",
      "Il se lève, prend l'assiette, hésite entre l'évier et le réfrigérateur, puis la repose finalement sur la table. Pas maintenant.",
      "Dans la pénombre, l'assiette blanchit encore un peu avant de disparaître presque complètement.",
      "Thomas comprend alors que ce qu'il abandonne ici n'est pas seulement un dîner. C'est la possibilité, pour cette nuit, de croire encore qu'un geste aussi simple que manger suffirait à recoudre la soirée."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas renonce à manger le repas laissé pour lui.",
        "Le renoncement porte autant sur le geste que sur l'illusion de normalité qu'il représentait."
      ],
      journalEntry: {
        summary: "Thomas abandonne l'assiette. Ce n'est pas seulement la faim qui manque, mais l'usage ordinaire des choses simples.",
        tone: "dark",
        tags: ["renoncement", "appétit", "nuit", "abandon", "écart"]
      }
    },
    choices: [
      {
        id: "quitter-cuisine-g2",
        label: "Quitter la cuisine",
        hint: "La nuit garde l'assiette comme une scène inachevée.",
        nextUnitId: "1.10.1"
      }
    ]
  },

  {
    id: "ch1-s09-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.9.4",
    title: "LA MÉCANIQUE",
    location: "Maison — cuisine",
    timeLabel: "01:56",
    imagePrompt: "Micro_Ondes_Lumiere",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas ne s'assied pas tout de suite.",
      "Il regarde l'assiette, puis se lève presque aussitôt, comme si la position assise le rendait trop disponible à ce qu'il vient de vivre. Il la porte au micro-ondes, hésite, la repose. Ouvre le réfrigérateur. Le referme. Prend le verre vide. Le remplit. Le boit à moitié.",
      "Rien de tout cela n'obéit à une nécessité claire. C'est une circulation de gestes plus qu'une décision.",
      "Il finit par remettre l'assiette à chauffer.",
      "Le bourdonnement du micro-ondes remplit la cuisine d'un son pauvre, domestique, presque rassurant dans sa bêtise fonctionnelle. Pendant qu'il tourne, Thomas essuie une goutte d'eau près de l'évier, aligne deux couverts restés de travers, replace la chaise sous la table.",
      "Il s'occupe les mains. Pas pour remettre de l'ordre. Pour éviter l'immobilité.",
      "Le micro-ondes s'arrête avec un bip discret. La chaleur qui remonte est faible. Les pâtes n'ont pas retrouvé le statut d'un vrai repas ; elles ont seulement quitté le froid.",
      "Cette fois, il s'assied. Mange une bouchée. Puis une autre. C'est meilleur, techniquement. Cela ne change rien à l'essentiel.",
      "Et pourtant il comprend pourquoi il a fait tout cela : parce que l'esprit accepte parfois de continuer seulement si les mains trouvent quelque chose à finir.",
      "Au moment d'éteindre la lumière, il jette un dernier regard à la cuisine. À défaut d'avoir su mettre de l'ordre dans le réel, Thomas s'est contenté de réorganiser quelques objets pour rendre la distance plus supportable."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas réchauffe les pâtes et s'occupe les mains dans la cuisine.",
        "Les gestes domestiques servent de stratégie transitoire contre l'immobilité mentale."
      ],
      journalEntry: {
        summary: "Thomas passe par la mécanique des gestes pour traverser la nuit sans rester entièrement livré à ses pensées.",
        tone: "tense",
        tags: ["mécanique", "micro-ondes", "gestes", "ordre", "distance"]
      }
    },
    choices: [
      {
        id: "quitter-cuisine-g3",
        label: "Quitter la cuisine",
        hint: "Les objets sont remis en place, pas le réel.",
        nextUnitId: "1.10.1"
      }
    ]
  }
];