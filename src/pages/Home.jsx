import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Descreption from '../components/Descreption'
import Testmonials from '../components/Testmonials'
import GenerateButton from '../components/GenerateButton'


function Home() {
  return (
    <div>
      <Header/>
      <Steps/>
      <Descreption/>
      <Testmonials/>
      <GenerateButton/>
      
    </div>
  )
}

export default Home
