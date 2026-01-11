import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'
import { Home, ChevronRight } from 'lucide-react'
import './Heropage.css'

const HeroPage = ({ title, breadcrumbs, backgroundImage, description }) => {
  const defaultBgImage =
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80'

  // Validate props
  const pageTitle = title || 'XCELLENT'
  const pageDescription =
    description ||
    'Discover excellence in every pixel, every line of code, and every solution we deliver.'
  const bgImage = backgroundImage || defaultBgImage
  const breadcrumbsArray = Array.isArray(breadcrumbs) ? breadcrumbs : []

  return (
    <Box
      className="hero-page-container"
      sx={{
        height: '50vh',
        minHeight: '400px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
          background:
            'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Geometric Pattern Overlay */}
      <div className="geometric-pattern" />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <div className="hero-page-content">
          {/* Breadcrumbs */}
          {breadcrumbsArray.length > 0 && (
            <Breadcrumbs
              separator={
                <ChevronRight size={16} color="rgba(255, 255, 255, 0.7)" />
              }
              sx={{
                mb: 3,
                justifyContent: 'center',
                '& .MuiBreadcrumbs-ol': {
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                },
              }}
            >
              <Link to="/" className="breadcrumb-link">
                <Home size={16} style={{ marginRight: '6px' }} />
                Home
              </Link>

              {breadcrumbsArray.map((crumb, index) => (
                <Typography
                  key={index}
                  className={`breadcrumb-item ${
                    index === breadcrumbsArray.length - 1 ? 'active' : ''
                  }`}
                  sx={{
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  }}
                >
                  {crumb}
                </Typography>
              ))}
            </Breadcrumbs>
          )}

          {/* Title */}
          <Typography
            variant="h1"
            className="hero-main-title"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.1,
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              mb: { xs: 2, md: 3 },
            }}
          >
            {pageTitle}
          </Typography>

          {/* Description */}
          {pageDescription && (
            <Typography
              variant="h6"
              className="hero-page-description"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                maxWidth: 700,
                mx: 'auto',
                mt: { xs: 2, md: 3 },
                lineHeight: 1.6,
                fontWeight: 400,
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              {pageDescription}
            </Typography>
          )}
        </div>
      </Container>
    </Box>
  )
}

export default HeroPage
