import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent px-5 py-20 text-center">

            {/* Central Content */}
            <div className="relative z-20 flex flex-col items-center max-w-3xl">
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="w-32 md:w-48 lg:w-56 mb-6 object-contain"
                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-black text-coffee-dark leading-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Games That Keep <br className="hidden md:block" /> You Up!
                </motion.h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                    <motion.button
                        onClick={() => scrollToSection("projects")}
                        /* Fixed width 'w-48' ensures they don't stretch.
                           Removed 'w-full' to prevent horizontal expansion.
                        */
                        className="w-48 py-3 rounded-full border-2 border-coffee-dark bg-[#fffaf3] text-coffee-dark font-bold shadow-md cursor-pointer whitespace-nowrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.6, duration: 0.5 }
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#d4a373",
                            color: "#fff",
                            y: -2,
                            transition: { duration: 0.1 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Games
                    </motion.button>

                    <motion.button
                        onClick={() => scrollToSection("about")}
                        className="w-48 py-3 rounded-full border-2 border-coffee-dark bg-[#fffaf3] text-coffee-dark font-bold shadow-md cursor-pointer whitespace-nowrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.7, duration: 0.5 }
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#68432e",
                            color: "#fff",
                            y: -2,
                            transition: { duration: 0.1 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default Hero;