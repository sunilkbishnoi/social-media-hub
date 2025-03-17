
import { useState, useMemo } from 'react';
import { socialAccounts } from '../data/socialAccounts';
import { SocialAccount } from '../types';
import { useToast } from '@/components/ui/use-toast';

// Helper function to determine category
const determineCategory = (account: SocialAccount) => {
  const professionalPlatforms = ['LinkedIn', 'Portfolio', 'Wellfound', 'Credly', 'Coursera', 'Calendly'];
  const developmentPlatforms = ['GitHub', 'GitLab', 'BitBucket', 'CodeSandbox', 'Replit', 'CodePen', 'Vercel', 'StackOverflow', 'Figma', 'Google Developer'];
  const learningPlatforms = ['LeetCode', 'HackerRank', 'CodeChef', 'Codeforces', 'TopCoder', 'HackerEarth', 'GeeksforGeeks', 'Roadmap.sh', 'TryHackMe', 'CryptoHack', 'Crackmes', 'Root-Me', 'HackerOne', 'Kaggle'];
  const designPlatforms = ['Behance', 'Dribbble', 'CreativeMarket'];
  const socialPlatforms = ['Twitter', 'Instagram', 'Discord', 'Discord Server', 'Reddit', 'WhatsApp Channel', 'Telegram', 'Skype', 'Mastodon', 'BlueSky', 'Tumblr', 'Pinterest', 'Vero', 'Snapchat', 'VSCO', 'Twitch', 'Patreon', 'WeAre8'];
  const contentPlatforms = ['Medium', 'YouTube', 'Dev.to', 'Hashnode', 'Vimeo', 'Spotify'];
  const linkInBioPlatforms = ['Linktr.ee', 'Solo.to', 'Tap.bio', 'Shor.by', 'Lnk.bio', 'About.me', 'Campsite.bio', 'Carrd', 'SunilBishnoi.bio', 'Invt.co'];

  if (professionalPlatforms.includes(account.platform)) return 'Professional';
  if (developmentPlatforms.includes(account.platform)) return 'Development';
  if (learningPlatforms.includes(account.platform)) return 'Learning';
  if (designPlatforms.includes(account.platform)) return 'Design';
  if (socialPlatforms.includes(account.platform)) return 'Social';
  if (contentPlatforms.includes(account.platform)) return 'Content';
  if (linkInBioPlatforms.includes(account.platform)) return 'Content';
  
  return 'Other';
};

export const useSocialAccounts = (searchQuery: string, activeFilter: string) => {
  const { toast } = useToast();
  const filters = ['All', 'Professional', 'Development', 'Learning', 'Design', 'Social', 'Content'];

  const filteredAccounts = useMemo(() => {
    let accounts = socialAccounts;
    
    // Only filter by category if not "All"
    if (activeFilter !== 'All') {
      accounts = accounts.filter(account => {
        const category = determineCategory(account);
        return category === activeFilter;
      });
    }
    
    if (!searchQuery) return accounts;
    
    const query = searchQuery.toLowerCase();
    return accounts.filter(
      account =>
        account.platform.toLowerCase().includes(query) ||
        account.username.toLowerCase().includes(query)
    );
  }, [searchQuery, activeFilter]);

  const suggestedPlatforms = useMemo(() => {
    if (!searchQuery || filteredAccounts.length > 0) return [];
    
    const query = searchQuery.toLowerCase();
    return socialAccounts.filter(
      account => !filteredAccounts.includes(account) &&
      account.platform.toLowerCase().includes(query)
    );
  }, [searchQuery, filteredAccounts]);

  const handleShare = async (account: SocialAccount) => {
    try {
      await navigator.share({
        title: `${account.platform} Profile`,
        text: `Check out my ${account.platform} profile: @${account.username}`,
        url: account.url
      });
      toast({
        title: "Shared successfully!",
        description: `Shared ${account.platform} profile.`
      });
    } catch (error) {
      toast({
        title: "Share failed",
        description: "Couldn't share the profile. Try copying the link instead.",
        variant: "destructive"
      });
    }
  };

  const handleCopy = (account: SocialAccount) => {
    navigator.clipboard.writeText(account.url);
    toast({
      title: "Copied!",
      description: `${account.platform} profile link copied to clipboard.`
    });
  };

  return { 
    filteredAccounts, 
    suggestedPlatforms, 
    handleShare, 
    handleCopy, 
    filters 
  };
};
