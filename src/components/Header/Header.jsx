import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './Header.css'

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeContext()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigationItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Portfolio', path: '/portfolio', icon: '💼' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      
      // Calculate scroll progress
      const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(scrollProgress, 100)}%`)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
    // Prevent body scroll when drawer is open
    if (!mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const handleLinkClick = () => {
    setMobileOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        handleLinkClick()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  return (
    <>
      <header className={`modern-header ${darkMode ? 'theme-dark' : 'theme-light'} ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="header-container">
          
          {/* Enhanced Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="header-brand"
          >
            <Link to="/" className="brand-link" onClick={handleLinkClick}>
              <div className="brand-icon">
                <span className="brand-letter">P</span>
              </div>
              <div className="brand-text-container">
                <span className="brand-text">olygon</span>
                <span className="brand-subtitle">Software</span>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="header-navigation desktop-nav">
            <ul className="nav-menu">
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'nav-active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                    <span className="nav-indicator"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Enhanced Header Actions */}
          <div className="header-actions">
            
            {/* Enhanced Theme Toggle */}
            <motion.button
              className="theme-toggle-btn"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={darkMode ? 'dark' : 'light'}
                  className="theme-icon"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? '☀️' : '🌙'}
                </motion.span>
              </AnimatePresence>
              <span className="theme-bg"></span>
            </motion.button>

            {/* Enhanced Mobile Menu Toggle */}
            <button
              className={`mobile-toggle ${mobileOpen ? 'toggle-active' : ''}`}
              onClick={handleDrawerToggle}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="toggle-line line-1"></span>
              <span className="toggle-line line-2"></span>
              <span className="toggle-line line-3"></span>
              <span className="toggle-bg"></span>
            </button>
            
          </div>
        </div>

        {/* Enhanced Scroll Progress Bar */}
        <div className="scroll-progress-bar"></div>
      </header>

      {/* Enhanced Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Enhanced Overlay */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleDrawerToggle}
            />
            
            {/* Enhanced Drawer */}
            <motion.div
              className={`mobile-drawer ${darkMode ? 'drawer-dark' : 'drawer-light'}`}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
            >
              <div className="drawer-content">
                
                {/* Enhanced Drawer Header */}
                <div className="drawer-header">
                  <div className="drawer-brand">
                    <div className="drawer-brand-icon">
                      <span className="drawer-brand-letter">P</span>
                    </div>
                    <div className="drawer-brand-text">
                      <span className="drawer-brand-name">Polygon</span>
                      <span className="drawer-brand-sub">Software</span>
                    </div>
                  </div>
                  <button 
                    className="drawer-close" 
                    onClick={handleDrawerToggle}
                    aria-label="Close menu"
                  >
                    <span className="close-line close-line-1"></span>
                    <span className="close-line close-line-2"></span>
                  </button>
                </div>

                {/* Enhanced Drawer Navigation */}
                <nav className="drawer-navigation">
                  <ul className="drawer-menu">
                    {navigationItems.map((item, index) => (
                      <motion.li 
                        key={item.name} 
                        className="drawer-item"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          to={item.path}
                          className={`drawer-link ${location.pathname === item.path ? 'drawer-active' : ''}`}
                          onClick={handleLinkClick}
                        >
                          <span className="drawer-link-icon">{item.icon}</span>
                          <span className="drawer-link-text">{item.name}</span>
                          <span className="drawer-link-arrow">→</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Enhanced Drawer Footer */}
                <motion.div 
                  className="drawer-footer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="drawer-theme-section">
                    <div className="drawer-theme-info">
                      <span className="drawer-theme-icon">
                        {darkMode ? '🌙' : '☀️'}
                      </span>
                      <div className="drawer-theme-text">
                        <span className="drawer-theme-label">Theme</span>
                        <span className="drawer-theme-value">
                          {darkMode ? 'Dark Mode' : 'Light Mode'}
                        </span>
                      </div>
                    </div>
                    <button
                      className={`drawer-theme-toggle ${darkMode ? 'theme-dark-active' : 'theme-light-active'}`}
                      onClick={toggleDarkMode}
                      aria-label="Toggle theme"
                    >
                      <span className="theme-slider"></span>
                    </button>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header