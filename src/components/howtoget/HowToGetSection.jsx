import React from 'react';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaPlane,
    FaTrain,
    FaBus,
} from 'react-icons/fa';

const HowToGetSection = () => {
    return (
        <div className="min-h-screen bg-[#e6e2dc] md:py-16 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-14">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#2e2a25] mb-3">How to Reach Us</h1>
                    <div className="w-20 h-1 bg-[#A5886E] mx-auto" />
                </div>

                {/* Transportation Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Airport */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaPlane className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">From Palermo Airport</h3>
                            <p className="text-gray-700">SAL Licatesi Bus Lines up to Motel San Pietro</p>
                        </div>
                    </div>

                    {/* Train */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaTrain className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">From Palermo Train Station</h3>
                            <p className="text-gray-700">Atm Transport up to Mussomeli</p>
                        </div>
                    </div>

                    {/* Bus */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 md:col-span-2">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaBus className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">Bus Lines</h3>
                            <p className="text-gray-700">
                                Camilleri & Argento Bus lines<br />
                                Cuffaro Autolinee<br />
                                Trenitalia<br />
                                Up to Acquaviva Platani
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">Address</h3>
                            <p className="text-gray-700 leading-snug">
                                Manfredomus<br />
                                Contrada Castello, snc<br />
                                93014 Mussomeli (CL)
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">Email</h3>
                            <p className="text-gray-700">info@manfredomus.it</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
                        <div className="bg-[#A5886E] text-white p-3 rounded-full">
                            <FaPhone className="text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#2e2a25] mb-1">Phone</h3>
                            <p className="text-gray-700">
                                +39 093 4684592<br />
                                Mobile: +39 366 1270826
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-[400px]">
                        <iframe
                            title="Manfredomus Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.902447409763!2d13.76572399002024!3d37.57976624082793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310bd002d2e0da1%3A0x9422cd8686e1e144!2sAgriturismo%20Manfredomus!5e0!3m2!1sen!2sin!4v1751459603895!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToGetSection;

