import React, { useEffect, useState } from 'react';
import CategoryCart from '../CategoryCart/CategoryCart';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://high-impact-institute-server.vercel.app/category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-20 w-11/12 mx-auto '>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-semibold mb-5'>Browse By Category</h1>
                <p className='text-lg '>There are a wide range of different categories of article, broken down into subject matter and format.</p>
            </div>
            {
                categories.length === 0 && <button className="btn loading">loading</button>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    categories.map(category => <CategoryCart category={category} key={category.id} />)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn btn-primary rounded-full'>wiew all</button>
            </div>
        </div>
    );
};

export default Category;