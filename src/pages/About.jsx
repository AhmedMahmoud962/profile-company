import React from 'react'
import { Container, Typography, Box } from '@mui/material'
function About() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Learn more about us!
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default About