import React from "react";
import { motion } from "framer-motion";
import services from "../../Data/servicesData";

function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
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
        <section id="services" className="py-20 px-5 text-center text-coffee-dark bg-transparent">
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
                className="
                grid
                grid-cols-[repeat(auto-fit,minmax(230px,1fr))]
                gap-6
                max-w-7xl
                mx-auto
                justify-items-center
            "
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 10px 25px -5px rgba(104, 67, 46, 0.2)"
                        }}
                        className="w-full max-w-[230px] aspect-[3/4] bg-[#fffaf3] border-2 border-coffee-dark rounded-[20px] p-6 shadow-md flex flex-col justify-between items-center group cursor-default"
                    >
                        {/* Icon with a floating animation */}
                        <motion.div
                            className="text-5xl md:text-6xl mb-4"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2 // Randomize start so they don't sync perfectly
                            }}
                        >
                            {service.icon}
                        </motion.div>

                        <div className="flex-grow flex flex-col justify-center">
                            <h3 className="text-xl md:text-2xl font-bold text-coffee-dark mb-3">
                                {service.title}
                            </h3>
                            <p className="text-[#4b2f22] text-sm md:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;