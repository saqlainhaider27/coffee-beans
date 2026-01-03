// src/data/footerData.js
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";

const footerData = {
    brand: {
        name: "Coffee Beans Studio",
        email: "info@coffeebeansstudio.com",
        phone: "+92 300 1234567",
        location: "Lahore, Pakistan",
    },
    socials: [
        {
            name: "Twitter",
            icon: FaTwitter,
            url: "https://twitter.com",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://linkedin.com",
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            url: "https://youtube.com",
        },
        {
            name: "Discord",
            icon: FaDiscord,
            url: "https://discord.com",
        },
    ],
};

export default footerData;
