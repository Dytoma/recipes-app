'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className='flex_center flex-col mb-[400px] md:mb-[700px] lg:mb-[500px]'>
            <div className='my-10 md:my-14 lg:my-20'>
                <h2 className='header_3'>Something went wrong!</h2>
            </div>
            <button
                className='text-xl text-textLight bg-textColor dark:bg-slate-100 dark:text-textColor hover:bg-textLight hover:text-textColor hover:border-2 hover:border-textColor dark:hover:bg-textColor dark:hover:text-slate-100 dark:hover:border-2 dark:hover:border-slate-100 smooth_transition font-barlow font-semibold tracking-wider py-2 px-3 rounded btn_gradient smooth_transition hover:opacity-40'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}