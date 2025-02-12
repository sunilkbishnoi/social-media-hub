"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Mail } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const emails = [
    { address: "sunilkbishnoi83@gmail.com", primary: true },
    { address: "sunilkbishnoi83@proton.me", primary: false },
    { address: "sunilkbishnoi83@tutanota.com", primary: false },
    { address: "sunilkbishnoi83@fastmail.com", primary: false },
  ]

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {emails.map((email) => (
                <div key={email.address} className="flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-orange-500 dark:text-orange-400" />
                  <span className={email.primary ? "font-semibold" : ""}>{email.address}</span>
                  <button
                    onClick={() => copyEmail(email.address)}
                    className="ml-2 p-2 rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded-md border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded-md border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 rounded-md border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

