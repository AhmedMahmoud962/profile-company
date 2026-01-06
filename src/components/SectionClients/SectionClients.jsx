import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionClients.css'
import { getClients } from '../API/ClientsService'
import { getImageUrl } from '../utils/constants'
// import Spinner from '../Spinner/Spinner'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ClientsSection = () => {
  const { darkMode } = useThemeContext()
  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await getClients()

        setClients(response.data)
      } catch (error) {
        console.error('Error fetching clients:', error)
        setClients([])
      }
    }
    fetchClients()
  }, [])

  return (
    <div className={`clients-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="clients-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
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
                slidesPerView: 2,
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="client-card"
                >
                  <div className="client-avatar">
                    <img
                      src={getImageUrl(client.image)}
                      alt={client.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="client-text-content">
                    <h3 className="client-name">{client.name}</h3>
                    <p className="client-description">{client.description}</p>
                  </div>
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
