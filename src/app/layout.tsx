import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@components";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romantic Love Kdrama",
  description: "Free Korean drama streaming website with a vast collection of romantic K-dramas.",
  keywords: ["Kdrama", "Korean drama", "romantic drama", "free streaming", "all korean drama series", "free korean drama", "how to watch free korean drama", "how to watch complete series for free"],
  icons: {
    icon: "day.png",
  },
  openGraph: {
    title: "Romantic Love Kdrama",
    description: "Free Korean drama streaming website with a vast collection of romantic K-dramas.",
    url: "https://romanticlovekdrama.vercel.app/",
    images: [
      {
        url: "https://romanticlovekdrama.vercel.app/images/selected-og-image.jpg",
        width: 800,
        height: 600,
        alt: "Romantic Love Kdrama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Love Kdrama",
    description: "Free Korean drama streaming website with a vast collection of romantic K-dramas.",
    images: ["https://romanticlovekdrama.vercel.app/images/selected-og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
