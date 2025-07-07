import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material'
import { motion } from 'framer-motion'
import { LinkedIn, Twitter, GitHub, Email } from '@mui/icons-material'
import { useThemeContext } from '../../context/ThemeContext'
import './SectionTeam.css'

const SectionTeam = () => {
  const { darkMode } = useThemeContext()

  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Mohamed',
      position: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Visionary leader with 10+ years in software development',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'ahmed@polygon.com',
      },
    },
    {
      id: 2,
      name: 'Ali Mohamed',
      position: 'Lead Developer',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b152b2c5?auto=format&fit=crop&w=300&q=80',
      bio: 'Full-stack developer specializing in React and Node.js',
      social: {
        linkedin: '#',
        github: '#',
        email: 'sara@polygon.com',
      },
    },
    {
      id: 3,
      name: 'Omar Hassan',
      position: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      bio: 'Creative designer focused on user experience and interface',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'omar@polygon.com',
      },
    },
    {
      id: 4,
      name: 'Mohamed Khaled',
      position: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      bio: 'Experienced PM ensuring smooth project delivery',
      social: {
        linkedin: '#',
        email: 'mona@polygon.com',
      },
    },
    {
      id: 5,
      name: 'Youssef Ahmed',
      position: 'Backend Developer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      bio: 'Backend specialist with expertise in cloud architecture',
      social: {
        github: '#',
        linkedin: '#',
        email: 'youssef@polygon.com',
      },
    },
    {
      id: 6,
      name: 'Ibrahim Mohamed',
      position: 'QA Engineer',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      bio: 'Quality assurance expert ensuring bug-free applications',
      social: {
        linkedin: '#',
        email: 'fatma@polygon.com',
      },
    },
  ]

  return (
    <Box className={`team-section ${darkMode ? 'dark' : 'light'}`}>
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h6" className="team-subtitle">
              Our Team
            </Typography>
            <Typography variant="h3" className="team-title">
              Meet The Experts
            </Typography>
            <Typography variant="h6" className="team-description">
              Talented professionals dedicated to bringing your vision to life
            </Typography>
          </Box>
        </motion.div>

        {/* Team Grid - 3 per row on desktop, responsive for all devices */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid 
              item 
              xs={12}        // 1 per row on mobile
              sm={6}         // 2 per row on small tablets
              md={4}         // 3 per row on medium screens and up
              lg={4}         // Keep 3 per row on large screens
              xl={4}         // Keep 3 per row on extra large screens
              key={member.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ width: '100%', maxWidth: '350px' }}
              >
                <Card className="team-card">
                  <Box className="team-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                      loading="lazy"
                    />
                    <Box className="team-overlay">
                      <Box className="team-social">
                        {member.social.linkedin && (
                          <IconButton
                            className="social-btn"
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <LinkedIn />
                          </IconButton>
                        )}
                        {member.social.twitter && (
                          <IconButton
                            className="social-btn"
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} Twitter`}
                          >
                            <Twitter />
                          </IconButton>
                        )}
                        {member.social.github && (
                          <IconButton
                            className="social-btn"
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} GitHub`}
                          >
                            <GitHub />
                          </IconButton>
                        )}
                        {member.social.email && (
                          <IconButton
                            className="social-btn"
                            href={`mailto:${member.social.email}`}
                            aria-label={`Email ${member.name}`}
                          >
                            <Email />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  <CardContent className="team-content">
                    <Typography variant="h6" className="team-name">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="team-position">
                      {member.position}
                    </Typography>
                    <Typography variant="body2" className="team-bio">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Box className="team-cta">
            <Typography variant="h5" className="cta-title">
              Want to Join Our Team?
            </Typography>
            <Typography variant="body1" className="cta-description">
              We're always looking for talented individuals to join our growing
              team
            </Typography>
            <button className="cta-button">View Open Positions</button>
          </Box> */}
        </motion.div>
      </Container>
    </Box>
  )
}

export default SectionTeam