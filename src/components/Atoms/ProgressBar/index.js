import React from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  return (
    <Div
      className="bar-progress-form"
      color={props.color}
      width={props.widthState}
      height={props.height}
    >
      <div></div>
      {
        props.height > 10 &&
      <p className="text-center font_14 flex-justify">
        {props.children} {props.text}
      </p>
      }
    </Div>
  );
};

export default ProgressBar;

const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  height: ${(props) => props.height || 20}px;
  top: 0px;
  position: relative;
  left: 0;
  width: 100%;
  margin: 10px auto;
  border-radius: 25px;
  max-width: 100%;
  div {
    border-radius: 25px;
    background-color: ${(props) => props.color || "#eee"};
    height: 100%;
    top: 0px;
    position: absolute;
    left: 0;
    width: ${(props) => props.width}%;
    transition: all 1s linear;
    max-width: 100%;
  }
  p {
    position: absolute;
    width: 100%;
    top: 2px;
    padding: 1px 5px;
    color: white;
  }
 

`;
