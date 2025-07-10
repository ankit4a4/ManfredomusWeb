import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/about/DS209730.jpg"
import img2 from "../../assets/about/DS209739.jpg"
import img3 from "../../assets/about/DS209808.jpg"

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    return (
        <>
            <section className="w-full md:py-16 py-6 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* TEXT LEFT SIDE */}
                    <div data-aos="fade-up" className="order-1 lg:order-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#253745] mb-4">
                            Best Eco Lodges in Central Sicily
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Recognized as one of the best eco lodges in central Sicily, Manfredomus is much more than a beautiful place to stay. It’s a lifestyle destination that reflects the principles of sustainable tourism, local culture, and heartfelt hospitality. Every detail, from locally sourced building materials to eco-conscious amenities, has been thoughtfully curated to ensure a minimal carbon footprint.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Guests at these best eco lodges in central Sicily can enjoy activities such as olive oil tasting, nature walks, or simply relaxing with a book under ancient olive trees. The lodge also collaborates with local artisans and farmers, giving guests an authentic taste of Sicilian life. Whether you're a solo traveller or a couple seeking privacy, Manfredomus offers the intimacy and charm of a traditional Sicilian home with all the comforts of a boutique stay.
                        </p>

                    </div>

                    {/* IMAGE RIGHT SIDE */}
                    <div
                        className="relative w-[100%] order-2 lg:order-2"
                        data-aos="fade-up"
                    >
                        <div className="relative aspect-[4/3]">
                            {/* Main image */}
                            <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={img3}
                                    className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
                                    alt="Main residence"
                                />
                            </div>

                            {/* Overlay images */}
                            <div className="absolute -bottom-6 -right-6 z-20 w-2/5">
                                <div className="aspect-square overflow-hidden rounded-xl shadow-lg border-4 border-white">
                                    <img
                                        src={img1}
                                        className="w-full h-full object-cover"
                                        alt="Historical detail"
                                    />
                                </div>
                            </div>

                            <div className="absolute -top-6 -left-6 z-20 w-2/5">
                                <div className="aspect-square overflow-hidden rounded-xl shadow-lg border-4 border-white">
                                    <img
                                        src={img2}
                                        className="w-full h-full object-cover"
                                        alt="Family heritage"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative background */}
                        <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-amber-500/10 rounded-2xl rotate-3"></div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default HeroSection;



