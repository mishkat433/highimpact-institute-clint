import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Details = () => {
    const singleCourse = useLoaderData();
    const { title, details, image, price, duration, purchase, totalClass, id, facilities, use, time } = singleCourse;
    console.log(singleCourse);
    return (
        <div className='my-10 select-none'>
            <h1 className='text-center text-4xl mb-5'>Detalis</h1>
            <div className="card  bg-base-100 shadow-xl bg-gradient-to-t from-cyan-100 to-blue-300" ref={ref}>
                <h2 className="card-title text-3xl my-5 ml-8">{title}</h2>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <p className='text-gray-700'>{details}</p>
                    <div className="flex justify-between items-center text-xl mt-5 text-lime-700">
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
                        <ul className='flex flex-col  gap-y-3 mt-2 flex-wrap gap-3 px-4 text-xl'>
                            {
                                use.map(us => <li className='list-decimal pl-2'>{us}</li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <button className=''>
                            <Pdf targetRef={ref} filename={`${title}.pdf`}>
                                {({ toPdf }) => <button onClick={toPdf} className="btn btn-success px-20 gap-5">Download</button>}
                            </Pdf>
                        </button>
                        <Link to={`/cources/details/${id}`} className='btn btn-primary px-20'>Purchase <FaShoppingBag className='ml-5' /> </Link>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Details;