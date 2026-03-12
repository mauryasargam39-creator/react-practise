import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form Submit')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
