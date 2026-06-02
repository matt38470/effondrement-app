import type { NarrativeUnit } from '@/src/types/narrative';

export const scene2: NarrativeUnit[] = [
  {
    id: "ch1-s02-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.1",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "18:58",
    imagePrompt: "scene_thomas_Bar",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Dans le métro, Thomas ne pense plus aux chiffres.",
      "Il pense à la décision qu’il est en train de prendre — pas demain, pas la semaine prochaine, maintenant, ce soir, en marchant vers un bar dont il sait déjà qu’il sera le lieu d’une conversation plus importante que n’importe quelle réunion de sa carrière.",
      "Il arrive à 18h58.",
      "La Rotonde est à six minutes de la sortie, à l’angle de la rue. Une façade rouge sombre. Une lumière jaune qui rend tout le monde légèrement plus vieux.",
      "Il prend une table au fond, dos au mur, avec vue sur l’entrée. Une table d’homme qui attend quelque chose qu’il ne peut déjà plus décommander.",
      "Il commande un café. Il ne le boira pas.",
      "Son téléphone repose sur la table, écran éteint, face contre le bois.",
      "Il connaît déjà le fichier à l’intérieur. Il connaît les chiffres.",
      "Ce qu’il attend maintenant n’est plus une donnée supplémentaire, mais un second regard.",
      "Samir entre à 19h07.",
      "Manteau sombre, sac d’ordinateur en bandoulière, l’air de quelqu’un qui a marché vite sans courir.",
      "Il repère Thomas immédiatement, lève deux doigts dans sa direction et vient s’asseoir en face de lui.",
      "— Qu’est-ce qu’il y a ?",
      "La courbe est là, dans le téléphone de Thomas, dans sa tête.",
      "Jusqu’à présent, il est le seul à porter le poids de cette découverte.",
      "Une fois l’information prononcée à voix haute, elle échappera à son contrôle."
    ],
    deskUpdate: {
      systemNotes: [
        "Rendez-vous initié hors du bureau.",
        "Le sujet quitte l’isolement de la découverte.",
        "Un second regard est désormais possible.",
        "Samir devient le premier témoin technique.",
        "L’information reste contenue, mais plus seule."
      ],
      journalEntry: {
        summary: "Thomas rejoint Samir à La Rotonde pour confronter la dérive repérée dans les données et sortir du face-à-face solitaire avec l’anomalie.",
        tone: "lucid",
        tags: ["rendez-vous", "Samir", "bar", "premier partage", "décision"]
      },
      unlockArchives: ["samirdossier"],
      unlockCharacters: [
        {
          id: "samir",
          note: "Relais technique mobilisé pour la première fois hors du bureau."
        }
      ]
    },
    choices: [
      {
        id: "scene2-a1",
        label: "La transparence absolue",
        hint: "Tout dire à Samir.",
        nextUnitId: "1.2.2",
        effects: { alerte: 15, discretion: -15 }
      },
      {
        id: "scene2-a2",
        label: "L’alerte mesurée",
        hint: "Dire l’essentiel sans tout dévoiler.",
        nextUnitId: "1.2.5",
        effects: { preparation: 10, confiance_samir: 10 }
      },
      {
        id: "scene2-a3",
        label: "L’esquive calculée",
        hint: "Rester vague et garder la main.",
        nextUnitId: "1.2.7",
        effects: { discretion: 10, confiance_samir: -10 }
      },
      {
        id: "scene2-a4",
        label: "Le repli",
        hint: "Minimiser l’anomalie pour gagner du temps.",
        nextUnitId: "1.2.9",
        effects: { discretion: 15, alerte: -10 }
      }
    ]
  },

  {
    id: "ch1-s02-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:07",
    imagePrompt: "Thomas_Samir_Bar",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas sort son carnet. Pas son téléphone. Pas les captures. D’abord la forme.",
      "Il trace un axe horizontal, un axe vertical, puis la ligne.",
      "Presque plate au début.",
      "Puis cette dérive lente, continue, assez faible pour rester défendable, assez régulière pour ne plus pouvoir être traitée comme un accident.",
      "Samir regarde sans parler.",
      "— Secteur nord-est, dit Thomas. Dix-huit mois. Dans la marge si tu prends le chiffre seul. Pas si tu regardes la pente.",
      "Thomas sent que, maintenant qu’il a commencé, s’arrêter au milieu reviendrait à mentir plus maladroitement qu’un silence.",
      "Il détaille les recoupements, les charges saisonnières, la maintenance.",
      "Il avoue que le problème ne s’arrête pas au nœud NW-7.",
      "Il évoque l’impensable : une logique de propagation.",
      "Une cascade.",
      "Le silence entre eux n’est pas un silence vide.",
      "C’est celui de deux hommes en train de mesurer la même chose à partir de deux seuils différents.",
      "Samir prend sa tasse, boit une gorgée, la repose.",
      "— J’ai vu quelque chose, dit-il. Pas par la même entrée. Sur des reports de charge. Je l’ai laissé de côté parce que ça restait absorbable. Puis c’est revenu hier dans une projection plus large."
    ],
    deskUpdate: {
      systemNotes: [
        "La dérive est nommée ouvertement.",
        "La logique de propagation devient envisageable.",
        "Samir confirme un signal convergent.",
        "Le problème dépasse NW-7.",
        "La scène franchit le seuil de la lecture individuelle."
      ],
      journalEntry: {
        summary: "Thomas montre la pente à Samir et obtient en retour une première confirmation technique issue d’une autre entrée.",
        tone: "cold",
        tags: ["NW-7", "pente", "cascade", "convergence", "confirmation"]
      },
      unlockArchives: ["nw7_dossier", "reports_charge"],
      unlockCharacters: [
        {
          id: "samir",
          note: "Le diagnostic devient partagé."
        }
      ]
    },
    choices: [
      {
        id: "scene2-a1-continue",
        label: "Poursuivre l’échange",
        hint: "Mesurer la fenêtre de tir et la suite à donner.",
        nextUnitId: "1.2.3"
      }
    ]
  },

  {
    id: "ch1-s02-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.3",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:14",
    imagePrompt: "Thomas_Samir_Bar_Tension",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Quelque chose se resserre proprement en Thomas.",
      "Pas de panique. Plutôt la disparition de la dernière issue commode.",
      "— Tu as une fenêtre ? demande-t-il.",
      "Samir hésite à peine.",
      "— Si je reste prudent, entre quatre et six mois. Moins si j’arrête de l’être.",
      "Thomas regarde la feuille entre eux, la pente tracée au stylo sur un papier de bar, et il comprend que ce n’est plus la même scène qu’il y a cinq minutes.",
      "Avant son arrivée, il pouvait encore imaginer une erreur de lecture.",
      "Maintenant ils sont deux.",
      "— Tu as gardé tes fichiers ? demande Thomas.",
      "— En local, dit Samir. Pas sur le partagé.",
      "Thomas hoche la tête.",
      "— Moi aussi.",
      "Cette réponse suffit.",
      "Elle dit plus que le reste.",
      "Elle dit qu’ils ont eu le même réflexe avant même d’avoir décidé quoi faire.",
      "Samir s’appuie au fond de sa chaise.",
      "— D’accord, dit-il. Alors la vraie question, c’est : qu’est-ce qu’on en fait ?",
      "Thomas baisse les yeux vers son café qu’il n’a pas touché.",
      "La surface noire tremble à peine quand quelqu’un passe un peu trop vite derrière lui."
    ],
    deskUpdate: {
      systemNotes: [
        "Fenêtre de détection estimée.",
        "Les copies locales sécurisent le travail.",
        "Le problème change de statut : de signal à dossier.",
        "Le risque d’exposition s’affirme.",
        "Samir accepte le partage sans le banaliser."
      ],
      journalEntry: {
        summary: "Thomas et Samir évaluent la fenêtre de temps avant aggravation et sécurisent leurs données en local.",
        tone: "alert",
        tags: ["fenêtre", "sécurisation", "dossier", "partage", "gravité"]
      },
      unlockArchives: ["local_copy_protocol"],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a1-end",
        label: "Clore le rendez-vous",
        hint: "Décider de ce qu’ils font ce soir.",
        nextUnitId: "1.2.4"
      }
    ]
  },

  {
    id: "ch1-s02-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.4",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:21",
    imagePrompt: "Thomas_Samir_Bar_Tension",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— Pas ce soir, dit Thomas.",
      "Il entend immédiatement ce qu’il y a dans sa propre réponse.",
      "Pas seulement de la prudence.",
      "Du délai.",
      "Une dernière nuit avant que tout change de catégorie.",
      "Samir le voit aussi.",
      "— Voilà, dit-il calmement. C’est exactement ça le problème.",
      "— Quoi ?",
      "— Le fait qu’une partie de toi soit soulagée que je sois d’accord.",
      "Le mot heurte Thomas parce qu’il est juste.",
      "— Ce n’est pas du soulagement.",
      "— Si. Pas au sens simple. Pas “tout va bien”. Au sens où maintenant tu n’es plus seul à porter ça, donc tu peux te permettre d’attendre jusqu’à demain sans avoir l’impression de l’abandonner complètement.",
      "Thomas ne répond pas.",
      "Le bar continue autour d’eux — voix basses, verres qu’on range, un rire trop fort près du comptoir, le frottement d’une chaise sur le carrelage.",
      "Tout paraît stable, tenu, supporté par les routines ordinaires du monde.",
      "C’est presque obscène.",
      "— Et toi ? dit Thomas. Tu veux faire quoi ?",
      "Samir regarde la rue par-dessus l’épaule de Thomas.",
      "— Ce soir, rien qu’on puisse défendre proprement. Si on remonte avec ça maintenant, sans dossier consolidé, on déclenche une chaîne de réactions avant même de savoir à qui elle profite."
    ],
    deskUpdate: {
      systemNotes: [
        "Le report devient un choix assumé.",
        "La scène confirme un soulagement coupable.",
        "La décision de ne rien faire ce soir est validée par Samir.",
        "Le danger immédiat reste contenu.",
        "La prochaine étape est reportée au matin."
      ],
      journalEntry: {
        summary: "Thomas accepte de ne rien lancer ce soir, au prix d’un délai qui ressemble déjà à une forme de soulagement.",
        tone: "lukewarm",
        tags: ["délai", "soulagement", "précaution", "matin", "contrôle"]
      },
      unlockArchives: [],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a1-next",
        label: "Passer au lendemain",
        hint: "Préparer la suite avant le bureau.",
        nextUnitId: "1.2.11"
      }
    ]
  },

  {
    id: "ch1-s02-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.5",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:07",
    imagePrompt: "Thomas_Samir_Bar",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Samir ne bouge pas.",
      "— Non linéaire. Avec compensation locale temporaire.",
      "Le mot propagation reste entre les deux tasses.",
      "Samir baisse les yeux une seconde. Pas sur la table. Sur l’expresso froid qu’il n’a pas touché. Puis il relève la tête.",
      "— Il y a quelque chose que tu veux entendre ?",
      "— Oui.",
      "— Que ça tient. Et que ça ne tient pas encore assez pour qu’on alerte qui que ce soit d’autre.",
      "Thomas ne répond pas immédiatement.",
      "La formulation de Samir est ouverte.",
      "Elle donne à Thomas la place de confirmer ou de reculer.",
      "Il choisit.",
      "— Oui.",
      "— Alors on est sur la même page. Tu ne veux pas me laisser trop loin, et tu ne veux pas me laisser trop près. Tu veux que je sois à l’endroit exact où tu te trouves.",
      "Ce n’est pas une accusation.",
      "C’est pire : une observation neutre, formulée sans charge émotionnelle, qui rend la position de Thomas parfaitement visible."
    ],
    deskUpdate: {
      systemNotes: [
        "La scène bascule dans l’aveu partiel.",
        "Samir lit la stratégie de rétention.",
        "Le seuil de confiance est atteint sans être dépassé.",
        "La confirmation est implicite, non totale.",
        "Le langage technique sert d’écran temporaire."
      ],
      journalEntry: {
        summary: "Thomas livre l’essentiel sans tout dévoiler et laisse Samir situer le problème sans franchir le dernier seuil.",
        tone: "lucid",
        tags: ["aveu partiel", "pente", "mesure", "retenue", "lecture"]
      },
      unlockArchives: ["signal_recurrent"],
      unlockCharacters: [
        {
          id: "samir",
          note: "Samir comprend la rétention de Thomas."
        }
      ]
    },
    choices: [
      {
        id: "scene2-a2-continue",
        label: "Écouter l’analyse de Samir",
        hint: "Laisser Samir formuler ce qu’il voit.",
        nextUnitId: "1.2.6"
      }
    ]
  },

  {
    id: "ch1-s02-u06",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.6",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:14",
    imagePrompt: "Thomas_Samir_Bar_Tension",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— Si tu as vraiment deux chemins d’entrée différents qui te mènent à une même forme, tu as déjà dépassé le stade de l’intuition.",
      "Tu es dans la zone de surveillance récurrente.",
      "Ce n’est plus une question de si. C’en devient une de quand.",
      "Le silence tombe entre eux, plus lourd que celui de tout à l’heure.",
      "Ce silence ne questionne pas. Il constate un terrain.",
      "Samir reprend, plus bas :",
      "— Et si je t’ai bien compris, il y a deux autres choses. Mehdi qui t’a écrit. Et ce type dans le parking. Hassan.",
      "— 00h41.",
      "Samir hoche la tête. Pas un enregistrement chiffré. En garde-mémoire.",
      "— Et le vigile qui a vu la direction informatique quitter tard. Avec des badges visiteurs.",
      "— Oui.",
      "Samir ferme les yeux deux secondes.",
      "Pas un sommeil. Un recadrage.",
      "— Donc tu as une pente qui te prend deux chemins. Tu as un supérieur technique qui veut te voir à 8h demain matin. Tu as un vigile qui a noté que des gens inhabituels circulaient dans le parking. Et tu as rappelé tout ça ce soir.",
      "— Oui.",
      "C’est la méthode par laquelle Samir opère : une suite factuelle assemblée avec précision."
    ],
    deskUpdate: {
      systemNotes: [
        "Recoupement entre plusieurs entrées de preuve.",
        "Le dossier dépasse la seule donnée graphique.",
        "Mehdi entre dans la trame active.",
        "Le parking et les badges visiteurs deviennent pertinents.",
        "Le problème prend une dimension organisationnelle."
      ],
      journalEntry: {
        summary: "Samir reformule le problème à partir de plusieurs indices, dont Mehdi, le parking et les badges visiteurs.",
        tone: "cold",
        tags: ["recoupement", "Mehdi", "parking", "badges", "organisation"]
      },
      unlockArchives: ["mehdi_message", "parking_log", "vigile_note"],
      unlockCharacters: [
        {
          id: "mehdi",
          note: "Entrée indirecte dans le dossier."
        }
      ]
    },
    choices: [
      {
        id: "scene2-a2-close",
        label: "Poser les règles du lendemain",
        hint: "Préparer le rendez-vous suivant.",
        nextUnitId: "1.2.11"
      }
    ]
  },

  {
    id: "ch1-s02-u07",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.7",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:07",
    imagePrompt: "Thomas_Samir_Bar_Froid",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas laisse passer une seconde de trop avant de répondre.",
      "— J’ai vu quelque chose d’inhabituel cet après-midi, dit-il. Pas assez propre pour que je le formule déjà, mais assez pour ne pas avoir envie de rester seul avec.",
      "Samir attend.",
      "— Quel genre de quelque chose ?",
      "Thomas fixe une rayure dans le bois de la table.",
      "— Une dérive. Peut-être. Je revérifie.",
      "Le serveur apporte son expresso.",
      "Samir ne touche pas à la tasse.",
      "— Thomas.",
      "Il dit seulement son prénom.",
      "Pas pour le brusquer.",
      "Pour marquer qu’il entend le flou, qu’il le laisse exister une seconde, pas davantage.",
      "— Je préfère te le dire maintenant plutôt que demain matin si ça tient, ajoute Thomas. Mais je ne suis pas au point où j’ai envie d’annoncer un problème qui n’existe peut-être pas.",
      "Samir s’appuie un peu au fond de sa chaise.",
      "Il le regarde comme il regarderait un schéma incomplet : sans hostilité, mais sans accepter de combler lui-même les blancs."
    ],
    deskUpdate: {
      systemNotes: [
        "Thomas retient l’information essentielle.",
        "La réponse reste volontairement floue.",
        "Samir identifie une stratégie d’évitement.",
        "Le rendez-vous glisse vers la retenue.",
        "La confiance commence à se contracter."
      ],
      journalEntry: {
        summary: "Thomas choisit de rester vague et d’évaluer Samir sans livrer les données qui permettraient un vrai diagnostic.",
        tone: "cold",
        tags: ["flou", "retenue", "évitement", "rétention", "distance"]
      },
      unlockArchives: [],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a3-continue",
        label: "Tenter de sonder Samir",
        hint: "Voir s’il a lui aussi perçu quelque chose.",
        nextUnitId: "1.2.8"
      }
    ]
  },

  {
    id: "ch1-s02-u08",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.8",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:14",
    imagePrompt: "Thomas_Samir_Bar_Froid",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Autour d’eux, le bar continue comme si de rien n’était.",
      "À leur table, rien ne circule vraiment.",
      "Seulement l’esquisse d’un savoir que Thomas a choisi de tenir hors de portée.",
      "— Tu n’as rien vu de ton côté ? demande Thomas, presque malgré lui.",
      "Samir le regarde une seconde.",
      "— Peut-être, dit-il. Pas assez pour t’en parler vaguement.",
      "Le coup est léger.",
      "Il porte quand même.",
      "Thomas baisse les yeux, puis acquiesce, comme si la phrase ne faisait que constater quelque chose d’évident.",
      "Quand ils se lèvent, le rendez-vous n’a rien produit de visible.",
      "Pas de validation.",
      "Pas de contradiction.",
      "Pas même un vrai désaccord.",
      "Seulement une trace.",
      "Thomas a ouvert la porte, puis il l’a laissée à peine entrebâillée.",
      "Samir l’a vu.",
      "Et lui aussi."
    ],
    deskUpdate: {
      systemNotes: [
        "La rétention produit un sous-texte de défiance.",
        "Samir laisse le flou sans le valider.",
        "Le rendez-vous reste non conclusif.",
        "La porte est entrouverte, mais pas franchie.",
        "La scène conserve une tension basse et durable."
      ],
      journalEntry: {
        summary: "Thomas tente de sonder Samir sans révéler ses cartes, et ne récupère qu’une réponse partielle en retour.",
        tone: "lukewarm",
        tags: ["sondage", "défiance", "flou", "trace", "non-dit"]
      },
      unlockArchives: [],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a3-end",
        label: "Rentrer",
        hint: "Laisser la conversation en suspens.",
        nextUnitId: "1.2.11"
      }
    ]
  },

  {
    id: "ch1-s02-u09",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.9",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:07",
    imagePrompt: "Thomas_Samir_Bar_Froid",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas pose la main sur son carnet, sans l’ouvrir.",
      "— Pas grand-chose encore, dit-il. Une dérive repérée cet après-midi. Rien de proprement alarmant.",
      "Samir attend la suite.",
      "— Quel type de dérive ?",
      "— Un écart de tolérance sur une zone du nord-est. Lent. Un peu trop régulier pour être élégant, pas assez net pour mériter autre chose qu’une surveillance.",
      "Thomas entend la qualité de sa propre phrase au moment où il la prononce.",
      "C’est exactement le genre de formulation qui permet de garder un problème dans une taille acceptable.",
      "Il laisse volontairement de côté ce qui, dans la forme même de la courbe, l’a fait appeler à 15h21.",
      "Samir prend sa tasse, boit une gorgée, la repose.",
      "— Donc, si je comprends bien, tu as vu un signal discutable, tu l’as recoupé assez pour qu’il t’occupe toute l’après-midi, et tu me dis maintenant qu’il est probablement banal.",
      "Thomas soutient son regard.",
      "— Je te dis qu’il est trop tôt.",
      "Le silence qui suit n’est pas hostile.",
      "Il est plus précis que ça.",
      "Samir est en train de décider s’il le croit, ou s’il croit surtout à l’effort que fait Thomas pour rester du côté des hypothèses admissibles."
    ],
    deskUpdate: {
      systemNotes: [
        "Minimisation explicite du signal.",
        "Le problème est requalifié en surveillance prudente.",
        "Thomas garde le contrôle du tempo.",
        "Samir teste la solidité du cadrage.",
        "Le risque est verbalement amoindri."
      ],
      journalEntry: {
        summary: "Thomas minimise l’anomalie pour gagner du temps et garder la scène dans une taille acceptable.",
        tone: "lukewarm",
        tags: ["minimisation", "surveillance", "tempo", "contrôle", "déni"]
      },
      unlockArchives: [],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a4-end",
        label: "Maintenir la version",
        hint: "Laisser Samir avec une hypothèse réduite.",
        nextUnitId: "1.2.10"
      }
    ]
  },

  {
    id: "ch1-s02-u10",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.10",
    title: "LA ROTONDE",
    location: "Bar",
    timeLabel: "19:21",
    imagePrompt: "Thomas_Dans_La_Rue",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "— D’accord, dit Samir enfin. Trop tôt, alors.",
      "Il n’insiste pas.",
      "C’est presque pire.",
      "Thomas avait anticipé des questions, peut-être une contre-analyse, peut-être même une inquiétude.",
      "À la place, il lui laisse son propre cadrage.",
      "Comme s’il refusait de prendre à sa charge quelque chose que Thomas vient lui-même de rabaisser.",
      "— Tu me tiens au courant ? demande Samir.",
      "— Oui.",
      "Le mot sort trop vite.",
      "Quand ils se lèvent, Thomas sait qu’il a conservé quelque chose : le contrôle, la maîtrise du tempo, la possibilité de revenir demain avec une version plus solide ou plus rassurante.",
      "Mais il sait aussi ce qu’il a perdu dans l’échange.",
      "Il n’a pas seulement retenu une information.",
      "Il a diminué le poids du réel au moment même où il pressentait qu’il ne demandait qu’à peser davantage.",
      "En remontant son col dans le froid du boulevard, Thomas sent encore, très légèrement, le soulagement d’avoir parlé moins franchement qu’il n’aurait pu.",
      "C’est un soulagement propre, raisonnable, presque professionnel.",
      "C’est aussi, il le sait, la forme la plus présentable du déni."
    ],
    deskUpdate: {
      systemNotes: [
        "Le repli est accepté sans être corrigé.",
        "La scène se termine sur un désaccord implicite.",
        "Le réel est allégé au lieu d’être consolidé.",
        "Samir laisse Thomas avec sa version.",
        "Le déni devient la forme la plus propre du contrôle."
      ],
      journalEntry: {
        summary: "Thomas maintient une version réduite du problème et quitte le bar avec un contrôle apparent, mais une vérité affaiblie.",
        tone: "cold",
        tags: ["repli", "déni", "contrôle", "version réduite", "sortie"]
      },
      unlockArchives: [],
      unlockCharacters: []
    },
    choices: [
      {
        id: "scene2-a4-end-next",
        label: "Passer au lendemain",
        hint: "Rejoindre la scène suivante.",
        nextUnitId: "1.2.11"
      }
    ]
  }
];