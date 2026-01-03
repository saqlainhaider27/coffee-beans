import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/projectsData.js";
import ProjectCard from "./ProjectCard";

function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Cards will "pop" in one by one
            },
        },
    };

    return (
        <section id="projects" className="py-20 px-5 text-center text-coffee-dark">
            <motion.h2
                className="text-[clamp(1.8rem,5vw,3rem)] font-black mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Our Projects
            </motion.h2>

            <motion.div
                className="grid grid-cols-[repeat(auto-fit,minmax(260px,280px))] gap-6 max-w-7xl mx-auto justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default Projects;