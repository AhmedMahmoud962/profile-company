import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
// Removed framer-motion for better performance - using CSS animations instead
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom'
import { getSlider } from '../API/sliderService'
import { useState, useEffect } from 'react'
// import Spinner from '../Spinner/Spinner'
import { getImageUrl } from '../utils/constants'
import './HeroSlider.css'
// import "../../performance-optimization.css"

const HeroSlider = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getSlider()
        if (response.status === 200) {
          setSlides(response.data)

          // Preload first slide image for better LCP
          if (response.data && response.data[0]) {
            const firstImageUrl = getImageUrl(response.data[0].image)
            const link = document.createElement('link')
            link.rel = 'preload'
            link.as = 'image'
            link.href = firstImageUrl
            link.fetchpriority = 'high'
            document.head.appendChild(link)
          }
        }
      } catch (err) {
        console.error('Failed to fetch slides:', err)
        setSlides([])
      } finally {
        setLoading(false)
      }
    }
    fetchSlides()
  }, [])

  // if (loading) {
  //   return (
  //     <div className="projects-grid-section">
  //       <div className="projects-grid-container">
  //         <div className="loading-spinner">
  //           <div className="spinner"></div>
  //           <p>Loading hero slider...</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="hero-slider-container">
      {/* Background Pattern */}
      <div className="hero-bg-pattern"></div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
          renderBullet: function (index, className) {
            return `<span class="${className}">
                      <span class="bullet-inner"></span>
                      <span class="bullet-progress"></span>
                    </span>`
          },
        }}
        navigation={false}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {/* Background Image - optimized for LCP */}
              <img
                src={getImageUrl(slide.image)}
                alt={slide.name}
                className="hero-bg-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchpriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                width="1920"
                height="1080"
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />

              {/* Enhanced Overlay Layers */}
              <div className="hero-overlay-primary"></div>
              <div className="hero-overlay-gradient"></div>
              <div className="hero-overlay-texture"></div>

              {/* Floating Elements */}
              <div className="hero-floating-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
                <div className="floating-line line-1"></div>
                <div className="floating-line line-2"></div>
              </div>

              {/* Content */}
              <div className="hero-content">
                <div className="hero-content-inner">
                  {/* Title - Optimized animation */}
                  <h1 className="hero-title">
                    <span className="title-main">{slide.name}</span>
                  </h1>

                  {/* Description */}
                  <p className="hero-description">{slide.description}</p>

                  {/* Features Grid */}
                  <div className="hero-features">
                    <div className="feature-item">
                      <div className="feature-icon">⚡</div>
                      <span>Lightning Fast</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🔒</div>
                      <span>100% Secure</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💎</div>
                      <span>Premium Quality</span>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="hero-actions">
                    <Link to="/contact" className="hero-link primary">
                      <span className="link-content">
                        <span className="link-icon">🚀</span>
                        <span className="link-text">Get Started</span>
                        <span className="link-arrow">→</span>
                      </span>
                      <div className="link-ripple"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Centered Pagination */}
      <div className="hero-pagination-wrapper">
        <div className="hero-pagination"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}

export default HeroSlider
