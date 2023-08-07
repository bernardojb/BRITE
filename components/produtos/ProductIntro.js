import React from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'

const ProductIntro = (props) => {
    return (
        <div className='container'>
            {/* <Link href="/computadores" >
                <div className='mb-10'>
                    <p className='text-xs text-secondary'>Nossos produtos</p>
                </div>
            </Link> */}
            <Link href="/computadores" className={`group py-[2px] rounded-full w-fit flex justify-center items-center drop-shadow-2xl ease-out transition duration-200 bg-[transparent] mb-8`}>
                <div className={`w-[8px] h-[16px] relative font-semibold group-hover:-translate-x-2 ease-out transition duration-200 mr-4 group-hover:brightness-[30%] brightness-[70%] rotate-180`}>
                    <Image src="/assets/icons/chevron.svg" fill />
                </div>
                <p className={`text-md whitespace-nowrap group-hover:text-primary font-semibold text-secondary ease-out transition duration-200`}>
                    Nossos produtos
                </p>
            </Link>

            {productsList[props.list].products[props.product].intro.map(
                (info) =>
                    <>
                        <div className='grid md:grid-cols-2 grid-cols-1 mb-12'>
                            <div className='pb-4 md:pb-0'>
                                <h1 className='text-xl text-primary font-semibold whitespace-pre-wrap'>{info.name}</h1>
                                <p className='text-baselg text-secondary font-semibold whitespace-pre-wrap'>{info.resume}</p>
                            </div>
                            <div className='flex flex-col md:ml-auto md:items-end items-start'>
                                <p className='text-xs bg-cream text-primary px-3 py-1 rounded-full w-fit mb-3 whitespace-pre-wrap'>{info.tags[0].tag}</p>
                                <p className='text-xs bg-cream text-primary  px-3 py-1 rounded-full w-fit whitespace-pre-wrap'>{info.tags[1].tag}</p>
                            </div>
                        </div>
                        <div className=''>
                            <Image
                                src={info.src}
                                height={612}
                                width={1088}
                                className='mb-12'
                            />
                            <p className='text-primary text-baselg font-semibold max-w-[812px] whitespace-pre-wrap'>{info.text}</p>
                        </div>
                    </>
            )}
        </div>
    )
}

export default ProductIntro