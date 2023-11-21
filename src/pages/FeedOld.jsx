import React, {useState} from 'react'
import MainLayout from '../components/MainLayout'
import PostCard from '../components/PostCard'
import ViewCard from '../components/ViewCard'
import isimm from "../assets/logoisimm.png"


const data = {
  img: isimm,
  title: "job developer",
  name: "isimm",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam purus, ultricies nec dignissim ac, varius ut tortor. Maecenas etvenenatis dui. In hac habitasse platea dictumst. Duis sollicitudinfelis vel est bibendum, a venenatis justo feugiat. Quisque id mauriseu urna fermentum imperdiet. Nullam eget nibh eu augue volutpatdictum. "
}
const Feed = () => {
    
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  return (
    <div className='h-screen w-screen overflow-hidden'>
    <MainLayout>
        <div className='h-screen overflow-auto'>
        
            <div className=' bg-white h-full mt-8 mx-auto w-[80%] lg:w-[70%] p-8 flex flex-col gap-3'>

                
                <PostCard img={data.img} title={data.title} name={data.name} desc={data.desc} onOpen={handleClick} />
                
                
              
            </div>

        
        </div>
        <>
      {open ? (
      <div className='top-0 bottom-0 absolute w-screen h-screen overflow-hidden bg-black/20 z-40 flex justify-center items-center  backdrop-blur-md '> 
      
      <ViewCard img={data.img} title={data.title} name={data.name} desc={data.desc} onClose={handleClick}/>
      </div>
      ): null}
      </>
      
    </MainLayout>
    </div>
  )
}

export default Feed