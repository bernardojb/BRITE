'use client'
import React, { useEffect } from 'react'
import { productsList } from '../data/products-data'
import Link from "next/link";
import Image from "next/image";
import { BtnChev } from './buttons/BtnChev';
import { BtnFill } from './buttons/BtnFill';
import { usePathname, useSearchParams } from 'next/navigation'
import ProductCard from './produtos/ProductCard';


const CardProducts = (props) => {
    const [activePc, setActivePc] = React.useState("pc1")
    const pathname = usePathname()

    const path = "http://localhost:3000/"


    useEffect(() => {
        const url = window.location.href
        if (url === 'https://brite-five.vercel.app/computadores#notebooks') {
            setActivePc('pc1')
        } else if (url === 'https://brite-five.vercel.app/computadores#desktops') {
            setActivePc('pc2')
        } else if (url === 'https://brite-five.vercel.app/computadores#workstations') {
            setActivePc('pc3')
        } else if (url === 'https://brite-five.vercel.app/computadores#servidores') {
            setActivePc('pc4')
        } else {
            setActivePc('pc1')
        }

    }, [])

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row w-full flex-col md:items-end mb-20'>
                <h1 className='text-primary text-xl max-w-xl font-semibold mb-4 md:mb-0'>Diferentes computadores para sua demanda.</h1>
                {pathname === "/" && (
                    <div className='flex flex-row w-fit md:ml-auto'>
                        <BtnFill
                            href="/computadores"
                            color="text-primary hover:text-black"
                            bg="md:hover:bg-transparent-white-hover my-2"
                            brightness="brightness-0"
                            text="Ver tudo"
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-row items-center justify-between relative after:content-[''] after:absolute after:h-[1.5px] after:bg-secondary after:w-full after:bottom-3 mb-12">
                <div className='text-secondary text-base flex flex-row flex-wrap'>
                    <button className={`mb-3 px-5 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc1" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActivePc("pc1")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary ${activePc === "pc1" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>Notebooks</p>
                    </button>
                    <button className={`mb-3 px-5 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc2" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActivePc("pc2")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary ${activePc === "pc2" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>Desktops</p>
                    </button>
                    <button className={`mb-3 px-5 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc3" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActivePc("pc3")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary ${activePc === "pc3" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>Workstations</p>
                    </button>
                    <button className={`mb-3 px-5 py-3 w-fit relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc4" ? "after:bg-brite sm:bg-[transparent] bg-placeholder rounded-t-lg" : ""} after:w-full after:-bottom-0 after:left-0`} onClick={() => setActivePc("pc4")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary ${activePc === "pc4" ? "text-primary font-bold" : "text-secondary font-semibold"}`}>Servidores</p>
                    </button>
                </div>
            </div>

            {/* NOTEBOOKS */}
            {activePc === "pc1" && (
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-28'>
                    {productsList[0].products.map(
                        (single, index) =>
                            index < props.index && (
                                <ProductCard
                                    href={single.href}
                                    src={single.src}
                                    linha={single.linha}
                                    name={single.name}
                                />
                            ))}
                </div>
            )}

            {/* DESKTOPS */}
            {activePc === "pc2" && (
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-28'>
                    {productsList[1].products.map(
                        (single, index) =>
                            index < props.index && (
                                <ProductCard
                                    href={single.href}
                                    src={single.src}
                                    linha={single.linha}
                                    name={single.name}
                                />
                            ))}
                </div>
            )}

            {/* WORKSTATIONS */}
            {activePc === "pc3" && (
                <div className='grid gap-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-28'>
                    {productsList[2].products.map(
                        (single, index) =>
                            index < props.index && (
                                <ProductCard
                                    href={single.href}
                                    src={single.src}
                                    linha={single.linha}
                                    name={single.name}
                                />
                            ))}
                </div>
            )}

            {/* SERVIDORES */}
            {activePc === "pc4" && (
                <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-28'>
                    {productsList[3].products.map(
                        (single, index) =>
                            index < props.index && (
                                <ProductCard
                                    href={single.href}
                                    src={single.src}
                                    linha={single.linha}
                                    name={single.name}
                                />
                            ))}
                </div>
            )}

            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <p className='text-center text-base text-secondary mr-4 mb-4 lg:mb-0'>Fale sobre seu projeto com um de nossos especialistas.</p>
                <BtnChev
                href="/contato"
                color="text-cream hover:text-white"
                bg="bg-brite drop-shadow-2xl hover:drop-shadow-lg"
                text="Solicitar cotação"
              />
            </div>
        </div>
    )
}

export default CardProducts;
