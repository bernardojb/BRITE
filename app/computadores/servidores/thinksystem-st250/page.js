import React from 'react'
//produtos
import ProductIntro from '@/components/produtos/ProductIntro'
import ProductRecomendation from '@/components/produtos/ProductRecomendation'
import ProductSpecification from '@/components/produtos/ProductSpecification'
import ProductInfo from '@/components/produtos/ProductInfo'
import MightIntrest from '@/components/produtos/MightIntrest'

const page = () => {
    return (
        <>
            <section className='bg-white py-28'>
                <ProductIntro
                    list={3}
                    product={4}
                />
            </section>
            <section className='bg-cream py-28'>
                <ProductRecomendation
                    list={3}
                    product={4}
                />
            </section>
            <section className='bg-white py-28'>
                <ProductInfo
                    list={3}
                    product={4}
                />
            </section>
            <section className='bg-cream py-28'>
                <ProductSpecification
                    list={3}
                    product={4}
                />
            </section>
            <section className='bg-white py-28'>
                <MightIntrest
                    index={3}
                    i={0}
                />
            </section>
        </>
    )
}

export default page