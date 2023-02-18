import React from 'react';

const ItDetailsCard = ({card}) => {
    const {id, logo, companyName, description}=card;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{companyName}!</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default ItDetailsCard;