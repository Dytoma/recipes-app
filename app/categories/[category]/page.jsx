"use client"

import React from 'react';

import Meal from '@components/Meal';
import Back from '@components/Back';

import getCategoriesMeals from '@libs/getCategoriesMeals';

import { motion } from 'framer-motion';
import { container, itemFade } from '@constants/constant';



export default async function Page({ params: { category } }) {
    const data = await getCategoriesMeals(category);
    const results = await data.meals;


    return (
        <section className='page_layout'>
            <div>
                <Back link='/' />
            </div>
            <div className='lg:my-8 md:mb-5 mb-6 hide'>
                <motion.h3 className='header_3 text-center font-bold md:text-left' initial={{opacity: 0, y: '40px'}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.4, ease: 'easeInOut'}} >All meals about <span className='highlight_gradient'>{category}</span></motion.h3>
            </div>

            <motion.div variants={container} initial='hidden' whileInView='show' className='grid grid-cols-1 md:grid-cols-3 gap-x-7 md:gap-x-[2rem] lg:gap-x-9 gap-y-10 md:gap-y-16 lg:gap-y-20 mb-10 md:mb-16 lg:mb-20'>
                {
                    results?.map((meal) =>
                    (
                        <motion.div variants={itemFade} key={meal?.idMeal}>
                            <Meal meal={meal} category={category} />
                        </motion.div>
                    )
                    )
                }
            </motion.div>
            
        </section>
    )
}

