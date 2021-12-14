import React from "react";
import { Icon } from "./styles";

const Hexa = ({ ...props }) => {
  return (
    <Icon
      color={props.color}
      height={props.height}
      stroke={props.stroke}
      viewBox="0 0 110 127"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M54.572,0l54.571,31.507l0,63.014l-54.571,31.507l-54.572,-31.507l-0,-63.014l54.572,-31.507Z" />
    </Icon>
  );
};

export default Hexa;

