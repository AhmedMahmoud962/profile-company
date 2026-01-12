import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import './AboutSection.css'
import { Link } from 'react-router-dom'
import { getAboutServices } from '../API/AboutServices'
import imageAbout1 from '../../assets/images/about1.webp'
import imageAbout2 from '../../assets/images/about2.webp'
import imageAbout3 from '../../assets/images/about3.webp'
const AboutSection = () => {
  const { darkMode } = useThemeContext()
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [aboutData, setAboutData] = useState({
    title: 'Loading...',
    description: '',
  })

  const isAboutPage = location.pathname === '/about'

  // Fetch about data
  useEffect(() => {
    getAboutServices()
      .then((res) => setAboutData(res.data))
      .catch((err) => console.error('Error fetching about data:', err))
  }, [])

  // Handle mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`about-container ${darkMode ? 'dark' : 'light'}`}>
      <div
        className={`about-grid ${isMobile ? 'mobile' : ''} ${
          isVisible ? 'animate' : ''
        }`}
      >
        <div className="image-container" style={{ '--delay': '0s' }}>
          <div className="image-placeholder first-image-placeholder">
            <img
              src={imageAbout2}
              alt="About Polygon Software"
              className="about-image"
            
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="right-image-column">
            <div className="second-image-placeholder">
              <img
                src={imageAbout1}
                alt="About Polygon Software"
                className="about-image"
              
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            <div className="third-image-placeholder">
              <img
                src={imageAbout3}
                alt="About Polygon Software"
                className="about-image"

                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="content-container" style={{ '--delay': '0.2s' }}>
          <span className="section-label" role="heading" aria-level="2">
            About Us
          </span>
          <h2 className={`main-title ${isMobile ? 'mobile' : ''}`}>
            {aboutData.title}
          </h2>
          <div
            className={`about-description-text ${darkMode ? 'dark' : 'light'}`}
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          />
          <ul className="list-items">
            <li className="list-item">
              <span className="check-icon">✓</span>
              Beautiful and easy to understand UI, professional animations
            </li>
            <li className="list-item">
              <span className="check-icon">✓</span>
              These advantages are pixel perfect design & clear code delivered
            </li>
            <li className="list-item">
              <span className="check-icon">✓</span>
              Present your services with flexible, convenient and multipurpose
            </li>
          </ul>
          {!isAboutPage && (
            <Link to="/about" className="learn-more">
              Get the Offer
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
