import React from 'react'
import {Div} from './styles'

const ContentModalClickList = ({ datas, handleClic, title }) => {
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
export default ContentModalClickList
