"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleSwarm({ count = 3000 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
        }
        return temp;
    }, [count]);

    const colors = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const colorPalette = [
            new THREE.Color("#3B82F6"), // Blue
            new THREE.Color("#A855F7"), // Purple
            new THREE.Color("#10B981"), // Mint
            new THREE.Color("#F43F5E"), // Rose
        ];
        for (let i = 0; i < count; i++) {
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            temp[i * 3] = color.r;
            temp[i * 3 + 1] = color.g;
            temp[i * 3 + 2] = color.b;
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        particles.forEach((particle: any, i: number) => {
            const { speed, xFactor, zFactor } = particle;
            const t = (particle.t += speed / 2);
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            const mouseX = (state.pointer.x * state.viewport.width) / 2;
            const mouseY = (state.pointer.y * state.viewport.height) / 2;

            // Calculate anti-gravity repulsion from mouse
            const dx = mouseX - xFactor * a;
            const dy = mouseY - (particle.yFactor * b);
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Repulsion force
            const maxRepulsionDist = 6;
            let repulsionX = 0;
            let repulsionY = 0;

            if (dist < maxRepulsionDist) {
                const force = (maxRepulsionDist - dist) / maxRepulsionDist;
                repulsionX = -(dx / dist) * force * 4;
                repulsionY = -(dy / dist) * force * 4;
            }

            // Apply upward anti-gravity drift
            particle.yFactor += speed * 6;

            // Wrap particles around 
            if (particle.yFactor > 50) {
                particle.yFactor = -50;
            }

            dummy.position.set(
                xFactor * a + repulsionX,
                particle.yFactor + repulsionY,
                zFactor * s
            );

            dummy.scale.setScalar(Math.max(0.15, s * 0.35));
            dummy.updateMatrix();

            if (mesh.current) {
                mesh.current.setMatrixAt(i, dummy.matrix);
            }
        });

        if (mesh.current) {
            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.08, 12, 12]}>
                <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
            </sphereGeometry>
            <meshBasicMaterial transparent opacity={0.6} vertexColors />
        </instancedMesh>
    );
}

export default function Particles() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                <ParticleSwarm />
            </Canvas>
        </div>
    );
}
