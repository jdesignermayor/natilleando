import React from "react";
import { homeData } from "../services/homeData";

export const Liquidation = () => {
  const { title } = homeData;

  return (
    <div className="text-2xl" id="payments">
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
