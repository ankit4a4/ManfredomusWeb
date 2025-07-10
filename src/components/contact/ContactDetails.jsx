import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { FaMobileAlt, FaBus, FaTrain, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactDetails = () => {
    const travelOptions = [
        {
            title: "From Palermo Airport",
            icon: <FaPlane className="text-2xl text-[#adbe35]" />,
            details: "SAL Autolinee Licatesi\nUp to Motel San Pietro"
        },
        {
            title: "From Palermo Train Station",
            icon: <FaTrain className="text-2xl text-[#adbe35]" />,
            details: "ATM Transport\nUp to Mussomeli"
        },
        {
            title: "Other Connections",
            icon: <FaBus className="text-2xl text-[#adbe35]" />,
            details: "Camilleri & Argento Bus Lines\nCuffaro Autolinee\nTrenitalia\nUp to Acquaviva Platani"
        }
    ];

    const contactInfo = [
        {
            icon: <HiOutlineLocationMarker className="text-2xl text-[#adbe35]" />,
            content: (
                <>
                    Manfredomus<br />
                    Contrada Castello, snc<br />
                    93014 Mussomeli (CL)
                </>
            )
        },
        {
            icon: <HiOutlineMail className="text-2xl text-[#adbe35]" />,
            content: <a href="mailto:info@manfredomus.it" className="hover:underline">info@manfredomus.it</a>
        },
        {
            icon: <HiOutlinePhone className="text-2xl text-[#adbe35]" />,
            content: <a href="tel:+390934684592" className="hover:underline">+39 093 4684592</a>
        },
        {
            icon: <FaMobileAlt className="text-2xl text-[#adbe35]" />,
            content: <a href="tel:+393661270826" className="hover:underline">+39 366 1270826</a>
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#adbe35] mb-4">
                        How to Reach Us
                    </h2>
                    <div className="w-24 h-1 bg-[#adbe35] mx-auto"></div>
                </motion.div>

                {/* Travel Info Boxes */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {travelOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-[#adbe35]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {option.icon}
                                <h3 className="text-xl font-bold text-gray-800">{option.title}</h3>
                            </div>
                            <p className="text-gray-600 whitespace-pre-line mb-4">{option.details}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Info & Map Container */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg lg:w-1/2"
                    >
                        <h3 className="text-2xl font-bold text-[#adbe35] mb-6 pb-2 border-b border-gray-200">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="p-2 bg-gray-50 rounded-full group-hover:bg-[#edf4d2] transition-colors">
                                        {info.icon}
                                    </div>
                                    <div className="text-gray-700 text-lg pt-1.5">
                                        {info.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 h-full"
                    >
                        <div className="h-full rounded-2xl overflow-hidden shadow-lg relative">
                            <iframe
                                title="Manfredomus Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50586.95507766772!2d13.784865324978421!3d37.58604180768937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1310bd002d2e0da1%3A0x9422cd8686e1e144!2sAgriturismo%20Manfredomus!5e0!3m2!1sen!2sin!4v1752131258285!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ minHeight: '400px', border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
