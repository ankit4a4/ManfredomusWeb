import React from 'react'
import img from "../../assets/FeedBack/soggiorno suite (3).jpg"
const FeedBackHero = () => {
    return (
        <>
            <section
                className="relative md:h-[80vh] h-[40vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-[#00000093] "></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Feedback
                    </h1>
                </div>
            </section>
        </>
    )
}

export default FeedBackHero
