'use client'
import React from 'react'
import { productsList } from '@/data/products-data';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import ProductCard from './ProductCard';
import { BtnFill } from '../buttons/BtnFill';

const MightIntrest = (props) => {
    const [activePc, setActivePc] = React.useState("pc1")
    const pathname = usePathname()

    return (
        <div className='container mx-auto'>
            <div className='flex md:flex-row w-full flex-col md:items-end mb-20'>
                <h1 className='text-primary text-xl max-w-xl font-semibold mb-4 md:mb-0'>Conheça também</h1>
                <div className='flex flex-row w-fit md:ml-auto'>
                    <BtnFill
                        href="/computadores"
                        color="text-primary hover:text-black"
                        bg="md:hover:bg-transparent-white-hover my-2"
                        brightness="brightness-0"
                        text="Ver tudo"
                    />
                </div>
            </div>

            {/* NOTEBOOKS */}
            <div className='grid gap-x-4 grid-cols-1 gap-y-10 mb-28'>
                {productsList[props.index].products.map(
                    (single, index) =>
                        index === props.i && (
                            <ProductCard
                                href={single.href}
                                src={single.src}
                                linha={single.linha}
                                name={single.name}
                            />
                        ))}
            </div>
        </div>
    )
}

export default MightIntrest





