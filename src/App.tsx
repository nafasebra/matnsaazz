import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TextView from './components/TextView'

function App() {
  return (
    <>
      <div className='w-[90%] md:w-[600px] mx-auto'>
        <Hero />
        <Header />
        <TextView />
      </div>
    </>
  )
}

export default App
