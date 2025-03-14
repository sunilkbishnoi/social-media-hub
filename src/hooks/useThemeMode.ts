
import { useState, useEffect } from 'react';

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
  
  useEffect(() => {
    // Apply dark mode on mount and when it changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
