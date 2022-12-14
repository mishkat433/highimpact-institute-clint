import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cources, setCources] = useState([])
    useEffect(() => {
        fetch("https://high-impact-institute-server.vercel.app/cources")
            .then(res => res.json())
            .then(data => setCources(data))
    }, [])
    return (
        <div className='select-none'>
            <p className='mb-3 my-5 text-center lg:text-left'>
                <Link to="/cources" className='pl-10 text-gray-200 text-xl font-semibold pt-5 hover:text-black'>All Cources</Link>
            </p>

            <hr />
            {
                cources.map(course =>
                    <div key={course.id}>
                        <ul className=" pl-10 text-gray-200 text-xl font-semibold text-center lg:text-left">

                            <li className='mb-3 my-5 hover:text-black'><Link to={`/cources/details/${course.id}`}>{course.title}</Link> </li>
                        </ul>
                        <hr />
                    </div>
                )
            }
        </div>
    );
};

export default Sidebar;