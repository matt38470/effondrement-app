import type { NarrativeUnit } from "@/src/types/narrative";
import LayoutClientHUD from '@/src/components/LayoutClientHUD';
import { useGameStore } from '@/src/store/gameStore';
import { useRouter } from 'next/navigation';

export const scene1: NarrativeUnit [] = [
  {
  id: "ch1-s01-u01",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.1",
  title: "LA DÉCOUVERTE",
  location: "Bureau",
  timeLabel: "14:37",
  imagePrompt: "Thomas_Bureau",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "Le graphique est apparu à 14h37.",
    "Pas une alerte — rien qui clignote, rien qui sonne. Juste une courbe qui s’écarte de son couloir de tolérance sur le secteur nord-est, légèrement, de façon continue, depuis dix-huit mois. Le genre d’écart qu’on remarque si on cherche, qu’on ignore si on ne cherche pas.",
    "Thomas cherchait autre chose. Il a fait défiler l’écran, s’est arrêté, est remonté. Il a isolé la variable, changé l’échelle temporelle, croisé avec les données de charge saisonnière. L’écart tenait. Il a croisé avec les relevés de maintenance. Il tenait encore. Il a ouvert un second terminal. Autre méthode, mêmes données. Même résultat."
  ],
  choices: [
    {
      id: "continue-analysis",
      label: "Continuer l'analyse",
      hint: "Aller plus loin dans la donnée.",
      nextUnitId: "1.1.2"
    }
  ]
},
{
  id: "ch1-s01-u02",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.2",
  title: "L'ATTENTE",
  location: "Bureau",
  timeLabel: "14:45",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "Il s'est rapproché de l'écran sans s'en rendre compte, les avant-bras posés sur le bureau, les mains immobiles de part et d'autre du clavier. Chez lui, la concentration ne produisait pas d'agitation mais l'inverse. Moins il était sûr, moins il bougeait.",
    "Vu de loin, on aurait pu croire quelqu'un qui vérifiait une anomalie mineure de plus dans une journée de bureau ordinaire. De près, il y avait autre chose — cette fixité trop complète, ce visage fermé non par l'émotion mais par le calcul, comme s'il attendait des données qu'elles lui indiquent elles-mêmes à partir de quel moment elles cesseraient d'être discutables.",
    "Il a fermé les deux fenêtres. Il les a rouvertes. Il savait ce qu'il allait trouver — il les a rouvertes quand même, parce que c'est ce qu'on fait quand on espère encore que la troisième lecture produira quelque chose de différent.",
    "Elle n'en a rien produit."
  ],
  choices: [
    {
      id: "analyze-shape",
      label: "Analyser la forme",
      hint: "Chercher la nature de la courbe.",
      nextUnitId: "1.1.3"
    }
  ]
},
{
  id: "ch1-s01-u03",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.3",
  title: "LA PENTE",
  location: "Bureau",
  timeLabel: "14:52",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "Ce n'était pas le chiffre. Le chiffre restait dans la marge — techniquement défendable, le genre de donnée qu'un comité de pilotage peut examiner vingt minutes avant de décider de surveiller sans agir. Ce qui posait problème, c'était la forme.",
    "<span class='font-bold text-gray-900 dark:text-white''>Pas un pic. Une pente.</span>",
    "Lente, régulière, continue. Dix-huit mois dans une seule direction.",
    "Les pics ont des causes. On les trouve, on les traite, on passe à autre chose. Les pentes ont des logiques — et les logiques des pentes ne s'inversent pas sur décision. Thomas connaissait cette différence depuis longtemps. Pas comme une leçon théorique apprise dans un manuel de supervision, mais comme quelque chose de plus usé, de plus concret. Il avait déjà vu des gens très compétents regarder une dérive lente avec un sérieux sincère et pourtant la ranger, faute de mieux, dans la catégorie rassurante des problèmes encore réversibles.",
    "On ne niait pas les chiffres. On discutait leur portée. On gagnait quelques heures comme ça, parfois quelques jours. Le temps de faire passer une pente pour une variation, puis une variation pour un contexte, puis un contexte pour un sujet à suivre au prochain point. Parfois cela suffisait. Parfois non."
  ],
  choices: [
    {
      id: "data-silence",
      label: "Le silence des données",
      hint: "Réfléchir à l'absence d'alertes.",
      nextUnitId: "1.1.4"
    }
  ]
},
{
  id: "ch1-s01-u04",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.4",
  title: "L'ANGLE MORT",
  location: "Bureau",
  timeLabel: "15:12",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "<span class='font-bold text-gray-900 dark:text-white''>Dix-huit mois.</span>",
    "Il n'avait pas vu la courbe à son début. Personne ne la lui avait signalée. Elle avait existé sans lui dans les données, s'était développée dans les serveurs, avait traversé des réunions de coordination et des rapports trimestriels sans déclencher ce qu'elle aurait dû déclencher. Et maintenant il était là, un mardi de mars à 15h04, à découvrir une histoire déjà ancienne.",
    "Il a regardé l'heure : 15h12. Trente-cinq minutes s'étaient écoulées depuis qu'il avait ouvert le fichier. Il ne les avait pas senties passer.",
    "Autour de lui, l'open space continuait — claviers, conversations basses, quelqu'un qui riait près de la machine à café, une chaise qu'on repousse, le vibreur d'un téléphone posé sur un plateau. Ce bruit familier qu'il n'entendait plus depuis des années, il l'entendait maintenant avec une netteté bizarre, comme si quelque chose s'était légèrement déplacé entre lui et le reste.",
    "Pas un basculement intérieur. Un décalage plus fin. Les autres poursuivaient leur après-midi de travail ; lui regardait une forme qui s'était installée depuis dix-huit mois sans demander la permission à personne."
  ],
  choices: [
    {
      id: "secure-info",
      label: "Sécuriser l'information",
      hint: "Sauvegarder les données avant d'agir.",
      nextUnitId: "1.1.5",
      effects: { preparation: 5, discretion: -5 }
    }
  ]
},
{
  id: "ch1-s01-u05",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.5",
  title: "NW-7",
  location: "Bureau",
  timeLabel: "15:18",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "Il a enregistré les captures. Il a créé un dossier dans son espace local — pas le serveur partagé, la partition chiffrée qu'il utilisait pour les dossiers sensibles en cours d'instruction. Il l'a fait avant d'avoir décidé de le faire. Le geste a précédé la pensée. Il a nommé le dossier <span class='font-bold'>NW-7</span>. Les deux lettres de sa fenêtre de bureau, le chiffre du mois. Première désignation venue, sans importance apparente. Il garderait ce nom.",
    "Puis il a regardé par la fenêtre. Dehors, le périphérique, les immeubles de bureaux, le ciel gris de mars tassé au-dessus de la ville. Plus loin, des barres d'habitation, une grue immobile, la ligne sombre d'un échangeur. Une ville qui fonctionnait — feux, métros, ascenseurs, hôpitaux, data centers, pompes, chauffage, tout ce qui marche sans qu'on y pense précisément parce que ça marche. Thomas regardait souvent le monde comme ça. Avec l'habitude professionnelle de quelqu'un dont le métier consiste à maintenir l'invisible.",
    "La fragilité des systèmes complexes n'était pas pour lui une révélation. Ce qu'il n'avait jamais eu, c'était une courbe comme celle-là. Pas abstraite. Pas hypothétique. Réelle, chiffrée, datée, sur un secteur qu'il connaissait : nord-est, trois nœuds de distribution majeurs, deux millions d'abonnés directs, des hôpitaux, des centres de données, un aéroport secondaire. Pas une fragilité générale. Une fragilité localisée, déjà engagée."
  ],
  choices: [
    {
      id: "call-samir",
      label: "Appeler Samir",
      hint: "Contacter l'expert du réseau.",
      nextUnitId: "1.1.6",
      effects: { alerte: 5, charge: 10 }
    }
  ]
},
{
  id: "ch1-s01-u06",
  chapterId: "chapter-1",
  chapterNumber: 1,
  unitNumber: "1.1.6",
  title: "LA DÉCISION",
  location: "Bureau",
  timeLabel: "15:21",
  accessLevel: "public",
  countdownVisible: false,
  textBlocks: [
    "Il a pris son téléphone. Il a cherché le numéro de Samir. Samir Hadj travaillait à la direction technique du réseau de transport — un échelon au-dessus. Thomas respectait son jugement précisément parce que Samir ne cherchait jamais à rassurer. Quand il disait <i>ça tient</i>, ça tenait.",
    "Mais appeler Samir, c'était sortir la courbe de son écran pour la poser dans une conversation réelle. C'était la rendre un peu plus vraie qu'elle ne l'était déjà. Tant qu'un seul homme avait vu la pente, la pente pouvait rester une erreur de lecture. Il a rouvert le fichier. Même résultat. Évidemment. Il a appelé à 15h21.",
    "— T'as cinq minutes ? a dit Thomas.<br>— J'ai trois minutes. C'est quoi.<br>— Pas au téléphone. Ce soir si possible.",
    "Un silence court. Dans leur vocabulaire commun, <i>pas au téléphone</i> signifiait une chose précise.",
    "— Je finis à dix-neuf heures, a dit Samir. La Rotonde ?<br>— La Rotonde.",
    "L'heure et demie qui a suivi, Thomas l'a traversée en surface. Personne n'aurait pu dire, en le regardant, qu'une courbe occupait maintenant l'essentiel de son attention. En dessous, pourtant, quelque chose s'était fixé. À 18h45, il a fermé son ordinateur. Dans l'ascenseur, il pensait à la pente. Au fait qu'elle n'avait pas attendu qu'il la trouve pour continuer.",
    "Il a marché vers le métro avec les données dans la tête et le sentiment très net, très froid, qu'il se rendait à un rendez-vous où quelque chose allait cesser d'être seulement possible pour devenir partageable."
  ],
  choices: [
    {
      id: "meet-samir",
      label: "Rejoindre Samir à La Rotonde",
      hint: "Le rendez-vous décisif.",
      nextUnitId: "1.2.1",
      effects: { charge: 5 },
      unlockArchive: "samirdossier"
    }
  ]
}
];