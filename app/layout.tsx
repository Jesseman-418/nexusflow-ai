import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meridius AI — Your Business, Thinking",
  description:
    "Meridius connects your tools, knowledge and workflows into one operational intelligence.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI workflows",
    "business automation",
    "process automation",
  ],
  openGraph: {
    title: "Meridius AI — Your Business, Thinking",
    description:
      "Connect your tools, knowledge and workflows into one operational intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
