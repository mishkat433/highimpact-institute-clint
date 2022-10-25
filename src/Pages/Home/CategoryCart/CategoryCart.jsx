import React from 'react';

const CategoryCart = ({ category }) => {
    const { img, title, body } = category
    return (
        <div className="card w-96 bg-base-100 shadow-xl cursor-pointer bg-gradient-to-tl from-cyan-100 to-blue-200">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{body.slice(0, 80)}.</p>
            </div>
        </div>
    );
};

export default CategoryCart;