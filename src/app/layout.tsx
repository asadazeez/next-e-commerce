import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import Provider from "./_layout/Provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'E-shop',
  description: 'Explore our collections that cater to all tastes, from timeless classics to the latest trends. Our commitment to sustainability ensures that you not only look good but feel good about your choices. Enjoy a seamless shopping experience with easy navigation, secure payment options, and fast shipping right to your door.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ravi+Prakash&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&family=Josefin+Sans:wght@100;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} font-sen overflow-x-hidden`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
        <Toaster position="top-right" containerClassName="mt-4" />
      </body>
    </html>
  );
}