import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import AiProjectsSection from '../components/AiProjectsSection'
import TestimonialSection from '../components/TestimonialSection'
import Magic from '../components/Magic'

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white w-full">
      <HeroSection/>
      <AiProjectsSection/>
      <HowItWorks/>
      <About/>
      <TestimonialSection/>
      <Magic/>
    </div>
  )
}

export default Home