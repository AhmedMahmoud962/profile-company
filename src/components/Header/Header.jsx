import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './Header.css'

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeContext()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <header className={`header ${darkMode ? 'dark' : 'light'} ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="header-logo"
          >
            <Link to="/" className="logo-link">
              Polygon Software
            </Link>
          </motion.div>

          <nav className="header-nav desktop-nav">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="header-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>

            <button
              className="mobile-menu-btn mobile-only"
              onClick={handleDrawerToggle}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${mobileOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''} ${darkMode ? 'dark' : 'light'}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <h3 className="mobile-logo">Polygon Software</h3>
            <button className="close-btn" onClick={handleDrawerToggle}>
              ✖️
            </button>
          </div>
          
          <nav className="mobile-nav">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={handleDrawerToggle}></div>}
    </>
  )
}

export default Header