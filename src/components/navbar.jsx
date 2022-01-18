import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { Button } from "./Button";
import logo from "../assets/images/Logo.svg";

export const Navbar = () => {
  const { user, resetUser, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    // Ends user session
    await signOut();
    resetUser();

    // Redirects the user to Login page
    navigate("/login", { replace: true });
  };

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
        {!user ? (
          <>
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
          </>
        ) : (
          <>
            <button onClick={handleSignOut}>Sign out</button>
          </>
        )}
      </div>
    </div>
  );
};
