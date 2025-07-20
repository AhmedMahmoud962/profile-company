import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ProjectDetails from './pages/ProjectDetails'
import GlobalSpinner from './components/GlobalSpinner/GlobalSpinner'
import NotFound from './components/NotFound/NotFound'

export default function App() {
  return (
    <>
      <GlobalSpinner />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}