"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Full-Stack Developer",
        company: "Rawalpindi Development Authority",
        date: "July 2024 - Present",
        description: "Developed a full-stack Finance Management System using Python (Flask) and MySQL with scalable data handling and dynamic Excel export.",
    },
    {
        role: "Banking Operations Associate",
        company: "Soneri Bank",
        date: "August 2024",
        description: "Streamlined customer financial services, processed cash transactions with regulatory compliance, and resolved account-related inquiries.",
    },
    {
        role: "ML Platform Developer",
        company: "ML PRO",
        date: "May 2025",
        description: "Built a Universal Machine Learning Platform with Python and Streamlit, enabling code-free model training with interactive visualizations.",
    },
    {
        role: "Business Development & Social Media Executive",
        company: "TechDot Global",
        date: "Nov 2026 - Present",
        description: "Spearheading client acquisition and professional brand presence. I handle complex proposal writing and lead qualification on major freelance platforms, while managing high-engagement social media campaigns to ensure consistent brand growth and executive presence.",
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    Professional <span className="text-gradient">Experience</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />
                <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />

                <div className="flex flex-col gap-12">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} justify-center w-full`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1.5 w-4 h-4 rounded-full bg-[#0A0A0F] border-2 border-blue-500 z-10 mt-6 md:mt-8 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

                                {/* Card Container */}
                                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                                    <div className="glass-card p-6 xl:p-8 hover:border-purple-500/50 transition-colors duration-300 group">
                                        <div className="flex items-center gap-3 mb-3 text-blue-400">
                                            <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        </div>
                                        <h4 className="text-[1.1rem] text-purple-400 mb-4">{exp.company}</h4>
                                        <p className="text-gray-400 leading-relaxed mb-6">{exp.description}</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 inline-flex px-3 py-1.5 rounded-md">
                                            <Calendar size={14} />
                                            <span>{exp.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
