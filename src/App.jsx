import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorLight from './components/CursorLight'
import HomePage from './pages/HomePage'
import CertificatesPage from './pages/CertificatesPage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import JourneyPage from './pages/JourneyPage'

function App() {
  return (
    <Router>
      <div className="App">
        <CursorLight />
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

