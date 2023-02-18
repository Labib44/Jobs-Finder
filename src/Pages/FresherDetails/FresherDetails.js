import React, { useEffect, useState } from 'react';
import pro from '../../Assets/icon/pro-hero.jpg'
import tiger from '../../Assets/icon/tiger.jpg'
import brain from '../../Assets/icon/brain-station-23.png'
import microsoft from '../../Assets/icon/Microsoft.jpg'
import google from '../../Assets/icon/google.png'
import meta from '../../Assets/icon/meta.png'
import FresherDetailsCard from './FresherDetailsCard';

const FresherDetails = () => {
    // const [fresherDetailsData, setFresherDetailsData]=useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/fresher-jobs')
    //     .then(res=>res.json())
    //     .then(data=>setFresherDetailsData(data));
    // },[])


    const fresherDetailsData=[
        {
            id:1,
            logo:pro,
            companyName:'Programming Hero',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:2,
            logo:tiger,
            companyName:'Tiger Soft BD',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:3,
            logo:brain,
            companyName:'Brain Station 23',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:4,
            logo:microsoft,
            companyName:'Microsoft',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:5,
            logo:google,
            companyName:'Google',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:6,
            logo:meta,
            companyName:'Meta',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-5'>
            {
                fresherDetailsData.map(card=><FresherDetailsCard
                key={card.id}
                card={card}
                ></FresherDetailsCard>)
            }
        </div>
    );
};

export default FresherDetails;