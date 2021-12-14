// External dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
// Local dependencies

// Componentes
import { Map } from "../Map/index";
// Styles
import { Div } from "./styles";

const MapContent = () => {
  const [faction, setFaction] = useState({});
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    getDatas();
  }, []);

  const getInfoFaction = (param) => {
    if (param === "") {
      setShowDescription(false);
    } else {
      const datas = JSON.parse(localStorage.getItem("datas")).factions;
      let tempo = datas.filter((item) => item.name === param);
      console.log(tempo);
      setFaction(tempo[0]);
      setShowDescription(true);
    }
  };

  const getDatas = () => {
    var url = process.env.PUBLIC_URL + "datas";
    console.log(url);
    const options = { method: "GET" };
    axios(url, options).then((res) => {
      // console.log(res.data.body);
      localStorage.setItem("datas", JSON.stringify(res.data.body));

    });
  };

  return (
    <div>
      <Map hoverFunction={getInfoFaction} color={faction.color} />
      {showDescription && (
        <Div>
          <div className="flex">
            <img
              src={`${process.env.PUBLIC_URL}files/symbols/emblem-${faction.name}.svg`}
              alt={`emblem-${faction.name}`}
              height="50px"
              className="mg_1"
            />
            <h3>{faction.name}</h3>
          </div>
          <p>{faction.description}</p>
        </Div>
      )}
    </div>
  );
};

export default MapContent;
