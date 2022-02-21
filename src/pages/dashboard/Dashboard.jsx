import React from "react";
import { SideMenu } from "../../components/SideMenu";

import { Card, Box, CardContent, CardActions, Button } from "@mui/material";

export const Dashboard = () => {
  return (
    <>
      <div className="flex pt-20 h-screen px-3 lg:px-64 2xl:px-96">
        <div className="flex justify-start p-5 border-r">
          <SideMenu />
        </div>
        <div className="flex flex-col pl-10 w-full">
          <h1 className="text-5xl font-bold  font-recoleta">Resumen</h1>

          <Card variant="outlined" className="w-full">
            <CardContent>
              <div>
                <p className="text-2xl">Total acumulado</p>
                <p className="text-4xl">$ 1.000.0000</p>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card variant="outlined" className="w-full">
            <CardContent>
              <div>
                <p className="text-2xl">Total deposito</p>
                <p className="text-4xl">$ 1.000.0000</p>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card variant="outlined" className="w-full">
            <CardContent>
              <div>
                <p className="text-2xl">Total prestamos</p>
                <p className="text-4xl">$ 0</p>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
