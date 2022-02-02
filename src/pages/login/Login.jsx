import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSupabase } from "../../hooks/useSupabase";
import { useDispatch } from "react-redux";

import { login } from "../../features/userSlice";

export const Login = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState({
    isError: false,
    messageError: "",
  });

  const { supabase } = useSupabase();
  const { isError, messageError } = errorState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (props) => {
      const { user, session, error } = await supabase.auth.signIn(props);

      if (error) {
        setErrorState({
          isError: true,
          messageError: error.message,
        });
      }

      if (user) {
        setErrorState({
          isError: false,
          messageError: "",
        });
        dispatch(
          login({
            ...user,
          })
        );

        navigate("/dashboard");
      }
    },
  });

  return (
    <div className="grid p-5 gap-5 lg:px-[25%] 2xl:px-[30%]">
      <h1 className="text-6xl font-bold font-recoleta mt-28">Iniciar sesión</h1>
      <form onSubmit={formik.handleSubmit} className="grid gap-3">
        <div className="grid gap-2">
          <label id="email" className="font-bold">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
            placeholder="Ingresa tu correo electrónico."
            required
          />
        </div>
        <div className="grid gap-2">
          <label id="name" className="font-bold">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
            placeholder="Ingresa tu contrasena."
            required
          />
        </div>
        <div>
          <a href="#" className="text-primary">
            Recuperar Contraseña
          </a>
        </div>

        {isError && <p>{messageError}</p>}
        <button
          className={`flex items-center justify-center w-full bg-primary text-white text-base py-3 px-5 rounded-2xl focus:ring-4 
          ${isLoading && "opacity-50 cursor-not-allowed"}`}
          type="submit"
          disabled={isLoading}
        >
          Iniciar sesión
        </button>
      </form>

      {/* <button
        className=" bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-2xl flex items-center justify-center"
        onClick={() => signInWithFacebook()}
      >
        <img src={facebookLogo} width="60" alt="logo facebook" />
        Sing in with facebook
      </button> */}
    </div>
  );
};
