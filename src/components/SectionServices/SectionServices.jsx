import React from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import { getServices } from '../API/serviceServices'
import { useState, useEffect } from 'react'
import './SectionServices.css'
import Spinner from '../Spinner/Spinner'

const ServicesSection = () => {
  const { darkMode } = useThemeContext()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices()
        if (response.status === 200) {
          setServices(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch services:', error)
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  if (loading) {
    return <Spinner message="Loading services..." />
  }

  if (services.length === 0) {
    return (
      <div className="text-center text-2xl font-bold">No services found</div>
    )
  }

  return (
    <div className={`services-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h6 className="services-subtitle">Our Services</h6>
          <h2 className="services-title">What We Offer</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.id * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card"
            >
              <div className="service-icon">🔒</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection

// import React from 'react'
// import { motion } from 'framer-motion'
// import { useThemeContext } from '../../context/ThemeContext'
// import './SectionServices.css'

// const ServicesSection = () => {
//   const { darkMode } = useThemeContext()

//   const services = [
//     {
//       icon: '💻',
//       title: 'Web Development',
//       description: 'Custom web applications built with modern technologies and best practices.',
//     },
//     {
//       icon: '🎨',
//       title: 'UI/UX Design',
//       description: 'Beautiful, intuitive designs that provide exceptional user experiences .',
//     },
//     {
//       icon: '☁️',
//       title: 'Cloud Solutions',
//       description: 'Scalable cloud infrastructure and deployment strategies for your applications.',
//     },
//     {
//       icon: '🔒',
//       title: 'Security',
//       description: 'Robust security implementations to protect your data and applications.',
//     },
//     {
//       icon: '⚡',
//       title: 'Performance',
//       description: 'Optimized applications that deliver fast, responsive user experiences.',
//     },
//     {
//       icon: '🛠️',
//       title: '24/7 Support',
//       description: 'Continuous support and maintenance to keep your applications running smoothly.',
//     },
//   ]

//   return (
//     <div className={`services-section ${darkMode ? 'dark' : 'light'}`}>
//       <div className="services-container">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="services-header"
//         >
//           <h6 className="services-subtitle">Our Services</h6>
//           <h2 className="services-title">What We Offer</h2>
//         </motion.div>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="service-card"
//             >
//               <div className="service-icon">
//                 {service.icon}
//               </div>
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServicesSection
