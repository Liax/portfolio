import './App.css'
import Loader from './components/Loader.js'
import Home from './screen/Home.js'
import Wave from './components/Wave.js'

import { useState, useEffect } from 'react'

function App() {
  let [isLoaded, setisLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(false)
    }, 500)
  }, [])

  return (
    <>
      <div className='App'>
        <Home />
      </div>
      {/* {isLoaded === false ? (
        <div className='App'>
          <Home />
        </div>
      ) : (
        <Loader />
      )} */}
    </>
  )
}

export default App
