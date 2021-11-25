import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ApointmentBanner></ApointmentBanner>
        </div>
    );
};

export default Home;