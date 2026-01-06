import React from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionPartners.css'
import BeWell from '../../assets/images/partners/bewell.jpg'
import Polygon from '../../assets/images/partners/polygon.jpg'
import Nanotation from '../../assets/images/partners/nanotration.jpg'
import Beautics from '../../assets/images/partners/beautics.png'

const SectionPartners = () => {
  const { darkMode } = useThemeContext()

  // Partner logos data
  const partners = [
    {
      id: 1,
      name: 'Be Well Store',
      logo: BeWell,
      link: 'https://be-well.store/',
    },
    {
      id: 2,
      name: 'Polygon Technologies',
      logo: Polygon,
      link: 'https://polygontechnologies.tech/',
    },
    {
      id: 3,
      name: 'Nanotation Nord',
      logo: Nanotation,
      link: 'https://www.nanotrition.tech/',
    },
    {
      id: 4,
      name: 'Beautics',
      logo: Beautics,
      link: 'https://beauticslab.tech/',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className={`partners-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="partners-container">
        {/* Header */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="partners-subtitle">Our Partners</h2>
          <h3 className="partners-title">Trusted by Leading Companies</h3>
          <p className="partners-description">
            We're proud to work with industry leaders who trust us to deliver
            exceptional results and innovative solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="partner-logo-wrapper"
              variants={itemVariants}
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
                loading="lazy"
                width="100%"
                height="auto"
              />
              </a>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionPartners