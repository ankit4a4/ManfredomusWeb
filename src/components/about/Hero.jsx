import React from 'react'
import bgImage from '../../assets/home/herosectionImage.jpg'

const Hero = () => {
    return (
        <>
            <section
                className="md:h-[80vh] h-[40vh] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-[#0000005e]" />
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#fff]">
                            History
                        </h1>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
