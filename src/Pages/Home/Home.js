import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import CurrentJob from '../CurrentJob/CurrentJob';
import Jobs from '../Jobs/Jobs';
import TopIt from '../TopIt/TopIt';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <CurrentJob></CurrentJob>
            <Jobs></Jobs>
            <TopIt></TopIt>
            <Contact></Contact>
        </div>
    );
};

export default Home;