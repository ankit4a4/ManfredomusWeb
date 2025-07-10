'use client';

import React from 'react';

import logo1 from "../../assets/structure/logo1.png"
import logo2 from "../../assets/structure/logo-sicily-divide-COLORE.png"
import logo3 from "../../assets/structure/Airbnb_Logo_Belo_col.png"
import logo4 from "../../assets/structure/dorelan-logo-vector-01.png"
import logo5 from "../../assets/structure/bookinglogo.png"

const RoomExperienceSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-[#F9F7F4] to-[#e8e1d5] py-8 md:py-20 px-6 md:px-12 lg:px-24 text-[#253745] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A5886E] via-[#597429] to-[#A5886E] opacity-20"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Your <span className="text-[#A5886E]">Comfort</span>,
                        <br className="md:hidden" /> Our <span className="text-[#597429]">Priority</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#A5886E] to-[#597429] mx-auto mb-8"></div>
                </div>

                {/* Main content with elegant card */}
                <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg mb-20 border border-[#e0d8c8]">
                    <p className="text-lg md:text-xl leading-relaxed md:leading-8 text-[#253745]/90">
                        Whether you are travelling alone, as a couple or in a group, our rooms are the ideal place to relax: distributed between the ground floor and the first floor, some of them, such as our Suite, offer an immersive experience with enchanting views of the Manfredonico Castle, adding to your stay a dive into the history of this region full of culture and charm.
                        <br /><br />
                        So immerse yourself in the beauty of the landscape and let yourself be surprised by a breathtaking panorama.
                        <br /><br />
                        We look forward to welcoming you and making you feel at home.
                    </p>
                </div>

                {/* Features grid - enhanced */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Feature 1 */}
                    <div className="group flex flex-col items-center justify-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">We Are Classified</h3>
                        <div className="  overflow-hidden  group-hover: transition-all duration-500">
                            <img
                                src={logo1}
                                alt="Sicily Region"
                                className="h-25 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-lg">
                            Officially recognized by the <span className="text-[#A5886E] font-semibold">Sicily Region</span>
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group flex flex-col items-center justify-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">We Are Also On</h3>
                        <div className="mb-5   transition-all duration-500 flex flex-col gap-4 items-center justify-center">
                            <img
                                src={logo5}
                                alt=""
                                className="h-14 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <img
                                src={logo3}
                                alt=""
                                className="h-14 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <img
                                src={logo2}
                                alt=""
                                className="h-14 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-lg">
                            Book through <span className="text-[#A5886E] font-semibold">Booking.com</span> & <span className="text-[#A5886E] font-semibold">Airbnb</span>
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group flex flex-col items-center justify-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e0d8c8]">
                        <h3 className="text-xl font-semibold text-[#597429] mb-4">We use Dorelan mattresses</h3>
                        <div className="mb-5   transition-all duration-500 flex flex-col gap-4 items-center justify-center">

                            <img
                                src={logo4}
                                alt=""
                                className="h-14 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <p className="text-lg">
                            Book through <span className="text-[#A5886E] font-semibold">Booking.com</span> & <span className="text-[#A5886E] font-semibold">Airbnb</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A5886E] via-[#597429] to-[#A5886E] opacity-20"></div>
        </section>
    );
};

export default RoomExperienceSection;