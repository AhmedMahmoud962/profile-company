import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom'
import { getSlider } from '../API/sliderService'
import Spinner from '../Spinner/Spinner'
import { getImageUrl, generateSrcSet, getImageSizes } from '../utils/constants'
import './HeroSlider.css'

const HeroSlider = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)
  const swiperRef = useRef(null)

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

  // Simplified pagination update - only once after slides load
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

  // Show spinner while loading
  if (loading) {
    return <Spinner message="Loading Slider..." />
  }

  // Don't render if no slides
  if (slides.length === 0) {
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
        {slides.map((slide, index) => {
          const imageUrl = getImageUrl(slide.image)
          const isFirstSlide = index === 0

          return (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide">
                {/* Background Image - optimized for LCP and performance */}
                <img
                  src={imageUrl}
                  srcSet={
                    generateSrcSet(slide.image, [640, 960, 1280, 1600]) ||
                    undefined
                  }
                  alt={slide.name}
                  className="hero-bg-image"
                  loading={isFirstSlide ? 'eager' : 'lazy'}
                  fetchpriority={isFirstSlide ? 'high' : 'low'}
                  decoding="async"
                  width="1600"
                  height="900"
                  sizes={getImageSizes('hero')}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
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
          )
        })}
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
