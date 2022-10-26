import React from 'react';
import Category from '../Category/Category';
import HomeHeader from '../HomeHeader/HomeHeader';
import Team from '../Team/Team';

const MainHome = () => {
    return (
        <div className=' '>
            <HomeHeader />
            <Category />
            <Team />
        </div>
    );
};

export default MainHome;