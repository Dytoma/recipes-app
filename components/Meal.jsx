"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from './AppLayout';

import { BsFillHeartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { container, itemFade } from '@constants/constant';

const Meal = ({ meal, category }) => {
  const [added, setAdded] = useState(false);
  const { savedMeals, setSavedMeals } = useContext(AppContext);

  //On first render get the saved meals from the local storage and check if some meals are in the saved meals. If so set the 'added' to true
  useEffect(() => {
    const savedItems = localStorage.getItem('meals');
    const items = JSON.parse(savedItems) || [];

    setSavedMeals(items);

    items?.map((item) => {
      if (item?.idMeal === meal?.idMeal) {
        setAdded(true)
      } else {
        setAdded(false)
      }
    });

    console.log(items);
    console.log(added);
  }, [])


  //when the added state changes, depending on its value, add or remove it from the saved meals 
  const handleToggle = () => {
    setAdded((current) => !current);

    const savedItems = localStorage.getItem('meals');
    const items = JSON.parse(savedItems) || [];
    if (added) {
      setSavedMeals(items);
      localStorage.setItem('meals', JSON.stringify(items));
    } else {
      const updatedLikedMeals = items?.filter((savedMeal) => savedMeal?.idMeal !== meal?.idMeal)
      setSavedMeals(updatedLikedMeals);
      localStorage.setItem('meals', JSON.stringify(updatedLikedMeals));
    };
  }

  return (
    <div className='rounded-lg card_bg  lg:h-[420px] md:h-[248px] h-[300px] smooth_shadow'>

      <motion.div variants={container} initial='hidden' whileInView='show' className='relative'>
        <motion.button variants={itemFade} aria-label='Add item' className='absolute z-10 top-4 right-4'
          onClick={handleToggle}
        >
          <BsFillHeartFill className={`text-xl ${added ? 'text-[#f71510]' : 'text-textLight'} smooth_transition hover:scale-125`} />
        </motion.button>
        <Link href={`/categories/${category}/${meal?.idMeal}`}>
          <img src={meal?.strMealThumb} alt={meal?.strMeal} className='rounded-t-lg w-full smooth_transition hover:opacity-50 h-[220px] md:h-[180px] lg:h-[340px] object-cover' />
        </Link>
        <motion.div
          className='absolute left-5 -bottom-4 rounded-full bg_blur'
          variants={itemFade}
        >
          <Image src={meal?.strMealThumb} width={50} height={50} alt={meal?.strMeal} className='object-cover rounded-full' />
        </motion.div>
      </motion.div>

      <div className='px-3 py-6 rounded-lg md:py-5 overflow-hidden'>
        <motion.h3 className='font-poppins lg:hidden text-textColor dark:text-textLight font-semibold text-base lg:text-xl tracking-wider'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        >{meal?.strMeal.length > 19 ? `${meal?.strMeal.slice(0, 30)}...` : meal?.strMeal}</motion.h3>

        <motion.h3 className='font-poppins hidden lg:block text-textColor dark:text-textLight font-semibold text-base lg:text-xl tracking-wider'
          initial={{ opacity: 0, y: '40px' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >{meal?.strMeal.length > 33 ? `${meal?.strMeal.slice(0, 32)}...` : meal?.strMeal}</motion.h3>
      </div>
    </div>
  )
}

export default Meal