import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../data/projectsData.js";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [activeTab, setActiveTab] = useState("game");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const filteredProjects = projectsData.filter(
        (p) => p.category === activeTab
    );

    return (
        <section
            id="projects"
            className="py-20 px-5 text-center text-coffee-dark"
        >
            {/* 🔥 Title */}
            <motion.h2
                className="text-[clamp(1.8rem,5vw,3rem)] font-black mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Our Work
            </motion.h2>

            {/* 🧠 Tabs */}
            <div className="flex justify-center gap-4 mb-10">
                {["game", "art"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-32 px-6 py-2 text-center rounded-full font-semibold transition-all duration-300
            ${
                            activeTab === tab
                                ? "bg-coffee-dark text-white shadow-lg scale-105"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {tab === "game" ? "Games" : "Art"}
                    </button>
                ))}
            </div>

            {/* 🎬 Animated Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab} // 👈 important for animation
                    className="grid grid-cols-[repeat(auto-fit,minmax(260px,280px))] gap-6 max-w-7xl mx-auto justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

export default Projects;