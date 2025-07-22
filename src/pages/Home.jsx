import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

// Lazy Components
const HeroSlider = lazy(() => import('../components/HeroSlider/HeroSlider'))
const SectionAbout = lazy(() =>
  import('../components/SectionAbout/SectionAbout'),
)
const ServicesSection = lazy(() =>
  import('../components/SectionServices/SectionServices'),
)
const CounterSection = lazy(() =>
  import('../components/SectionCounter/SectionCounter'),
)
const ProjectsSection = lazy(() =>
  import('../components/ProjectsSection/ProjectsSection'),
)
const ClientsSection = lazy(() =>
  import('../components/SectionClients/SectionClients'),
)

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Polygon Software</title>
        <meta
          name="description"
          content="Welcome to Polygon Software – Your trusted partner for innovative software solutions."
        />
        <meta
          name="keywords"
          content="Polygon Software, software development, web applications, IT services"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
          <HeroSlider />
          <SectionAbout />
          <ServicesSection />
          <CounterSection />
          <ProjectsSection />
          <ClientsSection />
        </Suspense>
      </main>
    </>
  )
}
