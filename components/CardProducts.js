'use client'
import React from 'react'
import { productsList } from '../data/products-data'
import Link from "next/link";
import Image from "next/image";
import { BtnChev } from './BtnChev';
import { usePathname } from 'next/navigation'


const CardProducts = (props) => {
    const [activePc, setActivePc] = React.useState("pc1")
    const pathname = usePathname()

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row w-full flex-col md:items-end mb-10'>
                <h1 className='text-primary text-xl max-w-xl font-semibold pb-10'>Diferentes computadores para sua demanda.</h1>
                {pathname === "/" && (
                    <div className='flex flex-row w-fit sm:ml-auto'>
                        <Link href='/computers' className='text-primary text-base font-semibold md:ml-auto'>
                            <p>Ver tudo</p>
                        </Link>
                        <Image src="./assets/icons/chevron.svg" alt='Chevron Icon' className=' brightness-0' width={24} height={24} />
                    </div>
                )}
            </div>

            <div className="flex flex-row items-center justify-between relative sm:after:content-[''] sm:after:absolute sm:after:h-[1.5px] sm:after:bg-secondary sm:after:w-full sm:after:-bottom-3 mb-12">
                <div className='text-secondary text-base flex sm:flex-row flex-col flex-wrap'>
                    <button className={`mr-9 w-fit sm:my-0 my-1 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc1" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-3 after:-bottom-1 after:left-0`} onClick={() => setActivePc("pc1")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary hover:font-bold ${activePc === "pc1" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Notebooks</p>
                    </button>
                    <button className={`mr-9 w-fit sm:my-0 my-1 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc2" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-3 after:-bottom-1 after:left-0`} onClick={() => setActivePc("pc2")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary hover:font-bold ${activePc === "pc2" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Desktops</p>
                    </button>
                    <button className={`mr-9 w-fit sm:my-0 my-1 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc3" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-3 after:-bottom-1 after:left-0`} onClick={() => setActivePc("pc3")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary hover:font-bold ${activePc === "pc3" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Workstations</p>
                    </button>
                    <button className={` my-1 w-fit sm:my-0 relative after:content-[''] after:absolute after:h-[5px] ${activePc === "pc4" ? "after:bg-brite" : ""} after:w-full sm:after:-bottom-3 after:-bottom-1 after:left-0`} onClick={() => setActivePc("pc4")}>
                        <p className={`text-base text-start sm:text-center hover:text-primary hover:font-bold ${activePc === "pc4" ? "text-primary font-bold" : "text-secondary font-normal"}`}>Servidores</p>
                    </button>
                </div>
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
    )
}

export default CardProducts;
