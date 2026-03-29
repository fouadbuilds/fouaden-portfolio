import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hi, I'm Fouad",
  description:
    "I'm drawn to what happens under the hood — systems, infrastructure, and how things actually work.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="grid-bg" />
        <div className="page-wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
