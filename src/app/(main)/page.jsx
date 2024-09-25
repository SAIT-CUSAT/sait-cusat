import Events from './components/Events'
import React from 'react'
import MarqueeDemo from './components/marquee'

import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeDemo />
      <Events />
    </div>
  );
}
