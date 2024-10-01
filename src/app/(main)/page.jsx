import Events from './components/Events'
import React from 'react'
import MarqueeDemo from './components/marquee'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Footer from './components/Footer';
import Alumnicard from './components/Alumnicard';
// import Alumni from './components/Alumni';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeDemo />
      <Events />
     <Alumnicard/>
      <Statistics/>
      <About/>
      <Footer/>
    </div>
  );
}
