"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { projects } from '../projects';
import { ProjectCard } from './ProjectCard';
import { CentralSphere } from './CentralSphere';
import { PreviewPanel } from './PreviewPanel';

export function RingShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectHover = (projectId: string | null) => {
    setHoveredProject(projectId);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <div className="relative w-full h-screen">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Central Sphere */}
          <CentralSphere />
          
          {/* Project Cards Ring */}
          <group>
            {projects.map((project, index) => {
              const angle = (index / projects.length) * Math.PI * 2;
              const radius = 4;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  position={[x, 0, z]}
                  rotation={[0, -angle, 0]}
                  isHovered={hoveredProject === project.id}
                  onHover={handleProjectHover}
                  onClick={handleProjectClick}
                />
              );
            })}
          </group>
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Preview Panel */}
      {selectedProjectData && (
        <PreviewPanel
          project={selectedProjectData}
          onClose={handleClosePreview}
        />
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-2 rounded-lg">
        <p>Hover over cards to preview • Click to view details</p>
      </div>
    </div>
  );
}
