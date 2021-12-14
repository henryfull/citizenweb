import styled from "styled-components";

export const Div = styled.div`
  background-color: var(--light);
  z-index: 120;
  position: fixed;
  left: 0;
  right: 0;
  top: 100px;
  border: 0;
  padding: 20px;
  border-radius: 5px;
  color: var(--dark);
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 32px;
    line-height: 32px;
    height: 32px;
    width: 32px;
    color: red;
    font-weight: bold;
    border-radius: 5px;
    &:hover{
      background-color: red;
      color: white;
    }
  }
`;
