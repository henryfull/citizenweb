import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import axios from "axios";
import { pathOrigin } from "../../helpers/utils";


import { blocks, factions } from "../../data/options";

import Icons from "../../components/Atoms/Icons/index";

import { Layout } from "../../components/Layout/index";
import { Sectors } from "../../components/Atoms/Sectors/index";
import { Discord } from "../../components/Atoms/Discord/index";
import { Instagram } from "../../components/Atoms/Instagram/index";
import { Twitter } from "../../components/Atoms/Twitter/index";
import ButtonPrimary from "../../components/Atoms/ButtonPrimary/index.jsx";
// Styles
import {
  Content,
  Form,
  Whatis,
  CoverImage,
  H1,
  List,
  Msg,
} from "./styles";

const Home = () => {
  const history = useHistory()
  const [loading] = useState(false);
  const [configPlayer, setConfigPlayer] = useState({ bloc: "Establishment" });
  const [email, setEmail] = useState("");
  const [msgEmail, setMsgEmail] = useState("");

  useEffect(() => {
    console.log(navigator.language);


    let nav = document.getElementById("navbartop");
    let side = document.getElementById("sections");
    if (side !== null) {
      nav.style.display = "none";
      side.style.display = "none";
    }
  }, []);


  const handleSetConfigPlayer = (field, value) => {
    setConfigPlayer({ ...configPlayer, [field]: value });
    console.log(field, value);
  };

 


  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    var url = process.env.PUBLIC_URL + "user";
    console.log(url);
    const data = {
      email: email,
      address: [
        {
          country_code: navigator.language,
        },
      ],
    };
    console.log(data);
    await axios.post(url, data).then((res) => {
      if (res.status === 201) {
        setEmail("");
        setMessageEmail(true);
      } else {
        setMessageEmail(false);
      }
    });
  };

  const setMessageEmail = (params) => {
    if (params) {
      setMsgEmail("Thank you for joining citizen, you will hear from us soon.");
    } else {
      setMsgEmail("Sorry, there has been a problem");
    }
  };

  const pushRoute = (params) => {
    history.push("login")  
  }
  

  return (
    <Layout
      title="Citizen - The first crytohistories"
      subtitle="get token digital collectionable"
    >
      {loading ? (
        <Content className="pd_2 ">
          <div className="vh100 center-content">
            <div className="text-center">
              <img src={`${pathOrigin}/citizen-logo-white.png`} alt="banner" />
              <CoverImage className="mgv_2 pd_2">
                <H1 className="black">Game tactics NFT</H1>
              </CoverImage>
              <div>
                <ButtonPrimary
                  text="GETTING START"
                  icon="citizen"
                  color="black"
                  bg="var(--primary)"
                  handleAction={pushRoute}
                />
                <ButtonPrimary
                  text="WHITE PAPER"
                  icon="library"
                  color="black"
                  bg={"var(--second)"}
                />
              </div>
            </div>
            <div className="grid">
              <div className="pd_2 flex-center">
                <a
                  className="mg_2"
                  rel="noreferrer"
                  href="https://discord.gg/Cnp7KJ3Rex"
                  target="_blank"
                >
                  <Discord height="48" />
                </a>
                <a
                  className="mg_2"
                  rel="noreferrer"
                  href="https://www.instagram.com/citizennft/"
                  target="_blank"
                >
                  <Instagram height="48" />
                </a>
                <a
                  className="mg_2"
                  rel="noreferrer"
                  href="https://twitter.com/citizenNFT"
                  target="_blank"
                >
                  <Twitter height="44" />
                </a>
              </div>
            </div>
          </div>
          <div></div>
          {/* <Background></Background> */}
          <CoverImage>
            <div className="features">
              <ul>
                <li>
                  <Icons size="14" name="coins" /> Buy tokens
                </li>
                <li>
                  <Icons size="14" name="play" /> Play with your tokens
                </li>
                <li>
                  <Icons size="14" name="hand-point-up" /> Level up your tokens
                </li>
                <li>
                  <Icons size="14" name="chart-line" /> Trade your tokens or keep
                  playing
                </li>
              </ul>
            </div>
          </CoverImage>

          <div className="grid">

            <section className="story pdh_4">
              <Whatis className="">
                <h3 className="text-center white">What is Citizen?</h3>
                <p className="center">
                  {/* Citizen Tactics es el juego de estrategia rápida y por turnos.
                  Recluta y ordena a tu escuadrón que luche para alzar tu clan a
                  la fama. */}
                  It is a tactical game of 3 blocs fighting for power. Pick a
                  trial Citizen, define your quick and turn-based strategy, and
                  battle for power. The fate of your bloc in every season
                  depends on you. Be amazed by this futuristic dystopian war.
                </p>
              </Whatis>
              <Whatis className="mgv_10">
                <h3 className="text-center white">Why play Citizen?</h3>
                <div>
                  <ul className="grid col2 gap">
                    <li className="flex mg_2">
                      <span className="pd_2">
                        <Icons name="globe" color="white" size="32" />
                      </span>
                      <div>
                        <p>
                          <b className="primary">Parallel multiverse</b>
                        </p>
                        <p>Which bloc would you join</p>
                      </div>
                    </li>
                    <li className="flex mg_2">
                      <span className="pd_2">
                        <Icons name="trophy" color="white" size="32" />
                      </span>
                      <div>
                        <p>
                          <b className="primary">Get rewards</b>
                        </p>
                        <p>Each final season get big rewards</p>
                      </div>
                    </li>
                    <li className="flex mg_2">
                      <span className="pd_2">
                        <Icons name="smile-wink" color="white" size="32" />
                      </span>
                      <div>
                        <p>
                          <b className="primary">Enjoy playing </b>
                        </p>
                        <p>Play with other people</p>
                      </div>
                    </li>
                    <li className="flex mg_2">
                      <span className="pd_2 mg_right_1">
                        <Icons name="level-up-alt" color="white" size="24" />
                      </span>
                      <div>
                        <p>
                          <b className="primary">Token level rises </b>
                        </p>
                        <p>Win fights and level up</p>
                      </div>
                    </li>
                    <li className="flex mg_2">
                      <span className="pd_2 mg_right_1">
                        <Icons name="coins" color="white" size="32" />
                      </span>
                      <div>
                        <p>
                          <b className="primary">Trade your tokens </b>
                        </p>
                        <p>Increase the value of your tokens</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Whatis>

              <Whatis className="mgv_10">
                <h3 className="text-center white">Getting started</h3>
                <p className="center">
                  There are three blocks that want to control the world. The
                  three of them have the same opportunities to battles and the
                  global monthly war. Select the one you like best.
                </p>

                <p className="white text-center">
                  <span className="arrow">&#8618;</span>Pick your block
                </p>
                <div className=" grid col3 gap text-center mgv_10">
                  {blocks.map((item, i) => {
                    return (
                      <button
                        key={`bloc_${i}`}
                        onClick={() => handleSetConfigPlayer("bloc", item.name)}
                        className={
                          (configPlayer.bloc === item.name ? "active" : "") +
                          " blocks pointer"
                        }
                      >
                        <img
                          className="emblem"
                          src={item.url}
                          alt={item.name}
                          height="100"
                        />
                        <h4 className="primary"> {item.name}</h4>
                        <p>{item.description}</p>
                      </button>
                    );
                  })}
                </div>
              </Whatis>

              <Whatis className="mgv_10">
                <h3 className="text-center white">
                  Select your preferred faction
                </h3>
                <p className="center">
                  Each block has three factions, find out which one you identify
                  with the most. Pick it up among the 9 diferent factions and
                  especific skills.
                </p>
                <p className="text-center mgv_5 border_solid_1">
                  Factions of the block{" "}
                  <span className="primary">{configPlayer.bloc}</span>
                </p>
                <span className="white text-right w100 bold mgv_5">
                  <span className="arrow">&#8618;</span>Select your faction
                </span>
                <div className=" grid col3 gap  text-center mgv_5">
                  {factions.map((item, i) => {
                    return (
                      <React.Fragment key={`faction${i}`}>
                        {item.block === configPlayer.bloc && (
                          <button
                            onClick={() =>
                              handleSetConfigPlayer("faction", item.name)
                            }
                            className={
                              (configPlayer.faction === item.name
                                ? "active"
                                : "") + " blocks pointer"
                            }
                          >
                            <img
                              className="emblem"
                              src={item.url}
                              alt={item.name}
                              height="100"
                            />
                            <h4 className="primary"> {item.name}</h4>
                            <p>{item.description}</p>
                          </button>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </Whatis>
              <Whatis className="">
                <h3 className="text-center white">
                  Choose you first Citizen for trial
                </h3>
                <p className="center">
                  To make your character more powerful, it is recommended that
                  he/she be of the same faction you have selected.
                </p>
                <p className="white text-center flex">
                  <span className="block mg_right_2">&#8596;</span>Scroll for
                  view all characters
                </p>
                {/* <div className="flex-justify text-center mgv_10 carousel">
                  {listTokens.map((item, i) => {
                    return (
                      <React.Fragment key={`faction${i}`}>
                        <button
                          onClick={() => handleSetConfigPlayer("character", i)}
                          className={
                            (configPlayer.character === i ? "active" : "") +
                            " blocks pointer"
                          }
                        >
                          <Card token={item} lvl={1} />
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div> */}
              </Whatis>
              <Whatis>
                <div className="mgv_8">
                  <h4 className="white text-center">
                    Select your opponent and Combat!{" "}
                  </h4>
                  <p className="text-center mga">
                    Every day you can fight for free against a rival of your
                    enemy blocs whoo is at the same level. Its easy fast and
                    fun.
                  </p>
                </div>
                {/* 
                <div className="grid col3 gap mgv_4">
                  <Card
                    token={listTokens[configPlayer.character || 7]}
                    lvl={3}
                  />
                  <div className="center-content">
                    <p className="font_64 ">VS</p>
                  </div>
                  <Card
                    token={listTokens[getRadomNum(listTokens.length)]}
                    lvl={3}
                  />
                </div> */}
              </Whatis>
              <Whatis>
                <div className="center-content">
                  <h4 className="white text-center">
                    Check your power every global war{" "}
                  </h4>
                  <p>
                    Each season the proxy wars are reestablished and each bloc
                    will fight again to conquer Citizen. Help your block become
                    more powerful and become the monthly winner!
                  </p>
                  <div className="center-content mgv_10">
                    <p className="primary">
                      The power is distributed in this season{" "}
                    </p>
                    <div className="flex-center ">
                      <div className="mgv_2">
                        <Sectors height="100" size1={30} size2={40} size3={0} />
                      </div>
                      <List>
                        <ul>
                          <li className="flex">
                            <span className="point faction1 "></span>
                            <p className="white">30% Establishment</p>
                          </li>
                          <li className="flex">
                            <span className="point faction2 "></span>
                            <p className="white">45% Cybers</p>
                          </li>
                          <li className="flex">
                            <span className="point faction3 "></span>
                            <p className="white">35% Rebels</p>
                          </li>
                        </ul>
                      </List>
                    </div>
                  </div>
                </div>
              </Whatis>
              <Whatis className="text-center">
                <h4 className="white">Battle &amp; get rewards </h4>
                <p>
                  The more your Citizens help your factions to be more powerful,
                  the more you get rewards: money and more!
                </p>
                <div>
                  <ul className="flex-justify mgv_4">
                    <li>
                      <p className="font_32 pd_2 mg_2">&#129297;</p>
                    </li>
                    <li>
                      <p className="font_32 pd_2 mg_2">&#127942;</p>
                    </li>
                    <li>
                      <p className="font_32 pd_2 mg_2">&#128184;</p>
                    </li>
                  </ul>
                </div>
              </Whatis>
              <Whatis>
                <h4 className="white">Increase your clan of Citizens</h4>
                <p>
                  The more Citizens you have the more power you get to your
                  tactic combat. They are all unique designs. Choose among 5
                  rarity ranks to get more power.
                </p>
              </Whatis>
              <Whatis>
                <h4 className="white text-center">
                  Level up and trade your Citizens
                </h4>
                <div className="grid col3 gap">
                  <div>
                    <p className="text-center font_24 mg_2">LEVEL 1</p>
                    {/* <Card token={listTokens[3]} lvl={1} /> */}
                    <p className="text-center font_24 mg_2 primary">
                      0.2 Ether
                    </p>
                  </div>
                  <p className="font_64 center-content">&#10142;</p>
                  <div>
                    <p className="text-center font_24 mg_2">LEVEL 10</p>
                    {/* <Card token={listTokens[3]} lvl={10} /> */}
                    <p className="text-center font_24 mg_2 primary">
                      1.8 Ether
                    </p>
                  </div>
                </div>
                <div className="w100 mgv_8">
                  <p className="text-center mga">
                    You can level up your Citizens by winning battles and wars.
                    <br></br>
                    Buy and trade in wax now!
                  </p>
                </div>
              </Whatis>

              <Whatis>
                <section id="lastform">
                  <FORM
                    handleSubmitEmail={handleSubmitEmail}
                    email={email}
                    msgEmail={msgEmail}
                    setEmail={setEmail}
                  />
                </section>
              </Whatis>
            </section>
          </div>
        </Content>
      ) : (
        <p>loading ...</p>
      )}
    </Layout>
  );
};

const FORM = ({ handleSubmitEmail, email, msgEmail, setEmail }) => {
  return (
    <>
      <Form onSubmit={handleSubmitEmail}>
        <h5 className="white mgv_2">
          Sign up and you will receive our Citizen commemorative #NFT for free.
        </h5>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            required
          />
          <Icons name="envelope" size="16" color="var(--primary)" />
        </label>
        <button>Send</button>
      </Form>
      <Msg
        className={msgEmail.toLowerCase().includes("thank") ? "agree" : "deny"}
      >
        {msgEmail}
      </Msg>
    </>
  );
};



export default Home;
