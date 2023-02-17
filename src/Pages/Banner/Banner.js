import React from 'react';
import bannerImg from '../../Assets/img/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <img src={bannerImg} className=" rounded-lg w-1/2" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your Dream Job is Waiting!</h1>
                    <p className="py-6">Searching for a job ?  Find the best Startup job that fit you</p>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;