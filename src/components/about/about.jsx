import React from "react";
import { motion } from "framer-motion";
import content from "../../Data/aboutContent";

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h-[50vh] flex items-center justify-center py-20 px-5 text-center bg-transparent overflow-hidden"
        >
            <div className="relative z-10 max-w-3xl w-full">
                {/* Title */}
                <motion.h2
                    className="text-[clamp(2rem,6vw,3.5rem)] font-black text-coffee-dark mb-8 leading-tight"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {content.title}
                </motion.h2>

                {/* Paragraphs */}
                <div className="flex flex-col gap-6">
                    {content.paragraphs.map((para, i) => (
                        <motion.p
                            key={i}
                            className="text-lg md:text-xl leading-relaxed text-[#5c3b2c] font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + i * 0.15, // Snappier staggered delay
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            {para}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}