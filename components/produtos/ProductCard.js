'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const ProductCard = (props) => {

    const hoverCard = {
        hover: {
            scale: 0.95,
            transition: {
                ease: "easeOut",
                duration: 0.3,
            },
        }
    }

    const hoverText = {
        hover: {
            paddingBottom: "20px",
            paddingTop: "50px",
            background:'linear-gradient(0deg, rgba(0, 8, 27, 1) 0%, rgba(255,255,255,0) 100%)',
            transition: {
                ease: "easeOut",
                duration: 0.3,
            },
        }
    }

    return (
        <motion.div className='bg-white h-[482px] relative rounded-xl border border-placeholder overflow-hidden group transition-shadow hover:drop-shadow-lg'
            whileHover="hover"
            variants={hoverCard}
        >
            <Link href={props.href} className='overflow-hidden'>
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

                <Image
                    src={props.src}
                    fill
                    className='object-cover z-0 rounded-xl transition ease-out duration-300 group-hover:scale-[1.15]'
                />

                <motion.div variants={hoverText} className='absolute bottom-0 left-0 z-[3] sm:px-8 px-4 py-4 w-full'>
                    <p className='text-secondary group-hover:text-white text-xs transition ease-out duration-300'>{props.linha}</p>
                    <div className=' flex flex-row justify-between items-center'>
                        <p className='text-white text-baselg leading-9'>{props.name}</p>
                        <div className={`w-[8px] h-[16px] relative font-semibold ${props.brightness}`}>
                            <Image src="/assets/icons/chevron.svg" fill />
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div >
    )
}

export default ProductCard