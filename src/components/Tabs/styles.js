import styled from "styled-components";

export const Div = styled.div`
    overflow: scroll;
    margin-bottom: 30px;
    white-space: nowrap;
    display: flex;
    max-width: 98vw;
    background-color: white;
    border-radius: 50px;
    > div {
      padding: 2px;
    }
`;
export const Button = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  color: var(--contrast-color);
  font-family: gotham book, "Trebuchet MS", "Lucida Sans Unicode",
    "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  border-bottom: 2px solid transparent;
  font-size: 16px;
 
  &.active {
    background-color: var(--primary);
    color: white;
    border-radius: 50px;
    &:hover{
    background-color: black;
  }
  }
`;
