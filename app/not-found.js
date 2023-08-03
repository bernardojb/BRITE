import { BtnChev } from '@/components/buttons/BtnChev'
import Image from 'next/image'
import React from 'react'

const notFound = () => {
    return (
        <section className="bg-cream h-screen flex justify-center items-center">
            <div className='container flex flex-col justify-center items-center'>
                <Image src="/assets/icons/brite-icon.svg" width={40} height={40} alt='' />
                <h1 className="text-xl mb-4 text-primary font-semibold text-center">
                    Não conseguimos encontrar essa página!
                </h1>
                <p className='text-secondary text-base mb-20 text-center'>Parece que o conteúdo que você está buscando não existe.</p>
                <BtnChev
                    href="/"
                    color="text-white"
                    bg="bg-brite"
                    text="Voltar para home"
                />
            </div>
        </section>
    )
}

export default notFound