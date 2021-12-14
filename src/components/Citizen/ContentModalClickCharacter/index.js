import React from 'react'
import {Div} from './styles'

const ContentModalClickCharacter = ({ datas, handleClic, title }) => {
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
                    src={`${process.env.PUBLIC_URL}files/characters/${item.name}`}
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
export default ContentModalClickCharacter
