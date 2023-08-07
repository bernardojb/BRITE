import React from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/buttons/BtnChev'

const ProductInfo = (props) => {
    return (
        <div className='container'>
            {productsList[props.list].products[props.product].infos.map(
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
                            <p className='text-primary text-xl font-semibold mb-4 whitespace-pre-wrap'>{info.title}</p>
                            <p className='text-secondary text-base whitespace-pre-wrap'>{info.text}</p>
                        </div>
                        {info.title2 && info.text2 != "" && (
                            <div className='mb-12'>
                                <p className='text-primary text-lg font-semibold mb-4 whitespace-pre-wrap'>{info.title2}</p>
                                <p className='text-secondary text-base whitespace-pre-wrap'>{info.text2}</p>
                            </div>
                        )}
                    </div>
            )}
        </div>
    )
}

export default ProductInfo