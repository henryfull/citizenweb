import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Element
      pd={props.pd}
      rd={props.rd}
      color={props.color}
      className={props.clase}
      wd={props.wd}
      hg={props.hg}
      onClick={(e) => props.handleClick(props.value, e)}
    >
      {props.children}
    </Element>
  );
};

const Element = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.color || "transparent"};
  position: relative;
  width: ${(props) => props.wd || "auto"};
  height: ${(props) => props.hg || "auto"};
  &.rds_5 {
    border-radius: 5px;
  }
  &.rds_10 {
    border-radius: 10px;
  }
  &.rds_50 {
    border-radius: 50px;
  }

  &.bdr_primary {
    border-color: var(--primary);
  }
  &.bdr_second {
    border-color: var(--second);
  }
  &.bdr_white {
    border-color: var(--white);
  }
  &.bdr_green {
    border-color: var(--green);
  }
  &.clr_primary {
    color: var(--primary);
  }
  &.clr_second {
    color: var(--second);
  }
  &.clr_white {
    color: var(--white);
  }
  &.clr_green {
    color: var(--green);
  }
  &:hover {
    background-color: var(--body);
    box-shadow: 0 0 5px black;
  }
`;

export default Button;
