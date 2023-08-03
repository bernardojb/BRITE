'use client'
import React, { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const Animation = ({ children }) => {

    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 250,
        config:{
            duration:500
        }
    })

    return (
        <animated.div style={{...animation}}>
            {children}
        </animated.div>
    )
}

export default Animation