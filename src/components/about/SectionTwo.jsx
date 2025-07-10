import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck, FaLeaf, FaArrowRight } from "react-icons/fa";
import img from "../../assets/about/DS209768-HDR.jpg"
import img2 from "../../assets/structure/accessori (12).jpg"

const SectionTwo = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-[#A5886E]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 md:py-24 grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-700 hover:-translate-y-2"
                        data-aos="fade-up"
                    >
                        <img
                            src={img}
                            alt="Eco Home"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-[#0a1c0f] p-4">
                            <p className="text-white/80 text-sm">Sustainable Architecture</p>
                        </div>
                    </div>

                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-700 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <img
                            src={img2}
                            alt="Solar Roof"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-[#0a1c0f] p-4">
                            <p className="text-white/80 text-sm">Renewable Energy Systems</p>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:col-span-3 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl"
                    data-aos="fade-up"
                >
                    <div className="text-[#597429]  tracking-wider font-medium mb-2">

                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#253745] mb-6">
                        Experience Tranquillity at Manfredomus: A Luxury Green Stay in the Heart of Sicily
                    </h2>
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Tucked away in the enchanting Sicilian countryside, Manfredomus offers an unparalleled experience for those seeking peace, authenticity, and sustainability. As a thoughtfully curated eco retreat with castle views in Sicily, this homestay blends rustic charm with refined comfort, giving guests a taste of local heritage while minimizing environmental impact.
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        Located just a short distance from a majestic medieval fortress, Manfredomus is a luxury green stay near the medieval castle in Italy, ideal for travelers who want to immerse themselves in Italy’s rich history and stunning natural landscapes. Whether you’re seeking solitude, inspiration, or a romantic escape, this hideaway is more than just a place to sleep—it’s a soulful destination that celebrates mindful travel.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
