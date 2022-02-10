import React from "react";
import imageSucces from "../assets/illustrations/3d-flame-rocket-2.png";

export const ModalSuccess = () => {
  return (
    <div className="flex justify-center w-full h-screen animated transition absolute top-20 mx-auto p-5  shadow-lg rounded-md bg-white fade-in z-50">
      <div className="mt-3 text-center flex-col justify-center object-center items-center">
        <section class="hero container max-w-screen-lg mx-auto pb-10">
          <img
            src={imageSucces}
            className="mx-auto"
            width="150"
            alt="Success"
          />
        </section>
        <h3 className="text-3xl leading-6 font-medium text-gray-900">
          ¡Excelente!
        </h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-2xl text-gray-500">
            Solamente espera la aprobación y nos comunicaremos contigo mediante
            WhatsApp en máximo 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
};
