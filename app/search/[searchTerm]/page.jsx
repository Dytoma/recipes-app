'use client'

import React from 'react';

import Back from '@components/Back';
import Details from '@components/Details';

import getMealBySearch from '@libs/getMealBySearch';
import { motion } from 'framer-motion';


const page = async ({ params }) => {
  const data = await getMealBySearch(params.searchTerm);
  const results = await data.meals;


  return (
    <section className='page_layout'>
      <div>
        <Back link='/' />
      </div>  

      <div className='my-5 md:mt-8 md:mb-5 lg:my-8 hide'>
        <motion.h3 initial={{ opacity: 0, y: '40px' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className='header_3 text-center font-bold md:text-left'>Search <span className='highlight_gradient'>'{results[0].strMeal}'</span></motion.h3>
      </div>

      <div>
        <Details meal={results[0]} />
      </div>
    </section>
  )
}

export default page