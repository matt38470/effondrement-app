import type { NarrativeUnit } from '@/src/types/narrative';

export const scene7: NarrativeUnit[] = [
  {
    id: "ch1-s07-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.7.1",
    title: "LA RADIO",
    location: "Voiture — A14",
    timeLabel: "01:10",
    imagePrompt: "Thomas_Voiture_Radio",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il roule depuis plusieurs minutes quand un son revient dans l'habitacle.",
      "D'abord, il le prend pour un reste de ventilation. Puis il comprend qu'autre chose est resté allumé sous le silence qu'il croyait complet. Une voix reprend forme dans le fond de la voiture.",
      "Thomas comprend que la radio est restée allumée à bas volume.",
      "La voix a cette neutralité étudiée des émissions de nuit. D'ordinaire, il l'aurait laissée passer comme un fond sonore. Ce soir, quelque chose en lui s'y accroche avant même d'avoir décidé pourquoi.",
      "— Les marchés européens de l'énergie ont clôturé en légère tension ce soir… En France, les réserves hivernales sont décrites comme conformes aux normes de saison.",
      "La voix marque une transition, puis un autre timbre prend le relais. Plus rond. Plus institutionnel.",
      "— Interrogé ce soir, un porte-parole d'Eurogrid a rappelé que les mécanismes de solidarité européenne permettaient une redistribution rapide en cas de tension localisée. Il a précisé que les scénarios de défaillance en cascade restaient à ce jour purement théoriques.",
      "Pendant une seconde, Thomas ne pense pas. Il écoute.",
      "Puis quelque chose dans son attention se modifie. Légère tension. Conformes aux normes. Purement théoriques. Il n'écoute plus comme un conducteur fatigué. Il écoute comme quelqu'un qui sait ce qu'un mot peut cacher quand il est choisi au lieu d'un autre.",
      "Et la question se pose, simple, nette : qu'est-ce qu'il fait de cette parole-là, maintenant ?"
    ],
    deskUpdate: {
      systemNotes: [
        "Radio allumée en voiture — émission de nuit sur les marchés de l'énergie.",
        "Citation Eurogrid : « scénarios de défaillance en cascade restent purement théoriques »."
      ],
      journalEntry: {
        summary: "Thomas entend un communiqué Eurogrid sur l'énergie et comprend que le langage public entre à son tour dans le problème.",
        tone: "tense",
        tags: ["radio", "Eurogrid", "langage", "cascade", "formulation"]
      }
    },
    choices: [
      {
        id: "protection-psychique",
        label: "La protection psychique (Couper le son)",
        hint: "Refuser que la langue des autres prenne toute la place.",
        nextUnitId: "1.7.2",
        effects: { fatigue: -10, isolement: 10 }
      },
      {
        id: "lucidite-froide",
        label: "La lucidité froide (Écouter jusqu'au bout)",
        hint: "Décortiquer le cadrage institutionnel mot par mot.",
        nextUnitId: "1.7.3",
        effects: { paranoia: 15, preparation: 5 }
      },
      {
        id: "limpulsion",
        label: "L'impulsion (Appeler le standard)",
        hint: "Franchir le cadre avant même d'avoir trouvé le langage.",
        nextUnitId: "1.7.4",
        effects: { alerte: 15, discretion: -15 }
      }
    ]
  },

  {
    id: "ch1-s07-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.7.2",
    title: "LA PROTECTION PSYCHIQUE",
    location: "Voiture — A14",
    timeLabel: "01:12",
    imagePrompt: "Main_Bouton_Radio",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Au moment où le porte-parole prononce purement théoriques, Thomas tend la main vers l'autoradio et change de station d'un geste sec.",
      "Pendant une seconde, il tombe sur un morceau déjà commencé — basse sourde, voix féminine, quelque chose de lent et sans enjeu. Il laisse.",
      "La musique remplit l'habitacle sans vraiment l'occuper. Elle ne calme rien. Elle recouvre.",
      "Le mot continue de vivre malgré elle. Théoriques.",
      "La route déroule ses régularités nocturnes devant lui — bandes blanches, panneaux réfléchissants, camions lointains, échangeurs presque vides. À chaque silence entre deux chansons, les phrases reviennent. Samir au bar. Mehdi à 00h41. Hassan dans le parking. Et maintenant ce porte-parole anonyme qui parle de cascade comme d'une hypothèse abstraite rangée dans un dossier propre.",
      "Ce qu'il protège ici n'est pas sa tranquillité. Elle est perdue depuis longtemps. Ce qu'il protège, c'est une limite.",
      "Au premier feu rouge, il baisse encore le volume jusqu'à presque rien. Il ne rallume pas la station d'information.",
      "Quand il s'engage dans sa rue quelques minutes plus tard, Thomas coupe enfin le son.",
      "La musique n'a rien effacé. Elle lui a seulement permis d'arriver jusqu'ici sans laisser la langue des autres prendre toute la place."
    ],
    deskUpdate: {
      systemNotes: [
        "Radio coupée — choix de ne pas laisser le langage institutionnel résonner.",
        "Thomas arrive devant la maison."
      ],
      journalEntry: {
        summary: "Thomas coupe la radio et protège une limite intérieure. Le mot 'théoriques' persiste malgré tout.",
        tone: "cold",
        tags: ["protection", "limite", "musique", "langage", "arrivée"]
      }
    },
    choices: [
      {
        id: "arriver-e1",
        label: "Arriver chez soi",
        hint: "La nuit se referme.",
        nextUnitId: "1.8.1"
      }
    ]
  },

  {
    id: "ch1-s07-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.7.3",
    title: "LA LUCIDITÉ FROIDE",
    location: "Voiture — A14",
    timeLabel: "01:15",
    imagePrompt: "Thomas_Visage_Tendu",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas ne touche pas au bouton.",
      "La voix continue dans l'habitacle avec cette douceur artificielle des émissions de nuit. Il baisse légèrement le volume. Pas pour ne pas entendre. Pour mieux entendre.",
      "Il écoute maintenant comme il relirait une note interne : non pour ce qu'elle affirme seulement, mais pour le choix de chaque mot.",
      "Redistribution rapide. Capacités. Conformes aux normes. Purement théoriques.",
      "La formule ferme une porte sans paraître la claquer. Elle range l'idée de cascade du côté des abstractions.",
      "Et pourtant, pense-t-il aussitôt, on ne dément pas ce que personne n'a encore commencé à penser.",
      "Aucune de ces phrases n'est nécessairement fausse. C'est précisément cela qui l'intéresse. Elles peuvent être exactes et produire pourtant une image du réel plus stable qu'il ne l'est peut-être en profondeur.",
      "Il pense à Samir. À Mehdi. À Hassan. Au message, au parking B, au rendez-vous de huit heures. Et pour la première fois depuis le début de la journée, ces éléments commencent à appartenir à un même espace de lecture : celui où les faits et la manière d'en parler avancent ensemble.",
      "Le présentateur lance la météo. Thomas coupe enfin le son. Ce qu'il avait à entendre, il l'a entendu.",
      "Il comprend ce que cette émission vient d'ajouter à la nuit : une couche de langage entre le monde et lui."
    ],
    deskUpdate: {
      systemNotes: [
        "Éléments de langage Eurogrid identifiés : redistribution, capacités, théoriques.",
        "Carnet mental : cadrage ≠ mensonge."
      ],
      journalEntry: {
        summary: "Thomas décortique le discours Eurogrid et comprend que les faits et leur formulation avancent ensemble.",
        tone: "dark",
        tags: ["lucidité", "langage", "cadrage", "Eurogrid", "lecture"]
      },
      unlockArchives: ["element_langage_eurogrid"]
    },
    choices: [
      {
        id: "arriver-e2",
        label: "Arriver chez soi",
        hint: "La nuit se referme.",
        nextUnitId: "1.8.1",
        unlockArchive: "element_langage_eurogrid"
      }
    ]
  },

  {
    id: "ch1-s07-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.7.4",
    title: "L'IMPULSION",
    location: "Voiture — A14",
    timeLabel: "01:14",
    imagePrompt: "Main_Telephone_Voiture",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas écoute jusqu'à la phrase purement théoriques.",
      "Puis quelque chose passe en lui — pas exactement une décision, plutôt une poussée brève, presque absurde dans sa netteté : appeler maintenant, dire une phrase, raccrocher avant qu'on lui demande son nom.",
      "Le numéro du standard s'affiche sur l'écran du tableau de bord. Il tend la main, touche l'écran, laisse le système lancer la numérotation.",
      "Une tonalité. Puis une autre.",
      "Thomas sent immédiatement le décalage entre l'impulsion et l'acte. Maintenant il est un homme seul dans une voiture, à une heure du matin, qui appelle une émission de radio pour dire quelque chose qu'il ne peut ni prouver en vingt secondes, ni situer sans se compromettre.",
      "Une voix décroche. — Standard de nuit, bonsoir.",
      "Il ouvre la bouche. Rien ne vient sous la bonne forme.",
      "— Allô, monsieur ?",
      "Thomas coupe.",
      "Le silence revient d'un coup dans la voiture. Sur l'écran du tableau de bord, l'appel interrompu s'efface presque aussitôt.",
      "Thomas comprend alors qu'il existe désormais en lui une ligne de fuite vers le dehors. Pas encore une décision. Juste la preuve qu'à un moment de fatigue et de saturation, il a pu imaginer sortir du circuit par l'endroit le plus inadéquat possible.",
      "Il se gare devant la maison, coupe le moteur, et reste une seconde immobile dans l'obscurité redevenue entière.",
      "Cette seconde-là contient une information qu'aucune courbe ne lui avait encore donnée : le danger n'agit plus seulement sur ce qu'il voit. Il commence à agir sur ce qu'il pourrait faire."
    ],
    deskUpdate: {
      systemNotes: [
        "Appel du standard de l'émission — interrompu sans parole.",
        "Aucune trace extérieure de l'acte."
      ],
      journalEntry: {
        summary: "Thomas appelle le standard de la radio puis raccroche. L'impulsion avortée révèle une ligne de fuite intérieure.",
        tone: "dark",
        tags: ["impulsion", "appel", "ligne de fuite", "danger", "saturation"]
      }
    },
    choices: [
      {
        id: "arriver-e3",
        label: "Arriver chez soi",
        hint: "La nuit se referme.",
        nextUnitId: "1.8.1"
      }
    ]
  }
];