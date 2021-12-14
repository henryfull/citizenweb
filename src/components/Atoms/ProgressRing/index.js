import React from "react";
import styled from "styled-components";

const ProgressRing = (props) => {
  const normalizedRadius = props.radius - props.stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (props.progress / 100) * circumference;
  return (
    <Div height={props.radius * 2} color={props.colorStroke}>
      <div>
        <svg height={props.radius * 2} width={props.radius * 2}>
          <Circle
            stroke={"lightgrey"}
            fill={props.fill}
            strokeWidth={props.stroke}
            strokeDasharray={props.radius * 100}
            style={{ strokeDashoffset }}
            stroke-width={props.stroke}
            r={normalizedRadius}
            cx={props.radius}
            cy={props.radius}
          />
        </svg>
      </div>
      <div>
        <svg height={props.radius * 2} width={props.radius * 2}>
          <Circle
            stroke={props.colorStroke}
            fill={props.fill}
            strokeWidth={props.stroke * 2}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={props.stroke}
            r={normalizedRadius}
            cx={props.radius}
            cy={props.radius}
          />
        </svg>
      </div>
      <div>{props.children}</div>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  min-height: ${(props) => props.height}px;
  min-width: ${(props) => props.height}px;
  div {
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    /* box-shadow: 0 0 5px #fff, inset 0 0 5px #fff, 0 0 15px ${props => props.color}, inset 0 0 15px ${props => props.color}; */
    border-radius: 50%;
    transition: .5s linear box-shadow;
  }
`;
const Circle = styled.circle`
  transition: all 1s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export default ProgressRing;
