import { useState } from 'react'

import './App.css'
import MainPage from '../components/MainPage'
import { Routes,Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import About from '../components/AboutUS'
import GallerySection from '../components/GallerySection'
import CTASection from '../components/CTASection'

function App() {
return (
    <>
      
       <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<CTASection />} />
          
          {/* <Route path="*" element={""} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
