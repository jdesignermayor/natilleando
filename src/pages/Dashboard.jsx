import React from "react";

export const Dashboard = () => {

  return (
    <div className="p-5 grid items-center gap-4">
      <div>
        <p className="text-2xl">
          👋 ¡Bienvenido(a)! <span className="font-bold">Jose</span>
        </p>
      </div>
      <div>
        <h1 className="text-5xl font-bold">Resumen</h1>
        <p>
          Aqui se ven reflejados los avances y resultados de tu perfil en{" "}
          <span className="font-bold">Natilleando</span>{" "}
        </p>
      </div>
    </div>
  );
};
