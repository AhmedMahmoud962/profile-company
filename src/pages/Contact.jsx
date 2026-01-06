import { Helmet } from 'react-helmet-async' 
import { Suspense, lazy } from 'react'
const HeroPage = lazy(() => import('../components/HeroSection/Heropage'))
const FormContact = lazy(() => import('../components/FormContact/FormContact'))
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Polygon Software</title>
        <meta
          name="description"
          content="Get in touch with Polygon Software, our team, and learn how we can help you with your projects."
        />
        <meta
          name="keywords"
          content="contact, polygon software, team, projects"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <HeroPage
        title="Contact"
        breadcrumbs={['Contact']}
        description="Get in touch with Polygon Software, our team, and learn how we can help you with your projects."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
      />
        <FormContact />
        <Footer />
      </Suspense>
    </>
  )
}
