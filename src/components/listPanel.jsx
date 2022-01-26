import React from "react";

export const ListPanel = ({ title, subtitle, point, imgURL, itemsList }) => {
  return (
    <div className="text-2xl h-screen" id={`${point}`}>
      <img src={imgURL} width="250" alt={title} />

      <div className="py-4">
        <h1 className="text-6xl font-bold py-4 font-recoleta">{title}</h1>
        {subtitle ?? <p className="text-3xl text-green-600">{subtitle}</p>}
      </div>

      <ol className="list-disc px-6 space-y-4">
        {itemsList.map(({ label }, i) => {
          return <li key={i}>{label}</li>;
        })}
      </ol>
    </div>
  );
};
