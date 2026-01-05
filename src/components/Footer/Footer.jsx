import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import { getSetting } from '../API/settingServices'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
const Footer = () => {
  const { darkMode } = useThemeContext()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [settingsData, setSettingsData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch settings data
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await getSetting()
        setSettingsData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching settings:', error)
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  const quickLinks = [
    { name: 'GDPR', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ]

  // Dynamic social icons based on API data
  const socialIcons = settingsData
    ? [
        {
          icon: <FacebookIcon />,
          name: 'Facebook',
          url: settingsData.facebook || '#',
        },
        {
          icon: <TwitterIcon />,
          name: 'Twitter',
          url: settingsData.twitter || '#',
        },
        {
          icon: <LinkedInIcon />,
          name: 'LinkedIn',
          url: settingsData.linkedin || '#',
        },
        {
          icon: <InstagramIcon />,
          name: 'Instagram',
          url: settingsData.instagram || '#',
        },
      ]
    : []

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
      behavior: 'smooth',
    })
  }

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = settingsData ? `2${settingsData.phone}` : '201033993202'
    const message = 'Hello! I would like to know more about your services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  if (loading) {
    return (
      <footer className={`footer-section-modern ${darkMode ? 'dark' : 'light'}`}>
        <div className="footer-container">
          <div className="footer-loading">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <footer className={`footer-section-modern ${darkMode ? 'dark' : 'light'}`}>
        <div className="footer-two-tone">
          {/* Left Section - CTA */}
          <div className="footer-cta-section">
            <motion.div
              className="footer-cta-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="footer-cta-label">READY TO DO THIS</p>
              <h2 className="footer-cta-title">
                Let's get to<br />work
              </h2>
              <Link
                to="/contact"
                className="footer-cta-button "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get the offer
                <ArrowForwardIcon className="arrow-icon" />
              </Link>
            </motion.div>
          </div>

          {/* Right Section - Info */}
          <div className="footer-info-section">
            <div className="footer-info-grid">
              {/* Quick Links */}
              <motion.div
                className="footer-info-column"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-info-title">Quick Links</h4>
                <ul className="footer-info-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-info-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Say Hello */}
              <motion.div
                className="footer-info-column"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="footer-info-title">Say Hello</h4>
                <a 
                  href={`mailto:${settingsData?.email || 'info@polygonsoftware.site'}`}
                  className="footer-email"
                >
                  {settingsData?.email || 'info@polygonsoftware.site'}
                </a>
                <div className="footer-social-icons">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="footer-social-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              className="footer-copyright-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="footer-copyright-text">
                © {new Date().getFullYear()}. All rights reserved by{' '}
                {settingsData?.name || 'Polygon Software'}. We are tracking any intention of piracy.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
      </Suspense>

      {/* WhatsApp Float Button */}
      <motion.button
        className={`whatsapp-float ${darkMode ? 'dark' : 'light'}`}
        onClick={openWhatsApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className={`scroll-to-top ${darkMode ? 'dark' : 'light'}`}
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
          title="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </motion.button>
      )}
    </>
  )
}

export default Footer