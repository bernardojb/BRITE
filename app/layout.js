import './globals.css'
import * as React from 'react';
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

//Components
import Header from '../components/structure/Header';
import Footer from '../components/structure/Footer';
import SmoothScroll from '@/components/structure/SmoothScroll';
import Animation from '@/components/structure/Animation';
import Navbar from '@/components/structure/Navbar';

//Setup & Meta
const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Brite Informática',
  description: 'Aluguel e venda simplificada de notebooks, desktops e servidores para empresas. Oferecemos mais do que computadores, a Brite informática é uma solução completa de TI para você focar no que realmente importa: seus negócios.',
  //Basic
  generator: 'Brite Informática',
  applicationName: 'Brite Informática',
  referrer: 'origin-when-cross-origin',
  keywords: ['Brite Informática', 'Aluguel', 'Notebook', 'Desktop', 'Servidores', 'Workstation', 'hokup', 'business info', 'business informática', 'lenovo', 'parceiro oficial lenovo', 'brite info'],
  authors: [{ name: 'Bernardo Braga' }, { name: 'Pedro H. Alencar' }, { name: 'hokup', url: 'https://hokup.com.br' }],
  creator: 'hokup',
  publisher: 'hokup',
  themeColor: '#432AF4',
  //Open Graph
  openGraph: {
    title: 'Brite Informática',
    description: 'Aluguel e venda simplificada de notebooks, desktops e servidores para empresas. Oferecemos mais do que computadores, a Brite informática é uma solução completa de TI para você focar no que realmente importa: seus negócios.',
    url: 'https://briteinformatica.com.br',
    siteName: 'Há mais de 30 anos simplificando o aluguel de notebooks',
    images: [
      {
        url: 'https://i.imgur.com/fXMSx9i.png',
        width: 1200,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/fXMSx9i.png',
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
