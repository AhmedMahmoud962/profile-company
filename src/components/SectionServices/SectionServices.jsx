import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { getServices } from '../API/serviceServices'
import { useState, useEffect } from 'react'
import './SectionServices.css'

const ServicesSection = () => {
  const { darkMode } = useThemeContext()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices()
        if (response.status === 200) {
          setServices(response.data || [])
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
    return null
  }

  if (services.length === 0) {
    return null
  }

  return (
    <div className={`services-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="services-container">
        <div className="services-header">
          <h6 className="services-subtitle">Our Services</h6>
          <h2 className="services-title">How can we help?</h2>
          <p>
            We help premium brands achieve their future through innovation and
            creative perspectives.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
