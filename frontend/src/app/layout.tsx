import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Jibran Co. Ltd | Global Import Export Trading",
  description: "Leading international trading company specializing in import-export operations, supply chain management, and global trade solutions across multiple industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} antialiased font-sans min-h-screen flex flex-col bg-white text-slate-900`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
