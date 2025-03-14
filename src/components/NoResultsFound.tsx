
import React from 'react';
import SocialCard from './SocialCard';
import { SocialAccount } from '../types';

interface NoResultsFoundProps {
  searchQuery: string;
  suggestedPlatforms: SocialAccount[];
  onShare: (account: SocialAccount) => void;
  onCopy: (account: SocialAccount) => void;
}

const NoResultsFound: React.FC<NoResultsFoundProps> = ({
  searchQuery,
  suggestedPlatforms,
  onShare,
  onCopy
}) => {
  return (
    <div className="text-center mb-8 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
      <p className="text-gray-600 dark:text-gray-300 mb-4">No accounts found for "{searchQuery}"</p>
      {suggestedPlatforms.map((platform) => (
        <SocialCard
          key={platform.platform}
          account={platform}
          found={false}
          onShare={onShare}
          onCopy={onCopy}
        />
      ))}
      {suggestedPlatforms.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Try searching for a different platform or username
        </p>
      )}
    </div>
  );
};

export default NoResultsFound;
