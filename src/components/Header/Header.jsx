import { Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../context/ThemeContext';
import './Header.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`header-container ${mode === 'light' ? 'header-light' : 'header-dark'}`}>
      <div className="toolbar-container">
        {/* Logo */}
        <Link 
          to="/" 
          className="logo-container" 
          onClick={closeMobileMenu}
        >
          <div className="logo-icon">
            P
          </div>
          <Typography className="logo-text">
            Polygon Software
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-container">
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              className={`nav-link ${
                mode === 'light' ? 'nav-link-light' : 'nav-link-dark'
              } ${location.pathname === item.path ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <IconButton
          onClick={toggleColorMode}
          className={`theme-toggle ${
            mode === 'light' ? 'theme-toggle-light' : 'theme-toggle-dark'
          }`}
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${
            mode === 'light' ? 'mobile-menu-button-light' : 'mobile-menu-button-dark'
          } ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${
          mode === 'light' ? 'mobile-menu-light' : 'mobile-menu-dark'
        } ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                className={`mobile-nav-link ${
                  mode === 'light' ? 'mobile-nav-link-light' : 'mobile-nav-link-dark'
                } ${location.pathname === item.path ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          <div className="mobile-theme-toggle">
            <IconButton
              onClick={() => {
                toggleColorMode();
                closeMobileMenu();
              }}
              className={`theme-toggle ${
                mode === 'light' ? 'theme-toggle-light' : 'theme-toggle-dark'
              }`}
            >
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}