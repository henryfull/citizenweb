import styled from "styled-components";

export const Navbar = styled.nav`
  clear: both;
  display: block;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--light);
  border-bottom: 5px solid white;
  transition: top 0.3s;
  z-index: 1;
  box-shadow: 0px 1px 2px var(--primary);
  /* background-color: rgba(10,39, 176, 0.9); */
  .branch {
    padding: 5px;
  }
  @media(max-width: 587px){
    position: fixed;
    top: auto;
    bottom: 0;
    border: none;
    height: 70px;

  }

`;
export const ButtonMenu = styled.button`
  color: var(--primary);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 1.4rem;
`;

export const Links = styled.button`
  font-size: 32px;
  color: rgba(10, 39, 176, 1);
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  line-height: 32px;
  padding:0px;
  &:hover {
    box-shadow: 0 0 5px black;
    & ~ #block_float_link {
      display: block;
    }
  }
`;
export const ContentNavbar = styled.nav`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  margin: auto;
`;
