"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Code2,
  TerminalSquare,
  Shield,
  Palette,
  PenTool,
  MessageSquare,
  Video,
  Share2,
  Database,
  BookOpen,
  Newspaper,
  Briefcase,
} from "lucide-react"

const socialMediaPlatforms = [
  { name: "GitHub", icon: Github, url: "https://github.com/sunilkbishnoi", category: "Development" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sunilkumarbishnoi", category: "Professional" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/_sunilbishnoi_", category: "Social" },
  { name: "Dev.to", icon: Code2, url: "https://dev.to/sunilbishnoi", category: "Development" },
  {
    name: "Stack Overflow",
    icon: TerminalSquare,
    url: "https://stackoverflow.com/users/22966184/sunil-bishnoi",
    category: "Development",
  },
  { name: "TryHackMe", icon: Shield, url: "https://tryhackme.com/p/sunilbishnoi", category: "Security" },
  { name: "Dribbble", icon: Palette, url: "https://dribbble.com/sunilbishnoi", category: "Design" },
  { name: "Behance", icon: PenTool, url: "https://www.behance.net/sunilbishnoi10", category: "Design" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@sunilkbishnoi83", category: "Content" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/_sunilbishnoi_", category: "Social" },
  { name: "Reddit", icon: MessageSquare, url: "https://www.reddit.com/user/_sunilbishnoi_/", category: "Social" },
  { name: "TikTok", icon: Video, url: "https://www.tiktok.com/@_sunilbishnoi_", category: "Social" },
  { name: "Mastodon", icon: Share2, url: "https://mastodon.social/@sunilbishnoi", category: "Social" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/ais/1277726966685358?s=5", category: "Social" },
  { name: "Kaggle", icon: Database, url: "https://www.kaggle.com/bishnoisunil", category: "Development" },
  { name: "Goodreads", icon: BookOpen, url: "https://goodreads.com/sunilbishnoi", category: "Content" },
  { name: "Substack", icon: Newspaper, url: "https://substack.com/@bishnoisunil", category: "Content" },
  { name: "Wellfound", icon: Briefcase, url: "https://wellfound.com/u/sunilbishnoi", category: "Professional" },
]

export function SocialMediaHub() {
  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Connect with Me</h2>
        {["Professional", "Development", "Security", "Design", "Content", "Social"].map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {socialMediaPlatforms
                .filter((platform) => platform.category === category)
                .map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 dark:hover:bg-gray-700"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <platform.icon className="h-8 w-8 mb-2 text-orange-500 dark:text-orange-400" />
                    <span className="text-sm font-medium text-center">{platform.name}</span>
                  </motion.a>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

