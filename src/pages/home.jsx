import React from "react";

import { homeData } from "../services/homeData";

import { Anchor } from "../components/anchor";
import { ListPanel } from "../components/listPanel";
import { Rules } from "../components/Rules";
import { Liquidation } from "../components/Liquidation";
import { MemberButton } from "../components/MemberButton";
import { Footer } from "../components/Footer";

export const Home = () => {
  const { title, menuItems, menuData } = homeData;

  return (
    <>
      <div className="p-5 lg:px-96">
        <div className="pt-20 flex flex-col gap-8 items-center justify-center text-start 2xl:px-[30%]">
          <div className="flex gap-8 items-center h-screen">
            <div>
              <h1 className="text-7xl font-bold font-recoleta">
                Ahorra sin perder dinero
              </h1>
              <p className="text-2xl">
                <span className="font-bold">{title}</span> es una simple
                natillera para miembros exclusivos que tiene como propósito
                crear un ahorro programado a través del tiempo con un porcentaje
                de rentabilidad anual.
              </p>
              <br />
              <div className="grid grid-cols-2 gap-2">
                {menuItems.map(({ name, style, point }, i) => {
                  const props = { labelText: name, point, style };
                  return <Anchor key={i} {...props} />;
                })}
              </div>
            </div>
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
                imgURL={section.imgURL}
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
