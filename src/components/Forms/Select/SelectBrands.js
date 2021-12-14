import React, {useContext, useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Div, Icon } from "./styles";
import Option from "./Options/Option";
import {Context} from '../../../services/Context'

const SelectBrand = ({
  setSelect,
  arrayObjects,
  brand,
  name,
  title,
  setFinishButton,
}) => {
  const { handleSetAuto } = useContext(Context);
  const [selectOption, setSelectOption] = useState(false);
  const [valor, setValor] = useState(localStorage.getItem(name) || brand);

  const handleSelect = async (e) => {
    setSelect(e);
    setValor(e);
    handleSetAuto(name, e);

    setSelectOption(true);
  };

  useEffect(() => {
    if (localStorage.getItem(name) !== null) {
      setSelectOption(true);
    } else {
      setSelectOption(false);
    }
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

          <Icon>
            {!selectOption ? (
              <FontAwesomeIcon icon={["fas", "chevron-down"]} />
            ) : (
              <FontAwesomeIcon icon={["fas", "check-circle"]} />
            )}
          </Icon>
        </>
      ) : (
        <>
         <FontAwesomeIcon icon={["fas", "spinner"]} />
          {/* <p className="red font_12 pd_2 center-content">
            Lo sentimos, no tenemos información sobre ese vehiculo
          </p>
          <input
            name="other"
            className="w100 bgwhite pd_2 radius_5"
            placeholder="Escribre la version de su vehiculo "
            onChange={() => setFinishButton(true)}
          /> */}
        </>
      )}
    </Div>
  );
};
export default SelectBrand;
