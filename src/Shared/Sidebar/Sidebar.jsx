import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cources, setCources] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cources")
            .then(res => res.json())
            .then(data => setCources(data))
    }, [])
    return (
        <div>
            {
                cources.map(course =>
                    <div key={course.id}>
                        <ul className=" pl-10 text-gray-200 text-xl font-semibold">
                            <li className='mb-3 my-5 hover:text-black'><Link to={`/cources/details/${cources.id}`}>{course.title}</Link> </li>
                        </ul>
                        <hr className='' />
                    </div>
                )
            }
        </div>
    );
};

export default Sidebar;