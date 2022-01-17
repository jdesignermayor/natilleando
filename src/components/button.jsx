import React from "react";

export const Button = ({ text = "asdasd", color }) => {
  let printColor = "";
  switch (color) {
    case "primary":
      printColor = "bg-primary";
      break;

    case "secondary":
      printColor = "bg-primaryLight";
      break;

    default:
      printColor = "bg-primary";
      break;
  }
  return (
    <>
      <button
        className={`${printColor} ${
          color === "secondary" ? "text-primary" : "text-white"
        }   hover:bg-green-700 rounded-xl h-10 px-2 focus:ring-4`}
      >
        {text}
      </button>
    </>
  );
};
