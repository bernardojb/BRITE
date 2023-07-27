'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BtnChev } from './BtnChev'
import { usePathname } from 'next/navigation'

export default function Header() {

  const [toggle, setToggle] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className='py-5 fixed md:bg-navbar bg-white z-50 w-screen backdrop-blur-[6px]'
        style={{
          top: '0px',
          left: '0px',
        }}
      >
        <div className='container flex flex-row mx-auto'>
          <Link href='/' className='pr-5' onClick={()=>setToggle(false)}>
            <Image
              src="/logo-brite.svg"
              alt="Hokup Logo"
              width={120}
              height={30}
            />
          </Link>

          <div className='hidden md:flex flex-row justify-center items-center text-primary font-semibold w-full'>
            <Link href='/computers' className={`text-md px-5 ${pathname === "/computers" ? "text-primary font-bold":"text-secondary hover:text-brite"}`}>
              Computadores
            </Link>
            <Link href='/about' className={`text-md px-5 ${pathname === "/about" ? "text-primary font-bold":"text-secondary hover:text-brite"}`}>
              Sobre
            </Link>
            <Link href='/contact' className={`text-md px-5 ${pathname === "/contact" ? "text-primary font-bold":"text-secondary hover:text-brite"}`}>
              Contato
            </Link>
            <div className='ml-auto'>
              <BtnChev
                href="/contact"
                color="text-white"
                bg="bg-brite"
                // brightness="brightness-0"
                text="Solicitar cotação"
                className="mr-0"
              />
            </div>
          </div>

          <div className='block md:hidden ml-auto'>
            <button onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button" class="ml-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-default" aria-expanded="false">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 17 14">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${toggle ? "h-screen" : "h-0"} md:hidden`}>
          <div className='container'>
            <ul className={`${toggle ? "" : "hidden"} mt-10`}>
              <Link href="/" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`text-baselg ${pathname === "/" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0":"text-secondary font-normal"}`}>Home</li>
              </Link>
              <Link href="/computers" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`text-baselg ${pathname === "/computers" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0":"text-secondary font-normal"}`}>Computadores</li>
              </Link>
              <Link href="/about" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`text-baselg ${pathname === "/about" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0":"text-secondary font-normal"}`}>Sobre</li>
              </Link>
              {/* <Link href="/contact" onClick={() => setToggle(!toggle)}>
                <li className={`text-baselg ${pathname === "/contact" ? "text-primary font-semibold":"text-secondary font-normal"}`}>Contato</li>
              </Link> */}
              <Link href="/contact" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`text-baselg ${pathname === "/contact" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0":"text-secondary font-normal"}`}>Solicitar cotação</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
