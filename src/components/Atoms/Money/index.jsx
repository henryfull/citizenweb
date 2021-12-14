import React from "react";
import styled from "styled-components";
import { pathOrigin } from "../../../helpers/utils";
const Money = (props) => {
  return (
    <Button onClick={() => props.handleClick(props.link)} width={200}>
      <Circle>
        <img
          src={`${pathOrigin}/files/assets/icon_menu_${props.value}.png`}
          alt={`icon menu ${props.value}`}
          className="characterImage-story"
        />
      </Circle>
      <Bar>{props.text}</Bar>
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
`;
const Circle = styled.div`
  background-color: var(--body);
  border: 2px solid var(--primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 14%;
  z-index: 1;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const Bar = styled.div`
  background-color: var(--primary);
  padding: 2px 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  color: var(--body);
  transform: translateX(-20px);
  z-index: 0;
  font-weight: bold;
  width: 100%;
`;

export default Money;
