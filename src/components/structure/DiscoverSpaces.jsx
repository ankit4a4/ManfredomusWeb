'use client';

import React from 'react';
import img1 from "../../assets/structure/esterno (3).jpg"
import img2 from "../../assets/structure/U Manieru (2).jpg"
import img3 from "../../assets/structure/esterno (15).jpg"

const DiscoverSpaces = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F9F7F4] to-[#f0ede6] py-8 md:py-20 px-6 md:px-20 text-[#253745]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#597429] to-[#A5886E]">
            Discover our spaces
          </h2>
          <p className="text-xl md:text-2xl text-[#597429] font-medium max-w-2xl mx-auto">
            And get ready for an unforgettable stay
          </p>
        </div>

        <div className="space-y-10 md:space-y-24">
          {/* Block 1 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src={img1}
                alt="Mediterranean Landscape"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <span className="inline-block mb-3 text-lg font-semibold text-[#A5886E] border-b-2 border-[#A5886E] pb-1">
                Manfredomus
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                is our green tourism destination — a refuge of modern design and unparalleled comfort, surrounded by a typically Mediterranean landscape, with olive trees and prickly pears that stand out against the sky. Palm trees add a touch of elegance, while aromatic herbs such as rosemary and lavender enrich the air with their fragrances.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="md:order-2 relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src={img2}
                alt="Eco Rooms"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="md:order-1">
              <span className="inline-block mb-3 text-lg font-semibold text-[#597429] border-b-2 border-[#597429] pb-1">
                Eco Rooms
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                Our 7 spacious and welcoming rooms are the result of meticulous attention to detail and a love for eco-friendly materials. Here, wood and iron, expertly crafted by local artisans, blend together to create a unique and sophisticated style. Each room is modular in terms of the type and number of beds and can therefore be adapted to any type of living requirement.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="group grid md:grid-cols-2 gap-14 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-xl">
              <img
                src={img3}
                alt="Rural Civilization"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <span className="inline-block mb-3 text-lg font-semibold text-[#253745] border-b-2 border-[#253745] pb-1">
                Luxury Green Stay Near the Medieval Castle in Italy
              </span>
              <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#253745]/90">
                Luxury Green Stay Near the Medieval Castle in Italy
                The homestay’s proximity to a picturesque fortress makes Manfredomus a standout destination for anyone looking for a luxury green stay near the medieval castle in Italy. Imagine waking up to breathtaking views of rolling hills crowned by centuries-old stonework, then enjoying your morning coffee on a sun-drenched terrace surrounded by olive groves.
                As a luxury green stay near the medieval castle in Italy, Manfredomus combines elegance with environmental responsibility. Solar panels, rainwater harvesting systems, and organic landscaping are just a few of the initiatives that make it a leader in sustainable hospitality. Every stay here is an opportunity to enjoy Italy’s natural beauty without compromising the planet.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSpaces;