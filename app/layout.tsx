import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Sharma | AI Engineer and Full-Stack Developer",
  description:
    "Portfolio of Aman Sharma, an AI Engineer building LLM applications, retrieval-augmented generation systems and data pipelines with Python, FastAPI and Next.js.",
  authors: [{ name: "Aman Sharma" }],
  openGraph: {
    title: "Aman Sharma | AI Engineer and Full-Stack Developer",
    description:
      "LLM applications, RAG systems and data pipelines built with Python, FastAPI and Next.js.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
