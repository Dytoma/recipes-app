"use client"

import React, { useState } from 'react';

import Image from 'next/image';

import getRandomMeal from '@libs/getRandomMeal';
import Details from '@components/Details';
import Spinner from '@components/Spinner';
import Back from '@components/Back';

import { motion } from 'framer-motion';
import { container, itemFadeUp, itemFade, itemFadeRight } from '@constants/constant';

const Page = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [loading, setLoading] = useState('');


  const fetchRandomMeal = async () => {
    setLoading('on');
    const data = await getRandomMeal();
    const results = await data?.meals;

    setRandomMeal(results);
    setLoading('off');
  };


  return (
    <section className={`page_layout ${randomMeal ? '' : 'mb-10 md:mb-16 lg:mb-20'}`}>
      <motion.div
        className='mt-5 md:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-6 justify-between lg:items-center'
        variants={container}
        initial='hidden'
        whileInView='show'
      >
        {
          Boolean(randomMeal) && <Back link='/random' />
        }
        <div className='hide'>
          {
            !Boolean(randomMeal) &&
            <motion.h3 variants={itemFadeUp} className='header_3'>Get a random meal and its details instantly</motion.h3>
          }
        </div>
        <div className='hide'>
          <motion.button variants={itemFadeRight} className='text-xl text-textLight font-barlow font-semibold tracking-wider py-2 px-3 rounded btn_gradient smooth_transition hover:opacity-40'
            onClick={fetchRandomMeal}
          >{randomMeal ? 'Get a new random meal' : 'Get a random meal'}</motion.button>
        </div>

      </motion.div>

      {randomMeal &&
        <div className='my-5 md:my-8 hide'>
          <motion.h3 className='header_3' initial={{ opacity: 0, y: '40px' }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeIn' }}>Your random meal is <span className='highlight_gradient'>{randomMeal[0].strMeal}</span></motion.h3>
        </div>
      }


      {
        !Boolean(randomMeal) && loading === '' &&
        <motion.div className='my-7 md:my-10 lg:my-14 flex_center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, ease: 'easeIn', delay: 0.3 }}>
          <Image src='/images/img-random.png' width={549} height={414} alt='Mystery box' className='object-contain w-full md:w-[549px] h-[235px] md:h-[414px]' />
        </motion.div>
      }
      {
        loading === 'off' ?
          <div className='flex_center'>
            {
              <Details meal={randomMeal[0]} />
            }
          </div> : loading === 'on' ?
            <Spinner /> : ''

      }

    </section>
  )
}

export default Page