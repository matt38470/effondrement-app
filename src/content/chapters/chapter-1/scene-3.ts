import type { NarrativeUnit } from '@/src/types/narrative';

export const scene3: NarrativeUnit[] = [
  {
    id: "ch1-s03-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.1",
    title: "LA NUIT",
    location: "Bureau principal",
    timeLabel: "23:48",
    imagePrompt: "Thomas_Bureau_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est 23h48 quand Thomas rallume l’ordinateur.",
      "L’étage est presque vide. Au bout du couloir, une rampe de néons en veille découpe une lumière blanche sur la moquette sombre. Plus loin, derrière les cloisons vitrées, les open spaces ont perdu l’agitation du jour ; il ne reste que le souffle continu de la ventilation, le bourdonnement des baies techniques et, de temps à autre, le choc lointain d’une porte coupe-feu.",
      "Il a dit en partant qu’il rentrerait directement. Ce n’était plus tout à fait vrai.",
      "Le bureau paraît différent la nuit. Plus étroit, plus net, comme si les objets y tenaient avec davantage de rigueur en l’absence des voix, des appels, des circulations.",
      "Il s’assied sans allumer le plafonnier. Pendant quelques secondes, il reste devant l’écran de connexion, les mains posées à plat sur le bureau, sans taper son mot de passe.",
      "La soirée au bar est encore là, non comme un souvenir mais comme une couche supplémentaire sur tout le reste. Les phrases de Samir. Le chiffre qu’aucun des deux n’avait envie d’écrire. Entre quatre et six mois, peut-être moins.",
      "Il se connecte. Le dossier NW-7 est là où il l’a laissé, sur la partition chiffrée.",
      "Le fichier s’ouvre. Même pente. Même lenteur. Même apparente décence des chiffres pris isolément.",
      "Il fait défiler les données jusqu’au point d’inflexion, revient en arrière, avance de nouveau. Semaine après semaine, la dérive est là, discrète, disciplinée, presque polie. Elle ne force rien. Elle se contente de continuer.",
      "Il ouvre son carnet et écrit seulement : Ce que je sais.",
      "Pas ce que j’imagine. Pas ce que je crains. Pas encore ce qu’il faudra dire demain.",
      "Seulement ce qu’il sait.",
      "La dérive est réelle. Elle tient sur plusieurs lectures. Elle ne s’explique pas, à ce stade, par la maintenance. Samir a vu autre chose qui pointe dans la même direction.",
      "Il repose le stylo. L’écriture, au lieu de le calmer, a l’effet inverse. Les phrases sur le papier fixent les choses plus durement que dans sa tête.",
      "Il regarde l’heure : 23h57. Demain matin, il reverra Samir. Ils reprendront chacun leur angle.",
      "Il pourrait s’arrêter là. Fermer l’ordinateur. Dormir quelques heures.",
      "Il pourrait aussi profiter de cette heure, du silence des plateaux vides et de l’absence de regards, pour pousser plus loin pendant qu’il tient encore tout dans sa tête.",
      "Le curseur clignote au bas de l’écran. Le bâtiment est silencieux. Le fichier attend.",
      "Thomas est à un point de bascule."
    ],
    deskUpdate: {
      systemNotes: [
        "Retour nocturne au bureau sur le dossier NW-7.",
        "Formalisation écrite des faits connus.",
        "Le dossier passe d'une intuition partagée à un début de preuve."
      ],
      journalEntry: {
        summary: "Thomas revient au bureau après son échange avec Samir, rouvre NW-7 et fixe les faits avant de choisir sa méthode.",
        tone: "tense",
        tags: ["nuit", "bureau", "NW-7", "preuve", "bascule", "contrôle"]
      }
    },
    choices: [
      {
        id: "night-offensive-analysis",
        label: "L'offensive analytique",
        hint: "Élargir l'analyse pendant qu'il tient encore tout en tête.",
        nextUnitId: "1.3.2",
        effects: { charge: 15, preparation: 15 }
      },
      {
        id: "night-procedure",
        label: "La procédure",
        hint: "Classer, sécuriser et reprendre demain avec un esprit net.",
        nextUnitId: "1.3.3",
        effects: { preparation: 10, charge: -10 }
      },
      {
        id: "night-lockdown",
        label: "Le verrouillage",
        hint: "Compartimenter les traces et garder la main sur la matière.",
        nextUnitId: "1.3.4",
        effects: { discretion: 15, isolement: 15 }
      }
    ]
  },
  {
    id: "ch1-s03-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.2",
    title: "L'OFFENSIVE ANALYTIQUE",
    location: "Bureau principal",
    timeLabel: "00:26",
    imagePrompt: "Thomas_Ecrans_Multiples",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il ne referme pas le fichier. Pendant quelques secondes, Thomas garde les yeux sur la ligne déjà connue, comme si la décision de regarder plus loin devait d’abord passer par elle.",
      "Puis il ouvre une seconde fenêtre, appelle les nœuds adjacents, recompose la carte de charge du secteur nord-est avec cette précision méthodique qui, chez lui, remplace depuis toujours la panique.",
      "NW-7 d’abord. Puis NW-4. Puis NW-9. Il ajoute un quatrième point. Hésite. En ajoute un cinquième.",
      "L’écran se remplit de courbes superposées, de dates, de légendes discrètes, de variations si faibles qu’un regard pressé les confondrait encore avec le bruit normal d’un réseau vivant.",
      "Thomas change l’échelle. Revient en arrière. Isole. Compare. Cherche moins une preuve spectaculaire qu’une cohérence.",
      "Elle apparaît par degrés. Pas partout. Pas de façon parfaitement symétrique. Mais assez pour que la première impression cesse d’être locale.",
      "Thomas se penche vers l’écran. Ce n’est plus NW-7. Ou plutôt : NW-7 n’était que l’endroit où son regard est entré.",
      "Il exporte les données dans un dossier local distinct et note l’heure : 00h26.",
      "Quand il éteint enfin la lampe du bureau, les surfaces vitrées lui renvoient un instant son propre reflet avant de retomber dans le noir.",
      "Le dossier reste ouvert. Et ce qu’il contient a désormais la taille d’un secteur."
    ],
    deskUpdate: {
      systemNotes: [
        "Extension de l'analyse à plusieurs nœuds adjacents.",
        "Hypothèse de propagation non linéaire formulée.",
        "Le problème dépasse désormais le seul nœud NW-7."
      ],
      journalEntry: {
        summary: "Thomas élargit son analyse et comprend que la dérive suit une logique de propagation distribuée à l’échelle d’un secteur.",
        tone: "critical",
        tags: ["propagation", "secteur", "analyse", "charge", "preuve"]
      },
      unlockArchives: ["carte_six_noeuds"]
    },
    choices: [
      {
        id: "leave-office-after-analysis",
        label: "Quitter le bureau",
        hint: "Conserver la cartographie pour le matin.",
        nextUnitId: "1.4.1",
        unlockArchive: "carte_six_noeuds"
      }
    ]
  },
  {
    id: "ch1-s03-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.3",
    title: "LA PROCÉDURE",
    location: "Bureau principal",
    timeLabel: "00:08",
    imagePrompt: "Thomas_Bureau_Propre",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas ne rouvre pas la carte. Il reste quelques secondes devant le fichier déjà ouvert, le regard posé sur la pente comme on regarde quelque chose qu’on a décidé de ne pas toucher davantage pour l’instant.",
      "Pas par indifférence. Par discipline.",
      "Il sait ce que produisent certaines nuits de travail : non pas forcément plus de lucidité, mais plus de matière qu’on est trop fatigué pour hiérarchiser correctement au matin.",
      "Il crée un second dossier à l’intérieur de NW-7 : Captures validées. Puis un autre : Hypothèses à reprendre.",
      "Il déplace méthodiquement les fichiers, copie les exports, renomme deux captures dont les titres générés automatiquement ne veulent plus rien dire.",
      "Le geste est calme, précis, presque administratif. En réalité, il est en train de décider quelle version du réel sera disponible demain matin, et sous quelle forme.",
      "Minuit passé. Thomas passe une main sur son visage, referme les yeux un instant, puis rouvre le fichier principal une dernière fois.",
      "Il la connaît presque trop bien maintenant — sa discrétion, sa régularité. Rien en elle ne force à agir immédiatement.",
      "Sur le bureau, le carnet reste ouvert à la page du soir. Les lignes s’y tiennent avec une netteté presque austère.",
      "Thomas recule enfin sa chaise. Il a choisi de ne pas aller plus loin cette nuit.",
      "Il ne veut pas fabriquer de certitude à une heure où la fatigue transforme facilement les motifs en preuves.",
      "Mais au moment où il coupe la lampe, une pensée persiste, basse, presque sans forme : pendant qu’il classe, pendant qu’il sécurise, la pente, elle, ne classe rien.",
      "Elle continue."
    ],
    deskUpdate: {
      systemNotes: [
        "Structuration méthodique du dossier NW-7.",
        "Séparation entre captures validées et hypothèses.",
        "Stabilisation procédurale du matériau avant confrontation matinale."
      ],
      journalEntry: {
        summary: "Thomas choisit la discipline procédurale : il classe, stabilise et prépare le dossier plutôt que d’étendre l’analyse pendant la nuit.",
        tone: "cold",
        tags: ["procédure", "classement", "discipline", "NW-7"]
      },
      unlockArchives: ["dossier_structure_nw7"]
    },
    choices: [
      {
        id: "leave-office-after-procedure",
        label: "Quitter le bureau",
        hint: "S'arrêter là pour cette nuit.",
        nextUnitId: "1.4.1",
        unlockArchive: "dossier_structure_nw7"
      }
    ]
  },
  {
    id: "ch1-s03-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.4",
    title: "LE VERROUILLAGE",
    location: "Bureau principal",
    timeLabel: "00:17",
    imagePrompt: "Thomas_Ecran_Sombre",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas ne lance aucune nouvelle lecture. Pendant quelques secondes, il reste devant le dossier NW-7 ouvert sur l’écran.",
      "Avant de savoir quoi faire du signal, il veut savoir exactement où il se trouve, sous quelle forme, et qui pourrait tomber dessus sans lui.",
      "Il commence à renommer. Pas pour mieux comprendre. Pour mieux tenir.",
      "Les titres automatiques disparaissent au profit de noms plus neutres, moins lisibles au premier regard.",
      "Un export change de dossier. Deux captures quittent NW-7 pour une sous-partition chiffrée qu’il utilise rarement.",
      "Il efface l’historique récent d’un logiciel de visualisation.",
      "Le geste est propre, sans précipitation. C’est précisément ce qui le trouble.",
      "Il n’est pas en train de céder à une impulsion. Il est en train d’organiser.",
      "Il finit par écrire dans le carnet : Les traces doivent rester sous contrôle.",
      "La phrase lui déplaît immédiatement.",
      "Elle ne dit pas seulement ce qu’il fait, elle dit déjà le type d’homme qu’il risque de devenir si la nuit continue dans cette direction.",
      "Pourtant, il ne barre pas la phrase.",
      "Minuit dix-sept. Rien n’a disparu. Tout est encore là. Mais la matière est désormais répartie selon une logique qu’il est seul à maîtriser complètement.",
      "Il éteint l’écran. Dans le noir du bureau, il reste une seconde debout, face aux vitres redevenues opaques, puis ajoute une dernière ligne dans le carnet : Ne pas confondre protéger et retenir.",
      "Quand il quitte la pièce, rien n’a été perdu. Mais quelque chose a changé dans sa façon de garder."
    ],
    deskUpdate: {
      systemNotes: [
        "Compartimentation renforcée des traces du dossier.",
        "Réduction de la lisibilité immédiate des exports.",
        "Glissement du contrôle documentaire vers une logique de rétention."
      ],
      journalEntry: {
        summary: "Thomas verrouille le dossier NW-7 pour garder la maîtrise des traces, au prix d’un premier glissement intérieur vers la rétention.",
        tone: "dark",
        tags: ["verrouillage", "contrôle", "rétention", "discrétion", "isolement"]
      },
      unlockArchives: ["dossier_fragmente"]
    },
    choices: [
      {
        id: "leave-office-after-lockdown",
        label: "Quitter le bureau",
        hint: "Refermer la nuit sans rien perdre, mais pas sans coût.",
        nextUnitId: "1.4.1",
        unlockArchive: "dossier_fragmente"
      }
    ]
  }
];