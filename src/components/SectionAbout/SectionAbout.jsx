import { useState, useEffect } from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'
import { getAboutServices } from '../API/AboutServices'
// Removed unused import
import imageAbout1 from '../../assets/images/about1.webp'
import imageAbout2 from '../../assets/images/about2.webp'
import imageAbout3 from '../../assets/images/about3.webp'

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

  // loading spinner
  if (!aboutData) {
    return <Spinner message="Loading about data..." />
  }
  return (
    <div className="about-container">
      <div
        className={`about-grid ${isMobile ? 'mobile' : ''} ${
          isVisible ? 'animate' : ''
        }`}
      >
        <div className="image-container" style={{ '--delay': '0s' }}>
          {/* Image placeholder */}
          <div className="image-placeholder first-image-placeholder">
            <img
              src={imageAbout2}
              alt="About Polygon Software"
              className="about-image"
              width="300"
              height="300"
              sizes="(max-width: 768px) 200px, 300px"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
              decoding="async"
            />
            {/* <img
              src={getImageUrl(aboutData.image)}
              alt="About Polygon Software"
              className="about-image"
              width="300"
              height="300"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
            /> */}
            {!imageLoaded && <div className="image-skeleton"></div>}
          </div>
          {/* second image */}
          <div className="right-image-column">
            <div className="second-image-placeholder">
              <img
                src={imageAbout1}
                alt="About Polygon Software"
                className="about-image"
                width="368"
                height="329"
                sizes="(max-width: 768px) 200px, 368px"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
                fetchpriority="high"
                decoding="async"
              />
              {/* <img
              src={getImageUrl(aboutData.image)}
              alt="About Polygon Software"
              className="about-image"
              width="200"
              height="200"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
            /> */}
            </div>
            {/* third image */}
            <div className="third-image-placeholder">
              <img
                src={imageAbout3}
                alt="About Polygon Software"
                className="about-image"
                width="211"
                height="210"
                sizes="(max-width: 768px) 150px, 211px"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
                loading="lazy"
                decoding="async"
              />
              {/* <img
              src={getImageUrl(aboutData.image)}
              alt="About Polygon Software"
              className="about-image"
              width="150"
              height="150"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
              loading="lazy"
            /> */}
            </div>
          </div>
        </div>

        <div className="content-container" style={{ '--delay': '0.2s' }}>
          <h6 className="section-label">About Us</h6>
          <h2 className={`main-title ${isMobile ? 'mobile' : ''}`}>
            {aboutData.title}
          </h2>
          {/* <p className="description">{aboutData.description}</p> */}
          <div
            className="projectinfo-description-text"
            dangerouslySetInnerHTML={{
              __html: aboutData.description,
            }}
          />
          {/* <p className="description">{aboutData.mission}</p> */}
          {/* <p className="description">{aboutData.vision}</p> */}
          {/* <p className="description">{aboutData.values}</p> */}
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
          <Link to="/about" className="learn-more">
            Get the Offer
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
