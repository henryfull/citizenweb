import styled from "styled-components";

let left = 15;
let radius = 12;
const color = "#333";

export const Div = styled.div`
  border-radius: ${radius}px;
  width: 500px;
  height: 820px;
  box-sizing: border-box;
  overflow: hidden;
  /* box-shadow: 0 0 5px black; */
`;

export const Content = styled.div`
  position: relative;
  border-radius: ${radius}px;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Border = styled.div`
  border: 6px solid ${(props) => props.color};
  border-radius: ${radius}px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Background = styled.div`
  background-color: aquamarine;
  background: url( ${process.env.PUBLIC_URL}files/backgrounds/${(props) => props.background}) ${color} center
    center no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

export const Num = styled.h3`
  position: absolute;
  top: 0px;
  left: 20px;
  font-family: baloo regular, "Lucida Sans", "Lucida Sans Regular",
    "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: ${(props) => props.color};
  -webkit-text-stroke: 1px white;
  font-size: 3em;
`;
export const Character = styled.div`
  position: absolute;
  width: 95%;
  height: 90%;
  display: grid;
  place-items: center;
  img {
    height: 89%;
    width: 100%;
    object-fit: contain;
  }
`;
export const Titles = styled.div`
  position: absolute;
  bottom: 290px;
  left: ${left}px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid black;
  padding: 5px;
  border-radius: 2px;
  width: 400px;

  h3 {
    color: ${(props) => props.color};
    font-size: 2em;
    text-transform: uppercase;
    font-family: 'baloo regular';
    line-height: 40px;
  }
  h4 {
    font-size: 0.9em;
    text-transform: uppercase;
  }
`;
export const Description = styled.div`
  position: absolute;
  bottom: 60px;
  height: 220px;
  left: ${left}px;
  font-size: 14px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid black;
  padding: 5px;
  border-radius: 2px;
  p{
    font-size: 1.4em;
  }
`;
export const Block = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  height: 50px;
  /* background-color: red; */
  width: 50px;
  display: grid;
  place-items: center;
  img {
    height: 70px;
    filter: invert(1);
  }
`;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.color};
  color: white;
  div {
    span {
      text-transform: uppercase;
      font-size: 16px;
      line-height: 18px;
      font-family: "gotham medium";
      padding: 0px 5px;
      vertical-align: super;
    }
    img {
      filter: invert(1);
      height: 20px;
      vertical-align: top;
    }
  }
`;
