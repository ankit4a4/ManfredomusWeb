import React from 'react'

const Everycomfort = () => {

    const comfortAmenities = [
        "Dorelan king size beds",
        "Internal parking",
        "Wi-Fi in the room",
        "Reception & Automatic check-in",
        "Modular rooms with choice of beds",
        "Smart lock access",
        "Family rooms",
        "Disabled Accessibility",
        "Non-smoking rooms",
        "Bed barrier, camping cot or 'Next 2 me'",
        "Mini bar",
        "43' SMART TV",
        "Safe",
        "Breakfast (vegan available)",
        "Acoustic Insulation",
        "Room service breakfast",
        "Daily cleaning",
        "Laundry service",
        "Luggage storage",
        "Four-legged friends welcome"
    ];
    return (
        <>
            <section className="py-6 md:py-16 px-4 bg-[#ADBE35]/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
                        And we offer you every comfort
                    </h2>
                    <p className="text-center text-black/70 mb-16 max-w-3xl mx-auto">
                        Experience unparalleled comfort with our premium amenities designed to make your stay exceptional
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {comfortAmenities.map((amenity, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-[#ADBE35]/20 p-2 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ADBE35]" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-black/80">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Everycomfort
