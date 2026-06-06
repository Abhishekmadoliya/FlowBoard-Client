import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flowboard — Real-Time Collaborative Whiteboard for Teams",
  description:
    "Flowboard lets teams sketch, plan, and collaborate on an infinite canvas in real time. Build wireframes, run sprints, brainstorm ideas — all in one place.",
  keywords: [
    "whiteboard",
    "collaboration",
    "real-time",
    "team",
    "brainstorm",
    "infinite canvas",
    "wireframe",
    "sprint planning",
  ],
  openGraph: {
    title: "Flowboard — Where Ideas Flow Together",
    description:
      "Real-time collaborative whiteboard for async and live team sessions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
