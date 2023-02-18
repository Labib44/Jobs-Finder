import React from 'react';
import ExperienceDetailsCard from './ExperienceDetailsCard';
import pro from '../../Assets/icon/pro-hero.jpg'
import tiger from '../../Assets/icon/tiger.jpg'
import brain from '../../Assets/icon/brain-station-23.png'
import microsoft from '../../Assets/icon/Microsoft.jpg'
import google from '../../Assets/icon/google.png'
import meta from '../../Assets/icon/meta.png'


const ExperienceDetails = () => {
    const experienceDetailsData=[
        {
            id:1,
            logo:pro,
            experience:'At lest 2 years',
            companyName:'Programming Hero',
            positionName:'Senior web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:2,
            logo:tiger,
            experience:'At lest 1 years',
            companyName:'Tiger Soft BD',
            positionName:'Senior front End Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:3,
            logo:brain,
            experience:'At lest 4 years',
            companyName:'Brain Station 23',
            positionName:'Marketing & Sales',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:4,
            logo:microsoft,
            experience:'At lest 8 years',
            companyName:'Microsoft',
            positionName:'Web Developer',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:5,
            logo:google,
            experience:'At lest 12 years',
            companyName:'Google',
            positionName:'Project Management',
            jobLocation:'Dhaka,Bangladesh'
        },
        {
            id:6,
            logo:meta,
            experience:'At lest 3 years',
            companyName:'Meta',
            positionName:'Web Designer',
            jobLocation:'Dhaka,Bangladesh'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-5'>
            {
                experienceDetailsData.map(card=><ExperienceDetailsCard
                key={card.id}
                card={card}
                ></ExperienceDetailsCard>)
            }
        </div>
    );
};

export default ExperienceDetails;