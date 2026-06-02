import type { NarrativeUnit } from '@/src/types/narrative';

export const scene6: NarrativeUnit[] = [
  {
    id: "ch1-s06-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.6.1",
    title: "LE TRAJET RETOUR",
    location: "Voiture — A14",
    timeLabel: "01:07",
    imagePrompt: "Conduite_Nuit_A14",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas sort du parking à 1h07.",
      "La barrière se lève avec sa lenteur habituelle. Puis la voiture s'engage sur l'avenue presque vide, croise deux feux au vert, un bus de nuit, quelques taxis à l'arrêt. La ville de mars a ce calme imparfait des heures tardives : pas le silence, jamais, mais un relâchement de la pression diurne.",
      "Il traverse encore quelques rues avant de rejoindre l'autoroute. Les gestes de conduite restent simples, acquis depuis longtemps. Accélérer. Vérifier l'angle mort. S'insérer. Tenir la file.",
      "Quand il rejoint l'A14, la circulation se fluidifie encore. Le monde routier de nuit a quelque chose de provisoirement stable, comme si aucune rupture majeure n'était possible tant que les lignes restent à leur place, les lampadaires allumés, les échangeurs correctement nommés.",
      "Thomas garde les yeux sur la route. Il ne pense pas de façon suivie. Les éléments passent plutôt en lui par blocs.",
      "La courbe. La voix de Samir dans le bar. Le visage de Hassan dans la lumière rasante du parking. Le message de Mehdi à 00h41.",
      "Puis, entre deux images, quelque chose de plus diffus : la sensation très nette que le monde a commencé à se dédoubler quelques heures plus tôt.",
      "Il y a toujours ce que tout le monde voit. Et désormais, pour lui, il y a aussi ce qui travaille en dessous.",
      "Pendant quelques minutes, le trajet suffit presque. Non pour apaiser quoi que ce soit. Seulement pour créer une zone intermédiaire entre l'immeuble et la maison.",
      "Thomas comprend alors qu'il avait besoin de cette portion impersonnelle du monde — ces voies, ces glissières, ces kilomètres sans visage — pour retarder encore un peu le moment où les choses devront redevenir humaines."
    ],
    deskUpdate: {
      systemNotes: [
        "Départ du parking : 1h07.",
        "Trajet A14 — zone de décompression entre immeuble et maison."
      ],
      journalEntry: {
        summary: "Sur l'A14, Thomas laisse les éléments de la soirée passer en lui par blocs. La sensation de dédoublement s'installe.",
        tone: "cold",
        tags: ["trajet", "A14", "dédoublement", "nuit", "transition"]
      }
    },
    choices: [
      {
        id: "arriver-maison",
        label: "Arriver chez soi",
        hint: "Le trajet se termine.",
        nextUnitId: "1.7.1",
        effects: { fatigue: 5 }
      }
    ]
  }
];