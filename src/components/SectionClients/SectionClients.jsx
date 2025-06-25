import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionClients.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ClientsSection = () => {
  const { darkMode } = useThemeContext()

  const clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
      description: 'Leading technology company specializing in enterprise solutions and digital transformation.',
    },
    {
      id: 2,
      name: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80',
      description: 'Innovation hub focused on cutting-edge research and development in emerging technologies.',
    },
    {
      id: 3,
      name: 'GlobalFinance Inc',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?auto=format&fit=crop&w=200&q=80',
      description: 'International financial services company providing comprehensive banking solutions.',
    },
    {
      id: 4,
      name: 'HealthFirst Medical',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=80',
      description: 'Healthcare provider committed to delivering exceptional patient care and medical services.',
    },
    {
      id: 5,
      name: 'EduTech Academy',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&q=80',
      description: 'Educational technology platform revolutionizing online learning and student engagement.',
    },
  ]

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
                    <img src={client.image} alt={client.name} />
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