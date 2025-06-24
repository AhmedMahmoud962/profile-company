import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Polygon Software
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Building innovative solutions for the digital world
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/portfolio"
              variant="contained"
              size="large"
            >
              View Our Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
