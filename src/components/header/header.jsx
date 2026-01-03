import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import navLinks from "../../data/navLinks";
import NavItem from "./NavItem";

function Header() {
    // Function to handle refresh
    const handleRefresh = (e) => {
        // Optional: If you want to force a refresh even if they are already on '/'
        if (window.location.pathname === "/") {
            e.preventDefault();
            window.location.reload();
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#f6d1a5]/90 backdrop-blur-md shadow-lg z-[9999]">
            <div className="max-w-7xl mx-auto px-5 py-2 flex flex-col sm:flex-row justify-between items-center gap-3">

                {/* Brand/Logo - Updated for Refresh */}
                <motion.a
                    href="/"
                    onClick={handleRefresh}
                    className="flex items-center gap-2.5 no-underline group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <h1 className="m-0 text-lg font-bold text-[#68432e] tracking-tight group-hover:text-[#D4A373] transition-colors">
                        Coffee Beans Studio
                    </h1>
                </motion.a>

                {/* Navigation */}
                <nav aria-label="Main navigation">
                    <ul className="m-0 p-0 list-none flex flex-wrap justify-center items-center gap-5 sm:gap-6">
                        {navLinks.map((link, idx) => (
                            <NavItem key={link.name} {...link} index={idx} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;