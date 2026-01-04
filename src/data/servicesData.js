// src/data/servicesData.js
import { FaGamepad, FaMobileAlt, FaDraftingCompass, FaShapes, FaSteam, FaRocket } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Custom Game Development",
        description: "End-to-end game production tailored to your vision. We transform unique concepts into fully playable realities using industry-leading engines.",
        icon: FaGamepad,
    },
    {
        id: 2,
        title: "Multi-Platform Publishing",
        description: "Reach your audience everywhere. We specialize in developing and optimizing games for Steam, Google Play, the App Store, and Web platforms.",
        icon: FaSteam,
    },
    {
        id: 3,
        title: "Game Art (2D & 3D)",
        description: "From stylized 2D sprites to high-fidelity 3D models. Our artists cover character design, environment art, and complex rigging for any art style.",
        icon: FaShapes,
    },
    {
        id: 4,
        title: "UI/UX & Game Design",
        description: "Intuitive HUDs and menus designed for immersion. We focus on player flow, wireframing, and interactive prototypes to ensure a seamless experience.",
        icon: FaDraftingCompass,
    },
    {
        id: 5,
        title: "Animation & VFX",
        description: "Bringing worlds to life with fluid character animations and explosive visual effects that add that essential layer of 'juice' and polish to your project.",
        icon: FaRocket,
    },
    {
        id: 6,
        title: "Technical Support",
        description: "Post-launch maintenance, bug fixing, and performance optimization to ensure your game stays updated and runs smoothly on all hardware.",
        icon: FaMobileAlt,
    },
];

export default services;