import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Samad Saleem | FinTech & ML Engineer",
  description: "Portfolio of Abdul Samad Saleem, bridging Finance and Machine Learning via Full-Stack Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#0A0A0F] text-gray-100 selection:bg-purple-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
