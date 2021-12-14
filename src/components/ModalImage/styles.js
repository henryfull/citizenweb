import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  p {
    color: white;
    font-size: 3rem;
    z-index: 13;
    padding: 10px;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: black;
    }
    @media (max-width: 600px) {
      top: 80%;
      font-size: 2rem;
      height: 3.5rem;
      width: 3.5rem;
    }
  }
`;
export const BlockImages = styled.div`
  height: 90%;
  margin: 50px auto;
  width: 100%;
  text-align: center;
  z-index: 12;
  img {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
    margin: auto;
    z-index: 13;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Next = styled.p`
  position: fixed;
  top: 50%;
  right: 10%;
`;
export const Previous = styled.p`
  position: fixed;
  top: 50%;
  left: 10%;
`;
export const Bollets = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  span {
    height: 10px;
    width: 10px;
    border: 1px solid white;
    border-radius: 50%;
    margin: 5px;
    box-shadow: 0 0 5px black;
    background-color: white;
    opacity: 0.5;
  }
  &.show {
      opacity: 1;

  }
`;
