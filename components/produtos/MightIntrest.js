'use client'
import React from 'react'
import { productsList } from '@/data/products-data';
import Link from "next/link";
import Image from "next/image";
import { BtnChev } from '../buttons/BtnChev';
import { usePathname } from 'next/navigation'

const MightIntrest = (props) => {
    const [activePc, setActivePc] = React.useState("pc1")
    const pathname = usePathname()

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row w-full flex-col md:items-end mb-10'>
                <h1 className='text-primary text-xl max-w-xl font-semibold pb-10'>Conheça também</h1>
                <div className='flex flex-row w-fit sm:ml-auto'>
                    <Link href='/computadores' className='text-primary text-base font-semibold md:ml-auto'>
                        <p>Ver tudo</p>
                    </Link>
                    <Image src="/assets/icons/chevron.svg" alt='Chevron Icon' className=' brightness-0' width={24} height={24} />
                </div>
            </div>

            {/* NOTEBOOKS */}
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
                                            <Image src="/assets/icons/chevron.svg" height={24} width={24} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default MightIntrest





