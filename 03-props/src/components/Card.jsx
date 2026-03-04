import React from 'react'

const Card = (props) => {
  return (
        <div className="card">
           <h1>{props.user}, {props.age}</h1>
           <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi suscipit error illum aliquid maiores, molestias voluptatem laborum eum consectetur maxime nulla amet distinctio debitis repellat nobis? Facilis, accusantium.</p>
           <button>View Profile</button>
         </div>
  )
}

export default Card
