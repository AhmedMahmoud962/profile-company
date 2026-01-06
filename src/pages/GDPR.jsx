import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const GDPRComponent = lazy(() => import('../components/GDPR/GDPRComponent'))
const GDPR = () => {
  return (
    <>
      <Helmet>
        <title>GDPR | Polygon Software</title>
        <meta name="description" content="GDPR for using Polygon Software services." />
        <meta name="keywords" content="privacy policy, terms, conditions, usage guidelines" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroPage title="GDPR" breadcrumbs={['GDPR']} description="GDPR for using Polygon Software services." backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" />
        <GDPRComponent />
      </Suspense>
    </>
    
  )
}

export default GDPR