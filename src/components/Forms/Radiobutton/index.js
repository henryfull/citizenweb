import React from "react";
import { Input, Label } from "./style";

const Radiobutton = ({ name, changeCheck, check }) => {
  return (
    <div className=" flex">
      <Input type="radio" name={`${name}`} id={`${name}1`} value="" checked={check && true}  onClick={e => changeCheck(e)} />
      <Label htmlFor={`${name}1`}></Label>
    </div>
  );
};
export default Radiobutton;
