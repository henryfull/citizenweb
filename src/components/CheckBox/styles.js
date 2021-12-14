import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
`;

export const Title = styled.h5`
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;
