import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourcesCart from './CourcesCart/CourcesCart';

const Cources = () => {
    const cources = useLoaderData();
    return (
        <div className='my-10'>
            <h1 className='mb-10 text-4xl text-center font-bold underline text-cyan-600'>Our Cources</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8  '>
                {
                    cources.length === 0 && <button className="btn loading">loading</button>
                }
                {
                    cources.map(curs => <CourcesCart course={curs} key={curs.id} ></CourcesCart>)
                }
            </div>
        </div>
    );
};

export default Cources;