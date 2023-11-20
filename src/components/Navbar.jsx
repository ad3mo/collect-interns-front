import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"
const Navbar = () => {
    const [open , setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
  return (
    <section className='sticky h-[80px] top-0 left-0 right-0 z-50'>
        <header className='bg-white px-8 flex justify-between py-4  items-center'>
            <Link to={"/"}>
            <div className='ml-2 cursor-pointer text-2xl text-primary-blue font-bold uppercase'>Stage Embauche</div>
            </Link>
            <div className='text-2xl lg:hidden' onClick={handleClick}>{open? <AiOutlineClose/> : <AiOutlineMenu />}</div>
            <div className={`${
            open ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-white lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center gap-4`}>
                <Link to={"/login"}>
                <button className='primary-blue-btn'>Connection</button>
                </Link>
                <Link to={"/register"}>
                <button className='primary-green-btn'>Inscription</button>
                </Link> 
            </div>
        </header>
    </section>
  )
}

export default Navbar