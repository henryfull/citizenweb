import styled from "styled-components";
export const Label = styled.label`
  position: relative;
  margin-right: 1em;
  line-height: 2em;
  cursor: pointer;
  z-index: 2;
  display: block;
  margin: 0px;
  color: black;
  font-family: gotham book, arial;
  width: 100%;
  height: 2em;
  transition: 0.5s all ease;
  border-radius: 25px;
  white-space: nowrap;
  padding: 0px 15px;
  margin: 5px;
  color: black;
  font-size: 14px;
  border: 2px solid royalblue;
    box-sizing: content-box;

  &::before {
    content: "";
    border-radius: 25px;
    transition: 0.5s all ease;
    box-sizing: border-box;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2em;
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
    color: white;
    z-index: 1;
    background-color: royalblue;
    width: 100%;
    height: 2em;
    border-radius: 25px;
    transition: 0.5s all ease;
  }
  &:checked + label::before {
    border: none;
    transition: 0.5s all ease;
  }
`;
