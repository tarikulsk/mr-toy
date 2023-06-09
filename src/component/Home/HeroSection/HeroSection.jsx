// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://m.media-amazon.com/images/I/71DeOZMtG+L._SL1280_.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Kiddy</h1>
                    <p className="mb-5">We  want are Here for Your Kiddy Toys, If You Want .</p>

                    <Link to={'/alltoys'} className="btn bg-red-500 border-none">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;