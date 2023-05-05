import React from 'react';
import OurStory from '../../pages/OurStory';

import SlidBannar from '../../pages/SlidBannar/SlidBannar';
import ClientMan from '../../pages/ClientsSay/ClientMan';
import Booking from '../../pages/Booking/Booking';
import Chef from '../ChefSection/Chef';



const Home = () => {
    return (
        <div>
            <SlidBannar></SlidBannar>
            <Chef></Chef>
            <OurStory></OurStory>
            <ClientMan></ClientMan>
            <Booking></Booking>
        </div>
    );
};

export default Home;