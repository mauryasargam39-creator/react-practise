import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'


const App = () => {
  const user = "Sargam"
  const age = 26

  return (
    <div>
      <Navbar />
      <Card/>
    </div>
  )
}

export default App
