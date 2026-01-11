import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom'
import { getSlider } from '../API/sliderService'
import { getImageUrl } from '../utils/constants'
import './HeroSlider.css'

const HeroSlider = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setError(null)
        const response = await getSlider()

        if (response.status === 200 && response.data) {
          setSlides(response.data || [])

          // Preload first slide image for better LCP
          if (
            response.data &&
            response.data.length > 0 &&
            response.data[0]?.image
          ) {
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
        setError('Failed to load slider content')
        setSlides([])
      } finally {
        setLoading(false)
      }
    }

    fetchSlides()
  }, [])

  // Update pagination after slides load
  useEffect(() => {
    if (slides.length > 0 && swiperRef.current?.swiper) {
      requestAnimationFrame(() => {
        const swiper = swiperRef.current?.swiper
        if (swiper?.pagination) {
          swiper.pagination.render()
          swiper.pagination.update()
        }
      })
    }
  }, [slides])

  // Loading state
  if (loading) {
    return (
      <div className="hero-slider-container">
        <div className="hero-bg-pattern"></div>
        <div className="hero-slider-loading">
          <div className="hero-loader">
            <div className="hero-loader-ring"></div>
            <div className="hero-loader-ring"></div>
            <div className="hero-loader-ring"></div>
            <div className="hero-loader-dot"></div>
          </div>
          <p className="hero-loader-text">Loading amazing content...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error || slides.length === 0) {
    return null
  }

  return (
    <div className="hero-slider-container">
      {/* Background Pattern */}
      <div className="hero-bg-pattern"></div>

      <Swiper
        ref={swiperRef}
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
          dynamicBullets: false,
        }}
        navigation={false}
        loop={slides.length > 1}
        className="hero-swiper"
        watchSlidesProgress={false}
        watchSlidesVisibility={false}
        preventInteractionOnTransition={true}
        touchStartPreventDefault={false}
        passiveListeners={true}
        resistance={false}
        resistanceRatio={0}
        observer={false}
        observeParents={false}
        observeSlideChildren={false}
        updateOnWindowResize={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            <div className="hero-slide">
              {/* Background Image */}
              {slide.image && (
                <img
                  src={getImageUrl(slide.image)}
                  alt={slide.name || 'Slide image'}
                  className="hero-bg-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                  decoding="async"
                  width="1920"
                  height="1080"
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              )}

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
                  {/* Title */}
                  {slide.name && (
                    <h1 className="hero-title">
                      <span className="title-main">{slide.name}</span>
                    </h1>
                  )}

                  {/* Description */}
                  {slide.description && (
                    <p className="hero-description">{slide.description}</p>
                  )}

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

      {/* Enhanced Centered Pagination - Only show if more than 1 slide */}
      {slides.length > 1 && (
        <div className="hero-pagination-wrapper">
          <div className="hero-pagination"></div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}

export default HeroSlider
