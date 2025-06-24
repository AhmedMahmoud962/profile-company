import { Container, Typography, Box } from '@mui/material'

export default function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Coming Soon...
        </Typography>
      </Box>
    </Container>
  )
}
