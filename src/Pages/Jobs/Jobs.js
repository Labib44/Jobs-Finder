import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
            <div className="card w-full  from-cyan-500 to-teal-600 bg-gradient-to-l hover:bg-gradient-to-r text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Fresher Jobs!</h2>
                    <p>Browse From Fresher jobs</p>
                    <div className="card-actions justify-end">
                        <Link to={'/FresherDetails'} className="btn btn-ghost">See All</Link>
                    </div>
                </div>
            </div>
            <div className="card w-full  from-cyan-500 to-teal-600 bg-gradient-to-l hover:bg-gradient-to-r text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Experienced Jobs!</h2>
                    <p>Browse From Experienced jobs</p>
                    <div className="card-actions justify-end">
                        <Link to={'/ExperienceDetails'} className="btn btn-ghost">See All</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;