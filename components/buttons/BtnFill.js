import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BtnFill = (props) => {
    return (
        <Link 
        href={props.href} 
        className={`${props.bg} md:px-4 py-[2px] rounded-full w-fit flex justify-center items-center ease-out transition duration-500`}>
            <p className={` ${props.color} text-md whitespace-nowrap font-semibold mr-4`}>
                {props.text}
            </p>
            <div className={`${props.brightness} w-[8px] h-[16px] relative font-semibold`}>
                <Image src="/assets/icons/chevron.svg" fill />
            </div>
        </Link>
    )
}
