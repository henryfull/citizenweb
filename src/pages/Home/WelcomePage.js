import React from "react";
import { pathOrigin } from "../../helpers/utils";
import { Layout } from "../../components/Layout/index";

// STYLES
import { DivHome, Logo } from "./styles";

const WelcomePage = () => {
  return (
    <Layout
    title="Citizen Game - A new way to play games with NFT"
    subtitle="Un juego gratuito para jugar y ganar"
  >
    <DivHome id="">
      <Logo>
        <img
          src={`${pathOrigin}/citizengame-logo-home.png`}
          alt={`logo citizen game`}
          className="citizen"
        />
      </Logo>
    </DivHome>
    </Layout>
  );
};

export default WelcomePage;
