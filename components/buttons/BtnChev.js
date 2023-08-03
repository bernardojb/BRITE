import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BtnChev = (props) => {
    return (
        <Link href={props.href} className={`px-4 py-[2px] rounded-full w-fit flex justify-center items-center ease-in-out transition duration-300 ${props.bg}`}>
            <p className={`text-md whitespace-nowrap font-semibold mr-4 ${props.color}`}>
                {props.text}
            </p>
            <div className={`w-[8px] h-[16px] relative font-semibold ${props.brightness}`}>
                <Image src="/assets/icons/chevron.svg" fill />
            </div>
        </Link>
    )
}
