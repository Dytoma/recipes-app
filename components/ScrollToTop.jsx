"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTop = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                active &&
                <button type='button' className='grid place-items-center p-3 text-xl smooth_transition rounded-full bg-slate-400 dark:bg-[#252525] text-textLight fixed bottom-5 md:bottom-7 right-4 to-top' onClick={scrollUp} aria-label='scroll to top'>
                    <AiOutlineArrowUp />
                </button>
            }
        </>
    )
}

export default ScrollToTop