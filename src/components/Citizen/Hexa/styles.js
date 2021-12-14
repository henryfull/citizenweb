
import styled from "styled-components";

export const Icon = styled.svg`
height: ${props => props.height || 50}px;
fill: ${props => props.color};
stroke: ${props => props.stroke};

`;