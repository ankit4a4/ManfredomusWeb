import React from 'react'
import img from "../../assets/about/bigstock-153348863.jpg"

const SectionFour = () => {
    return (
        <>
            <section className="relative w-full py-28 px-6 flex items-center justify-center bg-[#253745]">
                <div className="absolute inset-0">
                    <img
                        src={img}
                        className="w-full h-full object-cover opacity-20"
                        alt="Sicilian landscape"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Discover Authentic Sicily With Us
                    </h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                        Explore the hidden treasures of an authentic Sicily, still unexplored and full of charm.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SectionFour
