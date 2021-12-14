import styled from "styled-components";

export const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 50px;
  /* grid-auto-rows: minmax(180px, auto); */
  grid-auto-flow: dense;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;

  .list li {
    display: grid;
    grid-template-columns: 160px 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const Background = styled.div`
  background-color: aquamarine;
  background: url(http://localhost:4000/api/files/backgrounds/${(props) =>props.background}) center center no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  z-index: -1;
`;
export const HomeSlide = styled.div`
  height: 100vh;

  h2 {
    &::first-letter {
      text-transform: uppercase;
    }
  }

  ul {
    li:first-letter {
      text-transform: uppercase;
    }
  }
`;
