import React from 'react';
import Category from '../Category/Category';
import ExploreCourse from '../ExploreCourse/ExploreCourse';
import HomeHeader from '../HomeHeader/HomeHeader';

const MainHome = () => {
    return (
        <div className=' '>
            <HomeHeader />
            <Category />
            <ExploreCourse />
        </div>
    );
};

export default MainHome;