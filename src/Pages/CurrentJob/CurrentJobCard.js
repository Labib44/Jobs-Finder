import React from 'react';

const CurrentJobCard = ({card}) => {
    const {id, icon, taitle, posted}=card;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{taitle}</h2>
                <p>Live Jobs {posted}</p>
                
            </div>
        </div>
    );
};

export default CurrentJobCard;