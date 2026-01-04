// src/data/footerData.js
import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";

const footerData = {
    brand: {
        name: "Coffee Beans Studio",
        email: "coffeebeans270@gmail.com",
        phone: "+92 327 8896738",
        location: "Lahore, Pakistan",
    },
    socials: [
        {
            name: "Twitter",
            icon: FaTwitter,
            url: "https://twitter.com/coffeebeans270",
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            url: "https://www.youtube.com/@Coffee-Beans-Dev",
        },
    ],
};

export default footerData;
