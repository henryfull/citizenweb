import styled from "styled-components";
import React from "react";
import Icons from "../Icons/index";

const ButtonSave = ({ save }) => {
  return (
    <Button onClick={save}>
      <span className="block_icon">
        <Icons name="save" />
      </span>
      <span className="pd_1">Guardar</span>
    </Button>
  );
};

export default ButtonSave;

export const Button = styled.button`
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: var(--light);
  box-shadow: 0 0 5px;
  color: var(--primary);
  max-height: 50px;
  cursor: pointer;
  .block_icon {
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
  }
  &:hover {
    background-color: var(--dark);
    color: var(--primary);
  }
`;
