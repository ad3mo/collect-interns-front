import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <section className='sticky h-[80px] top-0 left-0 right-0 z-50 '>
        <header className='bg-white px-5 flex justify-between py-4 items-center'>
            <Link to={"/"}>
            <div className='ml-2 cursor-pointer text-2xl text-primary-blue font-bold uppercase'>Stage Embauche</div>
            </Link>
            <div className='hidden lg:flex flex-row gap-3 mr-2'>
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