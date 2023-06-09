"use client"

import React, { useEffect, useState } from 'react';

import { itemFadeLeft, itemFadeUp, letters, container, itemBtn, itemFade } from '@constants/constant';
import getMealsByFirstLetter from '@libs/getMealsByFirstLetter';
import Meal from '@components/Meal';

import { motion } from 'framer-motion';

const Page = () => {
  const [results, setResults] = useState([]);
  const [letterSelected, setLetterSelected] = useState('');
  //feature to implement in the future: loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async (letter) => {
      setLoading(false);
      try {
        const data = await getMealsByFirstLetter(letter);

        const res = await data?.meals;

        setResults(res);
        setLoading(true);
        console.log(results);
      } catch (error) {
        console.log('Error parsing JSON data', error);
      }
    };

    fetchData(letterSelected);
  }, [letterSelected])



  return (
    <section className='page_layout mb-10 md:mb-16 lg:mb-20'>
      <motion.div variants={container} initial='hidden' animate='show' className='flex items-center justify-between flex-wrap lg:flex-nowrap py-5 px-4 bg-white dark:bg-gray my-6 md:my-8 rounded-lg'>
        {
          letters.map((letter) => (
            <button key={letter} className={`${letterSelected === letter ? 'text-[#ee3a70]' : 'dark:hover:text-black hover:text-white dark:text-textLight'} cursor-pointer overflow-hidden py-3 px-4 hover:bg-gray dark:hover:bg-white smooth_transition rounded`}
              onClick={() => setLetterSelected(letter)}
            >
              <motion.p variants={itemBtn} className='text-base md:text-xl lg:text-xl font-barlow uppercase font-semibold tracking-wider'>{letter}</motion.p>
            </button>
          ))
        }
      </motion.div>
      {
        results?.length && results != null ?
          <motion.div variants={container} initial='hidden' whileInView='show'>
            <div className='my-5 md:my-8 lg:my-10 overflow-hidden'>
              <motion.h3 variants={itemFadeUp} className='header_3'>Meals starting with the letter <span className='highlight_gradient uppercase'>{`'${letterSelected}'`}</span></motion.h3>
            </div>
            <motion.div variants={container} initial='hidden' whileInView='show' className='grid_layout'>
              {results?.map((meal, id) => (
                <motion.div variants={itemFade} key={id}>
                  <Meal meal={meal} category={letterSelected} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div> : results === null ?

            <div className='h-[100px] md:h-[500px] lg:h-[400px] flex_center'
              initial={{ opacity: 0, y: '100%' }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className='overflow-hidden'>
                <motion.h2
                  className='header_3'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >No Meal starting with the letter <span className='highlight_gradient uppercase'>{letterSelected}</span>
                </motion.h2>
              </div>
            </div> :

            <div className='h-[100px] md:h-[500px] lg:h-[400px] flex_center'>
              <div className='overflow-hidden'>
                <motion.h2
                  className='font-barlow font-semibold text-xl md:text-2xl lg:text-3xl text-textColor dark:text-textLight'
                  initial={{ opacity: 0, y: '30px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                >Choose a letter
                </motion.h2>
              </div>
            </div>
      }
    </section>
  )
}

export default Page