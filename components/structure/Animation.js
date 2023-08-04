'use client'
import React, { useEffect } from 'react'
// import { useSpring, animated } from '@react-spring/web'
import { AnimatePresence, motion } from "framer-motion"

const Animation = ({ children }) => {

    // const animation = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    //     delay: 250,
    //     config: {
    //         duration: 500
    //     }
    // })

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animation