import React from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './Footer.css'

const Footer = () => {
  const { darkMode } = useThemeContext()

  const quickLinks = [
    { name: 'GDPR', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]

  const socialIcons = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
  ]

  const contactInfo = [
    { icon: '📧', text: 'info@polygonsoftware.site' },
    { icon: '📞', text: '+10 339 32 02' },
    { icon: '📍', text: '28 H/1 Shukry Abdel Halim Street, Maadi' },
  ]

  return (
    <footer className={`footer-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="footer-logo">Polygon Software</h3>
              <p className="footer-description">
                Leading software development company providing innovative solutions
                for businesses worldwide.
              </p>
              <div className="footer-social">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{info.icon}</span>
                    <span className="contact-text">{info.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
          © {new Date().getFullYear()}. All rights reserved by Polygon Software.
            <br />
            We are tracking any intention of piracy.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer