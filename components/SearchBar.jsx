"use client"

import React, { useContext, Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { GoSearch } from 'react-icons/go';
import { AppContext } from './AppLayout';

import Filter from '@components/Filter';

import { Combobox, Transition } from '@headlessui/react';
import { allMeals } from '@constants/constant';

const SearchBar = () => {
    const [selectedMeal, setSelectedMeal] = useState("");
    const [query, setQuery] = useState('');
    const { searchbar, setSearchbar } = useContext(AppContext);

    const router = useRouter();

    const focusStateOn = () => {
        setSearchbar(true);

        console.log(searchbar);
    }

    // filtering the options depending on user's entry
    const filteredMeals = query === '' ? allMeals :
        allMeals.filter((meal) => {
            return meal
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase())
        })

    return (
        <>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }} className='font-poppins cursor-pointer w-full md:w-auto'>
                <button className='w-full flex items-center gap-5 rounded-lg py-4 lg:py-[1.125rem] px-5 md:px-6 md:w-80 lg:w-[29.125rem] bg-[#F7F6F6] dark:bg-darkRed' onClick={focusStateOn}>
                    <span className='block md:inset-y-[1.125rem] flex_center'>
                        <GoSearch className='md:text-xl text-base lg:text-2xl text-[#BEB6B6]' />
                    </span>
                    <p
                        className='md:text-base text-xl lg:text-2xl opacity-70 outline-none text-[#BEB6B6]'
                    >Search for a meal</p>
                </button>
            </motion.div>


            {
                searchbar &&
                <Filter>
                    <div className='w-full md:w-[553px] lg:w-[776px] font-poppins mx-5 mt-16 md:mt-[4.5rem] lg:mt-32 md:mx-auto'>
                        <Combobox value={selectedMeal} onChange={setSelectedMeal}>
                            <div className='relative w-full'>
                                <Combobox.Button className='absolute inset-y-5 md:inset-y-[1.125rem] lg:inset-y-[1.125rem] left-5 flex_center'>
                                    <GoSearch className='md:text-xl text-base lg:text-2xl text-[#BEB6B6]' />
                                </Combobox.Button>

                                <Combobox.Input
                                    className='outline-none bg-[#F7F6F6] dark:bg-darkRed md:text-base text-xl lg:text-2xl rounded-lg py-4 lg:py-[1.125rem] lg:pl-[4.5rem] pl-14 md:pl-[3.75rem] w-full dark:text-textLight shadow-2xl'
                                    displayValue={(item) => item}
                                    onChange={(event) => setQuery(event.target.value)}
                                    onKeyDown={(e) => {
                                        e.preventDefault;

                                        if (e.key === 'Enter') {
                                            router.push(`/search/${selectedMeal}`);
                                            setSearchbar(false);
                                        }
                                    }}
                                    placeholder='Search for a meal'
                                />

                                <Transition
                                    as={Fragment}// group multiple elements without introducing an additional DOM node i.e., <></>
                                    leave='transition ease-in duration-100'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                    afterLeave={() => setQuery("")} //reset the search query after the transition completed
                                >
                                    <Combobox.Options
                                        className='absolute z-[3] mt-5 w-full max-h-80 overflow-auto rounded-md bg-[#F7F6F6] dark:bg-darkRed py-1 font-poppins text-base dark:text-textLight shadow-lg ring-1 ring-slate-100 focus:outline-none sm:text-sm'
                                        static
                                    >
                                        {filteredMeals.length === 0 && query !== "" ? (
                                            <Combobox.Option
                                                value={query}
                                                className='pl-8 pr-4 py-2 cursor-default select-none'
                                            >
                                                Create "{query}"
                                            </Combobox.Option>
                                        ) : (
                                            filteredMeals.map((item) => (
                                                <Combobox.Option
                                                    key={item}
                                                    className={({ active }) => `relative pl-8 py-2 pr-4 cursor-default select-none ${active ? 'dark:bg-slate-100 bg-darkRed text-textLight dark:text-darkRed' : 'dark:text-textLight'}`}
                                                    value={item}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                {item}
                                                            </span>

                                                            {/* Show an active slate background color if the option is selected */}
                                                            {selected ? (
                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-white bg-slate-400"}`}
                                                                ></span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    </div>
                </Filter>
            }
        </>
    )
}

export default SearchBar