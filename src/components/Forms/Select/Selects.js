
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Div, Icon } from "./styles";
const SelectBrand = ({ setBrand, brands }) => {
  const [selectOption, setSelectOption] = React.useState(false);
  const handleSelect = (e) => {
    setBrand(e);
    setSelectOption(true)
    localStorage.setItem("brand", e);
  };
  React.useEffect(() => {
    if (localStorage.getItem('brand')) {
      setSelectOption(true);
    }
  }, [selectOption])
  return (
    <Div className="group-form select-form w100 mgv_1 rel">
      {/* <h5>Marca</h5> */}
      <Select
        className=""
        name="brand"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="Marca"> Marca</option>
        {brands.map((item) => {
          return (
            <>
              {localStorage.getItem("brand") === item.brand ? (
                <option key={item._id} value={item.brand} selected>
                  {" "}
                  {item.brand}
                </option>
              ) : (
                <option key={item._id} value={item.brand}>
                  {" "}
                  {item.brand}
                </option>
              )}
            </>
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
    </Div>
  );
};
export default SelectBrand;
