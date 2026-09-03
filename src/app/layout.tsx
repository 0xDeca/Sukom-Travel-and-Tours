import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DemoIndicator from "@/components/layout/DemoIndicator";
import ContactWidget from "@/components/layout/ContactWidget";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/layout/BackToTop";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukom Travel & Tours — Expert Visa Advisory, Tours & Travel",
  description:
    "Sukom Travel & Tours provides expert visa advisory, curated tours, flight assistance, and comprehensive travel support. Your journey starts here.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <DemoIndicator />
        <ContactWidget />
        <WhatsAppButton />
        <BackToTop />
        <ScrollProgress />
      </body>
    </html>
  );
}
