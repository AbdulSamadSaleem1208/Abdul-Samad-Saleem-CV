"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, LineChart } from "lucide-react";

const skillCategories = [
    {
        title: "Core Engineering",
        icon: Code2,
        skills: ["Python", "JavaScript / TypeScript", "MySQL", "C++"],
        color: "from-blue-400 to-blue-600"
    },
    {
        title: "Frontend & UI",
        icon: Code2,
        skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        color: "from-purple-400 to-purple-600"
    },
    {
        title: "Data & AI",
        icon: Cpu,
        skills: ["Scikit-learn", "Streamlit", "Machine Learning", "Data Visualization"],
        color: "from-mint-400 to-emerald-600"
    },
    {
        title: "Business Logic",
        icon: LineChart,
        skills: ["FinTech", "Agile", "Client Acquisition", "Proposal Writing"],
        color: "from-orange-400 to-rose-500"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    Technical <span className="text-gradient">Arsenal</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-card p-6 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} mb-6 shadow-lg bg-opacity-10 backdrop-blur-sm`}>
                            <cat.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {cat.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
