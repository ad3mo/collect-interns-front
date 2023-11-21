import React from "react";

const PostCard = (props) => {
  const { img, title, name, desc, onOpen } = props;
  return (
    <div
      onClick={onOpen}
      className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-4 rounded-2xl cursor-pointer lg:cursor-default overflow-hidden max-lg:flex-col lg:flex-row flex items-center lg:justify-between lg:gap-4 "
    >
      <div className=" basis-1/4">
        <img
          className="lg:rounded-full mx-auto  lg:w-[150px] lg:h-[150px] max-w-[350px]"
          src={img}
          alt="isimm"
        />
      </div>
      <div
        className={`"max-lg:h-[185px] lg:basis-2/4 overflow-clip max-lg:flex-row max-lg:text-center`}
      >
        <h1 className="text-2xl lg:text-3xl text-primary-blue font-bold">
          {title}
        </h1>
        <h1 className="text-xl lg:text-2xl text-primary-green ">{name}</h1>
        <p className="text-sm lg:text-md font-light text-gray-500 text-justify lg:overflow-ellipsis overflow-hidden lg:max-h-[185px]">
          {desc}
        </p>
      </div>

      <div className={`basis-1/4 lg:pl-7 mt-3 hidden lg:block`}>
        <button className="primary-green-btn ">Postuler</button>
      </div>
    </div>
  );
};

export default PostCard;
