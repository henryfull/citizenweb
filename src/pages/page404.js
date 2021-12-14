// Dependecias
import React from "react";

// Assets
import { Layout } from "../components/Layout/index";
import properties from "../data/properties.json";
export const p = properties[0];
const Page404 = () => {
  return (
    <Layout
      title="Checkauto - Entra en la mejor plataforma para vender tu coche"
      subtitle="Inicia sesion o registrarte para vender o comprar coches"
    >
      <div className="Home">
        <div className="home-slide hv100">
          <div className="content-home-slide pd_5">
            <div className=" col-t-12 center-content">
              <div className=" ">
                <h2 className="mt4 text-center white">
                  La pagina que buscas no existe
                </h2>
                <p className="text-center mv3 white">disculpa las molestias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Page404;
