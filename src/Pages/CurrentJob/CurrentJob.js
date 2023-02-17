import React from 'react';
import php from '../../Assets/icon/icons8-php-logo-64.png'
import webDesigner from '../../Assets/icon/icons8-web-design-64.png'
import webDevelopment from '../../Assets/icon/icons8-web-development-64.png'
import edu from '../../Assets/icon/edu.png'
import project from '../../Assets/icon/icons8-project-management-100.png'
import sales from '../../Assets/icon/marketing.png'
import software from '../../Assets/icon/software.png'
import social from '../../Assets/icon/twitter.png'
import CurrentJobCard from './CurrentJobCard';

const CurrentJob = () => {
    const currentJobData=[
        {
            id:1,
            icon:php,
            posted:1284,
            taitle:'Web Development'
        },
        {
            id:2,
            icon:webDesigner,
            posted:2284,
            taitle:'Graphic Designer '
        },
        {
            id:3,
            icon:webDevelopment,
            posted:245,
            taitle:'Web Designer'
        },
        {
            id:4,
            icon:edu,
            posted:3245,
            taitle:'Education & Training'
        },
        {
            id:5,
            icon:project,
            posted:245,
            taitle:'Project Management'
        },
        {
            id:6,
            icon:sales,
            posted:245,
            taitle:'Marketing & Sales'
        },
        {
            id:7,
            icon:software,
            posted:245,
            taitle:'Software Development'
        },
        {
            id:8,
            icon:social,
            posted:245,
            taitle:'Social Media'
        },
    ]
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5'>
            {
                currentJobData.map(card=><CurrentJobCard
                key={card.id}
                card={card}
                ></CurrentJobCard>)
            }
        </div>
    );
};

export default CurrentJob;