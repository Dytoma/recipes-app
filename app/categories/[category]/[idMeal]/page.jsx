"use client"

import React from 'react'
import { usePathname } from 'next/navigation';

import getMealDetails from '@libs/getMealDetails';
import Back from '@components/Back';
import Details from '@components/Details';

import { motion } from 'framer-motion';




export default async function Page({ params: { idMeal } }) {
    const pathname = usePathname();

    const data = await getMealDetails(idMeal);
    const results = await data.meals;

    console.log(results);


    return (
        <section className='page_layout'>
            <div>
                <Back link={pathname.slice(0, pathname.length - 6).length > 13 ? pathname.slice(0, pathname.length - 6) === '/categories/saved' ? '/saved' : pathname.slice(0, pathname.length - 6) : '/first-letter'} />
            </div>
            <div className='my-5 md:mt-8 md:mb-5 lg:my-8 hide'>
                <motion.h3 initial={{opacity: 0, y: '40px'}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.4, ease: 'easeInOut'}} className='header_3 text-center font-bold md:text-left'><span className='highlight_gradient'>{results[0].strMeal} </span> details</motion.h3>
            </div>
            
            <div>
                <Details meal={results[0]} />
            </div>
        </section>
    )
}

