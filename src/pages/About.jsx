import React from 'react'
import HeroPage from '../components/HeroSection/Heropage'
import { Helmet } from 'react-helmet-async'
function About() {
  return (
    <div> 
      <Helmet>  
        <title>About | Polygon Software</title>
        <meta name="description" content="Learn more about Polygon Software, our mission, and the team behind it." />
        <meta name="keywords" content="about, polygon software, team, mission" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroPage title="About" breadcrumbs={['About']}  />
    </div>
  )
}

export default About