import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Counter from '../Counter/Counter'
import Resume from '../Resume/Resume'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Counter/>
      <Skills/>
      <Resume/>
    </div>
  )
}

export default Home