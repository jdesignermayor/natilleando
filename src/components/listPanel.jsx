import React from "react";

export const ListPanel = (props) => {
  const { title, subtitle, point, imgURL, items } = props;
  return (
    <div className="text-2xl 2xl:h-screen" id={`${point}`}>
      <div className="py-4">
        <img src={imgURL} width="350" alt={title} />
        <h1 className="text-6xl font-bold py-4 font-recoleta">{title}</h1>
        {subtitle ?? <p className="text-3xl text-green-600">{subtitle}</p>}
      </div>

      <ol className="list-disc px-6 space-y-4">
        {items.map(({ label }, i) => {
          return <li key={i}>{label}</li>;
        })}
      </ol>
    </div>
  );
};
