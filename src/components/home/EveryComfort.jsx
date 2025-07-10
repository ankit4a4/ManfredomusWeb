import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    BedDouble,
    ParkingCircle,
    Wifi,
    UserRoundCheck,
    Rows4,
    Lock,
    Users,
    Accessibility,
    Ban,
    Baby,
    Beer,
    Tv,
    ShieldCheck,
    Croissant,
    VolumeX,
    Coffee,
    Sparkles,
    Shirt,
    Briefcase,
    PawPrint,
} from 'lucide-react';

const EveryComfort = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const comforts = [
        { title: "Dorelan king size beds", desc: "Enjoy the comfort of Dorelan king size beds with toppers, for a regenerating rest.", icon: BedDouble },
        { title: "Internal parking", desc: "Park conveniently inside the facility for convenient and worry-free access.", icon: ParkingCircle },
        { title: "Wi-Fi in the room", desc: "Stay connected and share your experiences online with free Wi-Fi.", icon: Wifi },
        { title: "Reception", desc: "You will always find one of us to welcome you, but we also have automatic check-in if necessary.", icon: UserRoundCheck },
        { title: "Modular rooms with choice of beds", desc: "Our rooms are designed to offer comfort, functionality and satisfy every need.", icon: Rows4 },
        { title: "Smart lock access", desc: "Access your room easily with our digital opening system.", icon: Lock },
        { title: "Family rooms", desc: "Our family rooms allow you to accommodate everyone together in a single environment.", icon: Users },
        { title: "Disabled Accessibility", desc: "Accessible rooms ensure comfort and accessibility for guests with mobility disabilities.", icon: Accessibility },
        { title: "Non-smoking rooms", desc: "All our rooms are non-smoking, ensuring a clean and comfortable environment.", icon: Ban },
        { title: "Bed barrier, camping cot or 'Next 2 me'", desc: "Upon request we have “Next 2 me” cots or bed guards for newborns.", icon: Baby },
        { title: "Mini bar", desc: "Each room is equipped with a convenient 40-litre mini-bar, perfect for keeping drinks and snacks always fresh and close at hand.", icon: Beer },
        { title: "TV", desc: "There is a 43' SMART TV in each room, however, we hope you will enjoy more fulfilling experiences during your stay.", icon: Tv },
        { title: "Safe", desc: "Each room is equipped with a safe to ensure the safety of your valuables.", icon: ShieldCheck },
        { title: "Breakfast (also vegan, on request)", desc: "We offer a breakfast with local products, both sweet and savory.", icon: Croissant },
        { title: "Acoustic Insulation", desc: "Soundproofed room with sound-absorbing materials and special glass, ideal for a quiet stay free from external noise.", icon: VolumeX },
        { title: "Room service", desc: "For those who wish, room service breakfast is available.", icon: Coffee },
        { title: "Daily cleaning", desc: "Our staff will maintain the hygiene and order of your room on a daily basis.", icon: Sparkles },
        { title: "Laundry", desc: "We have a laundry and ironing service to take care of your clothes.", icon: Shirt },
        { title: "Luggage storage", desc: "You can leave your luggage with us before check-in or after check-out.", icon: Briefcase },
        { title: "Four-legged friends", desc: "Small pets are welcome upon reservation and subject to availability.", icon: PawPrint },
    ];

    return (
        <section className="bg-white py-4 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#A5886E] mb-12" data-aos="fade-up">
                    <i>And we offer you every comfort</i>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {comforts.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-white border border-transparent hover:border-[#A5886E] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon Circle */}
                                    <div className="min-w-[48px] h-12 w-12 rounded-full bg-[#f0f0ee] flex items-center justify-center text-[#597429] group-hover:bg-[#A5886E] group-hover:text-white transition-all">
                                        <Icon size={24} />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#253745] mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EveryComfort;
