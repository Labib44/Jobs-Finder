import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceDetailsCard = ({ card }) => {
    const { id, logo, companyName, positionName, jobLocation, experience } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <div className="avatar">
                <div className="rounded-full w-40">
                    <img src={logo} alt='' />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{companyName}</h2>
                <p>{experience}</p>
                <p>Location: {jobLocation}</p>
                <p>Position: {positionName}</p>

            </div>
            <div className="card-actions justify-end">
                <Link className="btn btn-ghost">Apply</Link>
            </div>
        </div>
    );
};

export default ExperienceDetailsCard;