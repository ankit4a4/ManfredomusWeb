


'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import img1 from "../../assets/structure/A sala di Baruna (3).jpg"
import img2 from "../../assets/structure/A sala di Baruna (4).jpg"
import img3 from "../../assets/structure/A sala di Baruna (5).jpg"
import img4 from "../../assets/structure/accessori (12).jpg"
import img5 from "../../assets/structure/accessori (3).jpg"
import img6 from "../../assets/structure/camera disabili (1).jpg"
import img7 from "../../assets/structure/camera disabili (2).jpg"
import img8 from "../../assets/structure/colazione (14).jpg"
import img9 from "../../assets/structure/colazione (23).jpg"
import img10 from "../../assets/structure/colazione (27).jpg"
import img11 from "../../assets/structure/colazione (31).jpg"
import img12 from "../../assets/structure/colazione (33).jpg"
import img13 from "../../assets/structure/Guiscardo (3).jpg"
import img14 from "../../assets/structure/reception (1).jpg"
import img15 from "../../assets/structure/scuderia (1).jpg"
import img16 from "../../assets/structure/scuderia (6).jpg"
import img17 from "../../assets/structure/soggiorno suite (3).jpg"
import img18 from "../../assets/structure/SUITE (9).jpg"
import img19 from "../../assets/structure/U Manieru (1).jpg"
import img20 from "../../assets/structure/U Manieru (4).jpg"
import img21 from "../../assets/structure/U Manieru (5).jpg"
import img22 from "../../assets/structure/A sala di Baruna (6).jpg"


const StructureSlider = () => {
  const slides = [
    {
      id: 1,
      image: img1
    },
    {
      id: 2,
      image: img2
    },
    {
      id: 3,
      image: img3
    },
    {
      id: 4,
      image: img4
    },
    {
      id: 5,
      image: img5
    },
    {
      id: 6,
      image: img6
    },
    {
      id: 7,
      image: img7
    },
    {
      id: 8,
      image: img8
    },
    {
      id: 9,
      image: img9
    },
    {
      id: 10,
      image: img10
    },
    {
      id: 11,
      image: img11
    },
    {
      id: 12,
      image: img12
    },
    {
      id: 13,
      image: img13
    },
    {
      id: 14,
      image: img14
    },
    {
      id: 15,
      image: img15
    },
    {
      id: 16,
      image: img16
    },
    {
      id: 17,
      image: img17
    },
    {
      id: 18,
      image: img18
    },
    {
      id: 19,
      image: img19
    },
    {
      id: 20,
      image: img20
    },
    {
      id: 21,
      image: img21
    },
    {
      id: 21,
      image: img22
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(autoSlideRef.current);
  };

  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };


  return (
    <div className="px-4 md:px-8 md:flex mt-5 md:items-center  md:justify-center md:flex-col">
      <div className="relative md:w-5xl  h-[300px] md:h-[500px]">
        <div
          className="rounded-2xl shadow-2xl overflow-hidden h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out h-full" /* Added h-full */
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 h-full"> {/* Added h-full */}
                <div className="w-full h-full relative">
                  <img
                    src={slide.image}
                    alt={slide.id}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                </div>
              </div>
            ))}
          </div>

          {/* Arrows with adjusted positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4e5c3a] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowLeft className="text-lg md:text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4e5c3a] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowRight className="text-lg md:text-xl" />
          </button>
        </div>
      </div>

      {/* Thumbnail nav with adjusted spacing */}
      <div className="mt-4 md:w-5xl px-2 flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 transition-all duration-300 ${currentSlide === index
              ? 'ring-4 ring-[#c1b49b] scale-105'
              : 'opacity-70 hover:opacity-100'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-20 h-14 md:w-24 md:h-16 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StructureSlider;


