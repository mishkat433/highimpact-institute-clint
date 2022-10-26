import React from 'react';
import { Link } from 'react-router-dom';

const CourcesCart = ({ course }) => {
    const { title, details, image, price, duration, purchase, id } = course;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body bg-gradient-to-b from-cyan-100 to-blue-300">
                <h2 className="card-title text-3xl mb-5">{title}</h2>
                <p>{details.slice(0, 100)}...</p>
                <div className="flex justify-between items-center text-xl mt-5">
                    <h4>Price : {price} </h4>
                    <h4>Enrolled : {purchase}K </h4>
                    <h4>Duration : {duration} months </h4>
                </div>
                <div className='mt-5'>
                    <Link to={`/cources/details/${id}`} className='btn btn-primary w-full'>Details</Link>
                </div>
            </div>
        </div >
    );
};

export default CourcesCart;