import type { NarrativeUnit } from '@/src/types/narrative';

export const scene2: NarrativeUnit[] = [
  {
    id: "ch1-s02-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.1",
    title: "LA ROTONDE",
    location: "Le Bar",
    timeLabel: "19:15",
    imagePrompt: "Thomas_Bar",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "La Rotonde était bruyante, chaude, saturée d'odeurs de bière renversée et de friture. Samir était déjà là, installé au fond de la salle, une pinte à moitié pleine devant lui. Il n'avait pas enlevé son manteau.",
      "Thomas s'est assis en face sans dire un mot. Il a posé son sac sur la banquette. Il a sorti la clé USB, l'a poussée sur la table vernie jusqu'à la buter contre le sous-bock de Samir.",
      "Samir a regardé la clé, puis Thomas.",
      "— C'est quoi ?— Regarde, a dit Thomas.",
      "Samir a soupiré. Il a sorti son propre ordinateur, un modèle durci, lourd, couvert d'autocollants. Il a inséré la clé. L'écran a projeté une lueur bleutée sur son visage fatigué.",
      "Selon la manière dont Thomas se tient en retrait ou intervient, le silence n'a pas tout à fait la même texture. Dans un cas, Samir découvre seul l'étendue du problème. Dans l'autre, Thomas oriente déjà sa lecture.",
      "Le bar semblait continuer autour d'eux, mais leur table s'était isolée du reste de la salle. Verres, rires, vaisselle — tout paraissait plus loin.",
      "Samir a fait défiler les fichiers. Une fois. Deux fois. Puis il s'est figé.",
      "— Depuis quand tu as ça ? a-t-il demandé, la voix soudainement très basse.— Depuis cet après-midi.— Et personne d'autre n'est dessus ?— Personne. C'est passé sous les radars. Dix-huit mois de dérive, Samir.",
      "Si Thomas a parlé trop vite, Samir en garde une pointe d'agacement, cette crispation de l'expert à qui l'on mâche le travail. S'il s'est tu, c'est autre chose qui s'installe : la gravité nue, sans médiation.",
      "Quand Samir a relevé la tête, il n'y avait plus aucune trace de fatigue. Seulement cette tension électrique, aiguë, qu'ont les gens quand une hypothèse cesse d'être théorique.",
      "— Je sais ce que ça veut dire, a-t-il fini par dire. C'est pas une anomalie. C'est un putain de cancer silencieux."
    ],
    deskUpdate: {
      systemNotes: [
        "Transmission physique des données à Samir.",
        "Validation externe implicite de la dérive.",
        "La menace quitte le champ du soupçon solitaire."
      ],
      journalEntry: {
        summary: "Thomas expose NW-7 à Samir à La Rotonde. Leur échange transforme l'intuition de Thomas en diagnostic partagé.",
        tone: "tense",
        tags: ["Samir", "transmission", "diagnostic", "validation"]
      }
    },
    choices: [
      {
        id: "wait-samir-reaction",
        label: "Attendre sa réaction",
        hint: "Le laisser aller seul jusqu'au diagnostic.",
        nextUnitId: "1.2.2",
        effects: { cohesion: 5 }
      },
      {
        id: "explain-immediately",
        label: "Lui expliquer directement",
        hint: "Orienter sa lecture dès le départ.",
        nextUnitId: "1.2.2",
        effects: { cohesion: -5, preparation: 5 }
      }
    ]
  },
  {
    id: "ch1-s02-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2",
    title: "LE POINT DE RUPTURE",
    location: "Le Bar",
    timeLabel: "19:28",
    imagePrompt: "Thomas_Samir_Bar",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— Ça va lâcher, a dit Samir. C'est pas une question de si, c'est une question de quand. Le réseau compense, il redirige la charge, mais la marge de manœuvre fond.",
      "— Combien de temps ? a demandé Thomas.— Impossible à dire précisément. Trois mois ? Trois semaines ? Si on a une vague de froid précoce, ça peut être dans dix jours.",
      "Thomas a senti son pouls accélérer. Il l'avait deviné, mais l'entendre de la bouche de Samir rendait la chose réelle.",
      "— Il faut remonter ça à la direction demain matin à la première heure, a repris Samir. Faut qu'ils coupent des secteurs entiers pour purger la charge et réparer.",
      "Thomas a secoué la tête lentement.",
      "— Tu les connais, Samir. Si on arrive avec ça demain, ils vont nommer une commission d'évaluation. Ils vont commander une contre-expertise. Ils ne couperont pas deux millions de personnes sur la base d'une seule projection. Pas avec les élections qui approchent.",
      "Samir s'est enfoncé dans la banquette, les bras croisés. Le silence entre eux n'avait plus rien d'hésitant. Il était devenu stratégique.",
      "Deux lignes se dessinaient, irréconciliables. Forcer la main à la hiérarchie, au risque de se brûler immédiatement. Ou chercher encore, creuser davantage, bâtir un dossier impossible à étouffer.",
      "Dans le premier cas, il faudrait agir presque contre le protocole. Dans le second, il faudrait mettre les mains dans des zones où personne ne va sans laisser de traces.",
      "Samir a fini par résumer le vrai nœud du problème.",
      "— Dans les deux cas, il nous manque la même chose : le code source du correctif qu'ils ont appliqué il y a deux ans. C'est là que la faille a commencé. Si on l'obtient, on tient soit l'arme pour les forcer à regarder, soit la preuve pour les coincer proprement.",
      "Thomas n'a rien répondu tout de suite. Le code source était sur des serveurs sécurisés de niveau 4. Y accéder hors procédure, de nuit, sans couverture, laissait des traces numériques indélébiles.",
      "À partir de là, il ne s'agissait plus seulement de savoir ce qu'ils avaient découvert. Il s'agissait de décider quel prix ils étaient prêts à payer pour la suite."
    ],
    deskUpdate: {
      systemNotes: [
        "Effondrement potentiel confirmé par Samir.",
        "Deux stratégies émergent : forcer l'alerte ou consolider la preuve.",
        "Le code source du correctif devient la cible opérationnelle."
      ],
      journalEntry: {
        summary: "Le diagnostic devient un point de rupture : Thomas et Samir doivent choisir entre l'urgence d'une alerte forcée et la prudence d'un dossier irréfutable.",
        tone: "critical",
        tags: ["rupture", "stratégie", "preuve", "serveur niveau 4"]
      }
    },
    choices: [
      {
        id: "push-for-action",
        label: "Pousser pour agir vite",
        hint: "Forcer la main à la direction avant qu'il soit trop tard.",
        nextUnitId: "1.3.1",
        effects: { alerte: 10, discretion: -10 },
        conditions: [
          { key: "preparation", operator: "gte", value: 20 },
          { key: "charge", operator: "lte", value: 70 }
        ],
        unlockArchive: "code_source_mission"
      },
      {
        id: "suggest-more-proofs",
        label: "Chercher d'autres preuves",
        hint: "Bâtir un dossier impossible à enterrer.",
        nextUnitId: "1.3.1",
        effects: { preparation: 10, charge: 5, integrite: -10 },
        unlockArchive: "serveur_n4_rules"
      }
    ]
  }
];