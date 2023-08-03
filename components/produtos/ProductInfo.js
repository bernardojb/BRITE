import React, { useEffect } from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/buttons/BtnChev'

const ProductInfo = () => {
    return (
        <div className='container'>
            {productsList[0].products[0].infos.map(
                (info) =>
                    <div className=''>
                        {info.src != "" && (
                            <Image
                                src={info.src}
                                height={612}
                                width={1088}
                                className='mb-12'
                            />
                        )}
                        <div className='mb-8'>
                            <p className='text-primary text-xl font-semibold mb-4'>{info.title}</p>
                            <p className='text-secondary text-base'>{info.text}</p>
                        </div>
                        {info.title2 && info.text2 != "" && (
                            <div className='mb-12'>
                                <p className='text-primary text-lg font-semibold mb-4'>{info.title2}</p>
                                <p className='text-secondary text-base'>{info.text2}</p>
                            </div>
                        )}
                    </div>
            )}
        </div>
    )
}

export default ProductInfo