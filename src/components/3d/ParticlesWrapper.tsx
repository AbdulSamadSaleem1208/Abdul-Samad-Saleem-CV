"use client";

import dynamic from "next/dynamic";

// We use next/dynamic with ssr: false here inside a Client Component
const Particles = dynamic(() => import("@/components/3d/Particles"), { ssr: false });

export default function ParticlesWrapper() {
    return <Particles />;
}
