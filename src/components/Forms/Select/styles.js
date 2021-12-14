import styled from "styled-components";

export const Select = styled.select`
  height: 90%;
  font-size: 16px;
  // background-color: transparent;
  background-color: rgba(255,255,255,0.2);
  border: none;
  outline: none;
  width: 100%;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  padding: 10px 40px 10px 10px;
  position: relative;
  // border-bottom: 1px solid var(--primary);
  border-radius: 0;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  border: 1px solid var(--second);
`;
export const Div = styled.div`
  width: 100%;
  position: relative;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  button{
    &.true{
      border: 1px solid var(--primary);
    }
    &.false{
      border: 1px solid var(--second);
    }
    width: 50px;
    height: 50px;
    border-radius: 5px;
    &:hover{
      background-color: var(--second);
      color: var(--primary);
    }
  }
`;
export const Icono = styled.span`
  padding: 10px;
  width: 12px;
  height: 10px;
  display: inline-block;
  background-size: contain;
  position: absolute;
  top: 10px;
  right: 20px;
  bottom: 10px;
  pointer-events: none;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  pointer-events: none;
  color: white;
  &.active {
    color:green;
  }
`;
