import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', href: '/', sectionId: null },
    { name: 'Projects', href: '/projects', sectionId: 'projects' },
    { name: 'Certificates', href: '/certificates', sectionId: 'certificates' },
    { name: 'Journey', href: '/journey', sectionId: null },
    { name: 'Resume', href: '/resume', sectionId: null },
  ]

  // Smooth scroll to sections on home page
  const handleHomeScroll = (e, sectionId) => {
    if (location.pathname === '/' && sectionId) {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-green-accent cursor-pointer"
            >
              SK
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => {
                // If on homepage and item has a sectionId, use anchor link with scroll
                if (location.pathname === '/' && item.sectionId) {
                  return (
                    <a
                      key={item.name}
                      href={`#${item.sectionId}`}
                      onClick={(e) => handleHomeScroll(e, item.sectionId)}
                      className="text-light-slate hover:text-green-accent transition-colors duration-300 font-medium"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        {item.name}
                      </motion.span>
                    </a>
                  );
                }
                // Otherwise, use NavLink for page navigation
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-light-slate hover:text-green-accent transition-colors duration-300 font-medium ${
                        isActive ? 'text-green-accent' : ''
                      }`
                    }
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>
                  </NavLink>
                );
              })}
              {/* Contact Link (scroll on home page) */}
              {location.pathname === '/' && (
                <a
                  href="#contact"
                  onClick={(e) => handleHomeScroll(e, 'contact')}
                  className="text-light-slate hover:text-green-accent transition-colors duration-300 font-medium"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    Contact
                  </motion.span>
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-slate hover:text-green-accent transition-colors duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-secondary/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item, index) => {
              // If on homepage and item has a sectionId, use anchor link with scroll
              if (location.pathname === '/' && item.sectionId) {
                return (
                  <a
                    key={item.name}
                    href={`#${item.sectionId}`}
                    onClick={(e) => {
                      handleHomeScroll(e, item.sectionId);
                      setIsOpen(false);
                    }}
                    className="block px-3 py-2 text-light-slate hover:text-green-accent transition-colors duration-300"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.span>
                  </a>
                );
              }
              // Otherwise, use NavLink for page navigation
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-light-slate hover:text-green-accent transition-colors duration-300 ${
                      isActive ? 'text-green-accent' : ''
                    }`
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              );
            })}
            {/* Contact Link (scroll on home page) */}
            {location.pathname === '/' && (
              <a
                href="#contact"
                onClick={(e) => {
                  handleHomeScroll(e, 'contact')
                  setIsOpen(false)
                }}
                className="block px-3 py-2 text-light-slate hover:text-green-accent transition-colors duration-300"
              >
                Contact
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar

