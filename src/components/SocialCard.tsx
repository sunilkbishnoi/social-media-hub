
import React from 'react';
import { ExternalLink, Share, Copy } from 'lucide-react';
import { SocialAccount } from '../types';
import { Button } from './ui/button';

interface SocialCardProps {
  account: SocialAccount;
  found: boolean;
  onShare: (account: SocialAccount) => void;
  onCopy: (account: SocialAccount) => void;
}

const SocialCard: React.FC<SocialCardProps> = ({ account, found, onShare, onCopy }) => {
  if (!found) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {account.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{account.platform}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">@{account.username}</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <a
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ExternalLink size={16} className="mr-1" />
          Visit Profile
        </a>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCopy(account)}
            className="h-8 w-8"
          >
            <Copy size={16} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onShare(account)}
            className="h-8 w-8"
          >
            <Share size={16} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
