import React from "react";

import MainLayout from "../../components/MainLayout";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="bg-primary-blue h-screen md:py-[100px] flex justify-center items-center">
        <Hero />
      </div>
    </MainLayout>
  );
};

export default HomePage;
