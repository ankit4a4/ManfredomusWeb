import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { MessageSquareQuote } from 'lucide-react';

const testimonials = [
    {
        name: "Maria L.",
        comment: "An authentic Sicilian experience! The home was peaceful, full of charm, and incredibly eco-conscious.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "James K.",
        comment: "A perfect getaway! The hosts were welcoming, and the attention to sustainability was truly impressive.",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Elena R.",
        comment: "Every detail was taken care of — from organic breakfast to beautiful natural surroundings. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
        name: "Marco V.",
        comment: "The eco-renovation is impressive. Peaceful, comfortable and a true Sicilian soul.",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
        name: "Giulia P.",
        comment: "A unique mix of comfort and authenticity — we'll definitely be back next summer!",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
];

const TestimonialsSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="md:py-20 py-8 bg-[#F9F6F4]" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#597429] mb-4" data-aos="fade-up">
                    Testimonials
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
                    Hear from happy guests about their peaceful, eco-friendly stays and warm hospitality at Manfredomus.
                </p>

                <Slider {...settings}>
                    {testimonials.map((t, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="bg-white shadow-md rounded-2xl p-8 mx-4 flex flex-col items-center gap-5 text-center">
                                <MessageSquareQuote size={32} className="text-[#A5886E]" />
                                <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">{t.comment}</p>
                                <div className="flex flex-col items-center gap-2 mt-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover border border-[#A5886E]"
                                    />
                                    <span className="text-[#597429] font-medium text-sm">{t.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
