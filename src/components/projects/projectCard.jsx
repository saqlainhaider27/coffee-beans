import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function ProjectCard({ title, description, image, link, privacyPolicy }) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }} // Lift effect on hover
            className="flex flex-col bg-[#fffaf3] border-2 border-coffee-dark rounded-[20px] overflow-hidden shadow-md group"
        >
            {/* Image Container */}
            <div className="relative h-[180px] overflow-hidden border-b-2 border-coffee-dark">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-coffee-dark mb-2.5">{title}</h3>
                <p className="text-[#4b2f22] text-sm leading-relaxed mb-4 flex-grow">
                    {description}
                </p>

                <div className="mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <motion.button
                            className="px-6 py-2 bg-[#fffaf3] text-coffee-dark border-2 border-coffee-dark font-bold rounded-full cursor-pointer shadow-sm"
                            whileHover={{
                                backgroundColor: "#d4a373",
                                color: "#fff",
                                scale: 1.05
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Play
                        </motion.button>
                    </a>

                    {privacyPolicy && (
                        <div className="mt-3">
                            <a
                                href={privacyPolicy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-500 font-medium hover:text-gray-800 transition-colors underline decoration-transparent hover:decoration-gray-400"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;