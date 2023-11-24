import React from "react";
import MainLayout from "../../components/MainLayout";
import ViewCard from "../../components/ViewCard";
import isimm from "../../assets/logoisimm.png";

const generateDummyData = () => {
  return Array.from({ length: 6 }, (_, index) => ({
    img: isimm,
    title: `Job Title ${index + 1}`,
    name: `Company ${index + 1}`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam purus, ultricies nec dignissim ac, varius ut tortor. Maecenas etvenenatis dui. In hac habitasse platea dictumst. Duis sollicitudinfelis vel est bibendum, a venenatis justo feugiat. Quisque id mauriseu urna fermentum imperdiet. Nullam eget nibh eu augue volutpatdictum.",
  }));
};

const initialData = generateDummyData();

const Feed = () => {
  const items = initialData;

  return (
    
      <MainLayout>
        <div className="bg-white mt-8 mx-auto w-[80%] lg:w-[70%] p-8 flex flex-col gap-6">
          {items.map((item, index) => (
            <ViewCard
              key={index}
              img={item.img}
              title={item.title}
              name={item.name}
              desc={item.desc}
              type="feed"
            />
          ))}
        </div>
      </MainLayout>
   
  );
};

export default Feed;
