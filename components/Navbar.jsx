'use client'

import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { AppContext } from '@app/layout';

import { usePathname } from 'next/navigation';
import { itemFade, container } from '@constants/constant';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { darkMode, setDarkMode } = useContext(AppContext);

  //store the user preference in the local storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  //on user click switch to dark mode or to light mode
  const switchDarkLightMode = () => {
    setDarkMode(prev => !prev);

    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme-recipe", "light")
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme-recipe", "dark")
    }
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <nav className='flex justify-between items-center px-5 md:px-[2.8125rem] lg:px-40 py-5 lg:py-7 bg-white dark:bg-navbarDark'>
      <div className='overflow-hidden flex-1 lg:flex-auto'>
        <motion.div
          className='flex flex-1 lg:flex-auto items-center justify-between'
          initial={{ opacity: 0, y: '100%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Link href='/'>
            {darkMode ?
              <Image src='/images/logo-dark.svg' width={168} height={56} alt='logo' className='logo_style' /> :
              <Image src='/images/logo-light.svg' width={168} height={56} alt='logo' className='logo_style' />
            }
          </Link>
          <motion.div className='flex items-center gap-4 lg:hidden' variants={container} initial='hidden' whileInView='show'>
            <motion.button variants={itemFade} type='button' aria-label='dark/light mode switcher' className='flex_center dark:text-white'
              onClick={switchDarkLightMode}
            >
              {darkMode ?
                <BsSun /> :
                <BsMoonFill />
              }
            </motion.button>
            <motion.button variants={itemFade} type='button' aria-label='menu' className='' onClick={() => setMobileMenuOpen(true)}>
              {darkMode ?
                <Image src='/icons/hamburger-icon-dark.svg' width={30} height={20} className='w-[23px] h-[15.33px] md:w-[30px] md:h-[20px]' alt='open menu' /> :
                <Image src='/icons/hamburger-icon.svg' width={30} height={20} className='w-[23px] h-[15.33px] md:w-[30px] md:h-[20px]' alt='open menu' />
              }
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className='hidden lg:block'>
        <motion.ul variants={container} initial='hidden' whileInView='show' className='flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-10 h-full'>
          <motion.li variants={itemFade} className={`${pathname === '/' ? 'nav_link_active active_link' : 'nav_link'} hover_link`}>
            <Link href='/'>
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className={`${pathname === '/first-letter' ? 'nav_link_active active_link' : 'nav_link'} hover_link`}>
            <Link href='/first-letter'>
              Meals by first letter
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className={`${pathname === '/random' ? 'nav_link_active active_link' : 'nav_link'} hover_link`}>
            <Link href='/random'>
              Random meal
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className={`${pathname === '/saved' ? 'nav_link_active active_link' : 'nav_link'} hover_link`}>
            <Link href='/saved'>
              Saved
            </Link>
          </motion.li>
          <motion.li variants={itemFade} className='text-xl hidden dark:text-white lg:block'>
            <button type='button' aria-label='dark/light mode switcher' className='flex_center'
              onClick={switchDarkLightMode}
            >
              {darkMode ?
                <BsSun /> :
                <BsMoonFill />
              }
            </button>
          </motion.li>
        </motion.ul>
      </div>

      {/* mobile and tablet menu */}
      <div className={`${mobileMenuOpen ? 'fixed flex justify-end items-end z-50 inset-0 glass_effect' : 'hidden'} overflow-hidden lg:hidden`}>
        <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className='w-[70.13vw] md:w-[52vw] bg-white dark:bg-navbarDark h-full pl-5 pr-6 md:pl-8 md:pr-11 pt-6 md:pt-8'>
          <div className='flex_end'>
            <button type='button' aria-label='menu' className='' onClick={closeMenu}>
              {darkMode ?
                <Image src='/icons/close-icon-dark.svg' width={30} height={30} className='w-6 h-6 md:w-[30px] md:h-[30px]' alt='close menu' /> :
                <Image src='/icons/close-icon.svg' width={30} height={30} className='w-6 h-6 md:w-[30px] md:h-[30px]' alt='close menu' />
              }
            </button>
          </div>

          <ul className='flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-10 mt-16 md:mt-20'>
            <li className={`${pathname === '/' ? 'nav_link_active active_link' : 'nav_link'} hover_link`} onClick={closeMenu}>
              <Link href='/'>
                Home
              </Link>
            </li>
            <li className={`${pathname === '/first-letter' ? 'nav_link_active active_link' : 'nav_link'} hover_link`} onClick={closeMenu}>
              <Link href='/first-letter'>
                Meals by first letter
              </Link>
            </li>
            <li className={`${pathname === '/random' ? 'nav_link_active active_link' : 'nav_link'} hover_link`} onClick={closeMenu}>
              <Link href='/random'>
                Random meal
              </Link>
            </li>
            <li className={`${pathname === '/saved' ? 'nav_link_active active_link' : 'nav_link'} hover_link`} onClick={closeMenu}>
              <Link href='/saved'>
                Saved
              </Link>
            </li>
            <li className='text-xl hidden dark:text-white lg:block'>
              <button type='button' aria-label='dark/light mode switcher' className='flex_center'
                onClick={switchDarkLightMode}
              >
                {darkMode ?
                  <BsSun /> :
                  <BsMoonFill />
                }
              </button>
            </li>
          </ul>

        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar