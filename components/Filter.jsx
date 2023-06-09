import React from 'react';
import { motion } from 'framer-motion';

const Filter = ({ children }) => {
    return (
        <div className='fixed inset-0 z-30'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, originX: '100%', originY: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut', originX: '100%', originY: '100%' }}
                className='flex justify-center h-full w-full filter_bg filter_animation'>
                {children}
            </motion.div>
        </div>
    )
}

export default Filter