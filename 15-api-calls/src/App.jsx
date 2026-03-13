import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  // function getData () {
  //   console.log('Data aa gaya');
  // }
// ---------------------------------
// fetch ke through data 

//  async function getData () {
//     const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
//     console.log(response);
//   }

// ---------------------------------





// const getData = async () => {
//    const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
//    const data = await response.json()
//    console.log(data);
   
// }
// ---------------------------------------------------------------------------

const [data, setData] = useState([])

const getData = async () => {
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data)
  console.log(response);
  
}



  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
        return <h3>Hello {elem.author}, {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
