import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const now = new Date();
        const formattedTime = now.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        formRef.current.querySelector('input[name="time"]').value = formattedTime;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("✅ Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("❌ Failed to send. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="pt-20 pb-20 px-5 text-center text-coffee-dark bg-transparent">

        {/* Heading Group */}
            <div className="max-w-3xl mx-auto mb-12">
                <motion.h2
                    className="text-[clamp(2.5rem,5vw,4rem)] font-black mb-4 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Contact Us
                </motion.h2>

                <motion.p
                    className="text-[clamp(1.1rem,1.5vw,1.4rem)] text-[#4b2f22] opacity-90 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Have questions or ideas? Drop us a message below and we’ll get back to you!
                </motion.p>
            </div>

            {/* Form Section */}
            <motion.form
                ref={formRef}
                className="max-w-[600px] mx-auto flex flex-col gap-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                onSubmit={sendEmail}
            >
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-xl border-2 border-coffee-dark bg-[#fffaf3] text-lg text-[#4b2f22] outline-none transition-all focus:border-coffee-default focus:ring-4 focus:ring-coffee-default/20 placeholder:text-coffee-dark/50"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-xl border-2 border-coffee-dark bg-[#fffaf3] text-lg text-[#4b2f22] outline-none transition-all focus:border-coffee-default focus:ring-4 focus:ring-coffee-default/20 placeholder:text-coffee-dark/50"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-4 rounded-xl border-2 border-coffee-dark bg-[#fffaf3] text-lg text-[#4b2f22] outline-none transition-all focus:border-coffee-default focus:ring-4 focus:ring-coffee-default/20 placeholder:text-coffee-dark/50 resize-none min-h-[150px]"
                        required
                    ></textarea>
                </div>

                {/* Hidden field for timestamp */}
                <input type="hidden" name="time" />

                <motion.button
                    type="submit"
                    className="w-full sm:w-max sm:self-center px-12 py-4 rounded-full border-2 border-coffee-dark bg-[#fffaf3] text-coffee-dark font-bold text-lg shadow-md cursor-pointer whitespace-nowrap"
                    whileHover={{
                        scale: 1.03,
                        backgroundColor: "#d4a373",
                        color: "#fff",
                        y: -3
                    }}
                    whileTap={{ scale: 0.97 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </section>
    );
}

export default Contact;