import React from 'react';
import img1 from "../../assets/home/maxresdefault1.jpg"
import img2 from "../../assets/home/maxresdefault2.jpg"
import img3 from "../../assets/home/maxresdefault3.jpg"
import img4 from "../../assets/home/maxresdefault4.jpg"
import img5 from "../../assets/home/maxresdefault5.jpg"

const UnmissableEvents = () => {
    const events = [
        {
            title: "Easter",
            subtitle: "The rites of Holy Week",
            month: "",
            image: img1
        },
        {
            title: "May",
            subtitle: "Cannolo and Ricotta Festival",
            image: img2
        },
        {
            title: "Early September",
            subtitle: "Castle Festival and Ancient Livestock Fair",
            month: "",
            image: img3
        },
        {
            title: "September 8th",
            subtitle: "Feast of Our Lady of Miracles",
            month: "",
            image: img4
        },
        {
            title: "December 8th",
            subtitle: "Guasteddra Festival",
            month: "",
            image: img5
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#A5886E]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#597429] mb-4 font-serif">
                        <i>The unmissable events</i>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        From Easter to Christmas, mark your calendar for our events dedicated to tradition and good food.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-96"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${event.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", objectFit: "cover" }}
                            >
                                <div className="absolute inset-0 bg-[#00000080] bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="mb-2 text-sm font-medium text-white bg-red-600 inline-block px-3 py-1 rounded-full">
                                    {event.month}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                                {event.subtitle && (
                                    <p className="text-gray-200">{event.subtitle}</p>
                                )}
                            </div>

                            {/* Hover Effect Element */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="border-2 border-white rounded-full p-2 animate-ping absolute h-16 w-16"></div>
                                <svg
                                    className="h-12 w-12 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnmissableEvents;