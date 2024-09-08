import Recruiters from '@/data/recruiters'
import HomePage from '../../pages/HomePage'
import React from 'react'
import Marquee from './components/marquee'

function page() {
  return (
    <div>
      <Marquee />
      <HomePage />
    </div>
  )
}

export default page
