import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';

const CourceLayout = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-100 to-blue-200'>
            <Navbar />
            <div className='flex w-11/12 mx-auto gap-10 '>
                <div className='w-1/5 bg-blue-500 h-screen'>
                    <Sidebar />
                </div>
                <div className='w-4/5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default CourceLayout;