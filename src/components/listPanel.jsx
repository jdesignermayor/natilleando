import React from "react";

export const ListPanel = ({ title, subtitle, point, itemsList }) => {
  return (
    <div className="text-2xl" id={`${point}`}>
      <div className=" py-4">
        <h1 className="text-4xl font-bold ">{title}</h1>
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
