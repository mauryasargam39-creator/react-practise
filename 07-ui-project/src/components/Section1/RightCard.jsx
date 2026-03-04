import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden w-80 rounded-4xl relative'>
       <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id={props.id+1} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard
