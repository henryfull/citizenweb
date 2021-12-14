// External dependencies
import React, { useContext, useState, useEffect } from "react";
// Local dependencies
import { Context } from "../../../services/Context";
// Components
import Option from "./Options/Option";
import Icons from "../../Atoms/Icons/index";
// Styles
import { Select, Div, Icono } from "./styles";

const Selection = ({ setSelect, built, name, title }) => {
  const { updateOnlyField } = useContext(Context);
  const [selectOption, setSelectOption] = useState(false);

  const handleSelect = async (num) => {
    built.active = num;
    setSelect(built);
    setSelectOption(true);
  };

  return (
    <Div className="group-form select-form w100 mgv_1 rel">
      {built.list.map((item, index) => {
        return (
          <React.Fragment key={`${item}_${index}`}>
            <button
              onClick={() => handleSelect(index)}
              className={index === built.active ? "true" : "false"}
            >
              {index}
            </button>
          </React.Fragment>
        );
      })}
      <button className={"false"}>
        <Icons name="pencil-alt" size="18" color="var(--primary)" />
      </button>
      {/* <Select
          className=""
          name={name}
          onChange={(e) => handleSelect(e.target.value)}
        >

          {list.map((item, index) => {
            return (
              <React.Fragment key={`${item}_${index}`}>
                <option value={item.name} selected={item.active}>
                  {item.name}
                </option>
              </React.Fragment>
            );
          })}
        </Select>

        <Icono>
          {!selectOption ? (
            <Icons name="chevron-left" color="white" />
          ) : (
            <Icons name="chevron-circle-left" color="white" />
          )}
        </Icono> */}
    </Div>
  );
};
export default Selection;
