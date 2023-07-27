import React from 'react'
import CardProducts from '@/components/CardProducts'

export default function page() {
    return (
        <>
            <section className='py-40 bg-white'>
                <div className='container'>
                    <CardProducts index={10} />
                </div>
            </section>
        </>
    )
}
