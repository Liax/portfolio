import './App.css'
import Loader from './components/Loader.js'
import Home from './screen/Home.js'
import About from './screen/About.js'
import ProjetDetails from './screen/ProjetDetails.js'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  let [isLoaded, setisLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(false)
    }, 3000)
  }, [])

  return (
    <>
      {isLoaded === false ? (
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/:subtitle' element={<ProjetDetails />} />
          </Routes>
        </div>
      ) : (
        <Loader />
      )}
      {/*
        <Route path='/technology' element={<Technology />} /> */}
    </>
  )
}

export default App
