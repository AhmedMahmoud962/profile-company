import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ProjectDetails from './pages/ProjectDetails'
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

// import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import Portfolio from './pages/Portfolio'
// import Contact from './pages/Contact'
// import ProjectDetail from './pages/ProjectDetails'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'

// export default function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/project/:id" element={<ProjectDetail />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }
