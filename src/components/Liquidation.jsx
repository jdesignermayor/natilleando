import React from "react";
import { homeService } from "../services/homedata-service";

export const Liquidation = () => {
  const { title } = homeService;

  return (
    <div className="text-2xl" id="payments">
      <img
        src="https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-becoming-rich-2@400x400.png"
        width="350"
        alt=""
      />
      <h1 className="text-6xl font-bold py-4 font-recoleta">Liquidación</h1>
      <p>
        la natillera será liquidada el 1 de diciembre de cada año, y se
        entregará a cada socio, el ahorro que haya hecho durante los 11 meses,
        los intereses que correspondan al monto del ahorro.
      </p>
      <p className="mt-5">
        Estas normas podrán cambiar de acuerdo a las nuevas Estipulaciones de
        <span className="font-bold">{title}</span>.
      </p>
    </div>
  );
};
