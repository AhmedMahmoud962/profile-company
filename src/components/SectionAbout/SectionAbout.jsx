import { useState, useEffect } from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'
import { getAboutServices } from '../API/AboutServices'
import { getImageUrl } from '../utils/constants'

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [aboutData, setAboutData] = useState({})

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await getAboutServices()
        setAboutData(response.data)
      } catch (error) {
        console.error('Error fetching about data:', error)
        setAboutData({})
      }
    }
    fetchAboutData()
  }, [])

  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    const controller = new AbortController()

    window.addEventListener('resize', checkMobile, {
      passive: true,
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="about-container">
      <div
        className={`about-grid ${isMobile ? 'mobile' : ''} ${
          isVisible ? 'animate' : ''
        }`}
      >
        <div className="image-container" style={{ '--delay': '0s' }}>
          {/* Image placeholder */}
          <div className="image-placeholder">
            <img
              src={getImageUrl(aboutData.image)}
              alt="About Polygon Software"
              className="about-image"
              width="800"
              height="400"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
            />
            {!imageLoaded && <div className="image-skeleton"></div>}
          </div>
        </div>

        <div className="content-container" style={{ '--delay': '0.2s' }}>
          <h6 className="section-label">About Us</h6>
          <h2 className={`main-title ${isMobile ? 'mobile' : ''}`}>
            {aboutData.title}
          </h2>
          <p className="description">{aboutData.description}</p>
          <p className="description">{aboutData.mission}</p>
          <p className="description">{aboutData.vision}</p>
          <p className="description">{aboutData.values}</p>
          <Link to="/about" className="learn-more">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
