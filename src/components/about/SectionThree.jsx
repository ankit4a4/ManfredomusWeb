import React from 'react'
import img from "../../assets/about/esterno5 (1).jpg"

const SectionThree = () => {
    return (
        <>
            <section className="w-full bg-[#f8f7f5] py-8 md:py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#253745] mb-4">
                            Sustainable Accommodation in Sicily Countryside
                        </h2>
                        <div className="w-20 h-1 bg-[#A5886E] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative" data-aos="fade-up">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
                                <img
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt="Tranquil countryside"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
                            </div>


                        </div>

                        <div data-aos="fade-up">

                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                WManfredomus is proud to offer sustainable accommodation in Sicily countryside, designed with a deep respect for nature and tradition. From the use of renewable energy sources to local and organic produce served at breakfast, every aspect of the stay supports eco-friendly living. The interiors are tastefully decorated with reclaimed wood and natural fabrics, echoing the tones of the surrounding landscape.


                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                This sustainable accommodation in Sicily countryside is a haven for environmentally-conscious travelers. Guests are encouraged to participate in green practices such as waste reduction, water conservation, and exploring the nearby countryside on foot or bicycle. The peaceful surroundings promote a slower pace of life, offering a unique opportunity to reconnect with nature and self.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree
