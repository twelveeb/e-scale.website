"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 3000;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      if (t > 0.7) {
        col[i * 3] = 0.376;
        col[i * 3 + 1] = 0.647;
        col[i * 3 + 2] = 0.98;
      } else if (t > 0.4) {
        col[i * 3] = 0.145;
        col[i * 3 + 1] = 0.388;
        col[i * 3 + 2] = 0.922;
      } else {
        const b = 0.3 + Math.random() * 0.4;
        col[i * 3] = b;
        col[i * 3 + 1] = b;
        col[i * 3 + 2] = b + 0.1;
      }
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.02 + mouse.x * 0.02;
    meshRef.current.rotation.x = t * 0.01 + mouse.y * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        fog
      />
    </points>
  );
}

function SceneFog() {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.Fog(0x000000, 8, 25);
    return () => { scene.fog = null; };
  }, [scene]);
  return null;
}

function CameraController() {
  const { camera } = useThree();
  const targetY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      targetY.current = progress * -2;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    camera.position.y += (targetY.current - camera.position.y) * 0.05;
  });

  return null;
}

export function ParticleField() {
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneFog />
        <Particles />
        <CameraController />
      </Canvas>
    </div>
  );
}
