import React from "react";
import { motion } from "framer-motion";
import services from "../../Data/servicesData";

function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        },
    };

    return (
        <section id="services" className="py-20 px-5 text-center text-coffee-dark bg-transparent overflow-hidden">
            <motion.h2
                className="text-4xl md:text-5xl font-black mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Our Services
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service) => {
                    const Icon = service.icon; // For react-icons support
                    return (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(104, 67, 46, 0.15)"
                            }}
                            /* Fixed Size Strategy:
                               - Set a fixed w and h (or min-h) to ensure cards never vary.
                               - h-[400px] or aspect-[3/4] works well.
                            */
                            className="w-full max-w-[320px] h-[400px] bg-[#fffaf3] border-2 border-coffee-dark rounded-[30px] p-8 shadow-md flex flex-col items-center text-center group cursor-default transition-colors hover:bg-white"
                        >
                            {/* Icon Wrapper with Floating Animation */}
                            <motion.div
                                className="text-5xl md:text-6xl text-coffee-dark mb-6 flex items-center justify-center"
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: service.id * 0.2 // More predictable delay
                                }}
                            >
                                {/* Check if Icon is a string (emoji) or a Component (react-icons) */}
                                {typeof Icon === 'string' ? Icon : <Icon />}
                            </motion.div>

                            <div className="flex flex-col h-full">
                                <h3 className="text-xl md:text-2xl font-black text-coffee-dark mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                {/* line-clamp ensures text doesn't break the container if it's too long */}
                                <p className="text-[#4b2f22] text-sm md:text-base leading-relaxed line-clamp-5">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

export default Services;