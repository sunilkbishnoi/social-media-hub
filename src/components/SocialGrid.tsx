
import React from 'react';
import SocialCard from './SocialCard';
import { SocialAccount } from '../types';

interface SocialGridProps {
  accounts: SocialAccount[];
  onShare: (account: SocialAccount) => void;
  onCopy: (account: SocialAccount) => void;
}

const SocialGrid: React.FC<SocialGridProps> = ({ accounts, onShare, onCopy }) => {
  return (
    <div className="social-grid">
      {accounts.map((account) => (
        <div 
          key={account.platform} 
          className="parallax-card"
          data-platform={account.platform}
        >
          <SocialCard
            account={account}
            found={true}
            onShare={onShare}
            onCopy={onCopy}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialGrid;
