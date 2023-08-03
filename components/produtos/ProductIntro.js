import React, { useEffect } from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/buttons/BtnChev'

const ProductIntro = () => {
    return (
        <div className='container'>
            <Link href="/computadores" >
                <div className='mb-10'>
                    <p className='text-xs text-secondary'>Nossos produtos</p>
                </div>
            </Link>

            {productsList[0].products[0].intro.map(
                (info) =>
                    <>
                        <div className='grid md:grid-cols-2 grid-cols-1 mb-12'>
                            <div className='pb-4 md:pb-0'>
                                <h1 className='text-xl text-primary font-semibold'>{info.name}</h1>
                                <p className='text-baselg text-secondary font-semibold'>{info.resume}</p>
                            </div>
                            <div className='flex flex-col md:ml-auto md:items-end items-start'>
                                <p className='text-xs bg-cream text-primary px-3 py-1 rounded-full w-fit mb-3'>{info.tags[0].tag}</p>
                                <p className='text-xs bg-cream text-primary  px-3 py-1 rounded-full w-fit'>{info.tags[1].tag}</p>
                            </div>
                        </div>
                        <div className=''>
                            <Image
                                src={info.src}
                                height={612}
                                width={1088}
                                className='mb-12'
                            />
                            <p className='text-primary text-baselg font-semibold max-w-[812px]'>{info.text}</p>
                        </div>
                    </>
            )}
        </div>
    )
}

export default ProductIntro