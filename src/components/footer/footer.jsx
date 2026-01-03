import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import footerData from "../../Data/footerData.js";

function Footer() {
    return (
        /* Breaking out of potential parent containers with w-screen and negative margins */
        <footer className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen bg-[#f6d1a5] text-coffee-dark py-12 px-6 overflow-hidden">

            {/* Inner container keeps the content centered and readable */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">

                    {/* 1. Brand Section */}
                    <motion.div
                        className="flex items-center justify-center md:justify-start gap-4"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-14 h-14 md:w-16 md:h-16 object-contain"
                        />
                        <h2 className="text-xl md:text-2xl font-black tracking-tight">
                            {footerData.brand.name}
                        </h2>
                    </motion.div>

                    {/* 2. Contact Info Section */}
                    <motion.div
                        className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base font-semibold"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span className="opacity-70">Email:</span>
                            <a href={`mailto:${footerData.brand.email}`} className="hover:underline text-coffee-dark">
                                {footerData.brand.email}
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="opacity-70">Phone:</span>
                            <span>{footerData.brand.phone}</span>
                        </div>
                    </motion.div>

                    {/* 3. Socials Section */}
                    <motion.div
                        className="flex justify-center md:justify-end gap-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {footerData.socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                    className="p-2 rounded-full border-2 border-coffee-dark/20 text-2xl hover:bg-coffee-dark hover:text-[#f6d1a5] transition-all duration-300"
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>

                {/* 4. Copyright Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-coffee-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium opacity-75">
                    <p>© {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-coffee-dark hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:text-coffee-dark hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;