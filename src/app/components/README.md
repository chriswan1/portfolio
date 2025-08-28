# 3D Interactive Project Showcase

This directory contains the components for a 3D interactive project showcase built with React Three Fiber, Drei, and React Spring.

## Components

### RingShowcase
The main component that renders the 3D scene with:
- Central sphere (like Earth)
- Orbiting project cards in a tilted circular ring
- Auto-rotation animation
- Interactive hover and click effects

### CentralSphere
Renders the central sphere with:
- Animated rotation
- Glow effect
- Atmospheric ring

### ProjectCard
Individual project cards that:
- Display project thumbnails and information
- Animate on hover (scale, position, rotation)
- Handle click interactions
- Show category badges

### PreviewPanel
Modal panel that displays:
- Detailed project information
- Large preview image
- Project tags and description
- Action buttons for navigation

### PlaceholderImage
Utility component for generating placeholder images with:
- Custom colors and text
- Canvas-based rendering
- Responsive sizing

## Usage

```tsx
import { RingShowcase } from './components/RingShowcase';

// In your page component
<section className="min-h-screen">
  <RingShowcase />
</section>
```

## Data Structure

Projects are defined in `src/app/projects.ts` with the following interface:

```tsx
interface Project {
  id: string;
  title: string;
  href: string;
  thumbnail: string; // Data URL or image path
  preview: string;   // Data URL or image path
  description: string;
  tags: string[];
  category: string;
}
```

## Features

- **3D Environment**: Full 3D scene with lighting and environment
- **Smooth Animations**: Spring-based animations for all interactions
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized rendering with proper cleanup
- **Dark Mode**: Supports both light and dark themes

## Dependencies

- `@react-three/fiber`: React renderer for Three.js
- `@react-three/drei`: Useful helpers for React Three Fiber
- `@react-spring/three`: Spring animations for 3D objects
- `@react-spring/web`: Spring animations for 2D UI elements
- `three`: 3D graphics library

## Customization

You can customize the showcase by:
- Modifying the `projects` array in `projects.ts`
- Adjusting animation parameters in the spring configs
- Changing colors and styling in the component files
- Adding new interaction effects
- Customizing the 3D environment and lighting
