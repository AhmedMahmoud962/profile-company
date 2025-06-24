import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  Code,
  Palette,
  Rocket,
} from 'lucide-react'
import './HeroSlider.css'

const slides = [
  {
    id: 1,
    title: 'Modern Web Development',
    description:
      'Create stunning, responsive websites with cutting-edge technologies. Our team delivers exceptional digital experiences that captivate your audience and drive results.',
    buttonText: 'Start Your Project',
    buttonLink: '/contact',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    icon: <Code size={24} />,
    // gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'Creative Design Solutions',
    description:
      'Transform your brand with innovative design concepts that stand out in the digital landscape. We blend creativity with functionality to deliver memorable experiences.',
    buttonText: 'View Portfolio',
    buttonLink: '/portfolio',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    icon: <Palette size={24} />,
    // gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Performance & Innovation',
    description:
      'Boost your business with high-performance applications built for scale. We optimize every detail to ensure your platform runs smoothly and efficiently.',
    buttonText: 'Learn More',
    buttonLink: '/about',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    icon: <Rocket size={24} />,
    // gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description:
      'Modernize your business processes with intelligent automation and digital solutions. Stay ahead of the competition with our innovative technology stack.',
    buttonText: 'Get Started',
    buttonLink: '/contact',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    icon: <Play size={24} />,
    // gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slideIndex = ((page % slides.length) + slides.length) % slides.length
  const currentSlide = slides[slideIndex]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const goToSlide = (index) => {
    const direction = index > slideIndex ? 1 : -1
    setPage([index, direction])
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [page, isAutoPlaying])

  return (
    <div className="hero-slider">
      <div className="slider-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="slide"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="slide-background">
              <div
                className="slide-gradient"
                style={{ background: currentSlide.gradient }}
              />
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="slide-image"
              />
            </div>

            <div className="slide-content">
              <div className="content-wrapper">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="slide-icon"
                >
                  {currentSlide.icon}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="slide-title"
                >
                  {currentSlide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="slide-description"
                >
                  {currentSlide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="slide-action"
                >
                  <a
                    href={currentSlide.buttonLink}
                    className="cta-button"
                    style={{ background: currentSlide.gradient }}
                  >
                    {currentSlide.buttonText}
                    <ArrowRight size={20} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

    

        {/* Dots Indicator */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === slideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            style={{ background: currentSlide.gradient }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            key={page}
          />
        </div>
      </div>
    </div>
  )
}
