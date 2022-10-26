import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
const ref = React.createRef();

const Details = () => {
    const singleCourse = useLoaderData();
    const { title, details, image, price, duration, purchase, totalClass, facilities, id, use, time } = singleCourse;

    const checkoutHandle = () => {
        localStorage.setItem("courseId", id)
    }

    return (
        <div className='my-10 select-none'>
            <h1 className='mb-10 text-4xl text-center font-bold underline text-cyan-600'>Details</h1>
            <div className="card  bg-base-100 shadow-xl bg-gradient-to-t from-cyan-100 to-blue-300" ref={ref}>
                <h2 className="card-title text-3xl my-5 ml-8">{title}</h2>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <p className='text-gray-700 text-justify'>{details}</p>
                    <div className="flex justify-between items-center flex-wrap text-xl mt-5 text-lime-700">
                        <h4>Price : {price} </h4>
                        <h4>Enrolled : {purchase}K </h4>
                        <h4>Total Time : {time}h </h4>
                        <h4>Total Class : {totalClass} </h4>
                        <h4>Duration : {duration} months </h4>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl font-semibold text-center underline'>Our Facilities</h1>
                        <ul className='flex flex-wrap justify-between mt-2 items-center text-lg'>
                            {
                                facilities.map(flts => <li> {flts} | </li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xl font-semibold text-center underline'>Why you learn {title}</h1>
                        <ul className='flex flex-col text-justify gap-y-3 mt-2 flex-wrap gap-3 px-4 text-xl'>
                            {
                                use.map(us => <li className='list-decimal pl-2'>{us}</li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <button className=''>
                            <Pdf targetRef={ref} filename={`${title}.pdf`}>
                                {({ toPdf }) => <button onClick={toPdf} className="btn btn-success md:px-20 gap-5 text-white">Download <FaDownload /> </button>}
                            </Pdf>
                        </button>
                        <Link to="/cources/checkout" onClick={checkoutHandle} className='btn btn-primary md:px-20'>Get Premium Access </Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Details;