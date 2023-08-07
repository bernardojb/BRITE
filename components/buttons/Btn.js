import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Btn = (props) => {
    return (
        <Link href={props.href} className={`group py-[2px] rounded-full w-fit flex justify-center items-center drop-shadow-2xl ease-out transition duration-200 ${props.bg}`}>
            <p className={`text-md whitespace-nowrap font-semibold mr-4 group-hover:text-secondary ease-out transition duration-200 ${props.color}`}>
                {props.text}
            </p>
            <div className={`w-[8px] h-[16px] relative font-semibold group-hover:brightness-50 group-hover:translate-x-2 ease-out transition duration-200 ${props.brightness}`}>
                <Image src="/assets/icons/chevron.svg" fill />
            </div>
        </Link>
    )
}
