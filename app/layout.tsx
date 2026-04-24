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
  title: "NexusFlow AI - Intelligent Workflow Automation",
  description:
    "Automate everything with AI-powered workflows. Connect your apps, automate complex tasks, and scale your operations with intelligent automation.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI workflows",
    "business automation",
    "process automation",
  ],
  openGraph: {
    title: "NexusFlow AI - Intelligent Workflow Automation",
    description:
      "Automate everything with AI-powered workflows. Connect your apps, automate complex tasks, and scale your operations.",
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
