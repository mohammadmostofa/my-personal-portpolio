import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import FooterPage from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostofa | Portfolio",
  description: "Modern developer portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
      <body className="min-h-screen flex flex-col bg-[#10131b] text-white">

        {/* Cursor effect (optional - keep lightweight inside component) */}
        <CursorEffect />

        {/* Navbar (server safe) */}
        <NavbarPage />

      
        {/* MAIN CONTENT (ONLY PAGE RENDER HERE) */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <FooterPage />

      </body>

    </html>
  );
}