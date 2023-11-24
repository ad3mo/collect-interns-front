import React from 'react'
import MainLayout from '../components/MainLayout'

const ProfilePage = () => {
  return (
    <MainLayout>
      <main className='bg-white mt-8 mx-auto w-[80%] lg:w-[70%] p-8 flex flex-col gap-6 h-screen'>
      <div class="grid grid-rows-3 grid-flow-col gap-5 m-5">
      <div class="row-span-3 bg-gray-200 h-[250px] ">ProfilePic</div>
      <div class="col-span-2 bg-gray-300">Profile Items</div>
      <div class="row-span-2 col-span-2 bg-gray-400">Item Desc Setting</div>
      </div>
      <div className='bg-gray-200 h-[250px] m-5'>
        preview
      </div>
      </main>
    </MainLayout>
  )
}

export default ProfilePage