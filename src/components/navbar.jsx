import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "./Button";
import logo from "../assets/images/Logo.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export const Navbar = () => {
  const location = useLocation();
  const user = useSelector(selectUser);

  let isActiveForm = false;
  location.pathname !== "/" ? (isActiveForm = true) : (isActiveForm = false);

  return (
    <div className="w-full flex justify-between py-5 px-5 lg:px-64 2xl:px-96 bg-white z-50 fixed">
      <div className="cursor-pointer">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      {!user ? (
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
            <Button text="Ser miembro" />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/">
            <Button text="Log out" />
          </Link>
        </div>
      )}
    </div>
  );
};
