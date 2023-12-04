import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-[250px] bg-primary-green">
      <div className='mx-auto max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col md:flex-row items-center justify-center md:justify-between'>
        
        
        <div className='text-white text-center md:text-left mb-4 md:mb-0'>
          <h1 className='text-2xl font-bold uppercase text-primary-blue'>Stage Embauche</h1>
          <p>&copy; 2023 Collect Interns</p>
        </div>

        
        <div className='flex flex-col md:flex-row items-center'>
          
          <div className='md:mr-8 mb-4 md:mb-0 text-white'>
            <p className='mb-2'>Stage Embauche</p>
            <p className='mb-2'>Monastir 5000</p>
            <p>Monastir, Tunisia</p>
          </div>

         
          <div className='flex items-center space-x-4 text-2xl bg-primary-green '>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-white hover:text-primary-blue' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-white hover:text-primary-blue' />
            </a>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-white hover:text-primary-blue' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
