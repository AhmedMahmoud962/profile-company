import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './ProjectsSection.css'
import { Link } from 'react-router-dom'
import { getProjects } from '../API/ProjectService'
import { useState, useEffect } from 'react'
// import Spinner from '../Spinner/Spinner'
import { getImageUrl } from '../utils/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ProjectsSection = () => {
  const { darkMode } = useThemeContext()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

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

  // if (loading) {
  //   return <Spinner message="Loading projects..." />
  // }
  if (projects.length === 0) {
    return (
      <div className="projects-section">
        <div className="projects-container">
          <h2>No projects found</h2>
        </div>
      </div>
    )
  }

  // Function to get status color - will be used when status is available in API
  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case 'Completed':
  //       return '#4CAF50'
  //     case 'In Progress':
  //       return '#FF9800'
  //     case 'Planning':
  //       return '#2196F3'
  //     default:
  //       return '#757575'
  //   }
  // }

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

                    {/* Status will be displayed when available in API */}
                    {/* <div 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </div> */}

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
                      {project.category.name}
                    </div>
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">
                      {project.description.length > 120
                        ? project.description.substring(0, 120) + '...'
                        : project.description}
                    </p>

                    {/* Technologies will be displayed when available in API */}
                    {/* <div className="project-technologies">
                      {project.technologies && project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="project-tech">
                          {tech}
                        </span>
                      ))}
                    </div> */}

                    {/* Project dates */}
                    {/* <div className="project-dates">
                      <small className="project-date">Created: {project.created_at}</small>
                      {project.updated_at !== project.created_at && (
                        <small className="project-date">Updated: {project.updated_at}</small>
                      )}
                    </div> */}
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
              to="/portfolio"
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
// import React from 'react'
// import { motion } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay } from 'swiper/modules'
// import { useThemeContext } from '../../context/ThemeContext'
// import './ProjectsSection.css'
// import { Link } from 'react-router-dom'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

// const ProjectsSection = () => {
//   const { darkMode } = useThemeContext()

//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       description: 'Full-stack e-commerce solution with modern UI/UX for your online store.',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80',
//       technologies: ['React', 'Node.js', 'MongoDB'],
//       category: 'Web Development',
//       status: 'Completed',
//       demoLink: '#',
//       githubLink: '#',
//     },
//     {
//       id: 2,
//       title: 'Web Application',
//       description: 'Secure mobile banking application with biometric authentication for your bank.',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80',
//       technologies: ['React Native', 'Firebase', 'Redux'],
//       category: 'Web Development',
//       status: 'In Progress',
//       demoLink: '#',
//       githubLink: '#',
//     },
//     {
//       id: 3,
//       title: 'AI Dashboard',
//       description: 'Analytics dashboard with machine learning insights for your business.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
//       technologies: ['Vue.js', 'Python', 'TensorFlow'],
//       category: 'AI/ML',
//       status: 'Completed',
//       demoLink: '#',
//       githubLink: '#',
//     },
//     {
//       id: 4,
//       title: 'Cloud Storage Solution',
//       description: 'Scalable cloud storage with file sharing capabilities for your business.',
//       image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80',
//       technologies: ['Angular', 'AWS', 'Docker'],
//       category: 'Cloud Solutions',
//       status: 'Planning',
//       demoLink: '#',
//       githubLink: '#',
//     },
//     {
//       id: 5,
//       title: 'IoT Monitoring System',
//       description: 'Real-time monitoring system for IoT devices for your business.',
//       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
//       technologies: ['React', 'Express', 'Socket.io'],
//       category: 'IoT',
//       status: 'Completed',
//       demoLink: '#',
//       githubLink: '#',
//     },
//     {
//       id: 6,
//       title: 'Blockchain Wallet',
//       description: 'Secure cryptocurrency wallet with multi-chain support for your business.',
//       image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=500&q=80',
//       technologies: ['React', 'Web3.js', 'Solidity'],
//       category: 'Blockchain',
//       status: 'In Progress',
//       demoLink: '#',
//       githubLink: '#',
//     },
//   ]

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return '#4CAF50'
//       case 'In Progress':
//         return '#FF9800'
//       case 'Planning':
//         return '#2196F3'
//       default:
//         return '#757575'
//     }
//   }

//   return (
//     <div className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
//       <div className="projects-container">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="projects-header"
//         >
//           <h6 className="projects-subtitle">Our Work</h6>
//           <h2 className="projects-title">Featured Projects</h2>
//           <p className="projects-description">
//             Explore our latest projects and see how we bring ideas to life
//           </p>
//         </motion.div>

//         <div className="projects-swiper-container">
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{
//               clickable: true,
//               bulletClass: 'swiper-pagination-bullet',
//               bulletActiveClass: 'swiper-pagination-bullet-active',
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//             }}
//             className="projects-swiper"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={project.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="project-card"
//                 >
//                   <div className="project-image-container">
//                     <img src={project.image} alt={project.title} />
//                     <div
//                       className="project-status"
//                       style={{ backgroundColor: getStatusColor(project.status) }}
//                     >
//                       {project.status}
//                     </div>
//                     <div className="project-overlay">
//                       <div className="project-links">
//                           <Link to={`/project/${project.id}`}  className="project-link view">
//                             👁 View Details
//                         </Link>
//                         <a href={project.demoLink} className="project-link demo">
//                           🔗 Demo
//                         </a>

//                       </div>
//                     </div>
//                   </div>

//                   <div className="project-body">
//                     <div className="project-category">{project.category}</div>
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-description">{project.description}</p>

//                     <div className="project-technologies">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span key={techIndex} className="project-tech">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="projects-view-all">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="projects-btn"
//           >
//             View All Projects
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectsSection
