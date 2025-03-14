
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Social Media Hub <br></br>• Sunil Bishnoi •
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        <b>Connect with me online</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
