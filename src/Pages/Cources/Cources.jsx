import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourcesCart from './CourcesCart/CourcesCart';

const Cources = () => {
    const cources = useLoaderData();
    return (
        <div className='my-10'>
            <h1 className='mb-10 text-4xl text-center font-bold underline text-orange-500'>Our cources</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8  '>
                {
                    cources.map(curs => <CourcesCart course={curs} key={curs.id} ></CourcesCart>)
                }
            </div>
        </div>
    );
};

export default Cources;