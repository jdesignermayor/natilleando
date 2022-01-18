import React, { useState } from "react";

import { useSupabase } from "../hooks/useSupabase.js";
import { useFormik } from "formik";

import memberIcon from "../assets/images/memberIcon.svg";
import { ModalSuccess } from "../components/modalSuccess.jsx";

export const RequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { paymentMethods, memberList, setProspect } = useSupabase();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      document_number: "",
      payment_method: "",
      referer_id: "",
      whatsapp_number: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const {
        name,
        surname,
        document_number,
        payment_method,
        referer_id,
        whatsapp_number,
      } = values;

      setProspect({
        name,
        surname,
        document_number,
        payment_method,
        referer_id,
        whatsapp_number,
      }).then((resp) => {
        let errorMessage = "";
        const [data, error] = resp;
        setIsLoading(false);

        if (error !== null) {
          error.code === "23505"
            ? (errorMessage = "Ya existe una solicitud con esta cédula.")
            : (errorMessage = "Por favor intenta de nuevo.");
          setIsSuccess(false);
        } else {
          setIsSuccess(true);
        }
      });
    },
  });

  return (
    <>
      {isSuccess ? <ModalSuccess /> : null}
      <div className="flex flex-col p-5 gap-5">
        <h1 className="text-4xl font-bold py-4">Solicitud de ingreso</h1>
        <form onSubmit={formik.handleSubmit} className="grid gap-3">
          <div className="grid gap-2">
            <label id="name" className="font-bold">
              Nombres
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2">
            <label id="name" className="font-bold">
              Apellidos
            </label>
            <input
              type="text"
              name="surname"
              onChange={formik.handleChange}
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2  ">
            <label id="name" className="font-bold">
              Cédula
            </label>
            <input
              type="number"
              name="document_number"
              onChange={formik.handleChange}
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
              pattern="\d*"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2  ">
            <label id="name" className="font-bold">
              Whatsapp
            </label>
            <input
              type="number"
              name="whatsapp_number"
              onChange={formik.handleChange}
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2"
              pattern="\d*"
              placeholder=""
              required
            />
          </div>
          <div className="grid gap-2">
            <label id="name" className="font-bold">
              Medio de pago
            </label>
            <select
              name="payment_method"
              onChange={formik.handleChange}
              id=""
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary focus:border-2 rounded-lg focus:bg-primaryLight p-2"
              required
            >
              <option value="">Selecciona</option>
              {paymentMethods.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label id="name" className="font-bold">
              Recomendado por
            </label>
            <select
              name="referer_id"
              onChange={formik.handleChange}
              id=""
              className="h-10 w-full focus:ring-4 transition outline-0 focus:border-primary focus:border-2 rounded-lg focus:bg-primaryLight p-2"
              required
            >
              <option value="">Selecciona</option>
              {memberList.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className={`flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isLoading}
            >
              <i className="pr-2">
                <img src={memberIcon} className="h-6" alt="" />
              </i>
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
