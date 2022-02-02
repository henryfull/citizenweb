import styled from "styled-components";
let second = "#00c3ff";
// import Background from "../../assets/img/home/happy-girl-car.jpg";

export const DivHome = styled.div`
  background: url(${process.env.PUBLIC_URL}files/backgrounds/bg-citizen-1.jpg)
    no-repeat center center;
  background-size: cover;
  height: 100vh;
  background-position-y: top;
  position: relative;
  h3 {
    position: absolute;
    bottom: 50px;
    margin: auto;
    left: 1%;
    right: 1%;
    width: 100%;
    text-align: center;
    color: white;
    text-shadow: 0 0 15px black;
  }
`;
export const Div = styled.div`
  h2 {
    color: ${second};
    text-transform: uppercase;
  }
  .Max {
    max-width: 1200px;
    margin: auto;
  }
`;

export const Logo = styled.div`
  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }
`;
export const Language = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  border: 1px solid ${props => props.lang};
  color: ${props => props.lang};
  border-radius: 50px;
  font-size: 12px;
  top: 5px;
  right: 5px;
  &:hover {
    background: ${props => props.lang};
    color: black;
  }
`;

export const ContentHome = styled.div`
  height: 100vh;
  display: grid;
  #_contentHome {
    display: grid;
    grid-template-columns: 300px auto 370px;
  }
  .money {
    grid-area: 2 / 1 / span 3 / 3;
  }
`;
export const Msg = styled.p`
  text-align: center;
  &.agree {
    color: greenyellow;
  }
  &.deny {
    color: red;
  }
`;
export const About = styled.div`
  background: url(${process.env.PUBLIC_URL}files/assets/linear-bg.png) no-repeat
    center center;
  max-height: 500px;
  overflow: hidden;
  background-size: cover;
  display: grid;
  grid-template-columns: 60% 1fr;
  padding: 20px;
  margin: 50px auto;
  .about {
    color: #ccc;
  }
  img {
    margin: auto;
  }
  h2 {
    line-height: normal;
    max-width: 400px;
  }
  p.description {
    max-width: 400px;
    color: #fff;
  }
  button {
    margin: 20px auto;
    background: url(${process.env.PUBLIC_URL}files/assets/button-blue-bg.png)
      no-repeat center center;
    padding: 10px 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    h2 {
      line-height: normal;
    }
    img {
      display: none;
    }
  }
