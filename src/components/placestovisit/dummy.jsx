import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/home/tor1.jpeg";
import img2 from "../../assets/home/tor2.jpg";
import img3 from "../../assets/home/tor3.jpg";
import img4 from "../../assets/home/tor4.jpeg";
import img5 from "../../assets/home/tor5.jpg";
import img6 from "../../assets/home/tor6.jpg";
import Image from "../../assets/surroundings/esterno (9).jpg"

const NearbyAttractionsSection = () => {

    const places = [
        {
            name: "Scala dei Turchi",
            distance: "59 km",
            image: img1,
        },
        {
            name: "Andromeda Theater",
            distance: "46 km",
            image: img2
        },
        {
            name: "Manfredonic Castle",
            distance: "70 m",
            image: img3
        },
        {
            name: "Valley of the Temples - Agrigento",
            distance: "49 km",
            image: img4
        },
        {
            name: "Sutera",
            distance: "14 km",
            image: img5
        },
        {
            name: "Big Bench Mussomeli Fanzarotta",
            distance: "18 km",
            image: img6
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (

        <>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#A5886E] mb-4 bg-clip-text ">
                        Places worth visiting
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Not only the Castle: the surroundings also offer opportunities to
                        discover and admire unexpected places full of history, culture and
                        nature.
                    </p>

                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {places.map((place, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onClick={() => console.log(`${place.name} clicked`)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                </div>
                            </div>
                            <div className="bg-white p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        {place.distance}
                                    </span>
                                </div>
                                <div className="mt-4 flex items-center text-gray-500">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Nearby attraction</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>




            <div className="group grid md:grid-cols-2 gap-14 items-center px-8 mt-5 mb-5 ">
                <div className="relative overflow-hidden shadow rounded-2xl transition-all duration-500 group-hover:shadow-xl">
                    <img
                        src={Image}
                        alt="Mediterranean Landscape"
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                    <span className="inline-block mb-3 text-lg font-semibold text-[#A5886E] border-b-2 border-[#A5886E] pb-1">
                        Eco Retreat with Castle Views in Sicily
                    </span>
                    <p className="text-lg md:text-lg leading-4 md:leading-6 text-[#253745]/90">
                        Manfredomus stands proudly as an eco-retreat with castle views in Sicily, offering panoramic scenes that capture the essence of the island. Whether you’re watching the sunrise over the hills or stargazing at night, the setting creates a sense of timeless wonder. The nearby castle offers a fascinating glimpse into Sicily’s layered history, while the lodge provides modern comfort in a rustic, eco-friendly package. <br />
                        As an eco-retreat with castle views in Sicily, Manfredomus invites travelers to disconnect from urban noise and reconnect with the rhythm of nature. It’s a perfect choice for artists, writers, honeymooners, or anyone longing for a meaningful escape in one of Italy’s most evocative regions.

                    </p>
                </div>
            </div>

        </>
    );
};

export default NearbyAttractionsSection;