import React from "react";
import styled from "styled-components";

const Circle = (props) => {
  const normalizedRadius = props.radius - props.stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (props.progress / 100) * circumference;
    console.log(strokeDashoffset)

  return (
    <Div height={props.radius * 2}>
      <div>
        <svg height={props.radius * 2} width={props.radius * 2}>
          <Circles
            stroke={props.colorStroke}
            fill={props.fill}
            strokeWidth={props.stroke}
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
  }
`;
const Circles = styled.circle`
  transition: all 1s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export default Circle;
