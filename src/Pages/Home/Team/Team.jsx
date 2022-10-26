import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css"
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';


const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/team")
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerPadding: "60px",
                    dots: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "1px",
                    nextArrow: null,
                    prevArrow: null,
                }
            }
        ]
    };


    console.log(team);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className='my-20 w-11/12 mx-auto '>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold mb-5'>Meet Our Teem's</h1>
                <p className='text-lg '>There are a wide range of different categories of article, broken down into subject matter and format.</p>
            </div>
            <div>
                <Slider {...settings} className="mt-10 py-5">
                    {
                        team.map(tem => <div key={tem.id} className="card card-compact w-32 shadow-xl bg-gradient-to-br from-cyan-100 to-blue-200">
                            <figure><img className=' h-[200px] mt-2' src={tem?.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className=" text-center font-semibold text-2xl uppercase">{tem.name}</h2>
                                <p className='text-center'>{tem.title}</p>
                            </div>
                            <div className='flex justify-evenly mb-5 text-2xl '>
                                <button><FaFacebook className='text-primary hover:scale-110 duration-400' /></button>
                                <button><FaGithub className='hover:scale-110 duration-500' /></button>
                                <button><FaInstagram className='text-orange-600 hover:scale-110 duration-500' /></button>
                                <button><FaTwitter className='text-cyan-400 hover:scale-110 duration-500' /></button>
                            </div>
                        </div>)
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Team;