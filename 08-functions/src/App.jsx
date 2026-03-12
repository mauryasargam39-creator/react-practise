import React from 'react'

const App = () => {

  // function inputChanging(elem){
  //   console.log(elem);
  // }

  // const pageScrolling = (elem) => {
  //   console.log('Scrolling..........',elem)
  // }

  const pageScrolling = () => {
    if(elem>0){
      console.log('Sidha Scrollign')
    }else{
      console.log('Ulta Scrollign')
    }
  }

  return (
    <div  onWheel={(elem) => {
      pageScrolling(elem.deltaY)
     }} >

      
     
     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
      


      {/* <h1>Hello Guys</h1> */}


      {/* <button onClick={()=>{
        console.log('button is clicked');
        
      }}>Click me</button> */}



      {/* <input 
      onChange={function(elem){
        inputChanging(elem.target.value)
      }}
      type="text" placeholder='Enter Name ' /> */}



     {/* <div 
     onMouseMove={(elem)=>{
      console.log(elem.ClientY)
     }}
     className='box'></div> */}


    </div>
  )
}

export default App
