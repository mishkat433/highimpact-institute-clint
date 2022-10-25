import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../Contex/Contex';
import logo from "../../Image/logo.png";
import notFound from "../../Image/notFoundImage.png";
const Navbar = () => {
    const { loginUser, logOut } = useContext(AuthContex)
    console.log(loginUser);
    return (
        <div className=' bg-base-200' >
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Home</NavLink></li>
                            <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Cources</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>FAQ</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className=" flex gap-3 items-center">
                        <img className='w-16' src={logo} alt="" />
                        <p className='text-3xl font-semibold'>Highimpact Institute</p>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/home" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold mx-1" : undefined}>Home</NavLink></li>
                        <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold mx-1" : undefined}>Cources</NavLink></li>
                        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold mx-1" : undefined}>FAQ</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-cyan-700 font-semibold mx-1" : undefined}>Blog</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        loginUser?.uid ?
                            <div className="dropdown dropdown-hover dropdown-left">
                                <div >
                                    <label tabIndex={0} className=" flex items-center gap-3">
                                        <img className='w-10 rounded-full' src={loginUser?.photoURL ? loginUser?.photoURL : notFound} alt="User" />
                                        {/* <FaAngleDown /> */}
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li className='text-lg font-semibold'> {loginUser?.displayName}</li>
                                        <li> {loginUser?.email}</li>
                                        <li><button onClick={logOut}>Log Out</button> </li>

                                    </ul>
                                </div>
                            </div>
                            : <div className='flex gap-5'>
                                <NavLink className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined} to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-cyan-700 font-semibold" : undefined} to="/register">Register</NavLink>
                            </div>
                    }
                    <label className="swap swap-rotate ml-4">

                        <input type="checkbox" />

                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div >
        </div>
    );
};

export default Navbar;