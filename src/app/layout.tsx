import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@components";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romantic Love Kdrama",
  description: "Free Korean drama streaming website with a vast collection of romantic K-dramas.",
  keywords: "Kdrama, Korean drama, romantic drama, free streaming, all korean drama series, free korean drama, how to watch free korean drama, how to watch complete series for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Free Korean drama streaming website with a vast collection of romantic K-dramas." />
        <meta name="keywords" content="Kdrama, Korean drama, romantic drama, free streaming, all korean drama series, free korean drama, how to watch free korean drama, how to watch complete series for free" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://romanticlovekdrama.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Romantic Love Kdrama" />
        <meta property="og:description" content="Free Korean drama streaming website with a vast collection of romantic K-dramas." />
        <meta property="og:image" content="https://romanticlovekdrama.vercel.app/images/selected-og-image.jpg" />
        <meta property="og:url" content="https://romanticlovekdrama.vercel.app/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Romantic Love Kdrama" />
        <meta name="twitter:description" content="Free Korean drama streaming website with a vast collection of romantic K-dramas." />
        <meta name="twitter:image" content="https://romanticlovekdrama.vercel.app/images/selected-og-image.jpg" />
        <meta name="twitter:url" content="https://romanticlovekdrama.vercel.app/" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
