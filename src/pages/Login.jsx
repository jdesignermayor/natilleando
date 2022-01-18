import { useFormik } from "formik";
import React, { useState } from "react";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      document_number: "",
      password: "",
    },
    onSubmit: ({ document_number, password }) => {},
  });

  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="text-4xl font-bold py-4">Iniciar sesion</h1>
      <form onSubmit={formik.handleSubmit} className="grid gap-3">
        <div className="grid gap-2">
          <label id="document_number" className="font-bold">
            Cedula
          </label>
          <input
            type="text"
            name="document_number"
            onChange={formik.handleChange}
            className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
            placeholder="Ingresa tu numero de cedula."
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
            placeholder="Ingresa tu contrasena"
            required
          />
        </div>
        <div>
          <a href="#" className="text-primary">
            Recuperar Contraseña
          </a>
        </div>
        <button
          className={`flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4 
          ${isLoading && "opacity-50 cursor-not-allowed"}`}
          type="submit"
          disabled={isLoading}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
