import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  background-color: var(--citizen-darkopacity);
  padding: 10px;
  left: 0;
  width: 50%;
  h3 {
    color: white;
    text-transform: uppercase;
    padding: 10px;
  }
  img {
      filter: invert();
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
