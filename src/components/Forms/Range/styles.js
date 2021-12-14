import styled from "styled-components";

export const InputRange = styled.input`
  pointer-events: none;
  position: absolute;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 14px;
  background: lightgrey;
  box-shadow: inset 0 1px 0 0 #adadad, inset 0 -1px 0 0 #bababa;
  -webkit-box-shadow: inset 0 1px 0 0 #adadad, inset 0 -1px 0 0 #bababa;
  left: 0;
  top: 50px;
  width: 100%;
  outline: none;
  height: 35px;
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;
export const Div = styled.div`
  display: flex;
  height: 50px;
`;
export const Label = styled.p`
  margin-top: 0px;
`;
export const BackgroundInput = styled.div`
  height: 20px;
  position: absolute;
  top: 50px;
  background-color: var(--contrast-color);
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  &::before {
    /* content: "Año de compra"; */
    color: white;
    font-family: arial;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }

`;
export const BackgroundDinamicRange = styled.div`
  height: 100%;
  background-color: royalblue;
  width: ${(props) => props.width}%;
`;
