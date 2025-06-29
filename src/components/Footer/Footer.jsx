import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import { 
  Facebook, 
  Twitter, 
  LinkedIn, 
  Instagram,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
  KeyboardArrowUp
} from '@mui/icons-material'
import './Footer.css'

const Footer = () => {
  const { darkMode } = useThemeContext()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const quickLinks = [
    { name: 'GDPR', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]

  const socialIcons = [
    { icon: <Facebook />, name: 'Facebook', url: '#' },
    { icon: <Twitter />, name: 'Twitter', url: '#' },
    { icon: <LinkedIn />, name: 'LinkedIn', url: '#' },
    { icon: <Instagram />, name: 'Instagram', url: '#' },
  ]

  const contactInfo = [
    { 
      icon: <Email />, 
      text: 'info@polygonsoftware.site',
      link: 'mailto:info@polygonsoftware.site',
      type: 'email'
    },
    { 
      icon: <Phone />, 
      text: '+20 103 399 32 02',
      link: 'tel:+201033993202',
      type: 'phone'
    },
    { 
      icon: <LocationOn />, 
      text: '28 H/1 Shukry Abdel Halim Street, Maadi',
      type: 'address'
    },
  ]

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = '201033993202' // WhatsApp format (country code + number without +)
    const message = 'Hello! I would like to know more about your services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
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
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="contact-text clickable"
                          title={`${info.type === 'email' ? 'Send email' : 'Make a call'}`}
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="contact-text">{info.text}</span>
                      )}
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

      {/* WhatsApp Float Button */}
      <motion.button
        className={`whatsapp-float ${darkMode ? 'dark' : 'light'}`}
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        title="Chat with us on WhatsApp"
      >
        <WhatsApp />
      </motion.button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className={`scroll-to-top ${darkMode ? 'dark' : 'light'}`}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          title="Scroll to top"
        >
          <KeyboardArrowUp />
        </motion.button>
      )}
    </>
  )
}

export default Footer