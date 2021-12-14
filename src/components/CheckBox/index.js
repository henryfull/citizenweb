// External
import React from "react";
import { Div, Title } from "./styles";

const CheckBox = ({ arrayObject, nameObject, theObject, functionObject }) => {
  return (
    <div className="tab-form mgv_2">
      <Title className="pd_1">{nameObject}</Title>
      <Div className="group">
        {arrayObject.map((item, index) => {
          return (
            <React.Fragment key={`${item}_${index}_${nameObject}`}>
              <input
                type="radio"
                name={nameObject}
                id={`${nameObject}${item.name}`}
                defaultChecked={theObject === item.name ? true : false}
              />
              <label
                htmlFor={`${nameObject}${item.name}`}
                onClick={() => functionObject(item.name)}
                className="font_14"
              >
                <span>{item.name} </span>
              </label>
            </React.Fragment>
          );
        })}
      </Div>
    </div>
  );
};

export default CheckBox;
