import React from "react";
import { OptionMenu } from "./OptionMenu.jsx";

export const SideMenu = () => {
  return (
    <div>
      <ul className="flex flex-col gap-5">
        <li>
          <OptionMenu text="Resumen" icon={"🏠"} />
        </li>
        <li>
          <OptionMenu text="Abonos" icon={"💰"} />
        </li>
        <li>
          <OptionMenu text="Prestamos" icon={"🔥"} />
        </li>
        <li>
          <OptionMenu text="Eventos" icon={"🤼"} />
        </li>
        <li>
          <OptionMenu text="Configuracion" icon={"⚙️"} />
        </li>
      </ul>
    </div>
  );
};
