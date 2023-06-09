"use client"

import React, { useContext, useEffect } from 'react';
import { AppContext } from '@components/AppLayout';
import Meal from '@components/Meal';

import { motion } from 'framer-motion';
import { container, itemFade, itemFadeUp } from '@constants/constant';

const Page = () => {
  const { savedMeals, setSavedMeals } = useContext(AppContext);

  useEffect(() => {
    const savedItems = localStorage.getItem('meals');
    const items = JSON.parse(savedItems);

    setSavedMeals(items);
  }, [])

  return (
    <section className='page_layout'>
      <motion.div variants={container} initial='hidden' whileInView='show' className='my-5 md:my-32 lg:my-10 hide'>
        <motion.h3
          className='header_3'
          variants={itemFadeUp}
        >You can find all your liked meals below</motion.h3>
      </motion.div>
      <div>
        {
          savedMeals.length ?
            <motion.div variants={container} initial='hidden' whileInView='show' className='grid grid-cols-1 md:grid-cols-3 gap-x-7 md:gap-x-[2rem] lg:gap-x-9 gap-y-10 md:gap-y-16 lg:gap-y-20 mb-10 md:mb-16 lg:mb-20'>
              {savedMeals.map((meal, id) => (
                <motion.div variants={itemFade} key={id}>
                  <Meal meal={meal} category='saved' />
                </motion.div>
              ))}
            </motion.div> :
            <motion.div variants={container} initial='hidden' whileInView='show' className='w-full h-[200px] md:h-[600px] lg:h-[400px] flex_center'>
              <motion.h4 variants={itemFadeUp} className='font-barlow font-semibold text-xl text-[#313737] tracking-wider hide lg:text-2xl dark:text-white'>No meals saved!</motion.h4>
            </motion.div>
        }
      </div>
    </section>
  )
}

export default Page