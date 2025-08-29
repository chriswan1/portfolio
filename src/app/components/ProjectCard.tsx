"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Project } from '../projects';

interface ProjectCardProps {
  project: Project;
  position: [number, number, number];
  rotation: [number, number, number];
  isHovered: boolean;
  onHover: (projectId: string | null) => void;
  onClick: (projectId: string) => void;
}

export function ProjectCard({ 
  project, 
  position, 
  rotation, 
  isHovered, 
  onHover, 
  onClick 
}: ProjectCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isPressed, setIsPressed] = useState(false);
  
  // Create a simple colored texture for the project
  const texture = useTexture(project.thumbnail);
  
  // Spring animations - more subtle for seamless flow
  const { scale, position: animatedPosition } = useSpring({
    scale: isHovered ? 1.05 : 1,
    position: isHovered 
      ? [position[0] * 1.1, position[1] + 0.2, position[2] * 1.1] as [number, number, number]
      : position,
    config: { mass: 1, tension: 200, friction: 40 }
  });

  // Calculate rotation - keep original rotation for seamless flow
  const currentRotation = rotation;

  // Idle animation
  useFrame((state) => {
    if (meshRef.current && !isHovered) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
    }
  });

  const handlePointerOver = () => {
    onHover(project.id);
  };

  const handlePointerOut = () => {
    onHover(null);
  };

  const handlePointerDown = () => {
    setIsPressed(true);
  };

  const handlePointerUp = () => {
    setIsPressed(false);
    onClick(project.id);
  };

  return (
    <animated.group
      position={animatedPosition}
      rotation={currentRotation}
      scale={scale}
    >
      {/* Card Background */}
      <mesh
        ref={meshRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={isHovered ? "#ffffff" : "#f8f9fa"}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Project Thumbnail */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Project Title */}
      <Text
        position={[0, -0.6, 0.02]}
        fontSize={0.08}
        color={isHovered ? "#1a1a1a" : "#4a4a4a"}
        anchorX="center"
        anchorY="middle"
        maxWidth={1.3}
        textAlign="center"
      >
        {project.title}
      </Text>

      {/* Category Badge */}
      <mesh position={[0, -0.75, 0.02]}>
        <planeGeometry args={[0.8, 0.15]} />
        <meshStandardMaterial
          color={isHovered ? "#4A90E2" : "#e9ecef"}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      <Text
        position={[0, -0.75, 0.03]}
        fontSize={0.06}
        color={isHovered ? "#ffffff" : "#6c757d"}
        anchorX="center"
        anchorY="middle"
      >
        {project.category}
      </Text>

      {/* Subtle hover effect */}
      {isHovered && (
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.6, 1.1]} />
          <meshBasicMaterial
            color="#4A90E2"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </animated.group>
  );
}
