import type { Metadata } from "next";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "FullCoding",
  description: "FullCoding offre des services numériques de qualité à Madagascar, spécialisés en développement web, mobile, et solutions digitales.",
  keywords: "FullCoding, services numériques, Madagascar, développement web, solutions digitales, développement mobile, infrastructure IT",
  verification:{
    google:"hGtGPAa9FFWiNqxAC05Kcs3kHUpYuKu1HUcDw0VnjXE",
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <main>
          <Navbar/>
          {children}
          <Footer/>
          </main>
          <ToastContainer />
      </body>
      <GoogleAnalytics gaId={"G-32204LQ8NS"}/>
      <GoogleTagManager gtmId={"GTM-M4QVP543"}/>
    </html>
  );
}
