import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoMan.png';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollToTopButton from './ScrollToTopButton';
import { MdBedroomParent } from 'react-icons/md';
import flags from "../assets/Flag_of_Italy.svg.webp";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [location]);

    const navLink = [
        { name: 'HOME', path: '/' },
        { name: 'HISTORY', path: '/history' },
        { name: 'SERVICES', path: '/services' },
        { name: 'OUR ROOMS', path: '/structure' },
        { name: 'SURROUNDINGS', path: '/surroundings' },
        { name: 'EVENTS', path: '/events' },
        { name: 'HOW TO GET THERE', path: '/howtoget' },
        { name: 'FEEDBACK', path: '/feedback' },
        { name: 'CONTACT', path: '/contact' },
        { name: 'BOOK', path: 'https://hospitality-guest.teamsystem.cloud/booking-engine/manfredomus' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (path) => {
        const base = "text-sm font-medium transition";
        const active = location.pathname === path;
        const color = scrolled ? "text-black" : "text-white";
        const hover = "hover:text-[#A5886E]";
        const activeColor = active ? "text-[#A5886E]" : color;
        return `${base} ${activeColor} ${hover}`;
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between px-4 md:px-12 py-4 w-full">

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between w-full">
                    {/* Left - Logo */}
                    <div className="flex-shrink-0">
                        <img className="w-[100px]" src={logo} alt="Logo" />
                    </div>

                    {/* Center - Navigation */}
                    <nav className="flex gap-6">
                        {navLink.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className={getLinkStyle(item.path)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right - Flag */}
                    <div className="flex-shrink-0">
                        <a
                            href="https://www.manfredomus.it/"
                            rel="noopener noreferrer"
                            target='_blank'
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <img className="w-[40px] h-[40px] rounded-full" src={flags} alt="Italy Flag" />
                        </a>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex w-full justify-between items-center">
                    {/* Left - Logo */}
                    <img className="w-[80px]" src={logo} alt="Logo" />

                    {/* Right - Flag + Menu Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Flag icon */}
                        <a
                            href="https://www.manfredomus.it/"
                            rel="noopener noreferrer"
                            target='_blank'
                            className="hover:scale-105 transition-transform duration-300"
                        >
                            <img className="w-[36px] h-[36px] rounded-full" src={flags} alt="Italy Flag" />
                        </a>

                        {/* Menu Toggle Button */}
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} color={scrolled ? '#000' : '#fff'} /> : <Menu size={28} color={scrolled ? '#000' : '#fff'} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide-in Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <img className="w-[100px]" src={logo} alt="Logo" />
                    <button onClick={() => setIsOpen(false)}>
                        <X size={26} />
                    </button>
                </div>
                <div className="flex flex-col px-4 py-4 space-y-4">
                    {navLink.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            className={`text-md uppercase font-medium transition ${location.pathname === item.path ? 'text-[#A5886E]' : 'text-[#597429]'} hover:text-[#A5886E]`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                />
            )}

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/393661270826"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-300"
            >
                <div className="bg-[#25D366] p-3 rounded-full flex items-center justify-center">
                    <FaWhatsapp size={24} color="#fff" />
                </div>
                <div className="bg-white text-[#25D366] font-medium px-4 py-2 rounded-full text-sm shadow">
                    Can we help you?
                </div>
            </a>

            {/* Book Now Button */}
            <a
                href="https://hospitality-guest.teamsystem.cloud/booking-engine/manfredomus"
                rel="noopener noreferrer"
                className="fixed bottom-20 left-6 z-50 flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-300"
            >
                <div className="bg-[#A5886E] p-3 rounded-full flex items-center justify-center">
                    <MdBedroomParent size={24} color="#fff" />
                </div>
                <div className="bg-white text-[#A5886E] font-medium px-4 py-2 rounded-full text-sm shadow">
                    Book Now.
                </div>
            </a>

            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </header>
    );
};

export default Header;
