import React from 'react';

import { motion } from 'framer-motion';
import { itemFadeUp } from '@constants/constant';

const MealDetail = ({description, detail}) => {
  return (
    <div className='font-barlow hide'>
        <motion.h4 variants={itemFadeUp} className='text-textColor dark:text-textLight text-xl lg:text-2xl lg:leading-7 leading-6 tracking-[-0.03em]'>{description}: <span className='text-lg lg:text-xl lg:leading-6 font-semibold highlight_gradient tracking-wider'>{detail}</span></motion.h4>
    </div>
  )
}

export default MealDetail