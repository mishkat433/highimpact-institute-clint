import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Authentication from '../../Authentication/Authentication';
import Swal from 'sweetalert2';


const Register = () => {

    const { googleSigninHandle, githubSignInHandle, createUser, updateuser, emailVerify } = Authentication();
    const [formData, setFormData] = useState({});
    const { email, password, confirm, name, photo } = formData;
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleLoginHandle = () => {
        googleSigninHandle()
            .then(result => {
                setError("")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }
    const githubLoginHandle = () => {
        githubSignInHandle()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const registerHandle = (e) => {
        if (password === confirm) {
            setError("")
            createUser(email, password, name, photo)
                .then(result => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'successfully login',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    updateuser(name, photo);
                    emailVerify();
                    setError('')
                    navigate(from, { replace: true })
                })
                .catch(err => {
                    setError(err.message)
                })
        }
        else {
            setError("Password didn't match")
        }
        e.preventDefault()
    }

    const formHandle = (ev) => {
        let isValid = true
        if (ev.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(ev.target.value)
            setError("")
        }
        else {
            setError("enter valid email")
        }
        if (ev.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(ev.target.value)
            setError("")
        }
        else {
            setError("password must be uppercase, lowercase, number")
        }
        if (ev.target.name === "confirm") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(ev.target.value);
            setError('')
        }
        else {
            setError("password must be uppercase, lowercase, number")
        }

        if (isValid) {
            const valid = { ...formData }
            valid[ev.target.name] = ev.target.value;
            setFormData(valid)
        }
    }

    return (
        <div className="hero h-full h-screen bg-transparent bg-gradient-to-b from-blue-200 to-cyan-200 py-5" >
            <div>
                <h1 className="text-3xl my-2 font-bold text-gray-500">Register now!</h1>
                {error && <h1 className='text-red-500 mt-10 text-center'>{error}</h1>}
                <div className="card w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={registerHandle} className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name*</span>
                            </label>
                            <input onChange={formHandle} name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input onChange={formHandle} name="photo" type="text" placeholder="upload your photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input onChange={formHandle} name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">password*</span>
                            </label>
                            <input onChange={formHandle} name="password" type="password" placeholder="A12345b" className="input input-bordered" required />
                            <p className='text-green-600'>must be use uppercase, lowercase, number</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm*</span>
                            </label>
                            <input onChange={formHandle} name="confirm" type="password" placeholder="A12345b" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className=" link link-hover">already have an account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-warning">Register</button>
                        </div>
                    </form>
                    <div className='flex justify-evenly items-center mb-3 text-3xl'>
                        <button className='text-cyan-500' onClick={googleLoginHandle}><FaGoogle /></button>
                        <button className='' onClick={githubLoginHandle}><FaGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;