
import { useEffect } from 'react';

export const useParallaxCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.parallax-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (
          x > 0 && 
          x < rect.width && 
          y > 0 && 
          y < rect.height
        ) {
          const xOffset = ((x / rect.width) - 0.5) * 10;
          const yOffset = ((y / rect.height) - 0.5) * 10;
          
          card.setAttribute('style', `
            transform: rotateY(${xOffset}deg) rotateX(${-yOffset}deg) translateZ(10px);
            transition: transform 0.1s ease-out;
          `);
        }
      });
    };
    
    const handleMouseLeave = () => {
      cards.forEach((card) => {
        card.setAttribute('style', `
          transform: rotateY(0) rotateX(0) translateZ(0);
          transition: transform 0.6s ease;
        `);
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
};
