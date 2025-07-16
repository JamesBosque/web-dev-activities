import React, { useState } from 'react';
import profileImage from '../assets/pfp.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [showSocials, setShowSocials] = useState(false);

    return (
        <section className="min-h-screen bg-black text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Image */}
            <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
                <img
                    src={profileImage}
                    alt="About Me"
                    className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-7/12 text-center md:text-left relative">
                {/* Vertical Text */}
                <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0 md:-rotate-90 text-sm tracking-widest text-white/70">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-[2px] bg-white"></div>
                        <p>MORE ABOUT</p>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
                    HELLO!! <br /> I'M JA-MES
                </h2>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Hi! I'm James, a passionate Software Developer with expertise in modern web technologies.
                    I specialize in building user-friendly applications that solve real-world problems. With a deep understanding of
                    frontend development, state management, and API integration. Some of my favourite hobby is to draw through digital
                    devices. If you want to see my arts, <a href="/artcollection.html" className="font-bold underline hover:text-white" target="_blank" rel="noopener noreferrer">
                        CLICK HERE!
                    </a>
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="/projects.html"
                        className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 text-center"
                    >
                        See Projects
                    </a>

                    <button
                        onClick={() => setShowSocials(!showSocials)}
                        className="border border-white text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-black text-center"
                    >
                        More Details
                    </button>
                </div>

                {/* Social Links */}
                <div
                    className={`mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-500 ease-out ${showSocials ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <a
                        href="https://www.facebook.com/ja.mes.bosque.99310"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://github.com/JamesBosque"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/james-bosque-5a009a349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
