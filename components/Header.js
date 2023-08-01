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
      <div className='py-5 fixed z-50 w-screen header'>

        <div className='container flex items-center flex-row mx-auto'>
          <Link href='/' onClick={() => setToggle(false)} >
            <Image
              src="/logo-brite.svg"
              alt="Hokup Logo"
              width={140}
              height={40}
            />
          </Link>

          <div className='ml-5 hidden md:flex flex-row justify-center items-center text-primary font-semibold w-full'>
            <Link href='/computadores' className={`text-md mx-5 ${pathname === "/computadores" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
              Computadores
            </Link>
            <Link href='/sobre' className={`text-md mx-5 ${pathname === "/sobre" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
              Sobre
            </Link>
            <Link href='/contato' className={`text-md mx-5 ${pathname === "/contato" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
              Contato
            </Link>
            <div className='ml-auto'>
              <BtnChev
                href="/contato"
                color="text-white"
                bg="bg-brite"
                brightness=""
                text="Solicitar cotação"
                className="mr-0"
              />
            </div>
          </div>

          <div className='block md:hidden ml-auto'>
            <button className='h-9 flex justify-center items-center' onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button">
              <Image
                src="/assets/icons/menu.svg"
                alt="Hokup Logo"
                width={35}
                height={35}
              />
            </button>
          </div>
        </div>

        <div className={`${toggle ? "h-screen min-h-[480px]" : "h-0"} container md:hidden flex flex-col relative`}>

          <div className=''>
            <ul className={`${toggle ? "" : "hidden"} mt-10`}>
              <Link href="/" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`my-5 text-baselg ${pathname === "/" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0" : "text-secondary font-normal"}`}>Home</li>
              </Link>
              <Link href="/computadores" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`my-5 text-baselg ${pathname === "/computadores" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0" : "text-secondary font-normal"}`}>Computadores</li>
              </Link>
              <Link href="/sobre" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`my-5 text-baselg ${pathname === "/sobre" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0" : "text-secondary font-normal"}`}>Sobre</li>
              </Link>
              <Link href="/contato" onClick={() => setToggle(!toggle)} className='relative'>
                <li className={`my-5 text-baselg ${pathname === "/contato" ? "text-primary ml-5 font-bold before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-brite before:left-0" : "text-secondary font-normal"}`}>Solicitar cotação</li>
              </Link>
            </ul>
          </div>

          <div className=' pb-5 absolute bottom-[75px] '>
            <div className='flex flex-row mb-1'>
              <a target='_blank' href='https://www.linkedin.com' className='mr-4'>
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="Hokup Logo"
                  width={24}
                  height={24}
                />
              </a>
              <a target='_blank' href='https://www.instagram.com' className='mr-4'>
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Hokup Logo"
                  width={24}
                  height={24}
                />
              </a>
              <a target='_blank' href='https://www.facebook.com' className='mr-4'>
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Hokup Logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <a href='mailto:contato@briteinformatica.com.br' className='text-secondary hover:text-brite'>contato@briteinformatica.com.br</a>
          </div>
        </div>
      </div>
    </>
  )
}
