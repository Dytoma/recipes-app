import React from 'react';
import Link from 'next/link';

import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Back = ({ link }) => {
    return (
        <div className='my-6 md:my-8'>
            <Link href={link}>
                <motion.button 
                className='px-4 py-1 rounded-sm bg-white dark:bg-navbarDark smooth_transition hover:scale-125 smooth_shadow'
                initial={{opacity: 0}}
                whileInView={{opacity: [0, 0.5, 1]}}
                transition={{duration: 0.4, ease: 'easeInOut', delay: 0.4}}
                >
                    <BiArrowBack className='text-base md:text-2xl text-textColor dark:text-textLight' />
                </motion.button>
            </Link>
        </div>
    )
}

export default Back