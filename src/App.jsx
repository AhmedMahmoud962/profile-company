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
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/Privacy&Policy'
import GDPR from './pages/GDPR'
export default function App() {
  return (
    <>
      <GlobalSpinner />
      <ScrollToTop />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gdpr" element={<GDPR />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}