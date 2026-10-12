import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { socialLinks } from '../data/site'

const navItems = [
  { name: 'Work', href: '/projects' },
  { name: 'Journey', href: '/journey' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Resume', href: '/resume' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const goToContact = (e) => {
    e.preventDefault()
    setIsOpen(false)
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 350)
    }
  }

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500 ${
            scrolled || isOpen
              ? 'border-line bg-paper/80 shadow-[0_8px_30px_-12px_rgba(26,24,20,0.25)] backdrop-blur-md'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2" aria-label="Home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-lg italic text-cream transition-colors duration-300 group-hover:bg-accent">
              S
            </span>
            <span className="hidden font-serif text-xl sm:inline">Sudhir Singh</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-1.5 text-sm transition-colors duration-300 ${
                    isActive ? 'text-cream' : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="/#contact" onClick={goToContact} className="btn-ink hidden !py-2 !px-5 md:inline-flex">
              Let&apos;s talk
            </a>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="relative flex h-9 w-9 items-center justify-center md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-cream px-6 pb-10 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {[{ name: 'Home', href: '/' }, ...navItems].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <NavLink
                    to={item.href}
                    end
                    className={({ isActive }) =>
                      `display flex items-baseline gap-4 py-1 text-6xl ${isActive ? 'italic text-accent' : 'text-ink'}`
                    }
                  >
                    <span className="eyebrow">0{i + 1}</span>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href="/#contact"
                onClick={goToContact}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="display flex items-baseline gap-4 py-1 text-6xl"
              >
                <span className="eyebrow">06</span>
                Contact
              </motion.a>
            </div>
            <div className="flex gap-6">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="eyebrow !text-ink">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
