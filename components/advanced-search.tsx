"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, ExternalLink } from "lucide-react"

interface Platform {
  name: string
  url: string
  createAccountUrl: string
  icon: string
}

const platforms: Platform[] = [
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/",
    createAccountUrl: "https://accounts.snapchat.com/accounts/signup",
    icon: "👻",
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/",
    createAccountUrl: "https://www.pinterest.com/signup/",
    icon: "📌",
  },
  { name: "Twitch", url: "https://twitch.tv/", createAccountUrl: "https://www.twitch.tv/signup", icon: "🎮" },
  { name: "Medium", url: "https://medium.com/@", createAccountUrl: "https://medium.com/signup", icon: "📝" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/",
    createAccountUrl: "https://www.spotify.com/signup",
    icon: "🎵",
  },
  // Add more platforms as needed
]

export function AdvancedSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Platform[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const filteredPlatforms = platforms.filter((platform) =>
        platform.name.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filteredPlatforms)
      setLoading(false)
    }, 500)
  }

  return (
    <section className="py-12 px-4">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Discover my presence on any platform..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                if (e.target.value) handleSearch()
              }}
              className="w-full p-4 pr-12 text-lg rounded-xl border-2 border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 shadow-lg"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className={`h-6 w-6 text-orange-500 ${loading ? "animate-spin" : ""}`} />
            </div>
          </div>

          <AnimatePresence>
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-orange-200 dark:border-gray-700"
              >
                {results.map((platform) => (
                  <motion.div
                    key={platform.name}
                    className="p-4 border-b border-orange-100 dark:border-gray-700 last:border-0"
                    whileHover={{ backgroundColor: "rgba(251, 146, 60, 0.1)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{platform.icon}</span>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={platform.createAccountUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-1 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Create Account
                        </a>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-1 text-sm rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

