import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

// Lazy load components
const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const SectionAbout = lazy(() => import('../components/SectionAbout/SectionAbout'))
const SectionClients = lazy(() => import('../components/SectionClients/SectionClients'))
const SectionTeam = lazy(() => import('../components/SectionTeam/SectionTeam'))
const SectionPartners = lazy(() => import('../components/SectionPartners/SectionPartners'))
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
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
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <HeroPage
          title="About"
          breadcrumbs={['About']}
          description="Learn more about Polygon Software, our mission, and the team behind it."
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        />
        <SectionAbout />
        <SectionTeam />
        <SectionClients />
        <SectionPartners />
        <Footer />
      </Suspense>
    </>
  )
}

export default About