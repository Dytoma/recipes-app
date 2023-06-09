'use client'

import Image from 'next/image';
import Filter from '@components/Filter';
import Categories from '@components/Categories';
import { GoSearch } from 'react-icons/go';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { container, itemFade, itemFadeLeft, itemFadeRight, itemFadeUp } from '@constants/constant';


export default function Home() {
  const [focus, setFocus] = useState(false);

  const focusStateOn = () => {
    setFocus(true);

    console.log(focus);
  }

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
          <Image src='/images/banner-img.png' width={456} height={456} alt='Banner Image' className='w-[14rem] h-[14rem] md:w-[17.5rem] md:h-[17.5rem] lg:w-[28.5rem] lg:h-[28.5rem]' />
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial='hidden' whileInView='show' className='flex flex-col-reverse md:flex-row gap-6 md:gap-0 mb-5 md:mb-6 lg:mb-[2.25rem] items-center justify-between overflow-hidden'>
        <div className='overflow-hidden'>
          <motion.h3 variants={itemFadeUp} className='header_3'>
            All meal categories
          </motion.h3>
        </div>

        {!focus &&
          <motion.form variants={itemFadeRight} action="" className='font-poppins'>
            <div className='relative w-full md:w-auto'>
              <label htmlFor="meal" className='absolute inset-y-5 md:inset-y-[1.125rem] lg:inset-y-[1.125rem] left-5 flex_center'>
                <GoSearch className='md:text-xl text-base lg:text-2xl text-[#BEB6B6]' />
              </label>
              <input
                type="text"
                name="meal"
                id="meal"
                placeholder='Search for a meal'
                className='bg-[#F7F6F6] dark:bg-darkRed md:text-base text-xl lg:text-2xl rounded-lg py-4 lg:py-[1.125rem] lg:pl-[4.5rem] pl-14 md:pl-[3.75rem] w-full md:w-80 lg:w-[29.125rem] outline-none dark:text-textLight'
                onClick={focusStateOn}
              />
            </div>
          </motion.form>
        }

        {focus &&
          <Filter>
            <form action="" className='font-poppins mx-5 mt-16 md:mt-[4.5rem] lg:mt-32 md:mx-auto'>
              <div className='relative w-full md:w-auto'>
                <label htmlFor="meal" className='absolute inset-y-5 md:inset-y-[1.125rem] lg:inset-y-[1.125rem] left-5 flex_center'>
                  <GoSearch className='md:text-xl text-base lg:text-2xl text-[#BEB6B6]' />
                </label>
                <input
                  type="text"
                  name="meal" id="meal"
                  placeholder='Search for a meal'
                  className='bg-[#F7F6F6] dark:bg-darkRed md:text-base text-xl lg:text-2xl rounded-lg py-4 lg:py-[1.125rem] lg:pl-[4.5rem] pl-14 md:pl-[3.75rem] w-full md:w-[553px] lg:w-[776px] outline-none dark:text-textLight shadow-2xl'
                  onKeyDown={(e) => {
                    e.preventDefault;

                    if (e.key === 'Enter') {
                      setFocus(false)
                    }
                  }} />
              </div>
            </form>
          </Filter>}
      </motion.div>

      <div>
        <Categories />
      </div>
    </section>
  )
}
