'use client'
import './globals.css'
import * as React from 'react';
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  //Scroll
  const scrollRef = React.useRef()
  React.useEffect(() => {
    scrollRef.current = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    scrollRef.current.on("scroll", ScrollTrigger.update)

    const updateFunc = time => {
      scrollRef.current?.raf(time * 1000)
    }

    gsap.ticker.add(updateFunc, false, true)

    return () => {
      gsap.ticker.remove(updateFunc)
      scrollRef.current?.destroy()
    }
  }, [])
  //End scroll

  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
