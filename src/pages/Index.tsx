
import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import ParallaxHeader from '../components/ParallaxHeader';
import AnimatedBackground from '../components/AnimatedBackground';
import FilterButtons from '../components/FilterButtons';
import NoResultsFound from '../components/NoResultsFound';
import SocialGrid from '../components/SocialGrid';
import Footer from '../components/Footer';
import { useSocialAccounts } from '../hooks/useSocialAccounts';
import { useThemeMode } from '../hooks/useThemeMode';
import { useScrollDetection } from '../hooks/useScrollDetection';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef<HTMLDivElement>(null);
  
  const { isDarkMode, toggleDarkMode } = useThemeMode();
  const isScrolled = useScrollDetection(headerRef);
  const { 
    filteredAccounts, 
    suggestedPlatforms, 
    handleShare, 
    handleCopy, 
    filters 
  } = useSocialAccounts(searchQuery, activeFilter);

  return (
    <div className="min-h-screen grid-bg relative">
      <AnimatedBackground />
      
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isScrolled={isScrolled}
      />
      <div ref={headerRef}>
        <ParallaxHeader />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <FilterButtons 
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {filteredAccounts.length === 0 && (
          <NoResultsFound 
            searchQuery={searchQuery}
            suggestedPlatforms={suggestedPlatforms}
            onShare={handleShare}
            onCopy={handleCopy}
          />
        )}

        <SocialGrid 
          accounts={filteredAccounts}
          onShare={handleShare}
          onCopy={handleCopy}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
