import React from 'react'
import { Box, Container, Typography, Breadcrumbs } from '@mui/material'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'
import './Heropage.css'

const HeroPage = ({ title, breadcrumbs, backgroundImage }) => {
  // const location = useLocation()
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Default background image if none provided
  const defaultBgImage = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80'

  return (
    <Box className="hero-page-container">
      {/* Hero Section with 50vh Background */}
      <Box
        className="hero-background-section"
        sx={{
          height: '50vh',
          minHeight: '400px',
          backgroundImage: `url(${backgroundImage || defaultBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            zIndex: 2,
          }
        }}
      >
        {/* Geometric Pattern Overlay */}
        <Box className="geometric-pattern" />
        
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative', 
            zIndex: 3,
            textAlign: 'center'
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb Navigation */}
            <motion.div variants={itemVariants}>
              <Breadcrumbs
                separator={<ChevronRight size={16} color="rgba(255, 255, 255, 0.7)" />}
                sx={{
                  mb: 4,
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
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: 'white'
                    }
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <Home size={16} style={{ marginRight: '6px' }} />
                  Home
                </Link>
                
                {breadcrumbs && breadcrumbs.map((crumb, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: index === breadcrumbs.length - 1 
                        ? '#8F6DFF' 
                        : 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.9rem',
                      fontWeight: index === breadcrumbs.length - 1 ? 600 : 500
                    }}
                  >
                    {crumb}
                  </Typography>
                ))}
              </Breadcrumbs>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                className="hero-main-title"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                  lineHeight: 1.1,
                  mb: 2,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(45deg, #8F6DFF, #FF6B9D)',
                    borderRadius: '2px',
                    boxShadow: '0 4px 15px rgba(143, 109, 255, 0.4)'
                  }
                }}
              >
                {title || 'XCELLENT'}
              </Typography>
            </motion.div>

            {/* Subtitle/Description */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 400,
                  maxWidth: 600,
                  mx: 'auto',
                  mt: 4,
                  lineHeight: 1.6,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                Discover excellence in every pixel, every line of code, and every solution we deliver.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              cursor: 'pointer'
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Box className="scroll-mouse" />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}

export default HeroPage