import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import HeaderSide from "./_layout/HeaderSide";
import Footer from "./_layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} color="">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
