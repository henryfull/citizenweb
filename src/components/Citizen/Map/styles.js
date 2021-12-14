import styled from "styled-components";

export const Logotipo = styled.svg`
    width: 100%;
  height: 100%;
  max-height: 100%;
  fill: var(--primary);
  path {
    fill-opacity: 0.5;
    stroke-width: 2px;
    cursor: pointer;
    &:hover {
      fill: ${props => props.color};
      fill-opacity: 0.9;
    }
  }
`;
export const Statesmen = styled.path`
  fill: var(--primary);
`;
export const Masters = styled.path`
  fill: var(--primary);
`;
export const Influencers = styled.path`
  fill: var(--primary);
`;
export const Cyborgs = styled.path`
  fill: var(--primary);
`;
export const Singulars = styled.path`
  fill: var(--primary);
`;
export const Mainstreams = styled.path`
  fill: var(--primary);
`;
