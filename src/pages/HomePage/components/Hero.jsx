import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-white  w-1/3 py-10 px-10">
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold text-primary-blue">
            Facilement Trouver Le
          </p>
          <p className="text-xl font-bold text-primary-green">
            Meilleur Stage Pour Vote Vie Professionelle!
          </p>
          <p className="font-light text-gray-500 max-w-[500px]">
            Le marché du recrutement de stagiaires nécessite une solution
            moderne et efficace pour mettre en relation les entreprises
            cherchant des stagiaires et les stagiaires cherchant des
            opportunités. La plateforme offrira un moyen centralisé et convivial
            pour faciliter ce processus.
          </p>
          <div className="flex justify-start mt-4">
            <Link to={"/logas"}>
              <button className="primary-blue-btn">Commencer</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
