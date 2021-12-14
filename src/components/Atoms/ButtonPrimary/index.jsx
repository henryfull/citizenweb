import styled from "styled-components";
import React from "react";
import Icons from "../Icons/index";

const ButtonPrimary = (props) => {
  return (
    <ButtonStak onClick={props.handleAction} color={props.color} bg={props.bg}>
      <span className="block_icon">
        <Icons name={props.icon} color={props.color} />
      </span>
      <span className="pd_1">{props.text}</span>
    </ButtonStak>
  );
};

export default ButtonPrimary;

const ButtonStak = styled.button`
  border: 1px solid ${(props) => props.color || "var(--primary)"};
  color: ${(props) => props.color || "var(--primary)"};
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  max-height: 70px;
  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) => props.bg || "var(--primary)"};

  .block_icon {
    padding: 5px;
    display: inline-block;
    vertical-align: middle;
  }
  &:hover {
    background-color: ${(props) => props.color || "var(--primary)"};
    color: ${(props) => props.bg || "var(--primary)"};
    svg {
      fill: ${(props) => props.bg || "var(--primary)"};
    }
  }
`;
