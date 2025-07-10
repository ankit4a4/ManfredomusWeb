import React from 'react';
import img1 from "../../assets/home/maxresdefault1.jpg"
import img2 from "../../assets/home/maxresdefault2.jpg"
import img3 from "../../assets/home/maxresdefault3.jpg"
import img4 from "../../assets/home/maxresdefault4.jpg"
import img5 from "../../assets/home/maxresdefault5.jpg"

const EventSection = () => {
    const events = [
        {
            id: 1,
            title: "Easter",
            subtitle: "The rites of Holy Week",
            image: img1
        },
        {
            id: 2,
            title: "May",
            subtitle: "Cannolo and Ricotta Festival",
            image: img2
        },
        {
            id: 3,
            title: "early September",
            subtitle: "Castle Festival and Ancient Livestock Fair",
            image: img3
        },
        {
            id: 4,
            title: "September 8th",
            subtitle: "Feast of Our Lady of Miracles",
            image: img4
        },
        {
            id: 5,
            title: "December 8th",
            subtitle: "Guasteddra Festival",
            image: img5
        }
    ];

    return (
        <div className="min-h-screen py-6 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">

                    <h1 className="text-5xl font-serif font-bold text-[#a5886e] mb-4 tracking-tight">
                        The Unmissable Events
                    </h1>
                    <div className="mx-auto transform  w-50 h-1 bg-[#A5886E] rounded-full"></div>
                    <p className="text-xl text-[#6d5d4c] max-w-2xl mx-auto leading-relaxed">
                        From Easter to Christmas, mark your calendar for our events dedicated to tradition and good food.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500"
                        >
                            <div
                                style={{ backgroundImage: `url(${event.image})`, backgroundSize: "cover", backgroundPosition: "top" }}
                                className="relative h-64 md:h-90">

                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-[#f0e9df] text-lg">{event.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    );
};

export default EventSection;
