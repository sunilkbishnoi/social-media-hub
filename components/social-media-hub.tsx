"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Share2, Copy, Check, ExternalLink, TrendingUp } from "lucide-react"
import { toast } from "sonner"

interface Platform {
  name: string
  url: string
  category: string
  icon: string
  username: string
  stats?: {
    followers?: number
    posts?: number
  }
}

const platforms: Platform[] = [
  // Professional
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sunilkumarbishnoi/",
    category: "Professional",
    icon: "💼",
    username: "sunilkumarbishnoi",
    stats: { followers: 500 },
  },
  {
    name: "Wellfound",
    url: "https://wellfound.com/u/sunilbishnoi",
    category: "Professional",
    icon: "🚀",
    username: "sunilbishnoi",
  },
  {
    name: "About.me",
    url: "https://about.me/bishnoisunil",
    category: "Professional",
    icon: "👤",
    username: "bishnoisunil",
  },

  // Development
  {
    name: "GitHub",
    url: "https://github.com/sunilkbishnoi",
    category: "Development",
    icon: "💻",
    username: "sunilkbishnoi",
    stats: { followers: 100, posts: 50 },
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/sunilbishnoi",
    category: "Development",
    icon: "🦊",
    username: "sunilbishnoi",
  },
  {
    name: "Bitbucket",
    url: "https://bitbucket.org/bishnoisunil/",
    category: "Development",
    icon: "📦",
    username: "bishnoisunil",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/sunilbishnoi",
    category: "Development",
    icon: "✏️",
    username: "sunilbishnoi",
  },
  {
    name: "Replit",
    url: "https://replit.com/@sunilkbishnoi83",
    category: "Development",
    icon: "⚡",
    username: "sunilkbishnoi83",
  },

  // Learning
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/_sunilbishnoi_/",
    category: "Learning",
    icon: "📚",
    username: "_sunilbishnoi_",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/sunilkbishnoi83",
    category: "Learning",
    icon: "🎯",
    username: "sunilkbishnoi83",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/sunilkbishnoi/",
    category: "Learning",
    icon: "🤓",
    username: "sunilkbishnoi",
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org/learner/sunilbishnoi",
    category: "Learning",
    icon: "🎓",
    username: "sunilbishnoi",
  },

  // Design
  {
    name: "Behance",
    url: "https://www.behance.net/sunilbishnoi10",
    category: "Design",
    icon: "🎨",
    username: "sunilbishnoi10",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/sunilbishnoi",
    category: "Design",
    icon: "🏀",
    username: "sunilbishnoi",
  },
  {
    name: "Figma",
    url: "https://www.figma.com/@sunilbishnoi",
    category: "Design",
    icon: "🎯",
    username: "sunilbishnoi",
  },

  // Social
  {
    name: "Instagram",
    url: "https://www.instagram.com/_bishnoisunil_",
    category: "Social",
    icon: "📸",
    username: "_bishnoisunil_",
  },
  { name: "Twitter", url: "https://x.com/_sunilbishnoi_", category: "Social", icon: "🐦", username: "_sunilbishnoi_" },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/_sunilbishnoi_/",
    category: "Social",
    icon: "🤖",
    username: "_sunilbishnoi_",
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@_sunilbishnoi_",
    category: "Social",
    icon: "🐘",
    username: "_sunilbishnoi_",
  },
  {
    name: "Discord",
    url: "https://discord.com/channels/@_sunilbishnoi_",
    category: "Social",
    icon: "💬",
    username: "_sunilbishnoi_",
  },

  // Content
  {
    name: "YouTube",
    url: "https://youtube.com/@sunilkbishnoi83",
    category: "Content",
    icon: "🎥",
    username: "sunilkbishnoi83",
  },
  {
    name: "Medium",
    url: "https://medium.com/@_sunilbishnoi_",
    category: "Content",
    icon: "✍️",
    username: "_sunilbishnoi_",
  },
  { name: "Dev.to", url: "https://dev.to/sunilbishnoi", category: "Content", icon: "👨‍💻", username: "sunilbishnoi" },
  { name: "Vimeo", url: "https://vimeo.com/sunilbishnoi", category: "Content", icon: "🎬", username: "sunilbishnoi" },
]

export function SocialMediaHub() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null)

  const categories = Array.from(new Set(platforms.map((p) => p.category)))

  const filteredPlatforms = platforms.filter((platform) => {
    const matchesSearch =
      platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.username.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || platform.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCopyLink = (platform: Platform) => {
    navigator.clipboard.writeText(platform.url)
    setCopiedPlatform(platform.name)
    toast.success(`Copied ${platform.name} link to clipboard`)
    setTimeout(() => setCopiedPlatform(null), 2000)
  }

  const handleShare = async (platform: Platform) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Follow me on ${platform.name}`,
          text: `Check out my ${platform.name} profile!`,
          url: platform.url,
        })
        toast.success("Thanks for sharing!")
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      handleCopyLink(platform)
    }
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Connect with Me</h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Find me across the web on various platforms. Follow, connect, or reach out!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search platforms or usernames..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-card border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textMuted w-5 h-5" />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                !selectedCategory
                  ? "bg-primary text-background"
                  : "bg-card border-2 border-border text-text hover:bg-primary/10"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-background"
                    : "bg-card border-2 border-border text-text hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{platform.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg">{platform.name}</h3>
                      <p className="text-sm text-textMuted">@{platform.username}</p>
                    </div>
                  </div>
                  {platform.stats && (
                    <div className="text-right">
                      <div className="flex items-center text-sm text-textMuted">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {platform.stats.followers && <span>{platform.stats.followers.toLocaleString()} followers</span>}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Profile
                  </a>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCopyLink(platform)}
                      className="p-2 text-text hover:text-primary transition-colors"
                      title="Copy link"
                    >
                      {copiedPlatform === platform.name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => handleShare(platform)}
                      className="p-2 text-text hover:text-primary transition-colors"
                      title="Share profile"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

