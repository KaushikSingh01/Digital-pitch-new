"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ---- Rotating network core -------------------------------------------------
function NetworkCore({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  // Orbiting node positions (low count for performance).
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 26;
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963;
      pts.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(2.15));
    }
    return pts;
  }, []);

  // Connecting lines between nearby nodes (constellation).
  const lineGeom = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.9) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, [nodes]);

  const nodeGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodes.flatMap((v) => [v.x, v.y, v.z]), 3),
    );
    return g;
  }, [nodes]);

  useFrame((state, delta) => {
    if (reduced) return;
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      // subtle parallax toward pointer
      const { x, y } = state.pointer;
      group.current.rotation.y += x * 0.0025;
      group.current.rotation.x += -y * 0.0015;
    }
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
      inner.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      {/* Glowing core */}
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#0b1220"
          emissive="#1d4ed8"
          emissiveIntensity={0.6}
          roughness={0.35}
          metalness={0.6}
          flatShading
        />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[2.15, 2]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Constellation lines */}
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.28} />
      </lineSegments>

      {/* Nodes */}
      <points geometry={nodeGeom}>
        <pointsMaterial color="#67e8f9" size={0.11} sizeAttenuation transparent opacity={0.95} />
      </points>
    </group>
  );
}

// ---- Background particles ---------------------------------------------------
function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial color="#93c5fd" size={0.03} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 5]} intensity={40} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#8b5cf6" />
    </>
  );
}

function ResponsiveParticles({ reduced }: { reduced: boolean }) {
  const { size } = useThree();
  const isMobile = size.width < 768;
  const count = reduced ? 0 : isMobile ? 120 : 320;
  if (count === 0) return null;
  return <Particles count={count} />;
}

export default function HeroScene({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ pointerEvents: "none" }}
    >
      <Lights />
      <NetworkCore reduced={reduced} />
      <ResponsiveParticles reduced={reduced} />
    </Canvas>
  );
}
