import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSupabase } from "../hooks/useSupabase";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorState, setErrorState] = useState({
    isError: false,
    messageError: "",
  });

  const { signInWithFacebook } = useSupabase();

  const { isError, messageError } = errorState;

  const navigate = useNavigate();
  // const { signIn, signUp } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      // const { error } = await signIn({ email, password });
      // if (error) {
      //   setErrorState({ isError: true, messageError: error.message });
      // } else {
      //   setErrorState({ isError: false, messageError: "" });
      //   // Redirect user to Dashboard
      //   navigate("/dashboard", { replace: true });
      // }
    },
  });

  const signIn = () => {
     return signInWithFacebook().then(res => {
       console.log(res);
     });
  };

  return (
    <div className="flex flex-col p-5 gap-5 lg:px-96">
      <h1 className="text-4xl font-bold py-4">Iniciar sesion</h1>
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
          className={`flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4 
          ${isLoading && "opacity-50 cursor-not-allowed"}`}
          type="submit"
          disabled={isLoading}
        >
          Iniciar sesión
        </button>
      </form>

      <button onClick={() => signIn()}>Sing in with facebook</button>
    </div>
  );
};
