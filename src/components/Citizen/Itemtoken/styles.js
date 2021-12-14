import styled from "styled-components";

export const NumToken = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  color: white;
  `;
export const Div = styled.div`
  &.item {
    opacity: 0.5;
    background: ${(props) => props.color};
    background: radial-gradient(
      farthest-corner at 50% 50%,
      rgba(255, 255, 255, 0.8) 1%,
      ${(props) => props.color} 99%
    );
    height: 300px;
    overflow: hidden;
    /* background-color: var(--citizen-darkopacity); */
    padding: 10px;
    border-radius: 5%;
    border: 5px solid #ffffff47;
    position: relative;
  }
  &:hover {
    opacity: 1;
  }
  p {
    position: absolute;
    bottom: 0px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    text-align: center;
    width: 100%;
  }
  p.name {
    color: white;
  }
  .faction {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 30px;
    /* filter: invert(); */
  }
  /* background: #7918f2;
  background: -webkit-linear-gradient(-68deg, #ac32e4, #4801ff);
  background: -o-linear-gradient(-68deg, #ac32e4, #4801ff);
  background: -moz-linear-gradient(-68deg, #ac32e4, #4801ff);
  background: linear-gradient(-68deg, #ac32e4, #4801ff); */
  a img {
    transition: all 0.5s ease-in-out;
    filter: brightness(0);
    &:hover {
      transition: all 0.5s linear;
      filter: brightness(1);
    }
  }
`;
