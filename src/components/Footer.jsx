import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/S07singh', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/sudhir-singh867', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sudhirsingh3923@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-bg border-t border-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold text-green-accent mb-2">
              Sudhir Kumar Singh
            </div>
            <p className="text-slate text-sm">
              Full-Stack Developer | AI & Data Science Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate hover:text-green-accent transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-slate text-sm">
              © {currentYear} Sudhir Kumar Singh. All rights reserved.
            </p>
            <p className="text-slate text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <FaHeart className="text-red-500 mx-1" size={12} /> by Sudhir
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-slate/20"
        >
          <div className="text-center">
            <p className="text-slate text-sm">
              Built with React, Vite, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
