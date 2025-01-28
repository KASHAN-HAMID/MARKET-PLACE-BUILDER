import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Anouce from "@/components/anouncement";
import Header from "@/components/Header";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Anouce />
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
