import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[20px] font-bold text-white bg-primary-green py-5 flex justify-center items-center">Note: This site is still under development by<span className="mx-2 text-primary-blue underline"><a href="https://www.github.com/ad3mo">ademo</a></span> stay tuned! :D</div>
      <Navbar />
      
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
