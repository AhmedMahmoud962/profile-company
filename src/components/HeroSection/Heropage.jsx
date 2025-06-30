import React from 'react'
import { Box, Container, Typography, Breadcrumbs } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'
import './Heropage.css'

const HeroPage = ({ title, breadcrumbs, backgroundImage }) => {
  const defaultBgImage = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80'

  return (
    <Box
      sx={{
        height: '50vh',
        minHeight: '400px',
        backgroundImage: `url(${backgroundImage || defaultBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<ChevronRight size={16} color="rgba(255, 255, 255, 0.7)" />}
            sx={{
              mb: 3,
              justifyContent: 'center',
              '& .MuiBreadcrumbs-ol': {
                justifyContent: 'center'
              }
            }}
          >
            <Link
              to="/"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem'
              }}
            >
              <Home size={16} style={{ marginRight: '6px' }} />
              Home
            </Link>
            
            {breadcrumbs && breadcrumbs.map((crumb, index) => (
              <Typography
                key={index}
                sx={{
                  color: index === breadcrumbs.length - 1 ? '#8F6DFF' : 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  fontWeight: index === breadcrumbs.length - 1 ? 600 : 500
                }}
              >
                {crumb}
              </Typography>
            ))}
          </Breadcrumbs>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '3rem', md: '4.5rem' },
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {title || 'XCELLENT'}
          </Typography>

          {/* Description */}
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: 600,
              mx: 'auto',
              mt: 3
            }}
          >
            Discover excellence in every pixel, every line of code, and every solution we deliver.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HeroPage