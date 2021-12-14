import React from "react";
import styled from "styled-components";
import Icons from "../Icons/index";
import { useHistory } from "react-router-dom";

const BarGoBack = ({ route }) => {
  const history = useHistory();
  /** Retrocede a la pagina anterior */
  const goBack = () => {
    history.goBack();
  };
  return (
    <Div>
      <div className="flex-justify _content">
        <p className="white font_14 pd_1">{route}</p>
        <Button className="return" onClick={goBack}>
          <Icons name="chevron-left" color="white" size="14" />{" "}
          <span>volver</span>
        </Button>
      </div>
    </Div>
  );
};
const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  transition: 0.5s linear all;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  /* position: absolute; */
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 1;
  &:hover {
    transition: 0.5s linear all;
    background-color: rgba(255, 255, 255, 0.2);
    .return {
      transition: 0.5s linear all;
      color: black;
    }
    p {
      color: white;
      font-size: 14px;
      padding: 5px;
    }
  }
  ._content{
    max-width: 800px;
    margin: auto;
    width: 100%;
  }
`;
const Button = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  span {
    vertical-align: text-bottom;
  }
`;

export default BarGoBack;
