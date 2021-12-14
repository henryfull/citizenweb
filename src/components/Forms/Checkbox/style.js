import styled from "styled-components";
export const Label = styled.label`
  position: relative;
  margin-right: 1em;
  line-height: 2;
  cursor: pointer;
  z-index: 2;
  display: block;
  margin: 0px;
  color: black;
  font-family: gotham book, arial;
  width: 1.5em;
  height: 1.5em;
  transition: 0.5s all ease;
  border-radius: 5px;

  &::before {
    content: "";
    border-radius: 5px;
    border: 2px solid royalblue;
    transition: 0.5s all ease;
    box-sizing: border-box;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    z-index: -1;
  }
`;
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked + label {
    z-index: 1;
    background-color: royalblue;
    width: 1.5em;
    height: 1.5em;
    border-radius: 5px;
    transition: 0.5s all ease;
    border: 2px solid royalblue;
  }
  &:checked + label::before {
    border: none;
    transition: 0.5s all ease;
  }
`;
