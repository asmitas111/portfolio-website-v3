import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Backdrop from "@/components/Backdrop";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Asmita Srivastava | Full-Stack Engineer, Generative AI & Agentic Workflows",
  description: "Portfolio of Asmita Srivastava: Senior Software Engineer building scalable products and AI agents.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable}`}><Backdrop />{children}</body>
    </html>
  );
}
