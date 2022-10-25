import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError()
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-3xl mt-5'>Opps! an error occurred</h1>
                {
                    error && <div className='text-red-500'>
                        <p className='mt-5 text-3xl'>{error.status} error</p>
                        <p className='mt-5 text-3xl'>{error.statusText || error.message}</p>
                    </div>
                }
                <Link to="/" className='btn btn-warning mt-5'>go to home</Link>
            </div>
        </div>
    );
};

export default NotFound;