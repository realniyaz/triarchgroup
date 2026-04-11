import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter, Sora } from "next/font/google";
import ChatBotWidget from "@/components/chatbot/ChatbotWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Triarch Group",
  description: "Technology-Driven Business Group",
  openGraph: {
    title: "Triarch Group",
    description: "Technology-Driven Business Group",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${sora.variable}
          antialiased
          bg-slate-50
          text-slate-900
        `}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ChatBotWidget/>
      </body>
    </html>
  );
}
