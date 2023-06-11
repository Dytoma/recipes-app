"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AppContext } from './AppLayout';
import { useContext } from 'react';

import { CgClose } from 'react-icons/cg'

const Filter = ({ children, container }) => {
    const { setSearchbar, setDetails } = useContext(AppContext);

    return (
        <div className='fixed inset-0 z-[100]'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1, originX: '100%', originY: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut', originX: '100%', originY: '100%' }}
                className={`flex justify-center ${ container === 'details' ? 'items-center' : ''} h-full w-full filter_bg filter_animation`}
            >
                <button type='button' className='grid place-items-center p-3 rounded-full bg-slate-200 dark:bg-darkRed absolute md:top-9 md:right-9 top-5 right-5 hover:opacity-50' onClick={() => container === 'details' ? setDetails(false) : setSearchbar(false)}>
                    <CgClose className='text-textColor dark:text-textLight smooth_transition text-xl' />
                </button>
                {children}
            </motion.div>
        </div>
    )
}

export default Filter