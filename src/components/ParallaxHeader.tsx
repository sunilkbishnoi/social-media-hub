
import React, { useEffect, useRef } from 'react';

const ParallaxHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !titleRef.current || !subtitleRef.current || !shapesRef.current) return;
      
      const scrollY = window.scrollY;
      // Header parallax
      headerRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      headerRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      
      // Title parallax - moves slightly faster
      titleRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;
      
      // Subtitle parallax - moves slightly slower
      subtitleRef.current.style.transform = `translateY(${scrollY * -0.1}px)`;
      
      // Background shapes parallax
      shapesRef.current.style.transform = `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-teal-500/20 to-emerald-500/20 dark:from-teal-900/20 dark:to-emerald-900/20">
      {/* Parallax background shapes */}
      <div 
        ref={shapesRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Decorative parallelograms */}
        <div className="absolute top-20 left-[10%] w-40 h-40 bg-teal-400/10 dark:bg-teal-600/10 skew-x-12 transform rotate-12 parallelogram-animate"></div>
        <div className="absolute top-40 right-[15%] w-32 h-32 bg-emerald-400/10 dark:bg-emerald-600/10 skew-x-12 transform -rotate-12 parallelogram-animate" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-10 left-[20%] w-24 h-24 bg-cyan-400/10 dark:bg-cyan-600/10 skew-x-12 transform rotate-45 parallelogram-animate" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[30%] right-[25%] w-20 h-20 bg-green-400/10 dark:bg-green-600/10 skew-x-12 transform -rotate-45 parallelogram-animate" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-[20%] right-[10%] w-36 h-36 bg-teal-300/10 dark:bg-teal-500/10 skew-x-12 transform rotate-30 parallelogram-animate" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[10%] left-[30%] w-28 h-28 bg-emerald-300/10 dark:bg-emerald-500/10 skew-x-12 transform -rotate-30 parallelogram-animate" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div 
        ref={headerRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
      >
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400"
        >
          Social Media Hub
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl max-w-2xl text-gray-700 dark:text-gray-300"
        >
          Connect with me across all platforms. Follow, connect, or reach out!
        </p>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20"></div>
    </div>
  );
};

export default ParallaxHeader;
