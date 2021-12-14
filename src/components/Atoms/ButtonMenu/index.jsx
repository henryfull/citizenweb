import React from "react";
import styled from "styled-components";
import { pathOrigin } from "../../../helpers/utils";
const ButtonMenu = (props) => {
  return (
    <Button onClick={() => props.handleClick(props.link)} width={200}>
      <Circle className="_circle">
        <img
          src={`${pathOrigin}/files/assets/icon_menu_${props.value}.png`}
          alt={`icon menu ${props.value}`}
          className="characterImage-story"
        />
      </Circle>
      <Bar className="bar">
        <b>{props.text}</b>
      </Bar>
    </Button>
  );
};

const Button = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  width: ${(props) => props.width}px;
  display: grid;
  place-items: center;
  grid-template-columns: 80px auto;
  &:hover {
    .bar {
      box-shadow: 0 0 15px var(--primary);
    }
    ._circle {
     background-color: var(--primary);
     img {
         filter: brightness(5);
     }
    }
  }
`;
const Circle = styled.div`
  background-color: var(--body);
  border: 2px solid var(--second);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  padding: 20%;
  z-index: 1;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const Bar = styled.div`
  background-color: var(--second);
  padding: 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  color: var(--body);
  transform: translateX(-10px);
  z-index: 0;
  font-weight: bold;
  width: 100%;
  
`;

export default ButtonMenu;
