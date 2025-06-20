import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FryJoy - Snacks maison sains et croustillants",
  description: "Découvrez FryJoy, la machine révolutionnaire pour préparer des chips et crackers maison sains et savoureux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
