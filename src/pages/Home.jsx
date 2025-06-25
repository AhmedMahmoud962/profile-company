import { Helmet } from 'react-helmet-async'

// Components
import HeroSlider from '../components/HeroSlider/HeroSlider'
import SectionAbout from '../components/SectionAbout/SectionAbout'
import ServicesSection from '../components/SectionServices/SectionServices'
import CounterSection from '../components/SectionCounter/SectionCounter'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import ClientsSection from '../components/SectionClients/SectionClients'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Polygon Software</title>
        <meta
          name="description"
          content="Welcome to the homepage of Polygon Software – providing professional software solutions to our clients."
        />
        <meta name="keywords" content="Polygon Software, software development, web applications, IT services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HeroSlider />
      <SectionAbout />
      <ServicesSection />
      <CounterSection />
      <ProjectsSection />
      <ClientsSection />
    </>
  )
}
