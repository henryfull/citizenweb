import styled from "styled-components";
export const Icono = styled.svg`
  height: ${(props) => props.size + "px" || "30px"};
  fill: ${(props) => props.color || " black"};
  stroke: ${(props) => props.strokeColor || "none"};
  stroke-width: ${(props) => props.strokeWidth + "px" || 0 + "px"};
`;
