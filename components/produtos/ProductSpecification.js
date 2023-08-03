import React, { useEffect } from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/buttons/BtnChev'
const ProductSpecification = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-xl font-semibold mb-10'>Especificações técnicas</h1>
            <div className='mb-14'>
                {productsList[0].products[0].tech[0].infos.map(
                    (single) =>
                        <div className=' bg-white py-6 px-10 my-4 relative rounded-xl border border-placeholder grid gap-y-4 grid-cols-12'>
                            <div className='md:col-span-3 col-span-full md:ml-auto md:text-end text-start mr-20'>
                                <p className=' text-secondary text-xs font-semibold'>{single.name}</p>
                            </div>
                            <div className='md:col-span-9 col-span-full'>
                                <p className='text-primary text-md font-semibold'>{single.description}</p>
                            </div>
                        </div>
                )}
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <p className='text-center text-base text-secondary mr-4 mb-4 lg:mb-0'>Fale sobre seu projeto com um de nossos especialistas.</p>
                <BtnChev
                    href="/contato"
                    color="text-white"
                    bg="bg-brite"
                    text="Solicitar cotação"
                />
            </div>
        </div>
    )
}

export default ProductSpecification