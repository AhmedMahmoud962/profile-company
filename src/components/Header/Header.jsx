import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  const theme = useTheme()
  const { darkMode, toggleDarkMode } = useThemeContext()
  const location = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ]


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} className="header-software" sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          Polygon Software
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText>
              <Button
                component={Link}
                to={item.path}
                fullWidth
                sx={{
                  color:
                    location.pathname === item.path
                      ? 'primary.main'
                      : 'text.primary',
                  fontWeight:
                    location.pathname === item.path ? 'bold' : 'normal',
                }}
              >
                {item.name}
              </Button>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="relative"
          sx={{
            backgroundColor: darkMode
              ? 'rgba(18, 18, 18, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${theme.palette.divider}`,

          }}
        
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #8F6DFF, #FF6B9D)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Polygon Software
              </Typography>
            </motion.div>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        color:
                          location.pathname === item.path
                            ? 'primary.main'
                            : 'text.primary',
                        fontWeight:
                          location.pathname === item.path ? 'bold' : 'normal',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width:
                            location.pathname === item.path ? '100%' : '0%',
                          height: '2px',
                          bottom: 0,
                          left: 0,
                          backgroundColor: 'primary.main',
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{ color: 'primary.main' }}
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>

              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header
