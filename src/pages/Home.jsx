import { useEffect, useState, Suspense, lazy, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import Spinner from '../components/Spinner/Spinner' // تأكد من المسار
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
  const [isInitialized, setIsInitialized] = useState(false)

  const loadPageData = useCallback(async () => {
    if (isInitialized) return // منع التحميل المتكرر

    startLoading('Loading Home Page...')

    try {
      // محاكاة تحميل البيانات
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsInitialized(true)
    } catch (error) {
      console.error('Failed to load home page:', error)
    } finally {
      stopLoading()
    }
  }, [isInitialized, startLoading, stopLoading])

  useEffect(() => {
    loadPageData()
  }, []) // dependency array فاضية

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
