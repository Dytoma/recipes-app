'use client'

import React, { useState, useContext } from 'react'
import Filter from './Filter'
import Image from 'next/image';
import { container, itemFade } from '@constants/constant';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { AppContext } from './AppLayout';

const Carousel = ({ results }) => {
    const { details, current, setCurrent } = useContext(AppContext);

    const prev = () => setCurrent((curr) => (curr === 0 ? results?.length - 1 : curr - 1));
    const next = () => setCurrent((curr) => (curr === results?.length - 1 ? 0 : curr + 1));
    return (
        <>
        {details && 
        
            <Filter container='details'>
                <div>
                    <div className='carousel-container hide'>
                            <div className='w-full flex items-center smooth_transition' style={{ transform: `translateX(-${current * 100}%)` }}>
                            {results.map((item, id) => (
                                <div className='flex flex-col md:flex-row bg-textLight dark:bg-darkRed rounded-2xl items-center gap-5 md:gap-8 lg:gap-10 min-w-full p-5' key={id}>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <Image src={item.strCategoryThumb} width={485} height={297} className='w-full h-[200px] md:h-[312px] object-contain lg:object-cover md:min-w-[324px] lg:min-w-[485px] rounded-xl' alt={item.strCategory} />
                                    </motion.div>

                                    <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col gap-6 p-3 h-[200px] md:h-[312px] overflow-auto'>
                                        <motion.h3 variants={itemFade} whileInView={{ opacity: [0, 1] }} className='text-xl font-barlow tracking-wider text-[#1E1E1E] font-semibold dark:text-white'>{item?.strCategory}</motion.h3>
                                        <motion.p variants={itemFade} whileInView={{ opacity: [0, 1] }} className='text-base tracking-wider dark:text-textLight font-poppins'>{item?.strCategoryDescription}</motion.p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5 mt-6 md:mt-8 lg:mt-10'>
                            <button type='button' className='p-2 rounded-full bg-white dark:bg-darkRed dark:text-textLight smooth_transition hover:opacity-50'>
                            <BiChevronLeft className='text-xl text-textColor dark:text-textLight' onClick={prev} />
                        </button>
                            <button type='button' className='p-2 rounded-full bg-white dark:bg-darkRed dark:text-textLight smooth_transition hover:opacity-50'>
                            <BiChevronRight className='text-xl text-textColor dark:text-textLight' onClick={next} />
                        </button>
                    </div>
                </div>
            </Filter>
        }
        </>
    )
}

export default Carousel