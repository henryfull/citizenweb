import React from "react";
import { Input, Label } from "./style";

const Checkbox = ({ name, changeCheck, check }) => {
  return (
    <div className=" flex">
      <Input type="checkbox" name={`${name}`} id={`${name}1`} value="" checked={check && true}  onClick={e => changeCheck(e)} />
      <Label htmlFor={`${name}1`}></Label>
    </div>
  );
};
export default Checkbox;
