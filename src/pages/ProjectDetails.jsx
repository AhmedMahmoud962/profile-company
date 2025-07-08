import { Suspense, lazy } from 'react'
import './css/ProjectDetails.css'
import { Helmet } from 'react-helmet-async'

const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const ProjectInfo = lazy(() => import('../components/ProjectInfo/ProjectInfo'))

const ProjectDetails = () => {
  return (
    <>
    <Helmet>
        <title>Project Details | Polygon Software</title>
        <meta name="description" content="Explore detailed information about our projects, including features, technologies, and client testimonials." />
        <meta name="keywords" content="project details, portfolio, projects, web development, mobile apps, software solutions" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <Suspense fallback={<div>Loading...</div>}>
        <HeroPage title="Project Details" breadcrumbs={['Project Details']} backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" />
        <ProjectInfo />
      </Suspense>
    </>
  )
}

export default ProjectDetails
// import React, { useState } from 'react'
// import { useParams, Link, Navigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useThemeContext } from '../context/ThemeContext'
// import projectsData from '../utils/projectData'
// import {
//   ArrowBack,
//   Launch,
//   GitHub,
//   Schedule,
//   Person,
//   Category,
//   CheckCircle,
//   Close
// } from '@mui/icons-material'
// import './css/ProjectDetails.css'

// const ProjectDetail = () => {
//   const { id } = useParams()
//   const { darkMode } = useThemeContext()
//   const [selectedImage, setSelectedImage] = useState(null)
  
//   const project = projectsData.find(p => p.id === parseInt(id))
  
//   if (!project) {
//     return <Navigate to="/portfolio" replace />
//   }

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

//   const openImageModal = (image) => {
//     setSelectedImage(image)
//   }

//   const closeImageModal = () => {
//     setSelectedImage(null)
//   }

//   return (
//     <div className={`project-detail ${darkMode ? 'dark' : 'light'}`}>
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-background">
//           <img src={project.heroImage} alt={project.title} />
//           <div className="hero-overlay"></div>
//         </div>
        
//         <div className="hero-content">
//           <div className="container">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Link to="/portfolio" className="back-link">
//                 <ArrowBack /> العودة للمشاريع
//               </Link>
              
//               <div className="project-meta">
//                 <span 
//                   className="project-status"
//                   style={{ backgroundColor: getStatusColor(project.status) }}
//                 >
//                   {project.status}
//                 </span>
//                 <span className="project-category">{project.category}</span>
//               </div>
              
//               <h1 className="hero-title">{project.title}</h1>
//               <p className="hero-description">{project.shortDescription}</p>
              
//               <div className="hero-actions">
//                 {project.demoLink !== '#' && (
//                   <a href={project.demoLink} className="hero-btn demo" target="_blank" rel="noopener noreferrer">
//                     <Launch /> عرض المشروع
//                   </a>
//                 )}
//                 {project.githubLink !== '#' && (
//                   <a href={project.githubLink} className="hero-btn github" target="_blank" rel="noopener noreferrer">
//                     <GitHub /> الكود المصدري
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Project Info Section */}
//       <div className="project-info-section">
//         <div className="container">
//           <div className="info-grid">
//             {/* Project Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="project-image-container"
//             >
//               <img src={project.mainImage} alt={project.title} />
//             </motion.div>

//             {/* Project Details */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="project-details"
//             >
//               <h2>معلومات المشروع</h2>
              
//               <div className="project-info-grid">
//                 <div className="info-item">
//                   <Schedule />
//                   <div>
//                     <span className="info-label">المدة</span>
//                     <span className="info-value">{project.duration}</span>
//                   </div>
//                 </div>
                
//                 <div className="info-item">
//                   <Person />
//                   <div>
//                     <span className="info-label">العميل</span>
//                     <span className="info-value">{project.client}</span>
//                   </div>
//                 </div>
                
//                 <div className="info-item">
//                   <Category />
//                   <div>
//                     <span className="info-label">التصنيف</span>
//                     <span className="info-value">{project.category}</span>
//                   </div>
//                 </div>
                
//                 <div className="info-item">
//                   <CheckCircle />
//                   <div>
//                     <span className="info-label">الحالة</span>
//                     <span className="info-value">{project.status}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="project-description">
//                 <h3>وصف المشروع</h3>
//                 <div className="description-content">
//                   {project.fullDescription.split('\n').map((paragraph, index) => (
//                     <p key={index}>{paragraph.trim()}</p>
//                   ))}
//                 </div>
//               </div>

//               <div className="project-technologies">
//                 <h3>التقنيات المستخدمة</h3>
//                 <div className="tech-grid">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="tech-tag">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="project-features">
//                 <h3>الميزات الرئيسية</h3>
//                 <ul className="features-list">
//                   {project.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="gallery-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="gallery-header"
//           >
//             <h2>معرض الصور</h2>
//             <p>اطلع على تفاصيل المشروع من خلال هذه الصور</p>
//           </motion.div>

//           <div className="gallery-grid">
//             {project.gallery.map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="gallery-item"
//                 onClick={() => openImageModal(image)}
//               >
//                 <img src={image} alt={`${project.title} ${index + 1}`} />
//                 <div className="gallery-overlay">
//                   <span>عرض بحجم أكبر</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Other Projects */}
//       <div className="other-projects-section">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2>مشاريع أخرى</h2>
//             <div className="other-projects-grid">
//               {projectsData
//                 .filter(p => p.id !== project.id)
//                 .slice(0, 3)
//                 .map((otherProject, index) => (
//                   <motion.div
//                     key={otherProject.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -10 }}
//                   >
//                     <Link
//                       to={`/project/${otherProject.id}`}
//                       className="other-project-card"
//                     >
//                       <div className="other-project-image">
//                         <img src={otherProject.mainImage} alt={otherProject.title} />
//                         <div className="other-project-overlay">
//                           <span>عرض المشروع</span>
//                         </div>
//                       </div>
//                       <div className="other-project-info">
//                         <h3>{otherProject.title}</h3>
//                         <p>{otherProject.category}</p>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {selectedImage && (
//         <div className="image-modal" onClick={closeImageModal}>
//           <div className="modal-content">
//             <button className="modal-close" onClick={closeImageModal}>
//               <Close />
//             </button>
//             <img src={selectedImage} alt="Enlarged view" />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProjectDetail