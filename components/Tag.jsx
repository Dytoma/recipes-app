import React from 'react';
import { motion } from 'framer-motion';
import { itemFade } from '@constants/constant';

const Tag = ({ ingredient }) => {
    return (
        <motion.div variants={itemFade} className='flex_center px-2 py-[6px] cursor-pointer lg:py-2 lg:px-[10px] rounded bg-[#F0EEEE] dark:bg-[#211F1D]'>
            <h5 className='font-poppins text-xs lg:text-base text-gray dark:text-[#CDD4D4]'>{ingredient}</h5>
        </motion.div>
    )
}

export default Tag