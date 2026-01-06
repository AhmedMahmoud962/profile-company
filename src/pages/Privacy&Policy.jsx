import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const Privacy = lazy(() => import('../components/privacy/Privacy'))
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Polygon Software</title>
        <meta name="description" content="Privacy Policy for using Polygon Software services." />
        <meta name="keywords" content="privacy policy, terms, conditions, usage guidelines" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <HeroPage title="Privacy Policy" breadcrumbs={['Privacy Policy']} description="Privacy Policy for using Polygon Software services." backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" />
        <Privacy />
        <Footer />
      </Suspense>
    </>
    
  )
}

export default PrivacyPolicy