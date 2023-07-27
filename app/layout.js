// 'use client'
import './globals.css'
import * as React from 'react';
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

//Setup & Meta
const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'hokup - Base Template',
  description: 'Personal template for outstanding projects.',
}

//Scroll
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
