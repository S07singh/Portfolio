import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import HomePage from './pages/HomePage'
import CertificatesPage from './pages/CertificatesPage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import JourneyPage from './pages/JourneyPage'

// Route changes should start at the top unless they target a #section
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="grain min-h-screen">
        <Cursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
