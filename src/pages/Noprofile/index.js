// External
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
// Local
import { Context } from "../../services/Context";
import { HomeSlide, DIV, Background } from "./styles";
import { Layout } from "../../components/Layout/index";
import Card from "../../components/Citizen/Card/index";

const NoProfile = () => {
  const { auto } = useContext(Context);
  const PID = Cookies.get("PID");

  return (
    <Layout
    title="Citizen - dystopian cryptostory"
    >
      <HomeSlide>
        <Background background={auto.background}></Background>

        <div className="NoProfile pd_2 col-l-12 col-s-12 mga">
          <hgroup>
            <h2 className="text-center">{auto.name}</h2>
            <h3 className="text-center">{auto.vocation}</h3>
          </hgroup>
          <p>{PID}</p>
          <div className="col-t-6">
            <Card
              idToken={auto.idToken}
              name={auto.name}
              vocation={auto.vocation}
              rarity={auto.rarity || "legendary"}
              description={auto.description}
              block={auto.block}
              faction={auto.faction || ""}
              typeCharacter={auto.typeCharacter || "pig"}
              img={auto.img}
              background={auto.background}
            />
          </div>
          <div className="col-t-6">
            {auto && (
              <React.Fragment>
                <DIV>
                    <ul className="list">
                      <li>
                        <b>ID: </b> <span>{auto.idToken} </span>
                      </li>
                      <li>
                        <b>Block: </b> {auto.block}
                      </li>
                      <li>
                        <b>Precio: </b> {auto.price} Ether
                      </li>
                      <li>
                        <b>Rarity: </b>
                        {auto.rarity}
                      </li>
                      <li>
                        <b>Vocation: </b> {auto.vocation}
                      </li>
                      <li>
                        <b>Description: </b> {auto.description}
                      </li>
                    </ul>
                  {/* <StepOne step={1} /> */}
                </DIV>
                <DIV className="mg_top_2">
                  <did className="flex-justify">
                  <h4>History 1</h4>
                  <FontAwesomeIcon icon={["fas", "unlock-alt"]} />
                  </did>
                  <p>{auto.description}</p>
                </DIV>
              </React.Fragment>
            )}
          </div>
        </div>
      </HomeSlide>
    </Layout>
  );
};
export default NoProfile;
