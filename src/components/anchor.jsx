import React from "react";
import icon from "../assets/images/icon.svg";
export const Anchor = ({ labelText, point, style }) => {
  let styleClass = "";

  switch (style) {
    case "primary":
      styleClass = "bg-primary";
      break;

    case "primaryLight":
      styleClass = "bg-primaryLight";
      break;

    case "purple":
      styleClass = "bg-purple";
      break;

    case "orange":
      styleClass = "bg-orange";
      break;

    case "blueLight":
      styleClass = "bg-blueLight";
      break;

    case "pink":
      styleClass = "bg-pink";
      break;

    case "money":
      styleClass = "bg-money";
      break;

    default:
      styleClass = "bg-primary";
      break;
  }

  return (
    <>
      <a
        href={`#${point}`}
        className={`flex justify-between font-bold items-center ${styleClass} py-4 px-2 w-full rounded-2xl h-16 focus:ring-4 border-2 border-transparent hover:border-black`}
        rel="noopener"
      >
        {labelText}
        <img src={icon} alt="icon" className="h-6" />
      </a>
    </>
  );
};
