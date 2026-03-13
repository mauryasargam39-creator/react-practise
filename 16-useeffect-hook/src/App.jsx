import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)


  useEffect(function(){
    console.log('use effect is running');
  },[])


  return (
    <div>
      <h1> {num} </h1>
      <h1> {num2} </h1>

      <button onClick={()=>{
        setNum(num+1)
      }}
      onDoubleClick={()=>{
        setNum2(num2+10)
      }}
      >Click</button>



    </div>
  )
}

export default App
