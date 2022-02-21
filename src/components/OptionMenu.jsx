import React from "react";

export const OptionMenu = ({ text, icon }) => {
  return (
    <>
      <a className="flex items-center w-44 h-10 hover:font-medium hover:bg-primaryLight cursor-pointer gap-2  p-5 rounded-2xl transition">
        <p className="pr-2">{icon}</p>
        <p>{text}</p>
      </a>
    </>
  );
};
