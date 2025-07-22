import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/about/HeroSection';
import Hero from '../components/about/Hero';
import SectionTwo from '../components/about/SectionTwo';
import SectionThree from '../components/about/SectionThree';
import SectionFour from '../components/about/SectionFour';

const History = () => {
  return (
    <>
      <Helmet>
        <title>Manfredomus | Sustainable Eco Lodge in Central Sicily</title>
        <meta
          name="keywords"
          content="sustainable accommodation Sicily, eco retreat with castle views, green tourism Italy, eco lodge central Sicily, luxury green stay Italy, eco homestay near medieval castle, eco-friendly travel Sicily, Sicily countryside lodging, nature retreat Italy, sustainable tourism Sicily"
        />
        <meta
          name="description"
          content="Discover Manfredomus – a sustainable eco lodge in the heart of Sicily offering castle views, luxury green stays, and immersive local experiences focused on mindful and eco-conscious travel."
        />
      </Helmet>

      <Hero />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

export default History;
