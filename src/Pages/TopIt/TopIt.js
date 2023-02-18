import React from 'react';
import { Link } from 'react-router-dom';

const TopIt = () => {
    return (
        <div className="p-6 py-12 bg-indigo-100">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Top It Companies

                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>We help companies
                            to find talents</span>

                    </div>
                    <Link to={'/itDetails'} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TopIt;