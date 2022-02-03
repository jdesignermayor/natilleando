import React from "react";

export const Rules = () => {
  return (
    <div className="text-2xl  2xl:h-screen" id="rules">
      <div className="py-4">
        <img
          src="https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png"
          width="350"
          alt=""
        />
        <h1 className="text-6xl font-bold py-4 font-recoleta">
          Simples normas
        </h1>
      </div>

      <p>
        Antes de iniciar con las normas es importante dejar claro, esta es una
        natillera exclusivamente familiar y/o amigos de confianza, no tiene
        fines lucrativos para ninguna parte, y fue desarrollada solo con el fin
        de integrar de alguna manera a la familia o persona independiente en un
        ahorro navideño. Es administrada por personas responsables.
      </p>
      <p className="mt-5">
        si desea hacer parte de este mundo de ahorro familiar bienvenido a
        natilleando.
      </p>
      <br />
      <ol className="list-disc px-6 space-y-4">
        <li>
          El periodo de ahorro abarca desde enero a diciembre del año en curso.
        </li>
        <li>
          Si el socio decide retirarse antes de diciembre no recibirá los
          intereses acumulados hasta la fecha.
        </li>
        <li>
          Los intereses obtenidos en el periodo de ahorro se repartirá a todos
          los socios por igual independientes del ahorro invertido por cada
          socio.
        </li>
        <li>
          Los beneficios a repartir se obtendrán a través de: Multas, rifas,
          eventos, intereses generados por nequi, intereses generados por
          préstamos y otros extraordinarios.
        </li>
      </ol>
    </div>
  );
};
