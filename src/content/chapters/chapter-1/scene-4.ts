import type { NarrativeUnit } from '@/src/types/narrative';

export const scene4: NarrativeUnit[] = [
  {
    id: "ch1-s04-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.1",
    title: "00H41",
    location: "Bureau",
    timeLabel: "00:41",
    imagePrompt: "ThomasTelephoneNuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est 00h41 quand le téléphone vibre.",
      "Thomas relève la tête sans comprendre tout de suite d’où vient le bruit. Pendant une seconde, il croit que c’est encore l’ordinateur — une alerte système, le claquement discret d’une fenêtre qu’il aurait laissée ouverte.",
      "Puis il voit l’écran allumé, posé à côté du carnet.",
      "Un message.",
      "Il tend la main. Mehdi.",
      "Le nom suffit à modifier la pièce. Pas violemment. D’un cran seulement.",
      "Thomas ouvre le message : « T’es encore là ? Passe me voir demain matin 8h. J’ai un truc à te montrer. »",
      "Il le relit. Puis une deuxième fois.",
      "L’heure d’envoi d’abord : 00h41. Mehdi n’écrit presque jamais à cette heure-là. Pas sans formule d’ouverture, pas sans contexte, pas sans cette manière rapide et imprécise qui lui est inhabituelle.",
      "J’ai un truc à te montrer.",
      "Pas : il faut qu’on parle.",
      "Pas : il y a un problème.",
      "Juste ça. Un truc.",
      "Thomas garde le téléphone dans la main, le regard fixé sur l’écran déjà teinté.",
      "Le rendez-vous avec Samir, le dossier NW-7, la soirée qui n’est pas encore retombée. Et maintenant Mehdi qui écrit à 00h41 pour le voir à 8h.",
      "Il pense à l’heure du message. Puis au choix de Mehdi. Puis à l’absence de contexte.",
      "Quelque chose s’aligne, sans encore prendre la forme d’une conclusion.",
      "Pas une alarme. Pas encore.",
      "Mais assez pour que le message cesse d’être seulement un message."
    ],
    deskUpdate: {
      systemNotes: [
        "Message nocturne inhabituel reçu de Mehdi.",
        "Rendez-vous matinal fixé à 8h.",
        "Le message introduit un élément extérieur à la logique NW-7.",
        "Première hypothèse de convergence entre plusieurs signaux."
      ],
      journalEntry: {
        summary: "Thomas reçoit un message nocturne de Mehdi et comprend qu’un autre fil s’ajoute à NW-7.",
        tone: "uneasy",
        tags: ["Mehdi", "message", "00h41", "rendez-vous", "signal externe"]
      }
    },
    choices: [
      {
        id: "respond-normal",
        label: "Répondre normalement",
        hint: "Traiter le message comme une simple demande de rendez-vous.",
        nextUnitId: "1.4.2",
        effects: { prudence: 5 }
      },
      {
        id: "wait-and-analyze",
        label: "Ne pas répondre",
        hint: "Laisser le message en suspens et le relire à froid.",
        nextUnitId: "1.4.2",
        effects: { preparation: 5, discretion: 5 }
      },
      {
        id: "create-trace",
        label: "Créer une trace",
        hint: "Consigner le message dans le carnet avant toute décision.",
        nextUnitId: "1.4.2",
        effects: { preparation: 10, discretion: -5 }
      }
    ]
  },
  {
    id: "ch1-s04-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.2",
    title: "LA PROCÉDURE DÉFENSIVE",
    location: "Bureau",
    timeLabel: "00:47",
    imagePrompt: "ThomasReflexionNuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas repose le téléphone près du carnet ouvert.",
      "Il pourrait répondre tout de suite. Il pourrait aussi laisser passer quelques minutes. Il ne fait ni l’un ni l’autre.",
      "Il relit le message encore une fois, puis ouvre une page vierge dans le carnet.",
      "Mehdi — 00h41.",
      "Passe me voir demain matin 8h.",
      "J’ai un truc à te montrer.",
      "La phrase est trop courte pour être neutre. Trop floue pour être innocente. Trop précise pour être vide.",
      "Thomas regarde la ligne comme s’il attendait qu’elle se clarifie d’elle-même.",
      "Rien ne vient.",
      "Il note seulement ce qu’il sait : un message reçu hors heure habituelle, un rendez-vous fixé tôt, une formulation inhabituelle.",
      "Pas de conclusion. Pas encore.",
      "Rester exact.",
      "Le reste attendra demain matin, ou plus tard.",
      "Quand il éteint enfin le téléphone, le silence du bureau ne paraît plus tout à fait le même.",
      "Le message n’a pas changé la réalité. Mais il a changé la manière dont Thomas la lit."
    ],
    deskUpdate: {
      systemNotes: [
        "Le message est consigné dans le carnet.",
        "Aucune réponse immédiate n’est envoyée.",
        "Thomas adopte une posture d’observation et de retenue."
      ],
      journalEntry: {
        summary: "Thomas choisit de ne pas réagir à chaud et transforme le message de Mehdi en donnée à isoler.",
        tone: "cold",
        tags: ["retenue", "exactitude", "message", "analyse", "suspicion"]
      }
    },
    choices: [
      {
        id: "sleep-and-wait",
        label: "Attendre le matin",
        hint: "Reporter la décision à l’aube.",
        nextUnitId: "1.5.1",
        effects: { patience: 10 }
      },
      {
        id: "cross-reference",
        label: "Croiser avec NW-7",
        hint: "Vérifier si Mehdi peut être lié au dossier.",
        nextUnitId: "1.5.1",
        effects: { preparation: 10, paranoia: 5 }
      }
    ]
  }
];
