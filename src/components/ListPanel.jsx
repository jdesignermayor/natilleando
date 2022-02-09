import React from "react";
import Parser from "react-html-parser";

export const ListPanel = (props) => {
  const { title, description, subtitle, point, imgURL, items } = props;

  return (
    <div className="text-2xl" id={`${point}`}>
      <div className="py-4">
        <img src={imgURL} width="350" alt={title} />
        <h1 className="text-6xl font-bold py-4 font-recoleta">{title}</h1>
        {subtitle ?? <p className="text-3xl text-green-600">{subtitle}</p>}
      </div>
      
      {description && (
        <>
          {Parser(description)}
        </>
      )}

      <ol className="list-disc px-6 space-y-4">
        {items.map(({ label }, i) => {
          return <li key={i}>{label}</li>;
        })}
      </ol>
    </div>
  );
};
