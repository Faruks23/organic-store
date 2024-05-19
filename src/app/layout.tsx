import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Store",
  description: "This is a organic store you can buy from as many fruits and vegetable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <div className="min-h-[calc(100vh-60px)]">
          {children}
        </div>
        <Footer></Footer>

      </body>
    </html>
  );
}
