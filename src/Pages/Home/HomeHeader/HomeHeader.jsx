import React from 'react';
import headerImg from "../../../Image/headerimg.png";

const HomeHeader = () => {
    return (
        <div className='w-11/12 mx-auto pt-5'>
            <div className='flex justify-between items-center gap-20'>
                <div className='w-3/5'>
                    <h1 className='text-5xl mb-5 font-bold'>The Best Online Programming Course You'll Find</h1>
                    <p className='text-lg'>A growing number of students are now opting for online classes. They find the traditional classroom modality restrictive, inflexible, and impractical.</p>
                    <div className='flex gap-5 mt-5'>
                        <button className='btn btn-primary rounded-full px-7'>Get Start</button>
                        <button className='btn btn-outline rounded-full'>Watch video</button>
                    </div>
                </div>
                <div className='w-2/5'>
                    <img className='w-full h-[700px]' src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;