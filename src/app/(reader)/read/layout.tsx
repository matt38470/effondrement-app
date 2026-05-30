import LayoutClientHUD from '@/src/components/LayoutClientHUD';

export default function ReadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutClientHUD>{children}</LayoutClientHUD>;
}