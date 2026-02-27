"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    Academic <span className="text-gradient">Background</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GraduationCap size={100} className="text-blue-500" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Bachelors in Financial Technology</h3>
                        <h4 className="text-lg text-blue-400 mb-6">FAST NUCES, School of Management</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 inline-flex px-3 py-1.5 rounded-md mb-4">
                            <span>Aug 2022 – Jun 2026</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Specializing at the intersection of Finance and Computer Science.
                            My curriculum covers <b>Quantitative Finance, Algorithmic Trading, Blockchain Technology,
                                and Financial Modeling</b>. I focus on building high-frequency systems and
                            leveraging AI for market analysis.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-card p-8 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BookOpen size={100} className="text-purple-500" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">O/A-Levels</h3>
                        <h4 className="text-lg text-purple-400 mb-6">Cambridge International Education</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 inline-flex px-3 py-1.5 rounded-md mb-4">
                            <span>Aug 2018 – Aug 2021</span>
                        </div>
                        <p className="text-gray-400">Beaconhouse School System Margalla Campus, Islamabad</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
