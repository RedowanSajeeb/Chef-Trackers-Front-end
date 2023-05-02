import React from 'react';
import Bannar from '../../pages/Bannar';
import OurStory from '../../pages/OurStory';
import Chef from './ChefSection/Chef';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Chef></Chef>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;