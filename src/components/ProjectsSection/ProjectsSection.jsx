import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './ProjectsSection.css'
import { Link } from 'react-router-dom'
import { getProjects } from '../API/ProjectService'
import { useState, useEffect } from 'react'
import { getImageUrl } from '../utils/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ProjectsSection = () => {
  const { darkMode } = useThemeContext()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // دالة للحصول على أيقونة الفئة
  const getCategoryIcon = (categoryName) => {
    const category = categoryName?.toLowerCase() || ''

    if (category.includes('web') || category.includes('website')) return '🌐'
    if (category.includes('mobile') || category.includes('app')) return '📱'
    if (category.includes('ai') || category.includes('artificial')) return '🤖'
    if (category.includes('ecommerce') || category.includes('shop')) return '🛒'
    if (category.includes('dashboard') || category.includes('admin'))
      return '📊'
    if (category.includes('game') || category.includes('gaming')) return '🎮'
    if (category.includes('education') || category.includes('learning'))
      return '🎓'
    if (category.includes('health') || category.includes('medical')) return '🏥'
    if (category.includes('finance') || category.includes('banking'))
      return '💰'
    if (category.includes('social') || category.includes('media')) return '💬'
    if (category.includes('cloud') || category.includes('server')) return '☁️'
    if (category.includes('iot') || category.includes('smart')) return '🔌'
    return '💼' // افتراضي
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects()
        setProjects(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (projects.length === 0) {
    return (
      <div className="projects-section">
        <div className="projects-container">
          <h2>No projects found</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h6 className="projects-subtitle">Our Work</h6>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-description">
            Explore our latest projects and see how we bring ideas to life
          </p>
        </motion.div>

        <div className="projects-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="project-card"
                >
                  <div className="project-image-container">
                    <img
                      src={getImageUrl(project.image) || '/default-image.jpg'}
                      alt={project.name}
                      loading="lazy"
                    />

                    <div className="project-overlay">
                      <div className="project-links">
                        <Link
                          to={`/project/${project.id}`}
                          className="project-link view"
                        >
                          👁 View Details
                        </Link>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo"
                        >
                          🔗 Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-category">
                      <span className="category-icon">
                        {getCategoryIcon(project.category?.name)}
                      </span>
                      {project.category.name}
                    </div>
                    <h3 className="project-title">
                      <span className="title-icon">📋</span>
                      {project.name}
                    </h3>
                    <p className="project-description">
                      <span className="description-icon">📝</span>
                      {project.description.length > 120
                        ? project.description.substring(0, 120) + '...'
                        : project.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projects-view-all">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="projects-btn"
          >
            <Link
              to="/projects"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              View All Projects
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
