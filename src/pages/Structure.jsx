import React from 'react';
import { Helmet } from 'react-helmet';
import StructureHero from '../components/structure/StructureHero';
import StructureSlider from '../components/structure/StructureSlider';
import DiscoverSpaces from '../components/structure/DiscoverSpaces';
import RoomExperienceSection from '../components/structure/RoomExperienceSection';

const Structure = () => {
    return (
        <>
            <Helmet>
                <title> Manfredomus | Luxury Green Stay Near Medieval Castle in Italy</title>
                <meta
                    name="keywords"
                    content="luxury green stay Italy, eco-friendly homestay Italy, castle view accommodation, medieval castle stay Sicily, sustainable lodge Italy, eco retreat with castle views, green homestay Sicily, Manfredomus eco lodging"
                />
                <meta
                    name="description"
                    content="Experience a luxury green stay near a medieval castle at Manfredomus in Sicily. Enjoy eco-friendly elegance, castle views, and a commitment to sustainable hospitality in the heart of Italy."
                />
            </Helmet>

            <StructureHero />
            <DiscoverSpaces />
            <StructureSlider />
            <RoomExperienceSection />
        </>
    );
};

export default Structure;
