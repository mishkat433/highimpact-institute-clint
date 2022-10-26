import React, { useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState([]);
    //useEffect(() => {
    //     fetch("http://localhost:5000/team")
    //         .then(res => res.json())
    //         .then(data => setTeam(data))
    // }, [])
    return (
        <div className='my-20 w-11/12 mx-auto '>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold mb-5'>Meet Our Teem's</h1>
                <p className='text-lg '>There are a wide range of different categories of article, broken down into subject matter and format.</p>
            </div>
            <div className='flex gap-5 mt-10'>

            </div>
        </div>
    );
};

export default Team;