import React from 'react';
import ItDetailsCard from './ItDetailsCard';
import dataSoft from '../../Assets/img/images.png'
import tiger from '../../Assets/img/tiger.png'
import brain from '../../Assets/icon/brain-station-23.png'

const ItDetails = () => {
    const DetailsData=[
        {
            id:1,
            logo:dataSoft,
            companyName:'Data Soft',
            description:'DataSoft has been a CMMI level 5, ISO 9001:2015 certified leading software product and services company in Bangladesh. Since 1998, DataSoft has successful track record of delivering innovative and cost-effective technical services to customers in both Corporate and public sectors undertakings',
            
        },
        {
            id:2,
            logo:tiger,
            companyName:'Tiger IT Bangladesh Ltd',
            description:'TigerIT builds on its experience and specialized skills to provide national scale IT solutions. It has deep insight in biometrics information involving large population. With dynamic partnerships, TigerIT provides turnkey solutions that are sustainable and meet international standards',
            
        },
        {
            id:3,
            logo:brain,
            companyName:'Brain Station 23',
            description:'It was in 2006, with little capital but a pocketful of belief our CEO, Raisul Kabir started Brain Station 23, a software company, right after graduating from BUET. The new company initially focused on the international market with the local market added in 2010. Since then the company has shown a continuous growth and currently employs over 700+ software engineers. Brain Station 23 is now not only an established name in Bangladesh but also in countries like the USA, UK, Netherlands, Denmark, Japan, Norway, Sweden, Germany, Canada, Switzerland, Turkey and the Middle East etc.',
            
        },
        
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
            {
                DetailsData.map(card=><ItDetailsCard
                key={card.id}
                card={card}
                ></ItDetailsCard>)
            }
        </div>
    );
};

export default ItDetails;