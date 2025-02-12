"use client"

import { motion } from "framer-motion"

export function AboutMe() {
  return (
    <section id="about" className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4">
            Hi, I'm Sunil Bishnoi, a Computer Science Engineering student specializing in Cybersecurity & Networking.
          </p>
          <p className="mb-4">
            I'm passionate about cybersecurity, AI-powered security solutions, futuristic UI/UX design, and ethical
            hacking.
          </p>
          <p className="mb-4">
            Currently, I'm developing a security application that monitors app access to cameras, microphones, files,
            and locations to enhance digital privacy.
          </p>
          <p>
            I'm always learning and exploring the latest tech trends to stay at the forefront of the rapidly evolving
            tech landscape.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

