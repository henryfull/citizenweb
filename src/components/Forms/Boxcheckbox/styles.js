import styled from "styled-components";

export const Checkbox = styled.span`
font-size: 24px;
padding: 0px;
color: var(--primary);
position: absolute;
right:10px;

&:hover {
  cursor: pointer;
}
`;
export const BlockCheck = styled.div`
    background-color: rgba(9,39,179,0.1);
    margin: 2px auto;
    border: none;
    padding: 5px 10px;
    border-radius: 2px;
    position: relative;
`;