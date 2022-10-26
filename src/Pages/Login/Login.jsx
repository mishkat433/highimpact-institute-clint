import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; import { FaGoogle, FaGithub } from "react-icons/fa";
import Authentication from '../../Authentication/Authentication';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleSigninHandle, githubSignInHandle, userLogin, resetHandle } = Authentication();
    const [formData, setFormData] = useState({})
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const loginHandle = (e) => {
        if (formData?.email && formData?.password) {
            userLogin(formData?.email, formData?.password)
                .then(result => {
                    if (result.user) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully login',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    }
                    setError('')
                })
                .catch(err => {
                    setError(err.message)
                })
        }
        else { setError("email or password are not valid") }
        e.preventDefault()
    }

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

    const forgetPassword = () => {
        resetHandle(formData.email)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Please check your email',
                    showConfirmButton: false,
                    timer: 1500
                })
                setError("")
            })
            .catch(err => setError(err.message))
    }

    const formHandle = (ev) => {
        let isValid = false
        if (ev.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(ev.target.value)
        }
        if (ev.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(ev.target.value)
        }
        if (isValid) {
            const valid = { ...formData }
            valid[ev.target.name] = ev.target.value;
            setFormData(valid)
        }
    }

    return (
        <div className="hero h-screen bg-transparent bg-gradient-to-b from-blue-200 to-cyan-200 ">
            <div>
                <h1 className="text-3xl my-2 font-bold text-gray-500">Login now!</h1>
                {error && <h1 className='text-red-500 text-center'>{error}</h1>}
                <div className="card  w-full lg:w-96 max-w-sm shadow-2xl bg-base-100 py-2">
                    <form onSubmit={loginHandle} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={formHandle} name="email" type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input onChange={formHandle} name="password" type="password" placeholder="password" className="input input-bordered" />
                            <p className='text-green-600 mb-2'>must be use uppercase, lowercase, number</p>
                            <label >
                                Don't have an account?<Link to="/register" className="text-md link link-hover"> Please register</Link>
                            </label>
                            <label className="label">
                                <p className="label-text-alt link-hover underline" onClick={forgetPassword}>Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-warning">Login</button>
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

export default Login;