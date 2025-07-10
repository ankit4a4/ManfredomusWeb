import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // Optional icon

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 bg-[#A5886E] border-2 border-white cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <ChevronUp size={20} />
        </button>
    );
};

export default ScrollToTopButton;
