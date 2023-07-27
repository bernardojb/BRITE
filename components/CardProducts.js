'use client'
import React from 'react'
import { productsList } from '../data/products-data'
import Link from "next/link";
import Image from "next/image";
import { BtnChev } from './BtnChev';

const CardProducts = (props) => {
    const [activePc, setActivePc] = React.useState("pc1")

    return (
        <>
            <section className='py-28'>
                <div className='container mx-auto'>
                    <h1 className='text-primary text-xl font-semibold max-w-xl pb-10'>Diferentes computadores para sua demanda.</h1>

                    <div className="flex flex-row items-center justify-between relative after:content-[''] after:absolute after:h-[1.5px] after:bg-secondary after:w-full after:-bottom-3 mb-12">
                        <div className='text-secondary text-base flex flex-row flex-wrap'>
                            <button className={`mr-9 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc1" ? "after:bg-brite" : ""} after:w-full after:-bottom-3 after:left-0`} onClick={() => setActivePc("pc1")}>
                                <p className={`text-base hover:text-primary hover:font-bold ${activePc === "pc1" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Notebooks</p>
                            </button>
                            <button className={`mr-9 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc2" ? "after:bg-brite" : ""} after:w-full after:-bottom-3 after:left-0`} onClick={() => setActivePc("pc2")}>
                                <p className={`text-base hover:text-primary hover:font-bold ${activePc === "pc2" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Desktops</p>
                            </button>
                            <button className={`mr-9 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc3" ? "after:bg-brite" : ""} after:w-full after:-bottom-3 after:left-0`} onClick={() => setActivePc("pc3")}>
                                <p className={`text-base hover:text-primary hover:font-bold ${activePc === "pc3" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Workstations</p>
                            </button>
                            <button className={`relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc4" ? "after:bg-brite" : ""} after:w-full after:-bottom-3 after:left-0`} onClick={() => setActivePc("pc4")}>
                                <p className={`text-base hover:text-primary hover:font-bold ${activePc === "pc4" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Servidores</p>
                            </button>
                        </div>
                        <Link href='/computers' className='text-primary text-base font-semibold'>
                            <p>Ver tudo</p>
                        </Link>
                    </div>

                    {/* NOTEBOOKS */}
                    {activePc === "pc1" && (
                        <div className='grid gap-x-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 mb-28'>
                            {productsList[0].products.map(
                                (single, index) =>
                                    index < props.index && (
                                        <div className='bg-placeholder h-[482px] relative rounded-xl border border-placeholder'>
                                            <Link href={single.href}>
                                                <div
                                                    className='rounded-xl'
                                                    style={{
                                                        background: 'linear-gradient(180deg, #80808000 35%, #0F0F0FED 100%)',
                                                        zIndex: '2',
                                                        left: '0px',
                                                        bottom: '0px',
                                                        height: '100%',
                                                        width: '100%',
                                                        position: 'absolute'
                                                    }} />
                                                <Image src={single.src} fill className='object-cover z-0 rounded-xl' />
                                                <div className='absolute bottom-0 left-0 z-[3] px-8 py-4 w-full'>
                                                    <p className='text-secondary text-xs'>{single.linha}</p>
                                                    <div className=' flex flex-row justify-between'>
                                                        <p className='text-white text-base'>{single.name}</p>
                                                        <Image src="./assets/icons/chevron.svg" height={24} width={24} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                        </div>
                    )}

                    {/* DESKTOPS */}
                    {activePc === "pc2" && (
                        <div className='grid gap-x-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 mb-28'>
                            {productsList[1].products.map(
                                (single, index) =>
                                    index < props.index && (
                                        <div className='bg-placeholder h-[482px] relative rounded-xl border border-placeholder'>
                                            <Link href={single.href}>
                                                <div
                                                    className='rounded-xl'
                                                    style={{
                                                        background: 'linear-gradient(180deg, #80808000 35%, #0F0F0FED 100%)',
                                                        zIndex: '2',
                                                        left: '0px',
                                                        bottom: '0px',
                                                        height: '100%',
                                                        width: '100%',
                                                        position: 'absolute'
                                                    }} />
                                                <Image src={single.src} fill className='object-cover z-0 rounded-xl' />
                                                <div className='absolute bottom-0 left-0 z-[3] px-8 py-4 w-full'>
                                                    <p className='text-secondary text-xs'>{single.linha}</p>
                                                    <div className=' flex flex-row justify-between'>
                                                        <p className='text-white text-base'>{single.name}</p>
                                                        <Image src="./assets/icons/chevron.svg" height={24} width={24} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                        </div>
                    )}

                    {/* WORKSTATIONS */}
                    {activePc === "pc3" && (
                        <div className='grid gap-x-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 mb-28'>
                            {productsList[2].products.map(
                                (single, index) =>
                                    index < props.index && (
                                        <div className='bg-placeholder h-[482px] relative rounded-xl border border-placeholder'>
                                            <Link href={single.href}>
                                                <div
                                                    className='rounded-xl'
                                                    style={{
                                                        background: 'linear-gradient(180deg, #80808000 35%, #0F0F0FED 100%)',
                                                        zIndex: '2',
                                                        left: '0px',
                                                        bottom: '0px',
                                                        height: '100%',
                                                        width: '100%',
                                                        position: 'absolute'
                                                    }} />
                                                <Image src={single.src} fill className='object-cover z-0 rounded-xl' />
                                                <div className='absolute bottom-0 left-0 z-[3] px-8 py-4 w-full'>
                                                    <p className='text-secondary text-xs'>{single.linha}</p>
                                                    <div className=' flex flex-row justify-between'>
                                                        <p className='text-white text-base'>{single.name}</p>
                                                        <Image src="./assets/icons/chevron.svg" height={24} width={24} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                        </div>
                    )}

                    {/* SERVIDORES */}
                    {activePc === "pc4" && (
                        <div className='grid gap-x-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 mb-28'>
                            {productsList[3].products.map(
                                (single, index) =>
                                    index < props.index && (
                                        <div className='bg-placeholder h-[482px] relative rounded-xl border border-placeholder'>
                                            <Link href={single.href} as={single.href} >
                                                <div
                                                    className='rounded-xl'
                                                    style={{
                                                        background: 'linear-gradient(180deg, #80808000 35%, #0F0F0FED 100%)',
                                                        zIndex: '2',
                                                        left: '0px',
                                                        bottom: '0px',
                                                        height: '100%',
                                                        width: '100%',
                                                        position: 'absolute'
                                                    }} />
                                                <Image src={single.src} fill className='object-cover z-0 rounded-xl' />
                                                <div className='absolute bottom-0 left-0 z-[3] px-8 py-4 w-full'>
                                                    <p className='text-secondary text-xs'>{single.linha}</p>
                                                    <div className=' flex flex-row justify-between'>
                                                        <p className='text-white text-base'>{single.name}</p>
                                                        <Image src="./assets/icons/chevron.svg" height={24} width={24} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                        </div>
                    )}

                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <p className='text-center text-base text-secondary mr-4 mb-4 lg:mb-0'>Fale sobre seu projeto com um de nossos especialistas.</p>
                        <BtnChev
                            href="/contact"
                            color="text-white"
                            bg="bg-brite"
                            text="Solicitar cotação"
                        />
                    </div>
                </div>
            </section>


        </>
    )
}

export default CardProducts;
