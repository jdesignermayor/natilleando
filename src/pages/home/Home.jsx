import React from "react";

import { homeService } from "../../services/homedata-service";

import { Anchor } from "../../components/anchor";
import { ListPanel } from "../../components/ListPanel";
import { Liquidation } from "../../components/Liquidation";
import { MemberButton } from "../../components/MemberButton";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const { title, menuItems, menuData } = homeService;

  return (
    <>
      <div className="p-3 lg:px-96 2xl:px-[20%] dark:bg-black dark:text-white">
        <div className="pt-20 items-center justify-center text-start ">
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

          <div className="mt-48 grid gap-48">
            {menuData.map((section, i) => (
              <ListPanel
                key={i}
                {...section}
              />
            ))}
            <Liquidation />
            <MemberButton />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
