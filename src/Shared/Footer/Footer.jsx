import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Image/logo.png";

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-100 to-blue-200 '>
            <div className='w-11/12 mx-auto py-10 ' >
                <div className='flex'>
                    <div className='w-full lg:w-4/5 flex lg:block justify-center'>
                        <img className='w-20 mb-5' src={logo} alt="logo" />
                    </div>
                    <h1 className='text-4xl  w-2/5  font-crimos hidden lg:block'>Get our news first</h1>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 text-center md:justify-between gap-6'>
                    <div >
                        <p >cell : <span className='text-gray-500'>+8801521xxxxxx</span></p>
                        <p>Email : <span className='text-gray-500'>mishkat433@gmail.com</span></p>
                        <p className='md:mt-5'>Address : Pekua, Cox's Bazar, Chittagong, Bangladesh, Earth.</p>
                    </div>
                    <ul className=' flex flex-col gap-y-3 items-center cursor-pointer'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cources">Cources</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    <div className="form-control">
                        <p className='block md:hidden'>Subscribe : </p>
                        <label className="input-group ">
                            <input type="emal" placeholder="example@gmail.com" className="input lg:w-3/5 w-full text-black input-bordered" required />
                            <button type='submit' className='btn btn-warning  w-16 lg:w-20'>Send</button>
                        </label>
                    </div>
                </div>
                <hr className='border-1 mt-10 border-gray-500' />
                <h4 className='text-center mt-5 text-gray-500'>Developed by Mishk@t - {new Date().getFullYear()}</h4>
            </div>

        </div>
    );
};

export default Footer;