import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Icons from "../Icons/index";

const ButtonBack = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Button className="return" onClick={goBack}>
      <Icons name="back" color="white" size="24" />
    </Button>
  );
};
const Button = styled.div`
  position: fixed;
  background-color: var(--primary);
  width: 50px;
  height: 40px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  color: white;
  padding: 5px;
  top: 0;
  border-right: 5px solid white;
  border-bottom: 5px solid white;
  z-index: 1;
  &:hover {
    /* background-color: var(--second); */
    svg {
      fill: black;
    }
    box-shadow: 0 0 10px var(--second);
  }
`;

export default ButtonBack;
