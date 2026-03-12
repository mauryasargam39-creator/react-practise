import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();


    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(task);


    setTitle('');
    setDetails('');
  };


  const deletNotes = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen bg-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start  p-10"
        action=""
      >
        <h1 className="text-4xl font-bold text-black">Add Notes</h1>

          {/* pahela input for heading  */}
        <input
          className="px-5 font-medium w-full py-2 border-5 rounded outline-none"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* detailed vala input  */}
        <textarea
          className="px-5 w-full font-medium h-32 py-2 border-5 rounded outline-none flex items-start flex-row"
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />


        <button className="outline-none active:bg-gray-50 active:text-black bg-black text-white w-full px-5 py-2 rounded">
          Add Note
        </button>


        {/* <img className="rotate-y-180 font-medium h-52" src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" /> */}
      </form>
      <div className="lg:w-1/2 border-l-2 bg-gray-900 p-10 ">
        <h1 className="text-4xl font-bold text-white">Recent Notes</h1>
        <div className="flex gap-5 items-start justify-start flex-wrap mt-5 overflow-auto h-full">
          {/* <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div> */}


           {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl pt-9 pb-4 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div className="">
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                <p className="mt-2 leadign-tight text-xs font-semibold text-gray-500">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deletNotes(idx)
              }} className="py-1 cursor-pointer active:scale-95 text-xs rounded font-bold w-full bg-red-600 text-white">Delete</button>
              
            </div>
           })}

        </div>
      </div>
    </div>
  );
};

export default App;
