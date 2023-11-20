import React from 'react'
import MainLayout from '../components/MainLayout'
import PostCard from '../components/PostCard'

const Feed = () => {
  return (
    <MainLayout>
        <div className='h-screen'>
            <div className=' bg-white h-full mt-8 mx-auto w-[80%] lg:w-[70%] p-8 flex flex-col gap-3'>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>

        
        </div>
    </MainLayout>
  )
}

export default Feed