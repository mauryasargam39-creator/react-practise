import React from 'react'
import Card from './components/Card'



const App = () => {
  return (
    <div className='parent'>
     <Card user='aman' age={18}/>
     <Card user='Sargam' age={20}/>
    </div>
  )
}

export default App
