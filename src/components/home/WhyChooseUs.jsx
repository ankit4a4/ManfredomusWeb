import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Leaf,
    Sun,
    CloudRain,
    ThermometerSun,
    AirVent,
    BatteryCharging,
    Bike,
} from 'lucide-react';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="py-10 bg-[#A5886E]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
                    <i>So many great reasons to stay with us</i>
                </h2>
                <p
                    className="text-white text-opacity-90 mb-12 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    We are green not just in words
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 - Eco Structure */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <Leaf size={32} />
                            <h3 className="text-xl font-semibold">Green Hospitality</h3>
                        </div>
                        <p className="text-left">
                            Our eco-sustainable structure is equipped with innovative technologies that make it self-sufficient and zero impact.
                        </p>
                    </div>

                    {/* Card 2 - Solar Energy */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <Sun size={32} />
                            <h3 className="text-xl font-semibold">Solar Power</h3>
                        </div>
                        <p className="text-left">
                            Sicilian solar energy powers the facility through photovoltaic and solar thermal systems, producing clean electricity.
                        </p>
                    </div>

                    {/* Card 3 - Rainwater Recovery */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <CloudRain size={32} />
                            <h3 className="text-xl font-semibold">Rainwater Recovery</h3>
                        </div>
                        <p className="text-left">
                            We collect every drop from the roof and reuse it for non-potable purposes, reducing water waste.
                        </p>
                    </div>

                    {/* Card 4 - Smart Climate */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <ThermometerSun size={32} />
                            <h3 className="text-xl font-semibold">Air Conditioning</h3>
                        </div>
                        <p className="text-left">
                            Smart-climate rooms are designed for optimal thermal comfort with remote temperature control.
                        </p>
                    </div>

                    {/* Card 5 - Air Purification */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <AirVent size={32} />
                            <h3 className="text-xl font-semibold">Air Purification</h3>
                        </div>
                        <p className="text-left">
                            Our VMC system ensures continuous circulation of purified air, monitoring humidity and air quality.
                        </p>
                    </div>

                    {/* Card 6 - EV Charging */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <BatteryCharging size={32} />
                            <h3 className="text-xl font-semibold">EV Charging Station</h3>
                        </div>
                        <p className="text-left">
                            Guests can recharge their electric vehicles with our 22kW green energy charging station.
                        </p>
                    </div>

                    {/* Card 7 - Bike Rental */}
                    <div
                        className="bg-white text-black p-8 rounded-2xl shadow-md hover:scale-[1.03] hover:shadow-xl transition duration-300 md:col-span-3"
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4 text-[#597429]">
                            <Bike size={32} />
                            <h3 className="text-xl font-semibold">Bike Rental</h3>
                        </div>
                        <p className="text-center">
                            Our bike rental service allows you to explore the surroundings in a healthy and sustainable way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
