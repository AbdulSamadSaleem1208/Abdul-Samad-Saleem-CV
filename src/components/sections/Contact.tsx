"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                    Establish <span className="text-gradient">Connection</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-1 md:p-2 relative overflow-hidden"
            >
                <div className="bg-[#0A0A0F]/80 p-6 md:p-10 rounded-xl relative z-10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10 text-gray-400 font-mono text-sm">
                        <Terminal size={18} className="text-purple-400" />
                        <span>sys.open_secure_channel()</span>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400 font-mono">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400 font-mono">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400 font-mono">Payload</label>
                            <textarea
                                required
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Let's build the future..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className={`mt-4 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all ${status === "success"
                                    ? "bg-emerald-500 text-white"
                                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer"
                                }`}
                        >
                            {status === "idle" && <><Send size={18} /> Transmit Message</>}
                            {status === "submitting" && <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</>}
                            {status === "success" && <>Transmission Complete</>}
                        </button>
                    </form>
                </div>
            </motion.div>

            {/* Footer / Socials */}
            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-6">
                <div className="flex gap-6">
                    <a href="https://github.com/AbdulSamadSaleem1208" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-white/10 hover:-translate-y-1 hover:text-blue-400 transition-all text-gray-400">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-samad-saleem-a5261b279/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-white/10 hover:-translate-y-1 hover:text-blue-400 transition-all text-gray-400">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:abdulsamadsaleem1208@gmail.com" className="p-3 glass-card hover:bg-white/10 hover:-translate-y-1 hover:text-purple-400 transition-all text-gray-400">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-gray-500 text-sm font-mono text-center">
                    © 2026 Abdul Samad Saleem. Architected with Next.js & Three.js.
                </p>
            </div>
        </section>
    );
}
