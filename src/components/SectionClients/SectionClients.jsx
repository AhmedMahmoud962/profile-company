import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionClients.css'
import { getClients } from '../API/ClientsService'
import { getImageUrl } from '../utils/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ClientsSection = () => {
  const { darkMode } = useThemeContext()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getClients()

        setClients(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching clients:', error)
        setClients([])
        setLoading(false)
      } 
    }
    fetchClients()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={`clients-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="clients-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="clients-header"
        >
          <h6 className="clients-subtitle">Our Clients</h6>
          <h2 className="clients-title">Trusted Partners</h2>
        </motion.div>

        <div className="clients-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={true}
            className="clients-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={client.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="client-card"
                >
                  <div className="client-avatar">
                    <img src={getImageUrl(client.image)} alt={client.name} loading="lazy" />
                  </div>
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-description">{client.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ClientsSection