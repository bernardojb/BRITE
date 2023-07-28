'use client'
import React, { useEffect } from 'react'
import { productsList } from '@/data/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { BtnChev } from '@/components/BtnChev'

//produtos
import ProductIntro from '@/components/produtos/ProductIntro'
import ProductRecomendation from '@/components/produtos/ProductRecomendation'
import ProductSpecification from '@/components/produtos/ProductSpecification'
import ProductInfo from '@/components/produtos/ProductInfo'

const page = () => {
    return (
        <>
            <section className='bg-white py-28'>
                <ProductIntro />
            </section>

            <section className='bg-cream py-28'>
                <ProductRecomendation />
            </section>
            <section className='bg-white py-28'>
                <ProductInfo />
            </section>
            <section className='bg-cream py-28'>
                <ProductSpecification />
            </section>
            <section className='bg-white py-28'>
                

            </section>
        </>
    )
}

export default page