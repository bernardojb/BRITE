'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BtnChev } from '../buttons/BtnChev'
import { usePathname } from 'next/navigation'
import { useSpring, animated, config } from '@react-spring/web'
import { easings } from '@react-spring/web'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)
    const [display, setDisplay] = useState(false)

    const pathname = usePathname()

    const { height } = useSpring({
        height: toggle ? '100vh' : '0vh',
        config: {
            easing: easings.easeOutQuad,
            duration: 1000
        },
        onRest: () => {
            setDisplay(true)
        }
    })

    const { opacity } = useSpring({
        opacity: toggle ? 1 : 0,
        delay: 500,
        config: {
            duration: 300
        },
        onRest: {
            cancelled: true,
        }
    })

    const { socialmedia } = useSpring({
        socialmedia: toggle ? 1 : 0,
        delay: 800,
        config: {
            duration: 300
        },
        
    })




    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
      }))
    
      const handleClick = () => {
        api.start({
          from: {
            x: 0,
          },
          to: {
            x: 100,
          },
        })
      }



    return (
        <>
            <animated.div
                className='py-5 z-50 w-screen header fixed'
                style={{
                    height: height,
                    minHeight: '80px'
                }}>

                <div className='container flex items-center flex-row mx-auto h-fit'>

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
                                bg="bg-brite"
                                brightness=""
                                text="Solicitar cotação"
                                className="mr-0"
                            />
                        </div>
                    </div>

                    {/* Hamburger */}
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

                <div className={`container md:hidden flex flex-col justify-between h-full`} >
                    <animated.div style={{ opacity: opacity }} className=''>
                        <ul className={`${ toggle ? "" : "hidden"} mt-10`}>
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
                    </animated.div>

                    <animated.div style={{ ...springs  }} className={`${toggle && display ? "mb-5 pb-5" : "hidden"}`}>
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
                    </animated.div>
                </div>



            </animated.div>
        </>
    )
}
