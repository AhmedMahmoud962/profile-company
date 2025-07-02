import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Link } from 'react-router-dom'
import { getSlider } from '../API/sliderService'
import { useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import { getImageUrl } from '../utils/constants'
import './HeroSlider.css'

const HeroSlider = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getSlider()
        if (response.status === 200) {
          setSlides(response.data)
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

  if (loading) return <Spinner message="Loading hero slider..." />

  if (slides.length === 0) return <div>No slides found</div>

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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {/* Background Image */}
              <div
                className="hero-bg-image"
                style={{
                  backgroundImage: `url(${getImageUrl(slide.image)})`,
                }}
              ></div>

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
                  <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="title-main">{slide.name}</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Features Grid */}
                  <motion.div
                    className="hero-features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
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
                  </motion.div>

                  {/* Action Links */}
                  <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <Link to="/contact" className="hero-link primary">
                      <span className="link-content">
                        <span className="link-icon">🚀</span>
                        <span className="link-text">Get Started</span>
                        <span className="link-arrow">→</span>
                      </span>
                      <div className="link-ripple"></div>
                    </Link>
                  </motion.div>
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
