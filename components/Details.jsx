import React from 'react';

import Image from 'next/image';

import MealDetail from './MealDetail';
import Tag from './Tag';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { container, itemFade, itemFadeUp, itemFadeRight, itemFadeDown, itemUp, itemFadeLeft } from '@constants/constant';

const Details = ({ meal }) => {
    return (
        <div>
            <motion.div
                className='flex flex-col md:flex-row md:items-center items-start gap-5 md:gap-[30px] lg:gap-10 mb-5 md:mb-14 lg:mb-6'
                variants={container}
                initial='hidden'
                whileInView='show'
            >
                <motion.div variants={itemFade} className='md:h-full w-full lg:w-[485px] md:w-[324px]'>
                    <Image src={meal?.strMealThumb} width={485} height={297} alt={meal?.strMeal} className='w-full h-[312px] object-cover md:min-w-[324px] lg:min-w-[485px] rounded-xl' />
                </motion.div>
                <div className='flex flex-col gap-4 md:gap-6'>
                    <MealDetail description='Meal Category' detail={meal.strCategory} />
                    <MealDetail description='Meal Area' detail={meal.strArea} />
                    <MealDetail description='Main Ingredients' detail={meal.strTags ? meal.strTags : 'None'} />

                    <div className='flex gap-2 lg:gap-3 flex-wrap hide'>
                        <motion.h4 variants={itemFadeDown} className='text-black dark:text-white font-barlow font-semibold text-xl lg:text-2xl'>Ingredients:</motion.h4>
                        {meal.strIngredient1 && <Tag ingredient={meal.strIngredient1} />}
                        {meal.strIngredient2 && <Tag ingredient={meal.strIngredient2} />}
                        {meal.strIngredient3 && <Tag ingredient={meal.strIngredient3} />}
                        {meal.strIngredient4 && <Tag ingredient={meal.strIngredient4} />}
                        {meal.strIngredient5 && <Tag ingredient={meal.strIngredient5} />}
                        {meal.strIngredient6 && <Tag ingredient={meal.strIngredient6} />}
                        {meal.strIngredient7 && <Tag ingredient={meal.strIngredient7} />}
                        {meal.strIngredient8 && <Tag ingredient={meal.strIngredient8} />}
                        {meal.strIngredient9 && <Tag ingredient={meal.strIngredient9} />}
                        {meal.strIngredient10 && <Tag ingredient={meal.strIngredient10} />}
                        {meal.strIngredient11 && <Tag ingredient={meal.strIngredient11} />}
                        {meal.strIngredient12 && <Tag ingredient={meal.strIngredient12} />}
                        {meal.strIngredient13 && <Tag ingredient={meal.strIngredient13} />}
                        {meal.strIngredient14 && <Tag ingredient={meal.strIngredient14} />}
                        {meal.strIngredient15 && <Tag ingredient={meal.strIngredient15} />}
                        {meal.strIngredient16 && <Tag ingredient={meal.strIngredient16} />}
                        {meal.strIngredient17 && <Tag ingredient={meal.strIngredient17} />}
                        {meal.strIngredient18 && <Tag ingredient={meal.strIngredient18} />}
                        {meal.strIngredient19 && <Tag ingredient={meal.strIngredient19} />}
                        {meal.strIngredient20 && <Tag ingredient={meal.strIngredient20} />}
                    </div>

                </div>
            </motion.div>

            <div className='hide'>
                <motion.p
                    className='text-black dark:text-textLight text-[0.875rem] leading-6 lg:text-[1rem] lg:leading-8 tracking-wider font-poppins'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
                ><span className='dark:text-white font-barlow font-bold text-base'>Instructions: </span>{meal.strInstructions}</motion.p>
            </div>

            <motion.div
                className='mt-5 mb-10 md:mt-8 md:mb-16 lg:mt-10 lg:mb-20 flex flex-col md:flex-row gap-4 md:gap-6'
                variants={container}
                initial='hidden'
                whileInView='show'
            >
                <motion.div variants={itemFadeLeft} className='cursor-pointer relative w-fit'>
                    <Link href={meal.strYoutube} target='_blank'>
                        <Image src={meal?.strMealThumb} width={235} height={180} alt={meal.strMeal} className='object-cover rounded-lg hover:opacity-50 smooth_transition' />
                        <Image src='/icons/play-btn.svg' width={68} height={68} alt='Watch video' className='absolute m-auto inset-0 hover:scale-125 smooth_transition' />
                    </Link>
                </motion.div>
                <div className='hide'>
                    <motion.h6 variants={itemFadeUp} className='font-barlow font-semibold text-base tracking-wider cursor-pointer text-textColor dark:text-textLight'>Watch this youtube video<br /> for more insights</motion.h6>
                </div>
            </motion.div>

        </div>
    )
}

export default Details