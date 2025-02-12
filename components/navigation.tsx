"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1600.jpg-xkxwWk2x6NuzRc4cG8HyTFPsEBsOYy.jpeg"
                alt="Sunil Bishnoi"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-2xl">Sunil Bishnoi</span>
          </motion.div>
          <div className="flex items-center">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.button
              className="ml-4 p-2 rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-orange-500" />
              ) : (
                <Moon className="h-5 w-5 text-orange-500" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
}

