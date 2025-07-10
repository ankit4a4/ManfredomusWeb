import React, { useState, useEffect } from 'react';
import bgImage1 from '../../assets/home/esterno1.jpg';
import bgImage2 from '../../assets/home/esterno3.jpg';
import bgImage3 from '../../assets/home/esterno5.jpg';
import bgImage4 from '../../assets/home/esterno9.jpg';

const HeroSection = () => {
    const images = [bgImage1, bgImage2, bgImage3, bgImage4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="md:h-screen h-[40vh] relative overflow-hidden">
            {/* Background images with fade transition */}
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                            transitionDelay: index === currentIndex ? '0ms' : '0ms'
                        }}
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0000005e]" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="text-white max-w-2xl">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#fff]">
                        Welcome to our green tourism
                    </h1>
                    <p className="text-lg md:text-xl text-[#f3f3f3]">
                        An eco-conscious and comfortable residence in the heart of Sicily.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;