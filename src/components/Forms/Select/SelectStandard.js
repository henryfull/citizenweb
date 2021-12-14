// External dependencies
import React, {useContext, useState, useEffect} from "react";
// Local dependencies
import {Context} from '../../../services/Context'
// Components
import Option from "./Options/Option";
import Icon from '../../Atoms/Icon/index'
// Styles
import { Select, Div, Icono } from "./styles";


const SelectStandard = ({
  setSelect,
  arrayObjects,
  brand,
  name,
  title,
  setFinishButton,
}) => {
  const { updateOnlyField } = useContext(Context);
  const [selectOption, setSelectOption] = useState(false);
  const [valor, setValor] = useState(localStorage.getItem(name) || brand);

  const handleSelect = async (e) => {
    setSelect(e);
    setValor(e);
    updateOnlyField(name, e, 'auto');

    setSelectOption(true);
  };

  useEffect(() => {
    if (localStorage.getItem(name) !== null) {
      setSelectOption(true);
    } else {
      setSelectOption(false);
    }
 // eslint-disable-next-line   
  }, [selectOption]);

  return (
    <Div className="group-form select-form w100 mgv_1 rel">
      {/* <h5>Marca</h5> */}
      {arrayObjects.length !== undefined ? (
        <>
          <Select
            className=""
            name={name}
            onChange={(e) => handleSelect(e.target.value)}
            value={valor}
          >
            <option value={title}> {title}</option>
            {arrayObjects.map((item, index) => {
              return (
                <React.Fragment key={`${item}_${index}`}>
                  <Option item={item} name={name} />
                </React.Fragment>
              );
            })}
          </Select>

          <Icono>
            {!selectOption ? (
              <Icon name="chevron-down"/>
              ) : (
                <Icon name="check-circle"/>
            )}
          </Icono>
        </>
      ) : (
        <>
          <p className="red font_12 pd_2 center-content">
            Lo sentimos, no tenemos información sobre ese vehiculo
          </p>
          <input
            name="other"
            className="w100 bgwhite pd_2 radius_5"
            placeholder="Escribre la version de su vehiculo "
            onChange={() => setFinishButton(true)}
          />
        </>
      )}
    </Div>
  );
};
export default SelectStandard;
