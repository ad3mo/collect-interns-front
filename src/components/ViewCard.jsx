import React, { useState } from "react";
import PostCard from "./PostCard";
import { AiOutlineClose } from "react-icons/ai";

const ViewCard = (props) => {
    const { img, title, name, desc } = props
  const [isModalOpen, setModalOpen] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => setButtonClicked(!isButtonClicked)

  const openModal = () => {
    
    if (window.innerWidth <= 1024) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-2xl cursor-pointer lg:cursor-default overflow-hidden max-lg:flex-col lg:flex-row flex items-center lg:justify-between lg:gap-4 bg-white"
      >
        <div className="basis-1/4">
          <img
            className="lg:rounded-full mx-auto lg:w-[150px] lg:h-[150px] max-w-[150px]"
            src={img}
            alt="isimm"
          />
        </div>
        <div className="max-lg:h-[185px] lg:basis-2/4 lg:pl-4 overflow-clip max-lg:flex-row max-lg:text-center">
          <h1 className="text-2xl lg:text-3xl text-primary-blue font-bold">
            {title}
          </h1>
          <h1 className="text-xl lg:text-2xl text-primary-green">{name}</h1>
          <p className="text-sm lg:text-md font-light text-gray-500 text-justify lg:overflow-ellipsis overflow-hidden lg:max-h-[185px]">
            {desc}
          </p>
        </div>
        <div className="basis-1/4 lg:pl-4 mt-3 hidden lg:block">
          <button onClick={handleButtonClick} className={`${isButtonClicked ? "primary-green-btn-clicked": "primary-green-btn"}`}>Postuler</button>
        </div>
        <div className="basis-1/4 mt-3 lg:hidden">
          <button onClick={handleButtonClick}  className={`${isButtonClicked ? "primary-green-btn-clicked": "primary-green-btn"}`}>Postuler</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/20 z-40">
          <div className="max-w-screen-md w-full bg-white rounded-2xl mx-4 md:mx-10">
            <div
              className="flex justify-end p-4 text-3xl"
              onClick={closeModal}
            >
              <AiOutlineClose className="cursor-pointer" />
            </div>
            <PostCard img={img} title={title} name={name} desc={desc} />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCard;
