import React, { useEffect } from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/BtnChev'

const ProductRecomendation = () => {
    return (
        <div className='container'>
            {productsList[0].products[0].tech.map(
                (single) =>
                    <>
                        <p className='text-xs text-secondary'>Pra quem é indicado?</p>
                        <h1 className='text-lg text-primary font-semibold mb-16 max-w-[812px]'>{single.text}</h1>
                        <div className='grid grid-cols-12 gap-4'>
                            {single.infos.map((item, index) => {
                                const { id, name, description } = item
                                return (
                                    <>
                                        {index < 4 && (
                                            <div className='bg-white px-10 py-8 relative rounded-xl border border-placeholder col-span-full sm:col-span-6'>
                                                <div className='flex flex-col' key={id}>
                                                    <p className='text-secondary text-xs font-semibold mb-2'>{name}</p>
                                                    <p className='text-primary text-md font-semibold'>{description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                            <div className='bg-white px-10 py-8 relative rounded-xl border border-placeholder col-span-12'>
                                <div className='flex flex-col lg:flex-row justify-center items-center'>
                                    <p className='text-center text-md text-secondary mr-4 mb-4 lg:mb-0'>{single.price}</p>
                                    <BtnChev
                                        href="/contato"
                                        color="text-white"
                                        bg="bg-brite"
                                        text="Solicitar cotação"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
            )}
        </div>
    )
}

export default ProductRecomendation