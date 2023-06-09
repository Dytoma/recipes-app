import React from 'react';
import Category from './Category';
import getCategories from '@libs/getCategories';

import { motion } from 'framer-motion';
import { container, itemFade } from '@constants/constant';

export default async function Categories() {

    const data = await getCategories();
    const results = await data.categories;

    return (
        <motion.div
            className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-6 md:gap-x-[30px] gap-x-5 gap-y-9 md:gap-y-16 lg:gap-y-[76px] lg:mb-20 md:mb-16 mb-10'
            variants={container}
            initial='hidden'
            whileInView='show'
        >
            {results.map((item, id) => (
                <motion.div variants={itemFade} key={id}>
                    <Category category={item} />
                </motion.div>
            ))}
        </motion.div>
    )
}

