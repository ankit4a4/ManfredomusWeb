import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from "../assets/logoMan.png"

const Footer = () => {
    return (
        <footer className="bg-[#383838] text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo + Description */}
                <div>
                    <img
                        className='w-[150px] mb-8'
                        src={logo} alt="" />
                    <p className="text-sm text-gray-300 mb-4">
                        A family-run eco-residence in the heart of Sicily offering sustainable comfort and warm hospitality.
                    </p>
                    <div className="flex gap-4">
                        <a href="#"><Facebook size={20} className="hover:text-[#A5886E]" /></a>
                        <a href="#"><Instagram size={20} className="hover:text-[#A5886E]" /></a>
                        <a href="mailto:info@manfredomus.it"><Mail size={20} className="hover:text-[#A5886E]" /></a>
                    </div>
                </div>

                {/* Quick Links Part 1 */}
                <div>
                    <h4 className="text-lg font-semibold text-[#A5886E] mb-3">Explore</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-[#A5886E]">Home</Link></li>
                        <li><Link to="/history" className="hover:text-[#A5886E]">History</Link></li>
                        <li><Link to="/services" className="hover:text-[#A5886E]">Services</Link></li>
                        <li><Link to="/structure" className="hover:text-[#A5886E]">Structure</Link></li>
                    </ul>
                </div>

                {/* Quick Links Part 2 */}
                <div>
                    <h4 className="text-lg font-semibold text-[#A5886E] mb-3">Useful</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/surroundings" className="hover:text-[#A5886E]">Surroundings</Link></li>
                        <li><Link to="/events" className="hover:text-[#A5886E]">Events</Link></li>
                        <li><Link to="/howtoget" className="hover:text-[#A5886E]">How to Get There</Link></li>
                        <li><Link to="/book" className="hover:text-[#A5886E]">Book Now</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-[#A5886E] mb-3">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><Mail size={16} /> info@manfredomus.it</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> +39 093 4684592</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> +39 366 1270826</li>
                        <li className="flex items-center gap-2"><MapPin size={16} />  Manfredomus Contrada Castello, snc
                            93014 Mussomeli (CL)</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-4 text-center text-white">
                © {new Date().getFullYear()} Manfredomus. All rights reserved. | Powered by <span className='text-[#D83030] font-[500]'>Rank</span>mantra
            </div>
        </footer>
    );
};

export default Footer;
