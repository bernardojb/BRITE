import "./globals.css";
import * as React from "react";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

//Components
import Footer from "../components/structure/Footer";
import SmoothScroll from "@/components/structure/SmoothScroll";
import Navbar from "@/components/structure/Navbar";

//Setup & Meta
const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Brite Informática",
  description:
    "Aluguel e venda simplificada de notebooks, desktops e servidores para empresas. Oferecemos mais do que computadores, a Brite informática é uma solução completa de TI para você focar no que realmente importa: seus negócios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
