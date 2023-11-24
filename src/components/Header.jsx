import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const headerItems = [
    { name: "Fil d'actualités", path: "/feed" },
    { name: "Applications", path: "/applications" },
    { name: "Profile", path: "/profile" },
  ];
  const { pathname: currentPath } = useLocation();
  return (
    <header className="sticky bg-primary-green h-[60px] flex justify-center items-center">
    <ul className="text-white text-md font-bold flex gap-8 items-center">
      {headerItems.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path} className={item.path === currentPath ? 'text-primary-blue' : 'text-white'} exact>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </header>
  );
};

export default Header;
