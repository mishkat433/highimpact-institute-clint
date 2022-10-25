import React from 'react';

const ExploreCourse = () => {
    return (
        <div className='my-20 w-11/12 mx-auto '>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold mb-5'>Explore Our Courses</h1>
                <p className='text-lg '>There are a wide range of different categories of article, broken down into subject matter and format.</p>
            </div>
            <div className='flex gap-5 mt-10'>
                {/* {
                    categories.map(category => <CategoryCart category={category} key={category.id} />)
                } */}
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn btn-primary rounded-full'>wiew all</button>
            </div>
        </div>
    );
};

export default ExploreCourse;