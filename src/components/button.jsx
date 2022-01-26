import React from "react";

export const Button = ({ text = "asdasd", color }) => {
  let printColor = "";
  switch (color) {
    case "primary":
      printColor = "bg-primary";
      break;

    case "secondary":
      printColor = "bg-white";
      break;

    default:
      printColor = "bg-primary";
      break;
  }
  return (
    <>
      <button
        className={`${printColor} ${
          color === "secondary"
            ? "text-primary hover:bg-primaryLight"
            : "text-white hover:bg-green-800"
        }    rounded-xl h-10 px-3 focus:ring-4`}
      >
        {text}
      </button>
    </>
  );
};
