import React from "react";
import { Button } from "./Button";
import logo from "../assets/images/Logo.svg";

import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  let isActiveForm = false;
  location.pathname !== "/" ? (isActiveForm = true) : (isActiveForm = false);

  return (
    <div className="w-full flex justify-between p-5 bg-white z-50">
      <div className="cursor-pointer">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="flex gap-2">
        {isActiveForm && (
          <Link to="/">
            <Button text="Inicio" color="secondary" />
          </Link>
        )}
        <Link to="login">
          <Button text="Iniciar sesión" color="secondary" />
        </Link>
        <Link to="form">
          <Button text="Ser miembro" />
        </Link>
      </div>
    </div>
  );
};
