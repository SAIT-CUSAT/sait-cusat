import Recruiters from '@/data/recruiters'
import HomePage from '../../pages/HomePage'
import React from 'react'
import Marquee from './components/marquee'

import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <HomePage />
    </div>
  );
}
