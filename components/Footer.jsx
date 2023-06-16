import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { container, itemFade, itemFadeUp } from '@constants/constant';

const Footer = () => {
  return (
    <footer className='pt-11 pb-16 md:pb-11 px-5 md:px-[45px] footer_bg'>
      <div className='flex_center flex-col gap-4 pb-5 hide'>
        <Image src='/images/footer-logo.svg' alt='logo' width={128} height={42.18} priority />
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, y: [40, 0]}} transition={{duration: 0.5, ease: 'easeInOut'}} className='font-poppins text-sm tracking-[0.055em] md:text-lg text-[#D8D3D3] text-center'>Get all details of every meal in<br /> just one place</motion.p>
      </div>
      <div className='pt-6 pb-8 border-t-[1px] border-t-[#FFFBF7] lg:mx-[25rem]'>
        <motion.ul variants={container} initial='hidden' whileInView='show' className='flex_center flex-col md:flex-row gap-8 lg:gap-16 footer_link'>
          <motion.li variants={itemFade} className='hover:text-orange smooth_transition'>
            <Link href='/'>
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className='hover:text-orange smooth_transition'>
            <Link href='/first-letter'>
              Meals by first letter
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className='hover:text-orange smooth_transition'>
            <Link href='/random'>
              Random meal
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className='hover:text-orange smooth_transition'>
            <Link href='/saved'>
              Saved
            </Link>
          </motion.li>
        </motion.ul>
      </div>
      <motion.div variants={container} initial='hidden' whileInView='show' className='flex_center gap-7 -mx-5 md:-mx-[45px] pt-8 border-t-[1px] border-t-[#FFFBF7] hide'>
        <motion.p variants={itemFadeUp} className='text-xl tracking-[0.055em] font-barlow font-medium text-white cursor-pointer'>Copyright © 2023</motion.p>
        <div className='flex gap-5 text-2xl text-white'>
          <motion.a variants={itemFade} href="https://www.themealdb.com/api.php" target='_blank'>
            <TbWorld className='hover:text-orange smooth_transition' />
          </motion.a>
          <motion.a variants={itemFade} href="https://github.com/Dytoma/recipes-app" target='_blank'>
            <FaGithub className='hover:text-orange smooth_transition' />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer