import { useState, useEffect } from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
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
            We Are Polygon Software
          </h2>
          <p className="description">
            At Polygon Software, we specialize in creating innovative digital
            solutions that help businesses grow and succeed in today's
            competitive landscape. Our team of skilled developers and designers
            work together to deliver high-quality software that meets your
            unique needs.
          </p>
          <Link to="/about" className="cta-button learn-more">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
