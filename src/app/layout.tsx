import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reshma Manandhar — Senior Product Designer",
  description:
    "Product designer with 12+ years of experience in SaaS, fintech, healthcare, and edtech. Based in Kathmandu, Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

