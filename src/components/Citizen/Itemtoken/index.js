// External
import React from "react";
import { Link } from "react-router-dom";
import datas from '../../../data/datas.json'

// Components
import { ElementCard } from "../../Citizen/ElementCard/index";
// Style
import { Div, NumToken } from "./styles";

const ItemToken = ({ ...props }) => {
  const changeColor = (rarity) => {
    let color = "var(--citizen-darkopacity)";
    if (datas) {
      const rares = datas.rarity;
      let tempo = rares.filter((item) => item.name === rarity);
      color = tempo[0].color;
    }
    console.log(color, rarity)
    return color;
  };

  return (
    <Div className="item" color={changeColor(props.card.rarity.name)}>
      <Link to={`/tokencard/${props.card._id}`}>
        <NumToken className="numToken">{props.card.idToken}</NumToken>
        <div className="image">
          <ElementCard name={props.card.imageCharacter.name} width="100%" />
        </div>
        <img
          className="faction"
          src={`${process.env.PUBLIC_URL}files/symbols/emblem-${props.card.faction.name}.svg`}
          alt={`emblem-${props.card.faction.name}`}
        />
        <p className="name">{props.card.name}</p>
      </Link>
    </Div>
  );
};

export default ItemToken;
