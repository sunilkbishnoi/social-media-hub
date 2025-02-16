"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl font-bold mb-6">
              I'm Sunil Bishnoi,
              <br />
              <span className="text-primary">a Cyber Enthusiast.</span>
            </h1>
            <p className="text-xl mb-8 text-text/80">
              Currently pursuing B. Tech in Computer Science Engineering with a specialization in Cyber Security and
              Networking at ITM (SLS) Baroda University.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1600.jpg-xkxwWk2x6NuzRc4cG8HyTFPsEBsOYy.jpeg"
              alt="Sunil Bishnoi"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

