import React from "react";
import { Link } from "react-router-dom";
import heroPng from "../../../assets/heropng.png";

const Hero = () => {
  return (
    <section className="container w-[90%] mx-auto flex flex-col justify-center items-center p-10 lg:flex-row bg-white rounded-xl">
      <div className="mt-10 mx-auto lg:mx-0 lg:w-1/2">
        <h1 className="text-3xl font-bold text-primary-blue text-center md:text-5xl lg:text-left max-w-[540px]">
          Facilement Trouver Le
        </h1>
        <p className="text-xl font-bold text-primary-green text-center md:text-3xl lg:text-left max-w-[540px]">
          Meilleur Stage Pour Votre Vie Professionelle!
        </p>
        <p className="font-light text-gray-500 text-center md:text-md lg:text-left max-w-[540px]">
          Le marché du recrutement de stagiaires nécessite une solution moderne
          et efficace pour mettre en relation les entreprises cherchant des
          stagiaires et les stagiaires cherchant des opportunités. La plateforme
          offrira un moyen centralisé et convivial pour faciliter ce processus.
        </p>
        <div className="hidden lg:flex justify-center lg:justify-start mt-5 ">
          <Link to={"/logas"}>
            <button className="primary-blue-btn">Commencer</button>
          </Link>
        </div>
      </div>
      <div>
        <img className="w-[500px]" src={heroPng} alt="hero" />
      </div>
      <div className="flex justify-center  mt-5 lg:hidden">
        <Link to={"/logas"}>
          <button className="primary-blue-btn">Commencer</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
