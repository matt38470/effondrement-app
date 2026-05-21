// Remplace tout le contenu de src/app/lire/page.jsx par ceci :
import { redirect } from 'next/navigation';

export default function LireRedirect() {
  redirect('/read/1/1.1');
}