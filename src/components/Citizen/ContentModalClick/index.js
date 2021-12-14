import React from 'react'
import { pathOrigin} from '../../../helpers/utils'
import {Div, Symbols} from './styles'

export const ContentModalClickBackground = ({ datas, handleClic, title }) => {
    return (
      <Div>
        <h4>{title}</h4>
        <div>
          <ul className=" grid col3 list">
            {datas.map((item, i) => {
              return (
                <li
                  className="text-center"
                  key={item.id + "_" + item.name}
                  onClick={() => handleClic(item)}
                >
                  <img
                    // key={index + "example_photo"}
                    src={`${pathOrigin}/files/backgrounds/${item.name}`}
                    alt={`character_${item.name}`}
                    width={`${item.width || "auto"}`}
                    height="100px"
                    className="backgroundImage"
                  />
                  <p className="font_18 pd_1">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Div>
    );
  };

export const ContentModalClickCharacter = ({ datas, handleClic, title }) => {
    return (
      <Div>
        <h4>{title}</h4>
        <div>
          <ul className=" grid col3 list">
            {datas.map((item, i) => {
              return (
                <li
                  className="text-center"
                  key={item.id + "_" + item.name}
                  onClick={() => handleClic(item)}
                >
                  <img
                    // key={index + "example_photo"}
                    src={`${pathOrigin}/files/characters/${item.name}`}
                    alt={`character_${item.name}`}
                    width={`${item.width || "auto"}`}
                    height="100px"
                    className="characterImage"
                  />
                  <p className="font_18 pd_1">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Div>
    );
  };

  export const ContentModalClickList = ({ datas, handleClic, title }) => {
    return (
      <Div>
        <h4>{title}</h4>
        <div>
          <ul className="list">
            {datas.map((item, i) => {
              return (
                <li
                  className="text-center"
                  key={item.id + "_" + item.name}
                  onClick={() => handleClic(item)}
                >
                  <p className="font_18 pd_1">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Div>
    );
  };

  export const ContentModalClick = ({ datas, handleClic, title }) => {
    return (
      <div>
        <h4>{title}</h4>
        <Symbols>
          <ul className="grid col3 list">
            {datas.map((item, i) => {
              return (
                <li
                  className="text-center"
                  key={item.id + "_" + item.name}
                  onClick={() => handleClic(item)}
                >
                  <img
                    // key={index + "example_photo"}
                    src={`${pathOrigin}/files/symbols/emblem-${item.name}.svg`}
                    alt={`emblem-${item.name}`}
                    height="40px"
                    className="mg_1"
                  />{" "}
                  <p className="font_18 pd_1">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </Symbols>
      </div>
    );
  };
