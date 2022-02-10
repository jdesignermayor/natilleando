import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useFormik } from "formik";
import { useSupabase } from "../../hooks/useSupabase.js";

import memberIcon from "../../assets/images/memberIcon.svg";
import { ModalSuccess } from "../../components/ModalSuccess.jsx";

export const RequestForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const { paymentMethodsList, memberList, setProspect } = useSupabase();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      document_number: "",
      payment_method: "",
      referer_id: "",
      whatsapp_number: "",
    },
    onSubmit: (props) => {
      console.log("props:", props);
      setIsLoading(true);
      setProspect({
        ...props,
      }).then((resp) => {
        let errorMessage = "";
        const [data, error] = resp;
        setIsLoading(false);

        if (error != null) {
          error.code === "23505"
            ? (errorMessage = "Ya existe alguien con esta cédula.")
            : "Por favor intenta de nuevo.";
          setIsSuccess(false);
          setError({
            state: true,
            message: errorMessage,
          });
        } else {
          setIsSuccess(true);
          setIsError({
            state: false,
            message: "",
          });
        }
      });
    },
  });

  return (
    <>
      {isSuccess ? <ModalSuccess /> : null};
      <div className="grid p-5 gap-5 mt-28  lg:px-[25%]  2xl:px-[30%]">
        <div>
          <h1 className="text-6xl font-bold font-recoleta">
            Solicitud de ingreso
          </h1>
          <p>
            Al llenar el formulario estás solicitando el ingreso automáticamente
            a la natillera.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="grid gap-5">
          <div className="grid 2xl:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <TextField
                id="outlined-basic"
                label="Nombres"
                name="name"
                variant="outlined"
                onChange={formik.handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <TextField
                id="outlined-basic"
                label="Apellidos"
                name="surname"
                variant="outlined"
                onChange={formik.handleChange}
                required
              />
            </div>
          </div>
          <div className="grid 2xl:grid-cols-2 gap-2">
            <div className="grid gap-2  ">
              <TextField
                type="number"
                id="outlined-basic"
                label="Cédula"
                name="document_number"
                variant="outlined"
                onChange={formik.handleChange}
                inputProps={{ inputMode: "numeric", pattern: "d*" }}
                required
              />
            </div>
            <div className="grid gap-2  ">
              <TextField
                type="number"
                id="outlined-basic"
                label="Whatsapp"
                name="whatsapp_number"
                variant="outlined"
                onChange={formik.handleChange}
                inputProps={{ inputMode: "numeric", pattern: "d*" }}
                required
              />
            </div>
          </div>
          <div className="grid 2xl:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <FormControl>
                <InputLabel id="payment_method">Medio de pago</InputLabel>
                <Select
                  labelId="payment_method"
                  id="demo-multiple-name"
                  name="payment_method"
                  value={formik.values.payment_method}
                  onChange={formik.handleChange}
                >
                  {paymentMethodsList.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="grid gap-2">
              <FormControl>
                <InputLabel id="referer_id">Recomendado por</InputLabel>
                <Select
                  labelId="referer_id"
                  id="demo-multiple-name"
                  name="referer_id"
                  value={formik.values.referer_id}
                  onChange={formik.handleChange}
                >
                  {memberList.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            {error.state && (
              <>
                <p className="text-red-500 pb-5">{error.message}</p>
              </>
            )}
            <button
              className={`flex items-center justify-center w-full  xl:w-2/4 bg-primary text-white py-3 px-5 rounded-2xl focus:ring-4 ${
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
