import React from 'react'
import { Box, Container, Typography, Button, useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HeroSlider = () => {
  const theme = useTheme()

  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80',
      title: 'Innovation at Its Best',
      description:
        'We create cutting-edge software solutions that transform businesses and drive success in the digital age.',
      buttonText: 'Get Started',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
      title: 'Expert Development Team',
      description:
        'Our skilled developers leverage the latest technologies to build robust, scalable applications.',
      buttonText: 'View Projects',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
      title: 'Your Success, Our Mission',
      description:
        'Partner with us to turn your ideas into powerful software solutions that exceed expectations.',
      buttonText: 'Contact Us',
    },
  ]

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', mt: 8 }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        style={{ height: '100vh' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}60)`,
                  zIndex: 1,
                },
              }}
            >
              <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      mb: 4,
                      maxWidth: 600,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    }}
                  >
                    {slide.description}
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #8F6DFF, #FF6B9D)',
                        color: 'white',
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 32px rgba(143, 109, 255, 0.3)',
                        '&:hover': {
                          boxShadow: '0 12px 40px rgba(143, 109, 255, 0.4)',
                        },
                      }}
                    >
                      {slide.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default HeroSlider
