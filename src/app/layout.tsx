import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import Image from "next/image";

const geistSans = localFont({
  src: [
    {
      path: "../../public/Geist/static/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Geist/static/Geist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Geist/static/Geist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    // Add more weights as needed
  ],
  variable: "--font-geist-sans",
  display: "swap",
  
});

// If you have Geist Mono, add it similarly, or use a system mono font as fallback

export const metadata: Metadata = {
  title: "Arena SOL - The Ultimate Gaming Arena",
  description: "Step into the arena and fight for 1v1 Match. Bet $500 worth of $ARENA and join the ultimate gaming experience.",
  icons: {
    icon: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Play:wght@400;700&family=Poppins:wght@200;275;300;400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/logo-icon.png" />
      </head>
      <body className="font-geist antialiased relative min-h-screen">
        {/* Global background image */}
   
        <div className="relative z-10">
          {/* <Header /> Removed to avoid duplicate header */}
          {children}
        </div>
      </body>
    </html>
  );
}
