import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <h1>This is {theme} </h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App



// lifting State up -  method name 