import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import HistorySection from '../components/home/HistorySection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EveryComfort from '../components/home/EveryComfort';
import NearbyAttractions from '../components/home/NearbyAttractions';
import UnmissableEvents from '../components/home/UnmissableEvents';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>  Manfredomus | Eco Homestay with Castle View in Sicily </title>
                <meta
                    name="description"
                    content="Manfredomus is an eco-homestay in Sicily offering castle views, sustainable architecture, organic food, and an unforgettable countryside retreat."
                />
                <meta
                    name="keywords"
                    content="eco homestay with view of castle in Italy, Sicily eco retreat, sustainable accommodation Sicily, green tourism Italy, castle view lodging, organic garden homestay, eco travel Sicily, mindful travel Italy, scenic eco retreat, romantic eco getaway"
                />
                <link rel="canonical" href="https://yourdomain.com/" />
            </Helmet>

            <HeroSection />
            <HistorySection />
            <WhyChooseUs />
            <EveryComfort />
            <NearbyAttractions />
            <UnmissableEvents />
        </>
    );
};

export default Home;
