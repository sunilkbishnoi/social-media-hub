
import React, { useEffect, useRef } from 'react';
import { Twitter, Github, Linkedin, Instagram, Youtube, AtSign, Star, Sparkles, Hexagon, Triangle, Square, Circle, Zap, Wifi } from 'lucide-react';

const icons = [Twitter, Github, Linkedin, Instagram, Youtube, AtSign, Star, Sparkles, Hexagon, Triangle, Square, Circle, Zap, Wifi];

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const iconElements: HTMLDivElement[] = [];
    
    // Create floating icons
    for (let i = 0; i < 40; i++) {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      const iconEl = document.createElement('div');
      iconEl.className = 'absolute opacity-5 dark:opacity-3';
      iconEl.style.left = `${Math.random() * 100}%`;
      iconEl.style.top = `${Math.random() * 100}%`;
      iconEl.style.transform = `scale(${0.5 + Math.random() * 1.5})`;
      
      // Add different animations
      const animations = ['float', 'pulse', 'slide', 'spin'];
      const selectedAnimation = animations[Math.floor(Math.random() * animations.length)];
      iconEl.style.animation = `${selectedAnimation} ${5 + Math.random() * 15}s ease-in-out infinite`;
      iconEl.style.animationDelay = `${Math.random() * 5}s`;
      
      // Create an SVG element for the icon
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      
      // Use React.createElement to get the icon's path data
      const iconObject = React.createElement(IconComponent, {});
      
      // Safely extract paths from the icon component
      try {
        if (iconObject && 
            typeof iconObject === 'object' && 
            'props' in iconObject && 
            iconObject.props && 
            iconObject.props.children) {
          
          const pathElements = iconObject.props.children;
          
          if (Array.isArray(pathElements)) {
            pathElements.forEach(pathEl => {
              if (pathEl && 
                  typeof pathEl === 'object' && 
                  'props' in pathEl && 
                  pathEl.props) {
                
                const path = document.createElementNS(svgNS, "path");
                Object.entries(pathEl.props).forEach(([key, value]) => {
                  if (typeof value === 'string') {
                    path.setAttribute(key, value);
                  }
                });
                svg.appendChild(path);
              }
            });
          }
        }
      } catch (err) {
        console.error('Error rendering icon:', err);
      }
      
      iconEl.appendChild(svg);
      container.appendChild(iconEl);
      iconElements.push(iconEl);
    }
    
    // Add geometric shapes for more visual interest
    for (let i = 0; i < 25; i++) {
      const shapeEl = document.createElement('div');
      const size = 30 + Math.random() * 100;
      const opacity = 0.03 + Math.random() * 0.07;
      
      shapeEl.style.position = 'absolute';
      shapeEl.style.width = `${size}px`;
      shapeEl.style.height = `${size}px`;
      shapeEl.style.left = `${Math.random() * 100}%`;
      shapeEl.style.top = `${Math.random() * 100}%`;
      shapeEl.style.opacity = opacity.toString();
      
      // Add rotation and shape
      const shapes = ['rounded-full', 'rounded-lg', 'skew-x-12', 'rotate-45', 'hexagon', 'triangle'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      if (shape === 'hexagon') {
        // Create a hexagon using clip-path
        shapeEl.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
      } else if (shape === 'triangle') {
        // Create a triangle using clip-path
        shapeEl.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      } else {
        shapeEl.className = `${shape}`;
      }
      
      // Randomize colors
      const colors = ['bg-teal-500', 'bg-emerald-500', 'bg-cyan-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500'];
      const darkColors = ['dark:bg-teal-700', 'dark:bg-emerald-700', 'dark:bg-cyan-700', 'dark:bg-blue-700', 'dark:bg-indigo-700', 'dark:bg-purple-700'];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const darkColor = darkColors[Math.floor(Math.random() * darkColors.length)];
      
      shapeEl.className += ` ${color} ${darkColor}`;
      
      // Add animations
      const animations = ['float', 'pulse', 'slide', 'spin', 'bounce'];
      const selectedAnimation = animations[Math.floor(Math.random() * animations.length)];
      shapeEl.style.animation = `${selectedAnimation} ${8 + Math.random() * 15}s ease-in-out infinite`;
      shapeEl.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(shapeEl);
      iconElements.push(shapeEl);
    }
    
    // Add gradient blobs
    for (let i = 0; i < 5; i++) {
      const blobEl = document.createElement('div');
      const size = 150 + Math.random() * 200;
      
      blobEl.style.position = 'absolute';
      blobEl.style.width = `${size}px`;
      blobEl.style.height = `${size}px`;
      blobEl.style.left = `${Math.random() * 100}%`;
      blobEl.style.top = `${Math.random() * 100}%`;
      blobEl.style.opacity = '0.03';
      blobEl.style.filter = 'blur(50px)';
      blobEl.style.borderRadius = '50%';
      
      // Randomize gradient colors
      const gradients = [
        'bg-gradient-to-br from-purple-500 to-pink-500',
        'bg-gradient-to-br from-teal-500 to-emerald-500',
        'bg-gradient-to-br from-blue-500 to-indigo-500',
        'bg-gradient-to-br from-amber-500 to-orange-500',
        'bg-gradient-to-br from-rose-500 to-pink-500'
      ];
      
      blobEl.className = gradients[Math.floor(Math.random() * gradients.length)];
      
      // Add animations
      blobEl.style.animation = `pulse ${10 + Math.random() * 20}s ease-in-out infinite alternate`;
      blobEl.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(blobEl);
      iconElements.push(blobEl);
    }
    
    // Add grid lines
    const gridSize = 50; // Size of each grid cell in pixels
    const gridOpacity = 0.03;
    
    // Create vertical lines
    for (let i = 0; i < window.innerWidth / gridSize; i++) {
      const lineEl = document.createElement('div');
      lineEl.className = 'absolute h-full w-px bg-gray-400 dark:bg-gray-600';
      lineEl.style.left = `${i * gridSize}px`;
      lineEl.style.opacity = gridOpacity.toString();
      container.appendChild(lineEl);
      iconElements.push(lineEl);
    }
    
    // Create horizontal lines
    for (let i = 0; i < window.innerHeight / gridSize; i++) {
      const lineEl = document.createElement('div');
      lineEl.className = 'absolute w-full h-px bg-gray-400 dark:bg-gray-600';
      lineEl.style.top = `${i * gridSize}px`;
      lineEl.style.opacity = gridOpacity.toString();
      container.appendChild(lineEl);
      iconElements.push(lineEl);
    }
    
    // Clean up
    return () => {
      iconElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
      aria-hidden="true"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* The floating icons will be dynamically added here */}
    </div>
  );
};

export default AnimatedBackground;
