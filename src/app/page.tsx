"use client";
import React, { useState } from "react";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ParticlesWrapper from "@/components/3d/ParticlesWrapper";
import ResumeModal from "@/components/ui/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        imageUrl="/cv.png"
      />

      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesWrapper />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left py-20">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 title-glow">
              Financial <span className="text-gradient">Technology</span> &<br />Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Expertly engineering intelligent financial systems and scalable data solutions via high-performance Full-Stack development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer"
              >
                Explore Architecture
              </button>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold backdrop-blur-md border border-white/10 transition-all cursor-pointer border-glow"
              >
                View Resume
              </button>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 glass-card p-2">
              <img
                src="/profile.jpg"
                alt="Abdul Samad Saleem"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </div>

      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

    </main>
  );
}
