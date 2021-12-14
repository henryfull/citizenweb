import React from "react";
import styled from "styled-components";
const Overlay = ({ color, close }) => {
  return <Div color={color} onClick={() => close(false)} />;
};
const Div = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  top: 0px;
  left: 0px;
  z-index: 103;
  opacity: 0.9;
`;
export default Overlay;
