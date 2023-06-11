"use client"

import React, { useContext } from 'react';
import { AppContext } from './AppLayout';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { itemFade, container, itemFadeRight } from '@constants/constant';


const Category = ({ category }) => {
    const { setDetails, setCurrent } = useContext(AppContext);

    return (
        <div className='font-poppins hide'>
            <Link href={`/categories/${category?.strCategory}`}>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ opacity: 0.5 }} transition={{ duration: 0.5, ease: 'easeInOut' }} src={category?.strCategoryThumb} alt={category?.strCategory} className='w-full rounded-lg h-[220px] md:h-[180px] object-cover bg-textLight dark:bg-darkModeBg smooth_transition hover:opacity-70' />
            </Link>
            <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col gap-4 py-5 overflow-hidden'>
                <motion.h3 variants={itemFade} whileInView={{ opacity: [0, 1] }} className='text-xl tracking-wider text-[#1E1E1E] font-semibold dark:text-white'>{category?.strCategory}</motion.h3>
                <motion.p variants={itemFade} whileInView={{ opacity: [0, 1] }} className='text-base tracking-wider dark:text-textLight'>{category?.strCategoryDescription.slice(0, 65)}...</motion.p>
                <motion.button
                    variants={itemFade}
                    whileInView={{ opacity: [0, 1] }}
                    type='button'
                    className='text-textLight hover:bg-slate-100  hover:text-textColor smooth_transition bg-textColor rounded-r-full w-fit px-8 py-[6px]'
                    onClick={() => {
                        setDetails(true);
                        setCurrent(category.idCategory - 1);
                    }}
                >See full details</motion.button>
            </motion.div>
            {/* Implement the more details section */}
        </div>
    )
}

export default Category