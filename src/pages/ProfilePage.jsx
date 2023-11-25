import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import kais from '../assets/kaisoun.jpg';
import { FiCamera } from 'react-icons/fi';

const ProfilePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedElement, setSelectedElement] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setInputValue('');
  };

  const handlePicHover = () => {
    setIsHovered(!isHovered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log('Submitted:', inputValue, selectedElement);

   
  };

  return (
    <MainLayout>
      <main className='bg-white mt-8 mx-auto w-full md:w-[80%] lg:w-[70%] p-4 md:p-8 flex flex-col gap-4 min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
          <div className='bg-gray-200 h-[250px] w-full md:w-[250px] flex overflow-hidden justify-center relative'>
            <img
              src={kais}
              alt='kaispic'
              className={`max-h-[250px] max-w-[250px] rounded-full object-cover grow transition-all ${isHovered ? 'filter blur-md flex justify-center ite' : ''}`}
              onMouseEnter={handlePicHover}
              onMouseLeave={handlePicHover}
            />
            {isHovered && (
              <label
                htmlFor='file-input'
                className='absolute bottom-2 right-2 cursor-pointer bg-white p-2 rounded-full'
              >
                <FiCamera />
                <input type='file' id='file-input' className='hidden' />
              </label>
            )}
          </div>
          <div className='col-span-2 bg-gray-300 flex items-center justify-center p-4 md:w-full'>
            <ul className='flex flex-col md:flex-row items-center justify-between gap-3'>
              <li className='cursor-pointer' onClick={() => handleElementClick('Nom')}>Nom</li>
              <li className='cursor-pointer' onClick={() => handleElementClick('Institut')}>Institut</li>
              <li className='cursor-pointer' onClick={() => handleElementClick('Email')}>Email</li>
              <li className='cursor-pointer' onClick={() => handleElementClick('Téléphone')}>Téléphone</li>
              <li className='cursor-pointer' onClick={() => handleElementClick('Spécialité')}>Spécialité</li>
              <li className='cursor-pointer' onClick={() => handleElementClick('CV')}>CV</li>
            </ul>
          </div>
        </div>
        <div className='bg-gray-400 p-4 md:col-span-2 w-full md:w-[70%]'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder={`Changer ${selectedElement}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='w-full input-blue'
            />
            <button type='submit' className='m-2 primary-blue-btn'>Submit</button>
          </form>
        </div>
        <div className='bg-gray-200 h-[250px] m-4 md:m-5'>
          preview
        </div>
      </main>
    </MainLayout>
  );
};

export default ProfilePage;
