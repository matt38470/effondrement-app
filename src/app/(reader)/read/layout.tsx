import LayoutClientHUD from '@/src/components/LayoutClientHUD';
import { Inter, Merriweather } from 'next/font/google';

export default function ReadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutClientHUD>{children}</LayoutClientHUD>;
}


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});
