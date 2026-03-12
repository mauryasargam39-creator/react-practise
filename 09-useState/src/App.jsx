import React from 'react'
import { useState } from 'react'

const App = () => {

//  practise set
  // const [num, setNum] = useState(10)
  // const [username, setUsername] = useState('Sargam')
  //  const [users, setUsers] = useState([10,20,30])

  // function changeNum(){
  //   setNum(30)
  //   setUsername('Riya')
  //   setUsers([10,40,30])
  // }
//  practise set


const [num, setNum] = useState(0)
function increaseNum(){
  setNum(num+1)
}
function decreaseNum(){
  setNum(num-1)
}

  return (
    <div>
       {/* practise set */}
     {/* <h1>Value of a is {num} <br/> {users} <br /> Value of user is {username}</h1>
     <button onClick={changeNum}>Click</button> */}
 {/* practise set */}


{/* counter  */}
<h1>{num}</h1>
<button onClick={increaseNum}>increase</button>
<button onClick={decreaseNum}>decrease</button>



     </div>
  )
}

export default App
