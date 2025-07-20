import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './NotFound.css'

const NotFound = () => {
  const { darkMode } = useThemeContext()

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Polygon Software</title>
        <meta name="description" content="Sorry, the page you are looking for could not be found." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className={`not-found-container ${darkMode ? 'dark' : 'light'}`}>
        {/* Background Animation */}
        <div className="background-animation">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`floating-shape shape-${i + 1}`} />
          ))}
        </div>

        <div className="not-found-content">
          {/* 404 Number Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="error-number"
          >
            <span className="number-4">4</span>
            <span className="number-0">0</span>
            <span className="number-4-2">4</span>
          </motion.div>

          {/* Polygon Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="polygon-logo-404"
          >
            <div className="polygon-shape">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={`poly-side-404 side-${i + 1}`} />
              ))}
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="error-message"
          >
            <h1>Oops! Page Not Found</h1>
            <p>
              The page you're looking for seems to have disappeared into the digital void. 
              Don't worry, even the best explorers sometimes take a wrong turn!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="action-buttons"
          >
            <Link to="/" className="home-button primary">
              <i className="fas fa-home"></i>
              <span>Back to Home</span>
            </Link>
            
            <Link to="/projects" className="home-button secondary">
              <i className="fas fa-briefcase"></i>
              <span>View Projects</span>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="quick-links"
          >
            <h3>Or explore these sections:</h3>
            <div className="links-grid">
              <Link to="/about" className="quick-link">
                <i className="fas fa-users"></i>
                <span>About Us</span>
              </Link>
              <Link to="/contact" className="quick-link">
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </Link>
              <Link to="/projects" className="quick-link">
                <i className="fas fa-laptop-code"></i>
                <span>Projects</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NotFound