import React from "react";
import isimm from "../assets/logoisimm.png";
const PostCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-auto w-full mx-auto bg-primary-gray flex items-center max-h-[250px]">
      <div className="w-1/4">
        <img
          className="rounded-full mx-auto w-[150px] h-[150px]"
          src={isimm}
          alt="isimm"
        />
      </div>
      <div className="flex justify-between items-center w-2/4 p-2 object-contain">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl text-primary-blue font-bold">Job Title</h1>
          <h1 className="text-2xl text-primary-green ">Company Name</h1>
          <p className="text-md font-light text-gray-500 overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            purus, ultricies nec dignissim ac, varius ut tortor. Maecenas et
            venenatis dui. In hac habitasse platea dictumst. Duis sollicitudin
            felis vel est bibendum, a venenatis justo feugiat. Quisque id mauris
            eu urna fermentum imperdiet. Nullam eget nibh eu augue volutpat
            dictum.
          </p>
        </div>
      </div>
      <div className="w-1/4 flex ">
        <div className="mx-auto">
        <button className="primary-green-btn">Postuler</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
