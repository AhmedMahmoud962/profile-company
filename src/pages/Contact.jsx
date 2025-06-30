import { Helmet } from 'react-helmet-async'
import HeroPage from '../components/HeroSection/Heropage'

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact | Polygon Software</title>
        <meta name="description" content="Get in touch with Polygon Software, our team, and learn how we can help you with your projects." />
        <meta name="keywords" content="contact, polygon software, team, projects" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <HeroPage title="Contact" breadcrumbs={['Contact']}  />
    </>
  )
}
