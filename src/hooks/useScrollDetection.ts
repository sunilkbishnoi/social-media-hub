
import { useState, useEffect, RefObject } from 'react';

export const useScrollDetection = (headerRef: RefObject<HTMLDivElement>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the header
      if (headerRef.current) {
        const headerPosition = headerRef.current.getBoundingClientRect().bottom;
        setIsScrolled(headerPosition < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerRef]);

  return isScrolled;
};
