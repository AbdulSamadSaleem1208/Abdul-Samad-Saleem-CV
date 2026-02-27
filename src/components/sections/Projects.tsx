"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Database } from "lucide-react";

const projects = [
    {
        name: "ML PRO Platform",
        description: "Universal Machine Learning Platform with Python and Streamlit. Allows users to upload datasets and train models (Linear Regression, Random Forest) without coding. Includes interactive visualizations.",
        tech: ["Python", "Streamlit", "Scikit", "Pandas"],
        github: "https://github.com/AbdulSamadSaleem1208/ML-PRO",
        live: "#",
        stars: 12
    },
    {
        name: "RDA Finance Management System",
        description: "Full-stack Finance Management System built for the Rawalpindi Development Authority, with robust data validation, REST APIs, and dynamic Excel export.",
        tech: ["Python", "Flask", "MySQL", "API"],
        github: "https://github.com/AbdulSamadSaleem1208/RDA-Finance",
        live: "#",
        stars: 5
    },
    {
        name: "Breast Cancer Predictor",
        description: "Logistic regression model built to predict breast cancer diagnosis. Includes data cleaning, feature engineering, and visualization maximizing model accuracy.",
        tech: ["Python", "Scikit-Learn", "Jupyter"],
        github: "https://github.com/AbdulSamadSaleem1208/Cancer-Predict",
        live: "#",
        stars: 8
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="glass-card flex flex-col h-full hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group"
                    >
                        <div className="p-6 pb-4 flex justify-between items-center">
                            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                                <Database size={24} />
                            </div>
                            <div className="flex gap-3 text-gray-400">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 pt-0 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs text-blue-300 font-mono">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Star size={14} className="text-yellow-500/70" />
                                    <span>{project.stars}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
