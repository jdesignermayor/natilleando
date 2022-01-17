import React from "react";

import { Link } from "react-router-dom";
import memberIcon from "../assets/images/memberIcon.svg";
import pelado from "../assets/images/pelado.png";

export const MemberButton = () => {
  return (
    <div className="text-2xl">
      <img src={pelado} className="w-full lg:w-72 h-full" alt="" />
      <h1 className="text-4xl font-bold py-4">
        ¡No te quedes pelado en diciembre!
      </h1>
      <p className>Únete al equipo y crezcamos juntos.</p>
      <Link to="form">
        <button className="mt-5 flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4">
          <i className="pr-2">
            <img src={memberIcon} className="h-6" alt="" />
          </i>
          Quiero ser miembro
        </button>
      </Link>
    </div>
  );
};
