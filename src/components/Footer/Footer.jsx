import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { getSetting } from '../API/settingServices';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { darkMode } = useThemeContext();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [settingsData, setSettingsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch settings
  useEffect(() => {
    getSetting()
      .then((response) => {
        setSettingsData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching settings:', error);
        setSettingsData({}); // fallback to empty object
        setIsLoading(false);
      });
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = settingsData ? `2${settingsData.phone}` : '201033993202';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickLinks = [
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Terms and Conditions', href: '/terms-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const socialIcons = settingsData
    ? [
        { icon: <FacebookIcon />, url: settingsData.facebook || '#' },
        { icon: <TwitterIcon />, url: settingsData.twitter || '#' },
        { icon: <LinkedInIcon />, url: settingsData.linkedin || '#' },
        { icon: <InstagramIcon />, url: settingsData.instagram || '#' },
      ]
    : [];

  // Don't render footer until data is loaded
  if (isLoading) {
    return null;
  }

  return (
    <>
      <footer className={`footer-section-modern ${darkMode ? 'dark' : 'light'}`}>
        <div className="footer-two-tone">
          {/* Left CTA */}
          <div className="footer-cta-section">
            <div className="footer-cta-content">
              <p className="footer-cta-label">READY TO DO THIS</p>
              <h2 className="footer-cta-title">
                Let's get to<br />work
              </h2>
              <Link to="/contact" className="footer-cta-button">
                Get the offer
                <ArrowForwardIcon className="arrow-icon" />
              </Link>
            </div>
          </div>

          {/* Right Info */}
          <div className="footer-info-section">
            <div className="footer-info-grid">
              {/* Quick Links */}
              <div className="footer-info-column">
                <h3 className="footer-info-title">Quick Links</h3>
                <ul className="footer-info-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="footer-info-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="footer-info-column">
                <h3 className="footer-info-title">Say Hello</h3>
                <a
                  href={`mailto:${settingsData?.email || 'info@polygonsoftware.site'}`}
                  className="footer-email"
                >
                  {settingsData?.email || 'info@polygonsoftware.site'}
                </a>
                <div className="footer-social-icons">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="footer-social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Social link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright-section">
              <p className="footer-copyright-text">
                © {new Date().getFullYear()}. All rights reserved by{' '}
                {settingsData?.name || 'Polygon Software'}. We are tracking any intention of piracy.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        className={`whatsapp-float ${darkMode ? 'dark' : 'light'}`}
        onClick={openWhatsApp}
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          className={`scroll-to-top ${darkMode ? 'dark' : 'light'}`}
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default Footer;