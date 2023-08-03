import React from 'react'
import CardProducts from '@/components/CardProducts'
import Animation from '@/components/structure/Animation'

export default function page() {
    return (
        <Animation>
            <section className='py-40 bg-white'>
                <CardProducts index={10} />
            </section>
        </Animation>
    )
}