`;
export const Modes = styled.div`
  background: url(${process.env.PUBLIC_URL}files/assets/bg-panelado.jpg) repeat;
  background-size: 30px;
  .modes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 20px;
    padding: 20px;
  }
  .modes_images {
    position: relative;
    h3 {
      position: absolute;
      top: 130px;
      left: 30px;
      margin: auto;
      width: 100%;
      color: white;
      font-size: 24px;
      padding: 5px;
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
  p {
    color: #fff;
  }
  @media (max-width: 768px) {
    text-align: center;
    .modes {
      grid-template-columns: 1fr;
    }

    h2 {
      line-height: normal;
    }
  }
`;
export const Characteres = styled.div`
  p {
    text-align: center;
    color: #fff;
    max-width: 60%;
    margin: auto;
  }
  .list_characters {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    margin: 50px auto;
    img {
      margin: auto;
      width: 60px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
    .list_characters {
      img {
        width: 40px;
      }
    }
    p {
      max-width: 90%;
    }
    h2 {
      line-height: normal;
    }
  }
`;
export const Gameplay = styled.div`
  background: url(${process.env.PUBLIC_URL}files/assets/bg-panelado.jpg) repeat;
  background-size: 30px;
  padding: 50px 10px;
  p {
    text-align: center;
    color: #fff;
    max-width: 60%;
    margin: auto;
  }
  img {
    margin: 50px auto;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
    img {
      width: 100%;
    }
    p {
      max-width: 90%;
    }
    h2 {
      line-height: normal;
    }
  }
`;
export const Skills = styled.div`
  background: url(${process.env.PUBLIC_URL}files/assets/bg-skills.png) no-repeat
    center center;
  background-size: cover;
  p {
    text-align: center;
    color: #fff;
    max-width: 60%;
    margin: auto;
  }
  .list_characters {
    display: grid;
    gap: 20px;
    margin: 50px auto;
    img {
      text-align: center;
      margin: auto;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
    img {
      width: 100%;
    }
    p {
      max-width: 90%;
    }
    h2 {
      line-height: normal;
    }
  }
`;

export const Edit = styled.div`
  background: url(${process.env.PUBLIC_URL}files/assets/bg-panelado.jpg) repeat;
  background-size: 30px;
  display: grid;
  padding: 50px 10px;
  p {
    text-align: center;
    color: #fff;
    width: 60%;
    margin: 20px auto;
  }

  img {
    width: 60%;
    margin: auto;
    text-align: center;
    box-shadow: 10px 10px 5px black;
  }

  @media (max-width: 768px) {
    p {
      width: 90%;
    }
    h2 {
      line-height: normal;
    }
    img {
      width: 90%;
    }
  }
`;
export const Suscriptions = styled.div`
  /* background: url(${process.env
    .PUBLIC_URL}files/assets/bg-panelado.jpg) repeat; */
  background-size: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 50px 10px;
  h3 {
    color: ${second};
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    line-height: normal;
  }
  h4 {
    color: var(--primary);
    text-align: center;
  }
  p {
    text-align: center;
    color: #fff;
    width: 60%;
    margin: 20px auto;
  }

  img {
    width: 60%;
    margin: auto;
    text-align: center;
  }
  input {
    display: grid;
  }
  input[type="email"] {
    border: 1px solid var(--second);
    border-radius: 5px;
    padding: 5px;
    color: white;
    width: 100%;
    margin: 20px auto;
  }
  input[type="submit"] {
    border: 1px solid var(--primary);
    border-radius: 5px;
    padding: 5px;
    color: white;
    width: 80%;
    margin: 20px auto;
    &:hover {
      background: var(--primary);
      cursor: pointer;
    }
  }
  .Suscription_email {
    display: grid;
    max-width: 400px;
  }
  label {
    color: #fff;
    font-size: 12px;
    display: flex;
    margin: 5px 0px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    p {
      width: 90%;
    }
    h2 {
      line-height: normal;
    }
    img {
      width: 90%;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  padding: 15px 0px;
  text-align: center;
  label {
    padding: 5px;
    border: 1px solid var(--primary);
    padding: 5px;
    border-radius: 5px;
  }
  svg {
  }

  input {
    color: var(--second);
    &:placeholder {
      color: var(--second);
    }
  }
  button {
  }
`;

export const Content = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  p {
    line-height: 25px;
  }
  article {
    min-height: 200px;
  }
`;
export const H1 = styled.h1`
  font-size: 2.4rem;
  line-height: 76px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  margin: 20px auto;
  text-align: center;
  @media (max-width: 586px) {
    font-size: 24px;
  }
`;
export const Background = styled.div`
  /* background: url(${process.env
    .PUBLIC_URL}files/backgrounds/bg-police.jpg) no-repeat center; */
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;
export const CoverImage = styled.div`
  /* background: url(${process.env
    .PUBLIC_URL}files/backgrounds/bg-police.jpg) no-repeat center; */
  border: 2px solid var(--primary);
  border-radius: 15px;
  padding: 5px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    border-radius: 15px;
    opacity: 0.5;
  }
  .features {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    li {
      color: var(--second);
      text-shadow: 0 0 2px var(--second);
      box-shadow: 0 0 2px var(--second);
      svg {
        color: var(--second);
        text-shadow: 0 0 2px var(--second);
        margin: 0px 0px;
      }
      padding: 5px;
      margin: 10px 0;
      font-weight: bold;
      &:hover {
        background-color: var(--second);
        color: var(--primary);
      }
    }
    @media (max-width: 587px) {
      position: initial;
    }
  }
`;
export const List = styled.div`
  margin: 20px;
  .point {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    margin: 2px 10px;
    &.faction1 {
      background-color: aqua;
    }
    &.faction2 {
      background-color: greenyellow;
    }
    &.faction3 {
      background-color: deeppink;
    }
  }
`;

export const Footer = styled.footer`
  p {
    font-size: 8px;
    color: grey;
    padding: 5px;
    text-align: center;
  }
`;
