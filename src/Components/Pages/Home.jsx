import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Counter from '../Counter/Counter'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Com from '../Communication/Com'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Counter/>
      <Resume/>
      <Skills/>
      <Portfolio/>
      <Com/>
    </div>
  )
}

export default Home