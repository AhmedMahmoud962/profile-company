import { Container, Typography, Box } from '@mui/material'

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Get in touch with us!
        </Typography>
      </Box>
    </Container>
  )
}
