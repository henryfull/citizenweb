import React from "react";
import styled from "styled-components";
const radius = 5;

const StatusBar = (props) => {
  return (
    <Div
      className={props.class + " bar-progress-form"}
      color={props.color}
      width={props.widthState}
      height={props.height}
      radius={props.widthState > 99.5 ? radius - 2 : 0}
    >
      <div></div>
      {props.height > 10 && (
        <p className="text-center font_14 flex-right gap">
          {props.text} {props.children}
        </p>
      )}
    </Div>
  );
};

export default StatusBar;


const Div = styled.div`
  background-color: ${(props) => props.color.second};
  border: 1px solid white;
  height: ${(props) => props.height || 20}px;
  top: 0px;
  position: relative;
  left: 0;
  width: 100%;
  margin: 10px auto;
  border-radius: ${radius}px;
  max-width: 100%;
  /* box-shadow: 0 0 2px #fff, 0 0 5px ${(props) => props.color.second}; */
  div {
    border-top-right-radius: ${(props) => props.radius}px;
    border-bottom-right-radius: ${(props) => props.radius}px;
    border-top-left-radius: ${radius}px;
    border-bottom-left-radius: ${radius}px;
    background-color: ${(props) => props.color.primary || "#eee"};
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    height: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
    width: ${(props) => props.width}%;
    transition: width 1s linear;
    max-width: 100%;
  }
  p {
    position: absolute;
    width: 100%;
    top: 2px;
    padding: 4px 5px;
    color: white;
  }
  &.mini{
    p{
      top: 0;
      padding: 0;
      font-size: 10px;
      padding-right: 10px;
    }
    &.enemy{
      p{
        
        padding-right: 20px;
      }

    }
  }

  @media (max-width: 587px) {
    max-height: 22px;

    p {
      font-size: ${(props) => props.font}px;
      padding: 1px 5px;
    }
  }
`;
