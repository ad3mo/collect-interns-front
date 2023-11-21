import React from 'react'
import PostCard from './PostCard'
import {AiOutlineClose} from "react-icons/ai"

const ViewCard = (props) => {
  const { img, title, name, desc, onClose} = props;
  
  return (
    
      <div className='w-4/5  bg-white rounded-2xl backdrop-blur-md '>
      <div className='flex justify-end p-4 text-3xl' onClick={onClose}>
        <div className='cursor-pointer'>
        <AiOutlineClose/>
        </div>
        </div>
      <PostCard img={img} title={title} name={name} desc={desc} />
      </div>
  )
}

export default ViewCard