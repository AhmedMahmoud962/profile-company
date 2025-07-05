import React, { useState, useEffect } from 'react'
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
      website: 'https://bewell.com',
    },
    {
      id: 2,
      name: 'Polygon Technologies',
      logo: Polygon,
      website: 'https://polygontech.com',
    },
    {
      id: 3,
      name: 'Nanotation Nord',
      logo: Nanotation,
      website: 'https://nanotation.com',
    },
    {
      id: 4,
      name: 'Beautics',
      logo: Beautics,
      website: 'https://bewell.com',
    },
    // {
    //   id: 5,
    //   name: "TechCorp",
    //   logo: "/api/placeholder/200/80",
    //   website: "https://techcorp.com"
    // },
    // {
    //   id: 6,
    //   name: "InnovateLab",
    //   logo: "/api/placeholder/200/80",
    //   website: "https://innovatelab.com"
    // }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className={`partners-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="partners-container">
        {/* Header */}
        <motion.div
          className="partners-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              className="partner-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <div className="partner-logo-container">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
                <div className="partner-overlay">
                  <span className="partner-name">{partner.name}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SectionPartners
