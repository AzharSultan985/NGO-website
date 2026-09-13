import React from 'react'
import Navbar from './layout/Navbar'
import HeroSection from './herosection'
import GallerySection from './GallerySection'
import CTASection from './CTASection'
import AboutSection from './AboutUS'

function MainPage() {
  return (
<>

<HeroSection/>
<div className=''>

<AboutSection/>
<GallerySection/>
<CTASection/>
</div>
</>
  )
}

export default MainPage
