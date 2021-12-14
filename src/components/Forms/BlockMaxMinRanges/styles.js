import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const Buttons = styled.div`
  position: absolute;
  right: 10px;
  svg {
  }
`;

export const InputBox = styled.input`
  width: 100%;
  color: var(--primary);
  font-size: 18px;
  padding: 3px;
  &::placeholder {
    font-size: 13px;
  }
  outline: none;
`;

export const LabelBox = styled.label`
  background-color: var(--light);
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin: 10px auto;
  border: 1px solid ${(props) => props.color || "var(--primary)"};
  padding: 10px;
  transition: 0.5s linear all;
  position: relative;
  &:-internal-autofill-selected {
    background-color: none;
  }
  &:focus-within {
    background-color: var(--light);
    transition: 0.5s linear all;
  }
  .title {
    position: absolute;
    background: var(--light);
    color: var(--primary);
    top: -10px;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 13px;
    text-align: left;
    font-family: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif;
  }
`;
