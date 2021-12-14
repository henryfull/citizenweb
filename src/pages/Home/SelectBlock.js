import React, { useContext, useState } from "react";
import { Context } from "../../services/Context";
import { Api, pathOrigin } from "../../helpers/utils";
import { Whatis } from "./styles";
import establishment from "../../assets/img/home/icons-ciitizen-establishment-color.png";
import cybers from "../../assets/img/home/icons-ciitizen-cybers-color.png";
import rebels from "../../assets/img/home/icons-ciitizen-rebels-color.png";
import { blocks, factions } from "../../data/options";
import tokens from "../../data/tokens.json";
import axios from "axios";
const SelectBlock = () => {
  const { updateAnyFields, isAuth, profile } = useContext(Context);
  const [block, setBlock] = useState(null);
  const [faction, setFaction] = useState(null);

  const handleSaveBlock = () => {
    let url = Api("user/" + profile.idUser)
    updateAnyFields([{ block }, { faction }, {booster: 1}], "profile");
    let data = {
      block, faction, boosters: 1
    }
    axios.put(url, data).then(res =>{
      console.log(res)
    })

  };
  const handleSetConfigPlayer = (field, value) => {
    console.log(field, value);
    if (field === "block") {
      setBlock(value);
    }
    if (field === "faction") {
      setFaction(value);
    }
  };
  return (
    <Whatis className="mgv_10">
      <h3 className="text-center white">Getting started</h3>
      <p className="center mgv_4">
        There are three blocks that want to control the world. The three of them
        have the same opportunities to battles and the global monthly war.
        Select the one you like best.
      </p>

      <p className="white mga text-center">
        <span className="arrow">&#8618;</span>Pick your block
      </p>
      {block && (
        <div>
          <button className="red" onClick={() => setBlock(null)}>
            Cancelar
          </button>
          {faction && (
            <button className="green" onClick={handleSaveBlock}>
              Guardar
            </button>
          )}
        </div>
      )}
      <div className="group_blocs text-center mgv_10">
        {blocks.map((item, i) => {
          return (
            <div className="flex" key={`Block_${i}`}>
              <button
                key={`bloc_${i}`}
                onClick={() => handleSetConfigPlayer("block", item.name)}
                className={
                  (block === item.name ? "active" : "") +
                  " select_blocks pointer " +
                  item.name.toLowerCase()
                }
              >

                <div className="block_image">
                  <img
                    className="image"
                    src={
                      item.name === "Establishment"
                        ? `${pathOrigin}/files/characters/standar/pig-standar-m000.png`
                        : item.name === "Cybers"
                        ? `${pathOrigin}/files/characters/standar/cat-standar-f000.png`
                        : `${pathOrigin}/files/characters/standar/mare-standar-f000.png`
                    }
                    alt={item.name}
                    height="500"
                  />
                </div>
                <div className={"bgborder"}></div>
                <div className={"bg " + item.name.toLowerCase()}></div>
                <div className={`${item.name.toLowerCase()} _footer`}>
                  {item.name === "Establishment" && (
                    <img
                      className=""
                      src={establishment}
                      alt={item.name}
                      height="100"
                    />
                  )}
                  {item.name === "Cybers" && (
                    <img
                      className=""
                      src={cybers}
                      alt={item.name}
                      height="100"
                    />
                  )}
                  {item.name === "Rebels" && (
                    <img
                      className=""
                      src={rebels}
                      alt={item.name}
                      height="100"
                    />
                  )}
                  <h4 className="primary"> {item.name}</h4>
                  <hr></hr>
                  <p>{item.description}</p>
                </div>
              </button>
              {block === item.name && (
                <div className=" grid  gap  text-center list_factions">
                  {factions.map((item, i) => {
                    return (
                      <React.Fragment key={`faction${i}`}>
                        {item.block === block && (
                          <button
                            onClick={() =>
                              handleSetConfigPlayer("faction", item.name)
                            }
                            className={
                              (faction === item.name ? "active" : "") +
                              " blocks pointer _factions"
                            }
                          >
                            <img
                              className="emblem"
                              src={process.env.PUBLIC_URL + (item.url)}
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
              )}
            </div>
          );
        })}
      </div>
    </Whatis>
  );
};

export default SelectBlock;
