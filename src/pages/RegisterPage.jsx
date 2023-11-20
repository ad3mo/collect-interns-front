import React from 'react'
import MainLayout from '../components/MainLayout'
const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  }
  return (
    <MainLayout className="">
      <div className='flex justify-center  mt-8 h-screen'>
        <form onSubmit={handleSubmit}>
          <div className='bg-white w-[500px] h-auto py-[100px] mx-auto flex flex-col items-center text-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
            <div className='pb-8'>
              <h1 className='text-2xl text-primary-blue font-bold'>Inscription</h1>
              <h1 className='text-xl text-primary-green font-semibold'>Stagier</h1>
            </div>
            <div className='flex flex-col gap-3 mt-10 w-1/2'>
                <input className='input-blue' type='text' placeholder='Nom Complet' />
                <input className='input-blue' type='text' placeholder='Email' />
                <input className='input-blue' type='text' placeholder='Téléphone' />
                <input className='input-blue' type='password' placeholder='Mot de passe' />
                
                <button type='submit' className='primary-green-btn scale-55 mt-8'>Inscription</button>
            </div>
            <a className='text-sm text-gray-500 mt-4' href='/login'>Ou bien se connecter</a>
          </div>
        </form>
      </div>
    </MainLayout>
  )
}

export default RegisterPage