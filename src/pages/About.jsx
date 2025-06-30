import React from 'react'
import HeroPage from '../components/HeroSection/Heropage'
import { Helmet } from 'react-helmet-async'
import SectionAbout from '../components/SectionAbout/SectionAbout'
import SectionClients from '../components/SectionClients/SectionClients'
import SectionTeam from '../components/SectionTeam/SectionTeam'

function About() {
  return (
    <>
      <Helmet>
        <title>About | Polygon Software</title>
        <meta
          name="description"
          content="Learn more about Polygon Software, our mission, and the team behind it."
        />
        <meta
          name="keywords"
          content="about, polygon software, team, mission"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroPage
        title="About"
        breadcrumbs={['About']}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
      />
      <SectionAbout />
      <SectionTeam />
      <SectionClients />

    </>
  )
}

export default About
