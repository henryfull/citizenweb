import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const ListFactionsIcons = (props) => {
  const factions = JSON.parse(localStorage.getItem("datas")).factions;
  const [showFaction, setShowFaction] = useState("");

  const handleShowFaction = (params) => {
    setShowFaction(params);
  };

  return (
    <div>
      <Div className=" pd_4">
        <Carrousel className="flex-justify">
          {factions.map((item, index) => {
            return (
              <div
                className={showFaction === item.name ? "active" : ""}
                key={`${item.name}_${index}`}
              >
                <button
                  onClick={() => handleShowFaction(item.name)}
                  className="block"
                >
                  <img
                    key={index + "example_photo"}
                    src={`${process.env.PUBLIC_URL}files/symbols/emblem-${item.name}.svg`}
                    height="50px"
                    alt={`emblem-${item.faction}`}
                  />
                </button>
                <p>{item.name}</p>
              </div>
            );
          })}
        </Carrousel>
      </Div>
      <div className="pd_4">
        {/* {factions.map((item, index) => {
          if (item.name === showFaction) {
            return <p key={"description_" + index}>{item.description}</p>;
          }
        })} */}
        {showFaction === "" && (
          <div>
            <p>
              Each faction belongs to one of the 3 blocks (Establishment,
              Cyborgs and Citizens), except the faction of the Influencers. Some
              Citizens dream of becoming Influencers, and of being able to
              improve their status.
            </p>
            <p>
              The faction is mainly defined by the mission that each inhabitant
              carries out, and they are generally made up of two or three types
              of animal species. Being part of a faction is an acquired quality
              that is difficult to change, but not impossible.
            </p>
          </div>
        )}
      </div>

      <CardFilterFaction items={props.items} showFaction={showFaction} />
    </div>
  );
};

const CardFilterFaction = (props) => {
  return (
    <div className="grid gap col4">
      {/* {props.items.map((card, index) => {
        if ((card.faction.name === props.showFaction) & card.published) {
          return (
            // <ItemToken card={card} key={`fileTable${index}_${card._id}`} />
            <Link to={"/tokencard/" + card._id}>
              <img
                key={index + "example_photo"}
                src={card.file}
                width="100%"
                alt={`emblem-${card.faction}`}
              />
            </Link>
          );
        }
      })} */}
    </div>
  );
};

const Div = styled.div`
  overflow: scroll;
  width: 100%;
  @media(max-width: 587px){
    width: 100vw;
  }
`;

const Carrousel = styled.div`
  white-space: nowrap;
  margin: auto;
  overflow: scroll;

  div {
    min-width: 150px;
    height: 100px;
    border-radius: 2px;
    padding: 5px;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    margin: 5px;
    background-color: var(--darkopacity);
    border: 1px solid var(--primary);
    &:hover {
      background-color: var(--darkopacity);
    }
    &.active {
      background-color: var(--light);
    }
    p {
      color: var(--second);
    }
  }
  button {
    display: contents;
    cursor: pointer;
    img {
      filter: invert(1);
    }
  }
`;

export default ListFactionsIcons;
