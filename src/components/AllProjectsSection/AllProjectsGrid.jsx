import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getProjects } from '../API/ProjectService'
import { getImageUrl } from '../utils/constants'
import { useThemeContext } from '../../context/ThemeContext'
import './AllProjectsGrid.css'

const AllProjectsGrid = () => {
  const { darkMode } = useThemeContext()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  // Get category icon
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
    return '💼'
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

  // Get unique categories
  const categories = [
    'All',
    ...new Set(projects.map((p) => p.category?.name).filter(Boolean)),
  ]

  // Filter projects
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category?.name === filter)

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  )

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  if (loading) {
    return (
      <div className="projects-grid-section">
        <div className="projects-grid-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`projects-grid-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="projects-grid-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-grid-header"
        >
          <h2 className="projects-grid-title">All Projects</h2>
          <p className="projects-grid-subtitle">
            Browse through our complete portfolio of innovative solutions
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-filter"
        >
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Count */}
        {filteredProjects.length > 0 && (
          <div className="projects-count">
            Showing {indexOfFirstProject + 1} - {Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} projects
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="project-grid-card"
            >
              <Link
                to={`/project/${project.id}`}
                className="project-image-link"
              >
                <div className="project-image-wrapper">
                  <img
                    src={getImageUrl(project.image) || '/default-image.jpg'}
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="view-icon">👁</span>
                      <span className="view-text">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="project-card-body">
                <div className="project-category-badge">
                  <span className="category-icon">
                    {getCategoryIcon(project.category?.name)}
                  </span>
                  <span>{project.category?.name || 'General'}</span>
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="project-title-link"
                >
                  <h3 className="project-card-title">{project.name}</h3>
                </Link>

                <div className="project-card-description">
                  <span className="desc-icon">📝</span>
                  <span>{project.summary || 'No description available'}</span>
                </div>

                <div className="project-card-footer">
                  <div className="project-links-inline">
                    <Link
                      to={`/project/${project.id}`}
                      className="project-link-btn"
                    >
                      View Project →
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-link"
                      >
                        🔗 Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {filteredProjects.length > projectsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pagination-container"
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-arrow"
            >
              ← Previous
            </button>

            <div className="pagination-numbers">
              {getPageNumbers().map((pageNum, index) => (
                <button
                  key={index}
                  onClick={() => pageNum !== '...' && handlePageChange(pageNum)}
                  disabled={pageNum === '...'}
                  className={`pagination-btn ${
                    pageNum === currentPage ? 'active' : ''
                  } ${pageNum === '...' ? 'dots' : ''}`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination-arrow"
            >
              Next →
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-results"
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AllProjectsGrid