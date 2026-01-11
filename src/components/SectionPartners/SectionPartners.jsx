import React from 'react'
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

  return (
    <section className={`partners-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="partners-container">
        {/* Header */}
        <div className="partners-header">
          <h2 className="partners-subtitle">Our Partners</h2>
          <h3 className="partners-title">Trusted by Leading Companies</h3>
          <p className="partners-description">
            We're proud to work with industry leaders who trust us to deliver
            exceptional results and innovative solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-logo-wrapper">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="100"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionPartners
