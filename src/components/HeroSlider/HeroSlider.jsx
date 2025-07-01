import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { getSlider } from '../API/sliderService'
import { useState, useEffect } from 'react'
import Spinner from '../Spinner/Spinner'
import { getImageUrl } from '../utils/constants'
// import './HeroSlider.css'

// Custom styles for enhanced pagination bullets
const customStyles = `
  .custom-bullet {
    background: rgba(255, 255, 255, 0.5) !important;
    border: 2px solid transparent !important;
    transition: all 0.3s ease !important;
    opacity: 0.7 !important;
  }
  
  .custom-bullet-active {
    background: linear-gradient(45deg, #8F6DFF, #FF6B9D) !important;
    border: 2px solid rgba(255, 255, 255, 0.8) !important;
    transform: scale(1.2) !important;
    opacity: 1 !important;
    box-shadow: 0 4px 15px rgba(143, 109, 255, 0.4) !important;
  }
  
  .custom-bullet:hover {
    background: rgba(255, 255, 255, 0.8) !important;
    transform: scale(1.1) !important;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = customStyles
  document.head.appendChild(style)
}

const HeroSlider = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getSlider()
        if (response.status === 200) {
          setSlides(response.data)
        }
      } catch (err) {
        console.error('Failed to fetch slides:', err)
        setSlides([])
      } finally {
        setLoading(false)
      }
    }
    fetchSlides()
  }, [])

  if (loading) return <Spinner message="Loading hero slider..." />

  if (slides.length === 0) return <div>No slides found</div>

  return (
    <Box sx={{ position: 'relative', height: { xs: '60vh', md: '100vh' } }}>
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
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass:
            'swiper-pagination-bullet-active custom-bullet-active',
        }}
        navigation={false}
        loop={true}
        style={{
          height: '100%',
          '--swiper-pagination-color': '#8F6DFF',
          '--swiper-pagination-bullet-inactive-color':
            'rgba(255, 255, 255, 0.5)',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '60vh', md: '100vh' }, // responsive height
                backgroundImage: `url(${getImageUrl(slide.image)})`,
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
                  background: 'rgba(0, 0, 0, 0.5)',
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
                    {slide.name}
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
                  <motion.div whileTap={{ scale: 0.95 }}>
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
                      component={Link}
                      to={slide.link}
                    >
                      Contact Us
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

// import React from 'react'
// import { Box, Container, Typography, Button } from '@mui/material'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import { motion } from 'framer-motion'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// // Custom styles for enhanced pagination bullets
// const customStyles = `
//   .custom-bullet {
//     background: rgba(255, 255, 255, 0.5) !important;
//     border: 2px solid transparent !important;
//     transition: all 0.3s ease !important;
//     opacity: 0.7 !important;
//   }

//   .custom-bullet-active {
//     background: linear-gradient(45deg, #8F6DFF, #FF6B9D) !important;
//     border: 2px solid rgba(255, 255, 255, 0.8) !important;
//     transform: scale(1.2) !important;
//     opacity: 1 !important;
//     box-shadow: 0 4px 15px rgba(143, 109, 255, 0.4) !important;
//   }

//   .custom-bullet:hover {
//     background: rgba(255, 255, 255, 0.8) !important;
//     transform: scale(1.1) !important;
//   }
// `

// // Inject styles
// if (typeof document !== 'undefined') {
//   const style = document.createElement('style')
//   style.textContent = customStyles
//   document.head.appendChild(style)
// }
// import { Link } from 'react-router-dom'

// const HeroSlider = () => {
//   const slides = [
//     {
//       id: 1,
//       image:
//         'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80',
//       title: 'Innovation at Its Best',
//       description:
//         'We create cutting-edge software solutions that transform businesses and drive success in the digital age.',
//       buttonText: 'View Portfolio',
//       buttonLink: '/portfolio',
//     },
//     {
//       id: 2,
//       image:
//         'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
//       title: 'Expert Development Team',
//       description:
//         'Our skilled developers leverage the latest technologies to build robust, scalable applications.',
//       buttonText: 'View Projects',
//       buttonLink: '/portfolio',
//     },
//     {
//       id: 3,
//       image:
//         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
//       title: 'Your Success, Our Mission',
//       description:
//         'Partner with us to turn your ideas into powerful software solutions that exceed expectations.',
//       buttonText: 'Contact Now',
//       buttonLink: '/contact',
//     },
//   ]

//   return (
//     <Box sx={{ position: 'relative', height: { xs: '60vh', md: '100vh' } }}>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           bulletClass: 'swiper-pagination-bullet custom-bullet',
//           bulletActiveClass:
//             'swiper-pagination-bullet-active custom-bullet-active',
//         }}
//         navigation={false}
//         loop={true}
//         style={{
//           height: '100%',
//           '--swiper-pagination-color': '#8F6DFF',
//           '--swiper-pagination-bullet-inactive-color':
//             'rgba(255, 255, 255, 0.5)',
//           '--swiper-pagination-bullet-inactive-opacity': '0.5',
//           '--swiper-pagination-bullet-size': '12px',
//           '--swiper-pagination-bullet-horizontal-gap': '6px',
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 height: { xs: '60vh', md: '100vh' }, // responsive height
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'rgba(0, 0, 0, 0.5)',
//                   zIndex: 1,
//                 },
//               }}
//             >
//               <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: index * 0.2 }}
//                 >
//                   <Typography
//                     variant="h1"
//                     sx={{
//                       color: 'white',
//                       fontWeight: 'bold',
//                       mb: 3,
//                       fontSize: { xs: '2.5rem', md: '4rem' },
//                       textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                     }}
//                   >
//                     {slide.title}
//                   </Typography>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       color: 'white',
//                       mb: 4,
//                       maxWidth: 600,
//                       fontSize: { xs: '1.2rem', md: '1.5rem' },
//                       textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//                     }}
//                   >
//                     {slide.description}
//                   </Typography>
//                   <motion.div whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       sx={{
//                         background: 'linear-gradient(45deg, #8F6DFF, #FF6B9D)',
//                         color: 'white',
//                         px: 4,
//                         py: 2,
//                         fontSize: '1.1rem',
//                         boxShadow: '0 8px 32px rgba(143, 109, 255, 0.3)',
//                         '&:hover': {
//                           boxShadow: '0 12px 40px rgba(143, 109, 255, 0.4)',
//                         },
//                       }}
//                       component={Link}
//                       to={slide.buttonLink}
//                     >
//                       {slide.buttonText}
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               </Container>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   )
// }

// export default HeroSlider

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Container, Typography, Button } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Link } from 'react-router-dom';

// const baseURL = 'https://api.myaios.ai/';

// const HeroSlider = () => {
//   const [slides, setSlides] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const fetchSlides = async () => {
//     try {
//       const response = await axios.get(`${baseURL}api/sliders`);
//       if (response.data.status === 200) {
//         setSlides(response.data.data);
//       } else {
//         console.error('Unexpected response:', response);
//       }
//     } catch (err) {
//       console.error('Failed to fetch slides:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <div>Loading hero slider...</div>;

//   return (
//     <Box sx={{ position: 'relative', height: { xs: '60vh', md: '100vh' } }}>
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{
//           clickable: true,
//           bulletClass: 'swiper-pagination-bullet custom-bullet',
//           bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
//         }}
//         navigation={false}
//         loop
//         style={{
//           height: '100%',
//           '--swiper-pagination-color': '#8F6DFF',
//           '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.5)',
//           '--swiper-pagination-bullet-size': '12px',
//         }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 height: { xs: '60vh', md: '100vh' },
//                 backgroundImage: `url(${baseURL}${slide.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 display: 'flex',
//                 alignItems: 'center',
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'rgba(0, 0, 0, 0.5)',
//                   zIndex: 1,
//                 },
//               }}
//             >
//               <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: index * 0.2 }}
//                 >
//                   <Typography
//                     variant="h1"
//                     sx={{
//                       color: 'white',
//                       fontWeight: 'bold',
//                       mb: 3,
//                       fontSize: { xs: '2.5rem', md: '4rem' },
//                       textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                     }}
//                   >
//                     {slide.name}
//                   </Typography>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       color: 'white',
//                       mb: 4,
//                       maxWidth: 600,
//                       fontSize: { xs: '1.2rem', md: '1.5rem' },
//                       textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//                     }}
//                   >
//                     {slide.description}
//                   </Typography>
//                   <motion.div whileTap={{ scale: 0.95 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       sx={{
//                         background: 'linear-gradient(45deg, #8F6DFF, #FF6B9D)',
//                         color: 'white',
//                         px: 4,
//                         py: 2,
//                         fontSize: '1.1rem',
//                         boxShadow: '0 8px 32px rgba(143, 109, 255, 0.3)',
//                         '&:hover': {
//                           boxShadow: '0 12px 40px rgba(143, 109, 255, 0.4)',
//                         },
//                       }}
//                       href={slide.link} // رابط خارجي
//                       target="_blank"
//                     >
//                       Visit Link
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               </Container>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default HeroSlider;
