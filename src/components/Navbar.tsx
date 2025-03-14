
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  isScrolled?: boolean;
}

const Navbar = ({ 
  isDarkMode, 
  toggleDarkMode, 
  searchQuery = '', 
  setSearchQuery = () => {}, 
  isScrolled = false 
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Title */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-500">
              Social Media Hub
            </span>
          </div>
          
          {/* Desktop Search Bar */}
          {!isMobile && (
            <div className="flex-1 max-w-md mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search platforms or usernames..."
                  className="pl-10 py-1 h-9 w-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-full"
                />
              </div>
            </div>
          )}
          
          {/* Mobile View Controls */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[385px]">
                  <div className="flex flex-col h-full py-6 space-y-6">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-500">
                      Social Media Hub
                    </h2>
                    
                    <div className="relative mt-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                      <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search platforms or usernames..."
                        className="pl-10 py-1 h-10 w-full"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-4 mt-6">
                      <a
                        href="https://bishnoisunil.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg py-2 hover:text-teal-500 transition-colors"
                      >
                        Portfolio
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
          
          {/* Desktop View Controls */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <a
                href="https://bishnoisunil.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                Portfolio
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile Search Bar (outside of SlideOver) */}
        {isMobile && !isMenuOpen && (
          <div className="pb-3 pt-0 px-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search platforms or usernames..."
                className="pl-10 py-1 h-9 w-full bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
