import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = (props) => {
    return (
        <div className='bg-placeholder h-[482px] relative rounded-xl border border-placeholder'>
            <Link href={props.href}>
                <div
                    className='rounded-xl'
                    style={{
                        background: 'linear-gradient(180deg, #80808000 35%, #0F0F0FED 100%)',
                        zIndex: '2',
                        left: '0px',
                        bottom: '0px',
                        height: '100%',
                        width: '100%',
                        position: 'absolute'
                    }} />
                <Image src={props.src} fill className='object-cover z-0 rounded-xl' />
                <div className='absolute bottom-0 left-0 z-[3] sm:px-8 px-4 py-4 w-full'>
                    <p className='text-secondary text-xs'>{props.linha}</p>
                    <div className=' flex flex-row justify-between items-center'>
                        <p className='text-white text-baselg leading-9'>{props.name}</p>
                        <div className={`w-[8px] h-[16px] relative font-semibold ${props.brightness}`}>
                            <Image src="./assets/icons/chevron.svg" fill />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard