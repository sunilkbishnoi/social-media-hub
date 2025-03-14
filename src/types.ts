
import { ReactNode } from 'react';

export interface SocialAccount {
  platform: string;
  username: string;
  url: string;
  signupUrl: string;
  icon: ReactNode;
}
