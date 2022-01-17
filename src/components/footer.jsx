import React from "react";
import imgPersonal from "../assets/images/imgpersonal.jpg";

export const Footer = () => {
  return (
    <div className="flex bottom-0 w-full bg-black text-white gap-4 items-center p-5">
      <div>
        <img src={imgPersonal} className="rounded-full w-40" alt="" />
      </div>
      <div>
        <p className="text-sm">
          👋 ¡Hola! La plataforma fue creada por mi persona{" "}
          <a
            className="underline text-primaryLight"
            href="https://www.linkedin.com/in/joseacevedodev/"
          >
            Jose Luis Pulgarín
          </a>
          , si te gusta la iniciativa por favor no dudes en compartirlo con tus
          familiares de confianza o amigos cercanos 💕.
        </p>
      </div>
    </div>
  );
};
