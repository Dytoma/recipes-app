'use client'

import Image from 'next/image';
import SearchBar from '@components/SearchBar';
import Categories from '@components/Categories';

import { motion } from 'framer-motion';
import { container, itemFade, itemFadeLeft, itemFadeRight, itemFadeUp } from '@constants/constant';


export default function Home() {

  return (
    <section className="page_layout">
      <motion.div variants={container} initial='hidden' whileInView='show' className='my-6 md:my-8 lg:mt-[1.125rem] lg:mb-10 flex_center flex-col md:flex-row gap-5 md:gap-0 md:justify-between lg:gap-[100px] overflow-hidden'>
        <motion.div variants={itemFadeLeft}>
          <div className='overflow-hidden'>
            <h1
              className='text-black px-6 md:px-0 font-medium font-barlow text-center md:text-left dark:text-white text-[2rem] leading-10 md:text-5xl md:leading-[3rem] lg:pr-12 lg:text-7xl lg:leading-[96px] tracking-wider'>
              Welcome to your <span className='text_gradient'>Recipes</span> reference</h1>
          </div>

          <div className='mt-5 md:mt-7 overflow-hidden'>
            <p
              className=' text-textColor font-poppins text-sm text-center md:text-left md:text-base lg:text-xl dark:text-textLight'>
              If this is your first time on our website, we recommend you start by exploring the available meals for each category below or you can look for your own meal and get the full details about it.
            </p>
          </div>
        </motion.div>
        <motion.div variants={itemFadeRight} className='min-w-[14rem] min-h-[14rem] md:min-w-[17.5rem] md:min-h-[17.5rem] lg:min-w-[28.5rem] lg:min-h-[28.5rem]'>
          <Image src='/images/banner-img.png' width={456} height={456} alt='Banner Image' className='w-[14rem] h-[14rem] md:w-[17.5rem] md:h-[17.5rem] lg:w-[28.5rem] lg:h-[28.5rem]' priority />
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col-reverse md:flex-row gap-6 md:gap-0 mb-5 md:mb-6 lg:mb-[2.25rem] items-center justify-between overflow-hidden'>
        <div className='overflow-hidden'>
          <motion.h3 variants={itemFadeUp} className='header_3'>
            All meal categories
          </motion.h3>
        </div>

        <SearchBar />

      </motion.div>

      <div>
        <Categories />
      </div>
    </section>
  )
}
