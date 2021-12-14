import styled from "styled-components";

export const Label = styled.label`
  background-color: var(--light);
  width: 100%;
  border-radius: 5px;
  margin: 10px auto;
  border: 1px solid ${props => props.color || 'var(--primary)' };
  padding: 10px;
  transition: 0.5s linear all;
  position: relative;
  &:-internal-autofill-selected {
    background-color: none;
  }
  &:focus-within {
    background-color: var(--light);
    transition: 0.5s linear all;
  }
  .title {
    position: absolute;
    background: var(--light);
    color: var(--primary);
    top: -10px;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 13px;
    text-align: left;
    font-family: Arial,'Franklin Gothic Medium', 'Arial Narrow',  sans-serif;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: var(--primary);
  font-size: 18px;
  padding: 3px;
  &::placeholder{
    font-size: 13px;
  }
  outline: none;
`;


export const Auctions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
  /* grid-template-rows: minmax(130px, 230px); */
  grid-auto-flow: dense;
  padding: 10px;
  
  @media (max-width: 587px) {
    grid-auto-rows: auto;
    grid-template-rows: 1fr;
    padding: 0px;
  }

`;


export const BlockImage = styled.div`
  min-height: 100px;
  max-height: 200px;
  /* max-width: 33%; */
  width: 100%;
  position: relative;
  background-color: grey;
  overflow: hidden;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  @media (max-width: 587px) {
    max-width: 100%;
    max-height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms;
  }
`;
export const CountFiles = styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  width: 2ch;
  text-align: center;
  border-radius: 25px;
  color: white;
  height: 20px;
    padding: 0px;
    width: 20px;
    font-size: 14px;
`;

export const ColorAuction = styled.div`
  background-color: ${(props) => props.color};
  padding: 6px 5px;
  height: 30px;
`;

export const GridCars = styled.article`
  padding: 5px;
  .title {
    margin: 5px;
    color: var(--primary);
  }
  .content_car {
    background-color: var(--light);
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 30px;
    height: 100%;
    box-shadow: 0 0 5px black;
  }
  .car {
    display: grid;
  }
  @media (max-width: 587px) {
    width: 100vw;
    .car {
      display: grid;
    }
  }
  .price {
    font-weight: bold;
  }

  p.list_sep span._tag{
    margin: 2px;
    padding: 0px 5px;
    border-radius: 5px;
    /* border: 1px solid var(--primary); */
    background-color: var(--lightwhite);
    display: inline-block;
    font-size: 16px;
  }

`;


export const Description = styled.div`
  position: relative;

  .title {
    position: absolute;
    background: var(--light);
    color: var(--primary);
    top: 0px;
    left: 10px;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 13px;
    text-align: left;
    font-family: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin: 5px auto;
  border: 1px solid var(--light);
  padding: 20px 10px;
  transition: 0.5s linear all;
  color: var(--primary);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  border: 1px solid var(--primary);
  &:focus-within {
    font-size: 18px;
    background-color: var(--primary);
    color: var(--light);
    transition: 0.5s linear all;
  }
`;

export const ButtonNext = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  color: var(--primary);
  max-height: 50px;
  &:hover {
    background-color: white;
    color: var(--primary);
  }
`;
