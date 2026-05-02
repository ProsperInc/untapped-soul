import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Untapped Soul — From Confusion to Clarity",
    template: "%s | Untapped Soul",
  },
  description:
    "Untapped Soul helps individuals move from confusion and inner conflict to self-awareness, healing, and purposeful living through faith-based guidance.",
  keywords: [
    "self-awareness",
    "personal development",
    "faith",
    "healing",
    "purpose",
    "identity",
    "young adults",
    "coaching",
  ],
  openGraph: {
    title: "Untapped Soul — From Confusion to Clarity",
    description:
      "Move from confusion and inner conflict to self-awareness, healing, and purposeful living.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Untapped Soul",
    description: "Faith-centered self-awareness and personal development platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
