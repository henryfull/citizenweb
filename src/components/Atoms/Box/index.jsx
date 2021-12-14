import React from "react";
import styled from "styled-components";

const Box = (props) => {
  return <Div pd={props.pd} color={props.color} className={props.class}>{props.children}</Div>;
};

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: ${props => props.pd || 5}px;
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
  position: relative;
  &.primary{
      border-color: var(--primary);
  }
  &.second{
      border-color: var(--second);
  }
  &.white{
      border-color: var(--white);
  }
  &.green{
      border-color: var(--green);
  }
`;

export default Box;
