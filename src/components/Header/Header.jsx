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
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Projects', path: '/projects', icon: '💼' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // تقليل scroll progress calculations للأداء - معطل حالياً
      // if (isScrolled) {
      //   const scrollProgress = Math.min((window.scrollY / 1000) * 100, 100)
      //   document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`)
      // }
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
          {/* Logo مبسط - بدون Framer Motion */}
          <div className="header-brand">
            <Link to="/" className="brand-link" onClick={handleLinkClick}>
              <div className="brand-icon">
                <span className="brand-letter">P</span>
              </div>
              <div className="brand-text-container">
                <span className="brand-text">Polygon</span>
                <span className="brand-subtitle">Software</span>
              </div>
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
                    <span className="nav-icon">{item.icon}</span>
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
                        <span className="drawer-link-icon">{item.icon}</span>
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
