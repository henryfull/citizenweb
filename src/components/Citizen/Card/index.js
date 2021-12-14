// External
import React, { useState, useEffect } from "react";
import { ElementCard } from "../ElementCard/index";
// Local
import {
  Div,
  Background,
  Border,
  Content,
  Num,
  Titles,
  Description,
  Block,
  Character,
  Footer,
} from "./styles";

const Card = ({ ...props }) => {
  const [colorCard, setColorCard] = useState("crimson");
  // const [iconCharacter, setIconCharacter] = useState("pig-1");
  const [iconFaction, setIconFaction] = useState("");


  useEffect(() => {
    changeColor(props.rarity);
    // changeCharacter(props.typeCharacter);
    changeIconFaction(props.faction);

  });

  const changeColor = (rarity) => {
    let color = colorCard;
    if (localStorage.getItem("datas")) {
      const datas = JSON.parse(localStorage.getItem("datas")).rarity;
      let tempo = datas.filter((item) => item.name === rarity);
      color = tempo[0].color;
    }
    setColorCard(color);
  };
  // const changeCharacter = (caracter) => {
  //   let icon = iconCharacter;
  //   if (localStorage.getItem("datas")) {
  //     const datas = JSON.parse(localStorage.getItem("datas")).typeCharacter;
  //     let tempo = datas.filter((item) => item.name === caracter);
  //     icon = tempo[0].icon;
  //   }
  //   setIconCharacter(icon);
  // };
  
  const changeIconFaction = (faction) => {
    let icon = iconFaction;
    if (faction && localStorage.getItem("datas")) {
      const datas = JSON.parse(localStorage.getItem("datas")).factions;
      let tempo = datas.filter((item) => item.name === faction);
      icon = tempo[0].icon;
      setIconFaction(icon);
    }
  };


  return (
    <Div id="card-image">
      <Content color={colorCard}>
        <Background background={props.background}></Background>
        <Border color={colorCard}></Border>
        <Character>
          {props.imageCharacter ? (
            <ElementCard name={props.imageCharacter} />
          ) : (
            <h1>iconCharacter</h1>
          )}
        </Character>
        <Num color={colorCard}>#{props.idToken}</Num>
        <Block>
          <img
            src={`${process.env.PUBLIC_URL}files/symbols/emblem-${props.block}.svg`}
            alt={`emblem-${props.block}`}
          />
        </Block>
        <Titles color={colorCard}>
          <h3>{props.name}</h3>
          <h4>{props.vocation}</h4>
        </Titles>
        <Description>
          <p>{props.aboutme}</p>
        </Description>
        <Footer color={colorCard}>
          <div>
            <img
              // key={index + "example_photo"}
              src={`${process.env.PUBLIC_URL}files/symbols/emblem-${props.faction}.svg`}
              alt={`emblem-${props.faction}`}
            />

            <span>{props.faction}</span>
          </div>
          <div>
            <span>{props.rarity}</span>
          </div>
        </Footer>
      </Content>
    </Div>
  );
};

export default Card;
