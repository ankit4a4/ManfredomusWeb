import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/home/room3.jpg";
import img2 from "../../assets/home/room2.jpg";
import img3 from "../../assets/home/room1.jpg";
import {
    BedDouble,
    ShowerHead,
    Wifi,
    Monitor,
    Mountain,
    Utensils,
    AirVent,
    Tv,
    Refrigerator,
    Lock,
    Sun,
    Headphones,
    ClipboardList,
    Feather,
    X
} from 'lucide-react';

const roomData = [
    {
        title: 'Elegant & Calm',
        description: 'A cozy space with warm wooden finishes and soft lighting, ideal for peaceful rest. Designed with eco-materials and local artwork.',
        features: [
            'Air conditioning',
            'Wi-Fi',
            'Private bathroom',
            'TV set',
            'Non-Smoker rooms',
            'Fridge',
            'Safe',
            'Garden view',
            'Mountain view',
            'Hairdryer',
            'Soundproof',
            'Work desk',
            'Allergy-free'
        ],
        image: img1,
    },
    {
        title: 'Rustic Charm',
        description: 'This room offers a rural Sicilian vibe with exposed beams and handcrafted décor. It opens up to a lovely countryside view.',
        features: [
            'Air conditioning',
            'Wi-Fi',
            'Private bathroom',
            'TV set',
            'Non-Smoker rooms',
            'Fridge',
            'Safe',
            'Garden view',
            'Mountain view',
            'Hairdryer',
            'Soundproof',
            'Work desk',
            'Allergy-free'
        ],
        image: img2,
    },
    {
        title: 'Family Friendly',
        description: 'Perfect for families or longer stays, with spacious interiors and functional yet elegant design. Eco-comfort guaranteed.',
        features: [
            'Air conditioning',
            'Wi-Fi',
            'Private bathroom',
            'TV set',
            'Non-Smoker rooms',
            'Fridge',
            'Safe',
            'Garden view',
            'Mountain view',
            'Hairdryer',
            'Soundproof',
            'Work desk',
            'Allergy-free'
        ],
        image: img3,
    },
];

const OurRooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    const getFeatureIcon = (feature) => {
        const iconMap = {
            'air conditioning': <AirVent size={18} className="text-[#A5886E]" />,
            'wi-fi': <Wifi size={18} className="text-[#A5886E]" />,
            'bathroom': <ShowerHead size={18} className="text-[#A5886E]" />,
            'tv': <Tv size={18} className="text-[#A5886E]" />,
            'fridge': <Refrigerator size={18} className="text-[#A5886E]" />,
            'safe': <Lock size={18} className="text-[#A5886E]" />,
            'garden': <Sun size={18} className="text-[#A5886E]" />,
            'mountain': <Mountain size={18} className="text-[#A5886E]" />,
            'hairdryer': <Sun size={18} className="text-[#A5886E]" />,
            'soundproof': <Headphones size={18} className="text-[#A5886E]" />,
            'desk': <ClipboardList size={18} className="text-[#A5886E]" />,
            'allergy': <Feather size={18} className="text-[#A5886E]" />,
            'smoker': <span className="text-[#A5886E]">🚭</span>
        };

        const matchedKey = Object.keys(iconMap).find(key =>
            feature.toLowerCase().includes(key)
        );

        return matchedKey ? iconMap[matchedKey] : <BedDouble size={18} className="text-[#A5886E]" />;
    };

    return (
        <section className="md:py-16 py-8 overflow-x-hidden w-full bg-[#A5886E]" id="rooms">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-[#597429] text-center mb-6">
                    Our Rooms
                </h2>
                <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto mb-12">
                    Discover a blend of traditional charm and modern comfort in each of our uniquely designed rooms.
                </p>

                <Slider {...settings} className="pb-12">
                    {roomData.map((room, index) => (
                        <div key={index} className="px-3 focus:outline-none">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={room.image}
                                        alt={room.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                                        <h3 className="text-2xl font-semibold text-white">{room.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-700 mb-5 leading-relaxed line-clamp-2">
                                        {room.description}
                                    </p>

                                    <div className="mb-6 grid grid-cols-2 gap-3 text-base">
                                        {room.features.slice(0, 4).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                {getFeatureIcon(feature)}
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <button className="bg-[#A5886E] hover:bg-[#8a725c] text-white font-medium py-2 px-6 rounded-lg transition-colors flex-1">
                                            Book Now
                                        </button>
                                        <button
                                            onClick={() => setSelectedRoom(room)}
                                            className="border border-[#A5886E] text-[#A5886E] hover:bg-[#A5886E]/10 font-medium py-2 px-6 rounded-lg transition-colors flex-1"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Room Details Modal */}
            {selectedRoom && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative h-64 w-full">
                            <img
                                src={selectedRoom.image}
                                alt={selectedRoom.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => setSelectedRoom(null)}
                                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2"
                            >
                                <X className="text-gray-800" />
                            </button>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-[#A5886E] mb-3">
                                {selectedRoom.title}
                            </h3>
                            <p className="text-gray-700 mb-6">
                                {selectedRoom.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {selectedRoom.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        {getFeatureIcon(feature)}
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full bg-[#A5886E] hover:bg-[#8a725c] text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          color: #A5886E;
          opacity: 0.5;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #A5886E;
          opacity: 1;
        }
        .slick-prev:before, 
        .slick-next:before {
          color: #A5886E;
          font-size: 24px;
        }
        .slick-prev {
          left: -35px;
        }
        .slick-next {
          right: -35px;
        }
        @media (max-width: 768px) {
          .slick-prev, 
          .slick-next {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default OurRooms;