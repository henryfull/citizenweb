import styled from "styled-components";

export const ConsentInit = styled.div`
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  z-index: 50;
  box-shadow: 0 0 2px black;
  .txt {
    min-height: 50px;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

export const Div = styled.div`
  width: 100%;

  overflow-y: scroll;
    height: 90vh;
    padding-bottom: 50px;

  .options {
    margin: 50px auto;
    height: 90vh;
    padding: 10px;
    z-index: 1100;
  }
  button.agree,
  button.reject {
    border: 1px solid;
    margin: 2px;
    padding: 5px;
    font-size: 12px;
    color: white;
  }

  .agree {
    background-color: var(--green);
    &:hover {
      background-color: var(--color-default-light);
    }
  }
  .reject {
    background-color: black;
    &:hover {
      background-color: crimson;
    }
  }

  p {
    font-size: 12px;
    padding: 10px;
  }
  @media (max-width: 600px) {
    top: 0px;
    .options {
      margin: auto;
      height: auto;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
