import React from 'react'

const LogAs = () => {
  return (
    <section className='h-screen bg-primary-gray flex justify-center items-center'>
         <p className='absolute top-[15%] text-3xl text-primary-blue font-bold'> Qui Etes Vous ?</p>
        <div className='flex w-full h-[600px] px-8'>
           
            <div className='bg-white w-1/2 rounded-3xl flex flex-col justify-center px-8'>
                <div className='flex flex-col items-end gap-4'>
                <div className='text-primary-blue'>
                    <p className='text-3xl font-bold'>
                        Un Stagier
                    </p>
                    <p className='font-light'>A la recherche d'un stage.</p>
                </div>
                <button className='primary-blue-btn'>S'identifier comme stagiers</button>
                </div>
            </div>
            <div className='bg-primary-green w-1/2 rounded-3xl  flex flex-col justify-center px-8'>
            <div className='flex flex-col items-start gap-4'>
                <div className='text-white'>
                    <p className='text-3xl font-bold'>
                        Une Organisation
                    </p>
                    <p className='font-light'>A la recherche des stagiers.</p>
                </div>
                <button className='primary-white-btn'>S'identifier comme organisation</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogAs