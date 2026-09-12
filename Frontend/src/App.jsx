import { useState } from 'react'

import './App.css'
import MainPage from '../components/MainPage'
import { Routes,Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'

function App() {
return (
    <>
      
       <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          
          {/* <Route path="*" element={""} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
