"use client"

import React from 'react';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import { createContext, useState, useEffect } from 'react';

//react context api to share states between components
export const AppContext = createContext(null);

const AppLayout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [savedMeals, setSavedMeals] = useState([]);
    const value = { darkMode, setDarkMode, savedMeals, setSavedMeals }

    //when the page load check if the user's system theme preference is set to dark. If so switch to dark mode. In the other case allow the user to set the dark mode manually.
    useEffect(() => {
        const userTheme = localStorage.getItem('theme-recipe');
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (userTheme === 'dark' || (!userTheme && systemTheme)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
            document.body.classList.add('scrollbar');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('scrollbar');
        }
    }, [])

    return (
        <AppContext.Provider value={value}>
            <body>
                <div className='background fixed -z-[1] h-screen inset-0' />
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </AppContext.Provider>
    )
}

export default AppLayout