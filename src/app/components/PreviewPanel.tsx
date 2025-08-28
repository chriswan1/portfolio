"use client";

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { Project } from '../projects';

interface PreviewPanelProps {
  project: Project;
  onClose: () => void;
}

export function PreviewPanel({ project, onClose }: PreviewPanelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { opacity, transform, scale } = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    scale: isVisible ? 1 : 0.95,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleProjectClick = () => {
    if (project.href.startsWith('http')) {
      window.open(project.href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = project.href;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <animated.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        style={{ opacity }}
        onClick={handleClose}
      />

      {/* Panel */}
      <animated.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        style={{ opacity, transform, scale }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 id="project-title" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Preview Image */}
            <div className="space-y-4">
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Category
                </h3>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleProjectClick}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Project
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
