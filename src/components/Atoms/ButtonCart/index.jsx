import React from "react";
import styled from "styled-components";
import Icons from "../Icons/index";

const ButtonCart = ({ open }) => {
  return (
    <Button onClick={() => open(true)}>
      <Icons name="cart" color="var(--second)" size="24" />
    </Button>
  );
};

export default ButtonCart;

const Button = styled.button`
    position: fixed;
    top: 150px;
    right: 10px;
    z-index: 2;
    padding: 0px;
    border-radius: 46px;
    border: 1px solid var(--primary);
    background-color: rgba(0,0,0,0.8);
    box-shadow: 0 0 5px;
    color: var(--primary);
    max-height: 50px;
    cursor: pointer;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
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
