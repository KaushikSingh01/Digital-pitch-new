"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ---- Orbit ring ------------------------------------------------------------
function OrbitRing({
  radius,
  tilt,
  color,
  speed,
  opacity = 0.5,
  reduced,
}: {
  radius: number;
  tilt: [number, number, number];
  color: string;
  speed: number;
  opacity?: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 12, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// ---- Rotating network core -------------------------------------------------
function NetworkCore({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * 2.399963;
      pts.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(2.15));
    }
    return pts;
  }, []);

  const lineGeom = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.85) {
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
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
      const { x, y } = state.pointer;
      group.current.rotation.y += x * 0.003;
      group.current.rotation.x += -y * 0.002;
    }
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04;
      inner.current.scale.setScalar(s);
    }
    if (halo.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.9 + 1) * 0.06;
      halo.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      {/* Additive glow halo — fakes bloom */}
      <mesh ref={halo}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color="#3b6fff"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Glowing faceted core */}
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#0a1024"
          emissive="#2a54e6"
          emissiveIntensity={0.75}
          roughness={0.3}
          metalness={0.7}
          flatShading
        />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[2.15, 2]} />
        <meshBasicMaterial color="#37e5d4" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Constellation lines */}
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#6b95ff" transparent opacity={0.3} />
      </lineSegments>

      {/* Nodes */}
      <points geometry={nodeGeom}>
        <pointsMaterial color="#8af0e4" size={0.12} sizeAttenuation transparent opacity={0.95} />
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
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 11 - 2;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.012;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial color="#aec7ff" size={0.03} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 5]} intensity={45} color="#37e5d4" />
      <pointLight position={[-5, -3, 2]} intensity={32} color="#8b5cf6" />
      <pointLight position={[0, 5, -4]} intensity={18} color="#3b6fff" />
    </>
  );
}

function ResponsiveScene({ reduced }: { reduced: boolean }) {
  const { size } = useThree();
  const isMobile = size.width < 768;
  const particleCount = reduced ? 0 : isMobile ? 140 : 380;
  return (
    <>
      <Lights />
      <NetworkCore reduced={reduced} />
      {!isMobile && (
        <>
          <OrbitRing radius={2.7} tilt={[1.35, 0.2, 0]} color="#37e5d4" speed={0.16} opacity={0.55} reduced={reduced} />
          <OrbitRing radius={3.05} tilt={[1.05, 0.6, 0.3]} color="#6b95ff" speed={-0.11} opacity={0.4} reduced={reduced} />
        </>
      )}
      {particleCount > 0 && <Particles count={particleCount} />}
    </>
  );
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
      <ResponsiveScene reduced={reduced} />
    </Canvas>
  );
}
