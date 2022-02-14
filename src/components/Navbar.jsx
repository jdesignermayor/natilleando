import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "./Button";
import logo from "../assets/images/Logo.svg";

export const Navbar = () => {
  const location = useLocation();

  let isActiveForm = false;
  location.pathname !== "/" ? (isActiveForm = true) : (isActiveForm = false);

  return (
    <div className="w-full flex items-center justify-between py-3 px-3 lg:px-64 2xl:px-96 bg-white z-50 fixed backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="cursor-pointer">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="flex gap-3">
        {isActiveForm && (
          <Link to="/">
            <Button text="Inicio" color="secondary" />
          </Link>
        )}
        <Link to="login">
          <Button text="Iniciar sesión" color="secondary" />
        </Link>
        <Link to="form">
          <Button text="Ser socio" />
        </Link>
      </div>
    </div>
  );
};
