import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { getProjectDetailsById } from '../API/ProjectService'
import { useThemeContext } from '../../context/ThemeContext'
import './ProjectInfo.css'
import { getImageUrl } from '../utils/constants'
import Spinner from '../Spinner/Spinner'

const ProjectInfo = () => {
  const { darkMode } = useThemeContext()
  const { id } = useParams()
  const [projectData, setProjectData] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Fetch project data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProjectDetailsById(id)
        const data = response.data // ← عشان الريسبونس الكامل فيه msg وstatus وdata

        const mappedProject = {
          name: data.name,
          mainImage: getImageUrl(data.image),
          description: data.description,
          // duration: 'N/A', // مفيش مدة راجعة من الـ API، ممكن تضيفها لاحقًا
          // client: 'N/A', // نفس الشيء هنا
          category: data.category?.name || 'N/A',
          // technology: 'N/A', // لو مفيش بيانات تكنولوجيا
          demoLink: data.link,
          whatsappNumber: '+201099681654', // أو استخرجه من الداتا لو موجود
          gallery: data.project_images.map((img) => getImageUrl(img.image)),
        }

        setProjectData(mappedProject)
      } catch (error) {
        console.error('Failed to fetch project details', error)
      }
    }

    fetchData()
  }, [id])

  // Open image modal
  const openImageModal = (index) => {
    setCurrentImageIndex(index)
    setSelectedImage(projectData.gallery[index])
    document.body.style.overflow = 'hidden'
  }

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  // Next image
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % projectData.gallery.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(projectData.gallery[nextIndex])
  }

  // Previous image
  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? projectData.gallery.length - 1
        : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(projectData.gallery[prevIndex])
  }

  // Handle WhatsApp
  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in the ${projectData.name} project. Can you provide more details?`
    const url = `https://wa.me/${
      projectData.whatsappNumber
    }?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  // Handle key down
  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeImageModal()
    }
  }

  // Add event listener for key down
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentImageIndex])

  // لو البيانات لسه محمّلتش
  if (!projectData) return <Spinner message="Loading project details..." />

  return (
    <div
      className={`projectinfo-container ${
        darkMode ? 'projectinfo-dark' : 'projectinfo-light'
      }`}
    >
      <div className="projectinfo-wrapper">
        <div className="projectinfo-main-content">
          {/* Left */}
          <div className="projectinfo-left-side">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="projectinfo-image-wrapper"> */}
              <img
                src={projectData.mainImage}
                alt={projectData.name}
                className="projectinfo-main-img"
                loading="lazy"
              />
              {/* <div className="projectinfo-image-overlay">
                  <div className="projectinfo-image-gradient"></div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              className="projectinfo-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="projectinfo-title">{projectData.name}</h1>
              <div className="projectinfo-title-underline"></div>
              <div
                className="projectinfo-description-text"
                dangerouslySetInnerHTML={{
                  __html: projectData.description,
                }}
              />
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="projectinfo-right-side"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="projectinfo-info-card">
              <div className="projectinfo-info-header">
                <h3 className="projectinfo-info-title">Project Info</h3>
                <div className="projectinfo-info-underline"></div>
              </div>

              <div className="projectinfo-info-details">
                <div className="projectinfo-info-item">
                  <span className="projectinfo-info-label">Project Name</span>
                  <span className="projectinfo-info-value">
                    {projectData.name}
                  </span>
                </div>

                {/* <div className="projectinfo-info-item">
                  <span className="projectinfo-info-label">Client:</span>
                  <span className="projectinfo-info-value">
                    {projectData.client}
                  </span>
                </div> */}

                <div className="projectinfo-info-item">
                  <span className="projectinfo-info-label">Category</span>
                  <span className="projectinfo-info-value">
                    {projectData.category}
                  </span>
                </div>

                {/* <div className="projectinfo-info-item">
                  <span className="projectinfo-info-label">Technology:</span>
                  <span className="projectinfo-info-value">
                    {projectData.technology}
                  </span>
                </div> */}
              </div>

              <div className="projectinfo-action-buttons">
                <button
                  className="projectinfo-action-btn projectinfo-whatsapp-btn"
                  onClick={handleWhatsApp}
                  aria-label="Contact via WhatsApp"
                >
                  <span className="projectinfo-btn-icon">💬</span>
                  <span className="projectinfo-btn-text">WhatsApp</span>
                </button>

                <a
                  href={projectData.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectinfo-action-btn projectinfo-demo-btn"
                  aria-label="View live demo"
                >
                  <span className="projectinfo-btn-icon">🚀</span>
                  <span className="projectinfo-btn-text">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          className="projectinfo-gallery"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="projectinfo-gallery-header">
            <h3 className="projectinfo-gallery-title">Project Gallery</h3>
            <div className="projectinfo-gallery-underline"></div>
            <p className="projectinfo-gallery-subtitle">
              Click on any image to view in fullscreen
            </p>
          </div>

          <div className="projectinfo-gallery-grid">
            {projectData.gallery?.map((image, index) => (
              <motion.div
                key={index}
                className="projectinfo-gallery-item"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openImageModal(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="projectinfo-gallery-image-wrapper">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="projectinfo-gallery-image"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="projectinfo-image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="projectinfo-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="projectinfo-modal-close"
                onClick={closeImageModal}
                aria-label="Close modal"
              >
                <span>✕</span>
              </button>

              <button
                className="projectinfo-modal-nav projectinfo-modal-prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <span>‹</span>
              </button>

              <div className="projectinfo-modal-image-container">
                <img
                  src={selectedImage}
                  alt="Selected gallery image"
                  className="projectinfo-modal-image"
                  loading="lazy"
                />
              </div>

              <button
                className="projectinfo-modal-nav projectinfo-modal-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <span>›</span>
              </button>

              <div className="projectinfo-modal-info">
                <div className="projectinfo-modal-counter">
                  {currentImageIndex + 1} / {projectData.gallery.length}
                </div>
                <div className="projectinfo-modal-controls">
                  <span className="projectinfo-modal-hint">
                    Use arrow keys to navigate
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectInfo

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useThemeContext } from '../../context/ThemeContext'
// import { useParams } from 'react-router-dom'
// import { getProjectDetailsById } from '../API/ProjectService'
// import { getImageUrl } from '../utils/constants'
// import Spinner from '../Spinner/Spinner'
// import './ProjectInfo.css'

// const ProjectInfo = () => {
//   const { darkMode } = useThemeContext()
//   const { id } = useParams()
//   const [project, setProject] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [gallery, setGallery] = useState([])

//   // WhatsApp number (you can make this dynamic later)
//   const whatsappNumber = '+201234567890'

//   // Fetch project data
//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         setLoading(true)
//         const response = await getProjectDetailsById(id)

//         if (response.status === 200) {
//           setProject(response.data)

//           // Prepare gallery images using getImageUrl
//           const projectImages = response.data.project_images || []
//           const galleryImages = []

//           // Add main image first
//           if (response.data.image) {
//             galleryImages.push(getImageUrl(response.data.image))
//           }

//           // Add project images
//           projectImages.forEach((img) => {
//             galleryImages.push(getImageUrl(img.image))
//           })

//           setGallery(galleryImages)
//         } else {
//           setError('Failed to fetch project data')
//         }
//       } catch (err) {
//         setError('Error loading project: ' + err.message)
//         console.error('Error fetching project:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) {
//       fetchProject()
//     }
//   }, [id])

//   const openImageModal = (index) => {
//     setCurrentImageIndex(index)
//     setSelectedImage(gallery[index])
//     document.body.style.overflow = 'hidden'
//   }

//   const closeImageModal = () => {
//     setSelectedImage(null)
//     document.body.style.overflow = 'auto'
//   }

//   const nextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % gallery.length
//     setCurrentImageIndex(nextIndex)
//     setSelectedImage(gallery[nextIndex])
//   }

//   const prevImage = () => {
//     const prevIndex =
//       currentImageIndex === 0 ? gallery.length - 1 : currentImageIndex - 1
//     setCurrentImageIndex(prevIndex)
//     setSelectedImage(gallery[prevIndex])
//   }

//   const handleWhatsApp = () => {
//     const message = `Hello! I'm interested in the ${project?.name} project. Can you provide more details?`
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       message,
//     )}`
//     window.open(url, '_blank')
//   }

//   const handleKeyDown = (e) => {
//     if (selectedImage) {
//       if (e.key === 'ArrowRight') nextImage()
//       if (e.key === 'ArrowLeft') prevImage()
//       if (e.key === 'Escape') closeImageModal()
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown)
//     return () => document.removeEventListener('keydown', handleKeyDown)
//   }, [selectedImage, currentImageIndex])

//   if (loading) {
//     return (
//       <div
//         className={`projectinfo-container ${
//           darkMode ? 'projectinfo-dark' : 'projectinfo-light'
//         }`}
//       >
//         <div className="projectinfo-wrapper">
//           <div className="projectinfo-loading">
//             <Spinner />
//             <p>Loading project details...</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div
//         className={`projectinfo-container ${
//           darkMode ? 'projectinfo-dark' : 'projectinfo-light'
//         }`}
//       >
//         <div className="projectinfo-wrapper">
//           <div className="projectinfo-error">
//             <h2>Error Loading Project</h2>
//             <p>{error}</p>
//             <button onClick={() => window.location.reload()}>Try Again</button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (!project) {
//     return (
//       <div
//         className={`projectinfo-container ${
//           darkMode ? 'projectinfo-dark' : 'projectinfo-light'
//         }`}
//       >
//         <div className="projectinfo-wrapper">
//           <div className="projectinfo-error">
//             <h2>Project Not Found</h2>
//             <p>The project you're looking for doesn't exist.</p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Use getImageUrl for main image
//   const mainImage = getImageUrl(project.image)

//   return (
//     <div
//       className={`projectinfo-container ${
//         darkMode ? 'projectinfo-dark' : 'projectinfo-light'
//       }`}
//     >
//       <div className="projectinfo-wrapper">
//         <div className="projectinfo-main-content">
//           <div className="projectinfo-left-side">
//             <motion.div
//               className="projectinfo-main-image"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="projectinfo-image-wrapper">
//                 <img
//                   src={mainImage}
//                   alt={project.name}
//                   className="projectinfo-main-img"
//                 />
//                 <div className="projectinfo-image-overlay">
//                   <div className="projectinfo-image-gradient"></div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               className="projectinfo-description"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h1 className="projectinfo-title">{project.name}</h1>
//               <div className="projectinfo-title-underline"></div>
//               <p className="projectinfo-description-text">
//                 {project.description}
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             className="projectinfo-right-side"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="projectinfo-info-card">
//               <div className="projectinfo-info-header">
//                 <h3 className="projectinfo-info-title">Project Info</h3>
//                 <div className="projectinfo-info-underline"></div>
//               </div>

//               <div className="projectinfo-info-details">
//                 <div className="projectinfo-info-item">
//                   <span className="projectinfo-info-label">Category:</span>
//                   <span className="projectinfo-info-value">
//                     {project.category?.name || 'Not specified'}
//                   </span>
//                 </div>

//                 <div className="projectinfo-info-item">
//                   <span className="projectinfo-info-label">Created:</span>
//                   <span className="projectinfo-info-value">
//                     {project.created_at || 'Not specified'}
//                   </span>
//                 </div>

//                 <div className="projectinfo-info-item">
//                   <span className="projectinfo-info-label">Updated:</span>
//                   <span className="projectinfo-info-value">
//                     {project.updated_at || 'Not specified'}
//                   </span>
//                 </div>

//                 <div className="projectinfo-info-item">
//                   <span className="projectinfo-info-label">Images:</span>
//                   <span className="projectinfo-info-value">
//                     {gallery.length} images
//                   </span>
//                 </div>
//               </div>

//               <div className="projectinfo-action-buttons">
//                 <button
//                   className="projectinfo-action-btn projectinfo-whatsapp-btn"
//                   onClick={handleWhatsApp}
//                   aria-label="Contact via WhatsApp"
//                 >
//                   <span className="projectinfo-btn-icon">💬</span>
//                   <span className="projectinfo-btn-text">WhatsApp</span>
//                 </button>

//                 {project.link && (
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="projectinfo-action-btn projectinfo-demo-btn"
//                     aria-label="View live demo"
//                   >
//                     <span className="projectinfo-btn-icon">🚀</span>
//                     <span className="projectinfo-btn-text">Live Demo</span>
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {gallery.length > 0 && (
//           <motion.div
//             className="projectinfo-gallery"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <div className="projectinfo-gallery-header">
//               <h3 className="projectinfo-gallery-title">Project Gallery</h3>
//               <div className="projectinfo-gallery-underline"></div>
//               <p className="projectinfo-gallery-subtitle">
//                 Click on any image to view in fullscreen
//               </p>
//             </div>

//             <div className="projectinfo-gallery-grid">
//               {gallery.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   className="projectinfo-gallery-item"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => openImageModal(index)}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="projectinfo-gallery-image-wrapper">
//                     <img
//                       src={image}
//                       alt={`Gallery image ${index + 1}`}
//                       className="projectinfo-gallery-image"
//                     />
//                     <div className="projectinfo-gallery-overlay">
//                       <span className="projectinfo-gallery-icon">🔍</span>
//                       <span className="projectinfo-gallery-text">
//                         View Full Size
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="projectinfo-image-modal"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeImageModal}
//           >
//             <motion.div
//               className="projectinfo-modal-content"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="projectinfo-modal-close"
//                 onClick={closeImageModal}
//                 aria-label="Close modal"
//               >
//                 <span>✕</span>
//               </button>

//               <button
//                 className="projectinfo-modal-nav projectinfo-modal-prev"
//                 onClick={prevImage}
//                 aria-label="Previous image"
//               >
//                 <span>‹</span>
//               </button>

//               <div className="projectinfo-modal-image-container">
//                 <img
//                   src={selectedImage}
//                   alt="Selected gallery image"
//                   className="projectinfo-modal-image"
//                 />
//               </div>

//               <button
//                 className="projectinfo-modal-nav projectinfo-modal-next"
//                 onClick={nextImage}
//                 aria-label="Next image"
//               >
//                 <span>›</span>
//               </button>

//               <div className="projectinfo-modal-info">
//                 <div className="projectinfo-modal-counter">
//                   {currentImageIndex + 1} / {gallery.length}
//                 </div>
//                 <div className="projectinfo-modal-controls">
//                   <span className="projectinfo-modal-hint">
//                     Use arrow keys to navigate
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default ProjectInfo
