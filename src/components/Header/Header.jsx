import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import './Header.css'

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeContext()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigationItems = [
    { name: 'Home', path: '/'},
    { name: 'About', path: '/about'},
    { name: 'Projects', path: '/projects'},
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    // تحسين scroll listener
    let ticking = false
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
        setTimeout(() => {
          ticking = false
        }, 16)
      }
    }

    const controller = new AbortController()

    window.addEventListener('scroll', optimizedScroll, {
      passive: true,
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
    document.body.style.overflow = mobileOpen ? 'unset' : 'hidden'
  }

  const handleLinkClick = () => {
    setMobileOpen(false)
    document.body.style.overflow = 'unset'
  }

  // تبسيط escape key handler
  useEffect(() => {
    const controller = new AbortController()

    if (!mobileOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') handleLinkClick()
    }

    document.addEventListener('keydown', handleEscape, {
      passive: false,
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`modern-header ${darkMode ? 'theme-dark' : 'theme-light'} ${
          scrolled ? 'header-scrolled' : 'header-transparent'
        }`}
      >
        <div className="header-container">
          {/* Logo with Image */}
          <div className="header-brand">
            <Link to="/" className="brand-link">
              <img
                src="/software.png"
                alt="Polygon Software Logo"
                width="140"
                height="40"
                decoding="async"
              />
            </Link>
          </div>

          {/* Desktop Navigation مبسط */}
          <nav className="header-navigation desktop-nav">
            <ul className="nav-menu">
              {navigationItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'nav-active' : ''
                    }`}
                  >
                    <span className="nav-text">{item.name}</span>
                    <span className="nav-indicator"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions مبسط */}
          <div className="header-actions">
            {/* Theme Toggle مبسط */}
            <button
              className="theme-toggle-btn"
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
              <span className="theme-bg"></span>
            </button>

            {/* Mobile Menu Toggle مبسط */}
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

        {/* Scroll Progress Bar - مخفي حالياً */}
        {/* <div className="scroll-progress-bar"></div> */}
      </header>

      {/* Mobile Drawer مع transitions محسنة */}
      {mobileOpen && (
        <>
          {/* Overlay مع transition */}
          <div
            className="mobile-overlay mobile-overlay-show"
            onClick={handleDrawerToggle}
          />

          {/* Drawer مع transition */}
          <div
            className={`mobile-drawer mobile-drawer-show ${
              darkMode ? 'drawer-dark' : 'drawer-light'
            }`}
          >
            <div className="drawer-content">
              {/* Drawer Header */}
              <div className="drawer-header">
                <div className="drawer-brand">
                  <div className="drawer-brand-icon">
                    <img
                      src="/software.png"
                      alt="Polygon Software Logo"
                      className="drawer-logo-image"
                    />
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

              {/* Drawer Navigation */}
              <nav className="drawer-navigation">
                <ul className="drawer-menu">
                  {navigationItems.map((item, index) => (
                    <li
                      key={item.name}
                      className="drawer-item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Link
                        to={item.path}
                        className={`drawer-link ${
                          location.pathname === item.path ? 'drawer-active' : ''
                        }`}
                        onClick={handleLinkClick}
                      >
                        <span className="drawer-link-text">{item.name}</span>
                        <span className="drawer-link-arrow">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className="drawer-footer">
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
                    className={`drawer-theme-toggle ${
                      darkMode ? 'theme-dark-active' : 'theme-light-active'
                    }`}
                    onClick={toggleDarkMode}
                    aria-label="Toggle theme"
                  >
                    <span className="theme-slider"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
