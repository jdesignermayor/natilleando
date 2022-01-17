import React, { useEffect } from "react";
import { Button } from "./button";
import logo from "../assets/images/Logo.svg";

import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  let isActiveForm = false;
  location.pathname == "/form" ? (isActiveForm = true) : (isActiveForm = false);

  return (
    <div className="w-full flex justify-between p-5 bg-white z-50">
      <div className="cursor-pointer">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="flex gap-2">
        {isActiveForm ? (
          <Link to="/">
            <Button text="Inicio" color="secondary" />
          </Link>
        ) : null}

        <Link to="form">
          <Button text="Ser miembro" />
        </Link>
      </div>
    </div>
  );
};
