import React from "react";
import { Input, Label } from "./style";

const CheckboxModern = ({ name, title, changeCheck, check }) => {
  return (
    <div className=" flex">
      <Input
        type="checkbox"
        name={`${name}`}
        id={`${name}1`}
        defaultChecked={check ? true : false}
      />
      <Label htmlFor={`${name}1`} onClick={(e) => changeCheck(e)}>
        {title}
      </Label>
    </div>
  );
};
export default CheckboxModern;
