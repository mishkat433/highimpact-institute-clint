import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleCourse = useLoaderData();
    const { title, details, image, price, duration, purchase, totalClass, id } = singleCourse;
    console.log(singleCourse);
    return (
        <div className='my-10 select-none'>
            <h1 className='text-center text-4xl mb-5'>Detalis</h1>
            <div className="card  bg-base-100 shadow-xl bg-gradient-to-t from-cyan-100 to-blue-300">
                <h2 className="card-title text-3xl my-5 ml-8">{title}</h2>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body ">

                    <p className='text-gray-700'>{details}</p>
                    <div className="flex justify-between items-center text-xl mt-5 text-lime-700">
                        <h4>Price : {price} </h4>
                        <h4>Enrolled : {purchase}K </h4>
                        <h4>Total Class : {totalClass} </h4>
                        <h4>Duration : {duration} months </h4>

                    </div>
                    <div className='mt-5'>
                        <Link to={`/cources/details/${id}`} className='btn btn-primary w-full'>Details</Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Details;