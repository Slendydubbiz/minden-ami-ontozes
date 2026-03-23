import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import FloatingCall from "@/components/layout/FloatingCall";
import {ReactNode} from "react";
import Footer from "@/components/layout/Footer";

const KEYWORDS: string[] = [
  "öntözőrendszer Nyíregyháza",
  "öntözőrendszer telepítés",
  "öntözőrendszer tervezés",
  "öntözőrendszer javítás",
  "öntözőrendszer karbantartás",
  "öntözőrendszer téliesítés",
  "tavaszi indítás",
  "kertkarbantartás Nyíregyháza",
  "kertgondozás",
  "fűnyírás",
  "metszés",
  "kaszálás",
  "kertépítés",
  "kerttervezés",
  "zöldfal karbantartás",
  "mezőgazdasági öntözőrendszer",
  "mezőgazdasági cső hegesztés",
  "KPE cső hegesztés",
  "tompahegesztés",
  "Czinke Attila",
  "minden ami öntözés",
  "országos kiszállás"
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Öntözőrendszer és kertkarbantartás Nyíregyháza | Czinke Attila e.v.",
  description: "Öntözőrendszer telepítés, zöldfal karbantartás, mezőgazdasági cső hegesztés országos kiszállással. Kertkarbantartás Nyíregyházán és környékén. Czinke Attila e.v.",
  keywords: KEYWORDS,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  authors: {name: "Czinke Attila e.v."},
  creator: "https://github.com/hb3nce04",
  classification: "Öntözőrendszer, kertkarbantartás, zöldfal, mezőgazdasági csőhegesztés",
  referrer: "strict-origin-when-cross-origin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        <Navbar/>
        <main>
          {children}
        </main>
        <FloatingCall />
        <Footer/>
      </body>
    </html>
  );
}
