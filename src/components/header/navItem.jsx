import React from "react";
import { motion } from "framer-motion";

function NavItem({ name, href, index }) {
    return (
        <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }}
        >
            <motion.a
                href={href}
                className="inline-block px-2 py-1.5 text-[#68432e] no-underline font-medium rounded-md"
                whileHover={{
                    y: -2,
                    color: "#D4A373",
                    scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
            >
                {name}
            </motion.a>
        </motion.li>
    );
}

export default NavItem;