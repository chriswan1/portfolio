"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function CentralSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Main Sphere */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4A90E2"
          metalness={0.1}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Glow Effect */}
      <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#4A90E2"
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Atmospheric Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[1.5, 2, 32]} />
        <meshBasicMaterial
          color="#4A90E2"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
