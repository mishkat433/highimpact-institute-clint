import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Contex/Contex';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { loginUser } = useContext(AuthContex);
    const [chose, setChose] = useState(null)
    const [checkOut, setCheckout] = useState({ name: loginUser.displayName, email: loginUser.email })

    const navigate = useNavigate()

    const checkoutHandle = (e) => {
        e.target.reset();
        setCheckout({});
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Enroll successfull',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.setItem("courseId", null)
        navigate("/cources")

        e.preventDefault();
    }

    const fornDataHandle = (e) => {
        const data = { ...checkOut }
        data[e.target.name] = e.target.value;
        setCheckout(data)
    }

    const courseId = parseInt(localStorage.getItem("courseId"))

    useEffect(() => {
        fetch("https://high-impact-institute-server.vercel.app/cources")
            .then(res => res.json())
            .then(data => {
                const choseCourse = data.find(dt => dt.id === courseId)
                setChose(choseCourse);
            })
    }, [courseId])
    return (
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-10 justify-around mt-10 pb-10'>
            <div className='w-full'>
                <div className="hero lg:w-4/5 mx-auto">

                    <form onSubmit={checkoutHandle} className="card w-full shadow-2xl bg-base-100 ">
                        <div className='flex mx-10 justify-between mt-5 text-xl'>
                            <h1>Course Id : {chose?.id}</h1>
                            <h1>Course Name : {chose?.title} </h1>
                        </div>
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' value={loginUser?.displayName} placeholder="full name" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input value={loginUser.email} type="email" name='email' placeholder="email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address : </span>
                                </label>
                                <input onChange={fornDataHandle} type="text" name='address' placeholder="address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact : </span>
                                </label>
                                <input onChange={fornDataHandle} type="number" name='phone' placeholder="+880" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Comfirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default CheckOut;