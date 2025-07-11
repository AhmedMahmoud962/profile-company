import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const AllProjectsSection = lazy(() => import('../components/AllProjectsSection/AllProjectsSection'))

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Polygon Software</title>
        <meta
          name="description"
          content="Explore our comprehensive portfolio of web development, mobile apps, AI solutions, and software projects delivered to satisfied clients."
        />
        <meta
          name="keywords"
          content="portfolio, projects, web development, mobile apps, software solutions, Polygon Software"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <HeroPage
          title="OUR PORTFOLIO"
          breadcrumbs={['Portfolio']}
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        />
      <AllProjectsSection />
      </Suspense>
    </>
  )
}

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useThemeContext } from '../context/ThemeContext'
// import projectsData from '../utils/projectData'
// import { Launch, GitHub, FilterList } from '@mui/icons-material'
// import './css/Portfolio.css'

// const Portfolio = () => {
//   const { darkMode } = useThemeContext()
//   const [filter, setFilter] = useState('All')

//   const categories = ['All', ...new Set(projectsData.map(project => project.category))]

//   const filteredProjects = filter === 'All'
//     ? projectsData
//     : projectsData.filter(project => project.category === filter)

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
//     <div className={`portfolio-page ${darkMode ? 'dark' : 'light'}`}>
//       <div className="portfolio-container">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="portfolio-header"
//         >
//           <h1 className="portfolio-title">معرض أعمالنا</h1>
//           <p className="portfolio-description">
//             استكشف مجموعة من أفضل المشاريع التي قمنا بتطويرها وتسليمها لعملائنا
//           </p>
//         </motion.div>

//         {/* Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="portfolio-filter"
//         >
//           <FilterList />
//           <span>تصفية المشاريع:</span>
//           <div className="filter-buttons">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setFilter(category)}
//                 className={`filter-btn ${filter === category ? 'active' : ''}`}
//               >
//                 {category === 'All' ? 'الكل' : category}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="project-card"
//             >
//               <div className="project-image-container">
//                 <img src={project.mainImage} alt={project.title} />
//                 <div
//                   className="project-status"
//                   style={{ backgroundColor: getStatusColor(project.status) }}
//                 >
//                   {project.status}
//                 </div>
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <Link
//                       to={`/project/${project.id}`}
//                       className="project-link view"
//                     >
//                       👁 عرض التفاصيل
//                     </Link>
//                     {project.demoLink !== '#' && (
//                       <a
//                         href={project.demoLink}
//                         className="project-link demo"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Launch /> Demo
//                       </a>
//                     )}
//                     {project.githubLink !== '#' && (
//                       <a
//                         href={project.githubLink}
//                         className="project-link github"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <GitHub /> Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-body">
//                 <div className="project-category">{project.category}</div>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.shortDescription}</p>

//                 <div className="project-technologies">
//                   {project.technologies.slice(0, 3).map((tech, techIndex) => (
//                     <span key={techIndex} className="project-tech">
//                       {tech}
//                     </span>
//                   ))}
//                   {project.technologies.length > 3 && (
//                     <span className="project-tech more">
//                       +{project.technologies.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 <Link
//                   to={`/project/${project.id}`}
//                   className="view-details-btn"
//                 >
//                   عرض التفاصيل الكاملة
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Portfolio
