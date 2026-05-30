import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import HeaderAuth from "@/src/components/HeaderAuth";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  
  );
}