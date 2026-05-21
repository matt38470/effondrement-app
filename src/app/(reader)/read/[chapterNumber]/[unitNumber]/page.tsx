import { notFound } from 'next/navigation';
import SceneReaderClient from '@/src/components/SceneReaderClient';
import { getScene } from '@/src/content'; // <-- On importe depuis notre nouvel index global

interface PageProps {
  params: {
    chapterNumber: string;
    unitNumber: string;
  };
}

export default function UnitPage({ params }: PageProps) {
  // On utilise la nouvelle fonction pour trouver la scène
  const currentScene = getScene(params.chapterNumber, params.unitNumber);

  // Si la scène n'existe pas (ex: le joueur tape /read/1/9.9)
  if (!currentScene) {
    notFound();
  }

  // On envoie la scène au client
  return <SceneReaderClient scene={currentScene} />;
}