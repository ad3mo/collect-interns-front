import React from 'react'

import MainLayout from '../../components/MainLayout'
import Hero from './components/Hero'

const HomePage = () => {

  

  return (
    <MainLayout>
    <div className='bg-primary-gray h-screen'>

      
      <Hero />
      <button className='primary-blue-btn'>Get Started</button>
      
    </div>
    </MainLayout>
  )
}

export default HomePage