'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BtnChev } from '../buttons/BtnChev'
import { usePathname } from 'next/navigation'
import { useSpring, animated, config } from '@react-spring/web'
import { easings } from '@react-spring/web'
import { motion, AnimatePresence } from 'framer-motion'
import MenuToggle from './Toggle'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)
    const [display, setDisplay] = useState(false)
    const pathname = usePathname()

    //event listener
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      console.log(">>>>>>>>>>>>",windowWidth)
  
      window.addEventListener('resize', handleWindowResize);
  
      if( windowWidth > 767){
        setToggle(false)
      }

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });

    //anim
    const openNav = {
        open: {
            height: '100vh',
            transition: {
                type: 'spring',
                bounce: 0.2,
                duration: 1
            }
        },
        closed: {
            height: '80px',
            transition: {
                type: 'spring',
                bounce: 0.2,
                duration: 0.3
            }
        }
    }

    const openLinks = {
        open: {
            opacity: 1,
            transition: {
                // type: 'spring',
                duration: 0.5,
                delay: 0.3
            },
        },
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                delay: 0
            }
        }
    }

    const openSocial = {
        open: {
            opacity: 1,
            transition: {
                // type: 'spring',
                duration: 0.5,
                delay: 0.6
            },
        },
        closed: {
            opacity: 0,
            transition: {
                // type: 'spring',
                // bounce: 0.2,
                duration: 0.2,
                delay: 0
            }
        }
    }


    return (
        <>
            <motion.div
                className='z-50 w-screen header fixed flex flex-col min-h-[80px]'
                animate={toggle ? "open" : "closed"}
                variants={openNav}
                initial={false}
            >
                <div className='container flex items-center flex-row mx-auto min-h-[80px] h-[80px]'>
                    {/* Logo */}
                    <Link href='/' onClick={() => setToggle(false)} >
                        <Image
                            src="/logo-brite.svg"
                            alt="Hokup Logo"
                            width={140}
                            height={40}
                        />
                    </Link>

                    {/* Navigation */}
                    <div className='ml-5 hidden md:flex flex-row justify-center items-center text-primary font-semibold w-full'>
                        <Link href='/computadores' className={`text-md mx-5 ease-in-out transition duration-300 ${pathname === "/computadores" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
                            Computadores
                        </Link>
                        <Link href='/sobre' className={`text-md mx-5 ease-in-out transition duration-300 ${pathname === "/sobre" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
                            Sobre
                        </Link>
                        <Link href='/contato' className={`text-md mx-5 ease-in-out transition duration-300 ${pathname === "/contato" ? "text-brite font-bold" : "text-primary hover:text-brite"}`}>
                            Contato
                        </Link>
                        <div className='ml-auto'>
                            <BtnChev
                                href="/contato"
                                color="text-white"
                                bg="bg-brite hover:drop-shadow-lg hover:bg-brite-hover ease-out transition duration-200"
                                brightness=""
                                text="Solicitar cotação"
                                className="mr-0"
                            />
                        </div>
                    </div>

                    {/* Hamburger */}
                    <motion.nav
                        initial={false}
                        animate={toggle ? "open" : "closed"}
                        className='block md:hidden ml-auto'
                    >
                        <MenuToggle
                            toggle={() => {
                                setToggle(!toggle)
                            }}
                        />
                    </motion.nav>
                </div>

                <div className={`${toggle ? "" : "hidden"} container md:hidden flex flex-col justify-between h-full`} >
                    <motion.div
                        initial={false}
                        animate={toggle ? "open" : "closed"}
                        variants={openLinks}
                        style={{}}
                        className='block'>
                        <ul>
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
                    </motion.div>

                    <motion.div
                        style={{}}
                        className={`block pb-4`}
                        initial={false}
                        animate={toggle ? "open" : "closed"}
                        variants={openSocial}
                    >
                        <div className='flex flex-row mb-1'>
                            <a target='_blank' href='https://www.linkedin.com/company/brite-inform%C3%A1tica/' className='mr-4'>
                                <Image
                                    src="/assets/icons/linkedin.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/brite.informatica/' className='mr-4'>
                                <Image
                                    src="/assets/icons/instagram.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a target='_blank' href='https://www.facebook.com/profile.php?id=100093501758299' className='mr-4'>
                                <Image
                                    src="/assets/icons/facebook.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                        <a href='mailto:contato@briteinformatica.com.br' className='text-secondary hover:text-brite'>contato@briteinformatica.com.br</a>
                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}
