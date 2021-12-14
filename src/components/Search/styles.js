import styled from "styled-components";

export const Form = styled.form`
  top: 0;
  left: 0;
  transition: all 0.5s;
  padding: 5px;
  z-index: 11;
  height: 50px;
  width: 100%;
  background-color: var(--primary);
  position: absolute;
`;
export const Input = styled.input`
  display: initial;
  transition: all 0.5s;
  padding: 20px;
  margin: 0px 10px;
  position: relative;
  width: 70%;
  transition: all 0.5s;
  height: 36px;
  border-radius: 25px;
  background-color: white;
`;
export const ButtonSend = styled.button`
    margin-left: -130px;
    color: white;
    background-color: rgba(0,0,0,0.5);
    padding: 0px 20px;
    border-radius: 25px;
    padding-left: 50px;
    transition: all 1s;
    &:hover{
      background-color: crimson;
      color: white;
    }
    &.shw {
      margin-left: -30px;
      transition: all 1s;
    }

`;
export const ClearButtonP = styled.p`
  margin-left: -45px;
  z-index: 12;
  margin-top: 5px;
  height: 30px;
  width: 30px;
  border-radius: 25px;
  &:hover{
    background-color: #333;
    color: white;
  }

`;
export const Close = styled.span`
  position: absolute;
  right: 10px;
  top: 0px;
  z-index: 12;
  color: rgba(0,0,0,0.7);
  padding: 10px 0px;
  margin: 0px;
  border-radius: 25px;
  font-size: 34px;
  &:hover{
    color: rgba(255,0,0,0.7);
    
  }

`;
export const Glass = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  left: 0;
  top: 0;

`;
