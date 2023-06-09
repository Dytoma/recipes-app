'use client'

import React from 'react';
import Meal from './Meal';
import Spinner from './Spinner';

import useSWR from 'swr';


const fetcher = (...args) => fetch(...args).then(res => res.json());

const Meals = async ({ categoryName }) => {

    const { data, isLoading, error } = useSWR(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`, fetcher);

    const results = await data?.meals;

    console.log(results);

    if (error) {
        return (
            <div>
                <h3 className='my-10 header_3 text-red-600'>Failed to load</h3>
            </div>
        )
    }

    if (isLoading) <Spinner />

    return (
        <div className='mb-10 md:mb-16 lg:mb-20'>
            <h2>It's working</h2>
            <div className='grid_layout'>
                {results?.map((meal, id) =>
                (
                    <div key={id}>
                        <Meal meal={meal} />
                    </div>
                )
                )}
            </div>


        </div>
    )
}

export default Meals