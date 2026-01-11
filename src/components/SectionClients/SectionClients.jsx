import React, { useState, useEffect, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionClients.css'
import { getClients } from '../API/ClientsService'
import { getImageUrl } from '../utils/constants'
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
        setClients(response.data || [])
      } catch (error) {
        console.error('Error fetching clients:', error)
        setClients([])
      } finally {
        setLoading(false)
      }
    }
    fetchClients()
  }, [])

  const hasClients = useMemo(() => clients.length > 0, [clients.length])

  if (loading || !hasClients) {
    return null
  }

  return (
    <div className={`clients-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="clients-container">
        <div className="clients-header">
          <span className="clients-subtitle" role="heading" aria-level="2">
            Our Clients
          </span>
          <h2 className="clients-title">Trusted Partners</h2>
        </div>

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
            loop={clients.length > 2}
            className="clients-swiper"
            watchSlidesProgress={false}
            watchSlidesVisibility={false}
            observer={false}
            observeParents={false}
            observeSlideChildren={false}
            updateOnWindowResize={true}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="client-card">
                  <div className="client-avatar">
                    <img
                      src={getImageUrl(client.image)}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="client-text-content">
                    <h3 className="client-name">{client.name}</h3>
                    <p className="client-description">{client.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ClientsSection
