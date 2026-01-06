import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const Terms = lazy(() => import('../components/Terms/Terms'))
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Polygon Software</title>
        <meta name="description" content="Terms & Conditions for using Polygon Software services." />
        <meta name="keywords" content="terms, conditions, privacy policy, usage guidelines" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Suspense >
      <Header />
        <HeroPage title="Terms & Conditions" breadcrumbs={['Terms & Conditions']} description="Terms & Conditions for using Polygon Software services." backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" />
        <Terms />
        <Footer />
      </Suspense>
    </>
    
  )
}

export default TermsConditions