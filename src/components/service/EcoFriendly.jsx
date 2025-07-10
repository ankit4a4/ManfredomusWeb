import React from 'react'
import img1 from "../../assets/service/esterno16.jpg"
import img2 from "../../assets/service/images.jpeg"
import img3 from "../../assets/service/rain-water-harvesting-system.jpg"
import img4 from "../../assets/service/accessori14.jpg"
import img5 from "../../assets/service/images (1).jpeg"
import img6 from "../../assets/service/images (2).jpeg"
import img7 from "../../assets/service/images (3).jpeg"

const EcoFriendly = () => {

    const greenFeatures = [
        {
            title: "Green Hospitality",
            description: "Our eco-sustainable structure is equipped with innovative technologies that make it self-sufficient and zero impact.",
            image: img1
        },
        {
            title: "Photovoltaic and Solar Thermal System",
            description: "Sicilian solar energy powers the facility, producing clean, renewable electricity.",
            image: img2
        },
        {
            title: "Rainwater Recovery System",
            description: "We collect every drop of rainwater from the roof, transforming it into a sustainable resource for non-potable uses.",
            image: img3
        },
        {
            title: "Air Conditioning",
            description: "Smart-climate rooms, designed for optimal thermal comfort and remote temperature management.",
            image: img4
        },
        {
            title: "Air Purification System (VMC)",
            description: "We guarantee a continuous exchange of purified air, monitoring humidity and air quality.",
            image: img5
        },
        {
            title: "22kW Charging Station",
            description: "Recharge with green energy with our electric charging station.",
            image: img6
        },
        {
            title: "Bike Rental",
            description: "Explore the surroundings in a sustainable and healthy way.",
            image: img7
        }
    ];
    return (
        <>
            <section className="py-6 md:py-16 px-4 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
                        Our Eco-Friendly Initiatives
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {greenFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="md:h-70 h-56 overflow-hidden bg-white ">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                                    <p className="text-black/70">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EcoFriendly
