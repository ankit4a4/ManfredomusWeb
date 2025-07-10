import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import imageMain from '../../assets/home/img1.jpg';
import imageFamily from '../../assets/home/img2.jpg';
import imageNature from '../../assets/home/img3.jpg';

const HistorySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-white py-4 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Text Content */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-[#597429] mb-6">
            <i>A residence full of history, today totally eco-friendly</i>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">Immersed in the vibrant heart of the Sicilian hinterland and a short distance from the historic walls of the <b >majestic</b>  Castello Manfredonico , our accommodation facility was born from a family dream. Generations of farmers have cultivated these lands, and right here in the 60s, our parents built the house that would welcome our family.

          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Today that place of our childhood has become a welcoming oasis for <b>travelers</b> and <b>tourists</b> seeking an authentic connection with  <b>nature </b> and <b>Sicilian history</b> . With respect for the past and an eye to the future, we have renovated our home in an <b>ecological</b> and <b>sustainable</b> way ,  <b>creating a technologically advanced environment with zero environmental impact </b>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We invite you to take refuge in the <b>tranquility</b> of our countryside, where we will welcome you with every <b>comfort</b> and the embrace of <b>nature</b> will envelop you with its genuine <b>warmth</b> . Every corner of our structure has been cared for in the smallest details, with the aim of offering you a unique stay experience, far from the usual tourist itineraries.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <b>Discover with us the hidden treasures of an authentic Sicily, still unexplored and full of charm.</b>
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            We look forward to seeing you.
            <br />
          </p>
        </div>

        {/* RIGHT - Image Stack */}
        <div className="grid gap-6" data-aos="fade-up">
          <img
            src={imageMain}
            alt="Main Residence"
            className="rounded-xl shadow-md w-full"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src={imageFamily}
              alt="Family History"
              className="rounded-xl shadow-md object-cover md:h-48 w-full"
            />
            <img
              src={imageNature}
              alt="Eco Garden"
              className="rounded-xl shadow-md object-cover h-[300px] md:h-48 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
