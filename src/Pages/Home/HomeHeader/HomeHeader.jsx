import React from 'react';
import headerImg from "../../../Image/headerimg.png";

const HomeHeader = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-100 to-blue-200'>
            <div className='flex justify-between items-center gap-20 w-11/12 mx-auto py-5'>
                <div className='w-3/5'>
                    <h1 className='text-5xl mb-10 font-bold'>The Best Online Programming Course You'll Find</h1>
                    <p className='text-lg w-4/5'>A growing number of students are now opting for online classes. They find the traditional classroom modality restrictive, inflexible, and impractical.</p>
                    <div className='flex gap-5 mt-10'>
                        <button className='btn btn-primary rounded-full px-7'>Get Start</button>
                        <button className='btn btn-outline rounded-full'>Watch video</button>
                    </div>
                    <div className='flex gap-5 mt-10 text-4xl '>
                        <h2 className='text-center bg-gray-50 w-40 h-28 py-4 rounded-xl'>1000 + <p className='text-lg'>Online course</p></h2>
                        <h2 className='text-center bg-gray-50 w-40 h-28 py-4 rounded-xl'>12k + <p className='text-lg'>Users</p></h2>
                    </div>
                </div>
                <div className='w-2/5'>
                    <img className='w-full h-[700px]' src={headerImg} alt="header" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;