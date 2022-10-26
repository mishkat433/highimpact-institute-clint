import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';

const CourceLayout = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-100 to-blue-200'>
            <Navbar />
            <div className='flex flex-col lg:flex-row w-11/12 mx-auto gap-10 '>
                <div className='w-full lg:w-1/5 bg-blue-500 lg:h-screen lg:sticky top-0'>
                    <Sidebar />
                </div>
                <div className='w-full lg:w-4/5'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourceLayout;