import React from "react";

import MainLayout from "../../components/MainLayout";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="bg-primary-blue h-screen flex justify-center items-center">
        <Hero />
      </div>
    </MainLayout>
  );
};

export default HomePage;
