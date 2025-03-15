import React from 'react'
import Section1 from './Components/Section1'
import H1 from './Components/General/H1'
import Marquee from './Components/General/Marquee'
import Section2 from './Components/Section2'
import Box from './Components/General/Box'
import Section4 from './Components/Section4'


const App = () => {
  return (
    <>
    <Section1/>
    <Marquee text={'open to work'}/>
    <Section2/>
    <Section4/>
    </>
  )
}

export default App