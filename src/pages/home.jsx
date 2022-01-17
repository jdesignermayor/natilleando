import React from "react";

import { homeData } from "../services/homeData";

import { Anchor } from "../components/anchor";
import { ListPanel } from "../components/listPanel";
import { Rules } from "../components/rules";
import { Liquidation } from "../components/liquidation";
import { MemberButton } from "../components/memberButton";
import { Footer } from "../components/footer";

export const Home = () => {
  const { title, menuItems, menuData } = homeData;

  return (
    <>
      <div className="p-5">
        <div className="pt-40 grid gap-5">
          <h1 className="text-7xl font-bold">La natillera familiar</h1>
          <p className="text-2xl">
            <span className="font-bold">{title}</span> es una simple natillera
            para miembros exclusivos que tiene como propósito crear un ahorro
            programado a través del tiempo con un porcentaje de rentabilidad
            anual.
          </p>
          <hr />
          <div className="w-full grid grid-cols-2  gap-2">
            {menuItems.map(({ name, style, point }, i) => {
              const props = { labelText: name, point, style };
              return <Anchor key={i} {...props} />;
            })}
          </div>

          <div className="grid gap-40 mt-48">
            <div>
              <Rules />
            </div>
            {menuData.map((section, i) => (
              <ListPanel
                key={i}
                title={section.title}
                point={section.point}
                subtitle={section.subtitle}
                itemsList={section.items}
              />
            ))}
            <div>
              <Liquidation />
            </div>
            <div>
              <MemberButton />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
