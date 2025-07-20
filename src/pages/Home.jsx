import { useEffect, useState, Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLoading } from '../context/LoadingContext'

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
  const { startLoading, stopLoading } = useLoading()
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      startLoading('Loading Home Page...')

      try {
        // محاكاة تحميل البيانات - عشان نشوف الـ spinner
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // هنا ممكن تضع API call لما المشكلة تتحل
        setData({ message: 'Data loaded successfully!' })
      } catch (err) {
        console.error(err)
      } finally {
        stopLoading()
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Helmet>
        <title>Home | Polygon Software</title>
        <meta
          name="description"
          content="Welcome to the homepage of Polygon Software – providing professional software solutions to our clients."
        />
        <meta
          name="keywords"
          content="Polygon Software, software development, web applications, IT services"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Suspense fallback={<div></div>}>
        <HeroSlider />
        <SectionAbout />
        <ServicesSection />
        <CounterSection />
        <ProjectsSection />
        <ClientsSection />
      </Suspense>
    </>
  )
}
