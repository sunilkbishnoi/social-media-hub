"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Security Application",
    description:
      "A security application that monitors app access to cameras, microphones, files, and locations to enhance digital privacy.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/yourusername/security-app",
    demo: "https://security-app-demo.com",
  },
  {
    title: "AI-Powered Threat Detection",
    description: "An AI-driven system for detecting and mitigating cybersecurity threats in real-time.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/yourusername/ai-threat-detection",
    demo: "https://ai-threat-detection-demo.com",
  },
  {
    title: "Ethical Hacking Toolkit",
    description:
      "A comprehensive toolkit for ethical hackers, including various penetration testing tools and educational resources.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/yourusername/ethical-hacking-toolkit",
    demo: "https://ethical-hacking-toolkit-demo.com",
  },
]

export function ProjectsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Projects Showcase</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{projects[currentIndex].description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      GitHub
                    </a>
                    <a
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevProject}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </button>
          <button
            onClick={nextProject}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}

