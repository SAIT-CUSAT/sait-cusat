import Events from './components/Events'
import React from 'react'
import MarqueeDemo from './components/marquee'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Footer from './components/Footer';
// import Alumni from './components/Alumni';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeDemo />
      <Events />
      {/* <Alumni/> */}
      <Statistics/>
      <About/>
      <Footer/>
    </div>
  );
}
