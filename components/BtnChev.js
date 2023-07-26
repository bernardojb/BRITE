import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BtnChev = (props) => {
    return (
        <Link href={props.href} className={`px-5 py-1 rounded-full w-fit flex justify-center items-center ${props.bg}`}>
            <p className={`text-md font-semibold mr-2 ${props.color}`}>
                {props.text}
            </p>
            <div className={`w-[24px] h-[24px] relative font-semibold ${props.brightness}`}>
                <Image src="./assets/icons/chevron.svg" fill />
            </div>
        </Link>
    )
}
