import styled from "styled-components";

import background from "../../assets/img/home/bg-transparent-blocks.png";
import recblue4 from "../../assets/img/common/icons-ciitizen-rect-4-blue.svg";
import recred4 from "../../assets/img/common/icons-ciitizen-rect-4-red.svg";
import recwhite4 from "../../assets/img/common/icons-ciitizen-rect-4-white.svg";

// import Background from "../../assets/img/home/happy-girl-car.jpg";

export const DivHome = styled.div`
  background: url(${process.env.PUBLIC_URL}files/backgrounds/bg-citizen-1.jpg)
    no-repeat center center;
  background-size: cover;
  height: 100vh;
  background-position-y: top;
`;

export const Logo = styled.div`
  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }
`;

export const ContentHome = styled.div`
  height: 100vh;
  display: grid;
  #_contentHome {
    display: grid;
    grid-template-columns: 300px auto 370px;
  }
  .money{
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

export const Whatis = styled.aside`
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  border-bottom: 1px solid var(--primary);
  h3 {
  }
  p {
    max-width: 500px;
  }
  p.center {
    text-align: center;
    margin: auto;
  }
  img.emblem {
    filter: invert();
  }
  .blocks {
    padding: 15px 5px;
  }
  .arrow {
    transform: rotate(125deg);
    display: inline-block;
    margin-right: 10px;
  }
  .blocks,
  .select_blocks {
    /* border-radius: 25px; */

    border: 10px solid transparent;
    border-image: url("${recblue4}") 60 round;
    position: relative;
    &:hover {
      border-image: url("${recwhite4}") 60 round;
    }
    &.active {
      border-image: url("${recred4}") 60 round;
      border-color: var(--primary);
    }
  }
  .carousel {
    white-space: nowrap;
    overflow-x: scroll;
    max-width: 90vw;
  }

  .group_blocs {
    /* display: grid;
    grid-template-columns: 250px 250px 250px; */
    display: flex;
    gap: 10px;
    width: 100%;
    place-items: flex-start;
    margin: 30px auto;
    text-align: center;
    place-content: center;
    overflow: scroll;

    .list_factions {
      width: 500px;
      padding: 0px 10px;
      ._factions {
        width: 100%;
        max-width: 100%;
        p {
          font-size: 16px;
        }
      }
    }

    @media (max-width: 600px) {
      place-content: baseline;
    }
  }
  button {
    overflow: hidden;
    width: 250px;

    &.select_blocks {
      position: relative;
      background: url("${background}") no-repeat center top;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        &.establishment {
          background: linear-gradient(crimson 10%, black 50%);
        }
        &.cybers {
          background: linear-gradient(green 10%, black 50%);
        }
        &.rebels {
          background: linear-gradient(blue 10%, black 50%);
        }
      }
      .block_image {
        @media (min-width: 600px) {
          .block_image {
            max-height: 400px;
            height: 360px;
          }
        }
        display: grid;
        max-height: 400px;
        height: 360px;
        overflow: hidden;
        .image {
          object-fit: none;
          width: 100%;
          height: 100%;
        }
      }
      ._footer {
        position: relative;
        height: 300px;
        display: grid;
        place-content: center;
        img {
          margin: auto;
        }
        p {
          font-size: 14px;
        }
        hr {
          width: 100%;
        }
        &.establishment {
          background: linear-gradient(crimson 10%, black 50%);
          &:before {
            background-color: crimson;
          }
        }
        &.cybers {
          background: linear-gradient(green 10%, black 50%);
          &:before {
            background-color: green;
          }
        }
        &.rebels {
          background: linear-gradient(blue 10%, black 50%);
          &:before {
            background-color: blue;
          }
        }
        &:before {
          content: "";
          position: absolute;
          top: -29px;
          width: 100%;
          height: 50px;
          left: 0;
          transform: skewY(10deg);
          z-index: 0;
          border-top: 5px solid grey;
        }
      }
    }
    @media (max-width: 600px) {
      .block_image {
        height: 240px;
      }
    }
  }
`;
export const Div = styled.aside`
  button {
    color: white;
    background-color: var(--darkopacity);
    margin: 5px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    border-left: 5px solid var(--primary);
    text-align: left;
    clip-path: polygon(100% 0, 100% 60%, 95% 100%, 0 100%, 0 0);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  > div.active {
    background-color: var(--citizen-darkblue);
  }
`;


export const Article = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  margin: 5px auto;
  display: grid;
  border: 2px solid ${(props) => props.color};
  width: 300px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  strong,
  p {
    color: var(--second);
    &.desactive {
      font-family: "alien";
      font-size: 18px;
      color: var(--primary);
    }
  }
  b {
    color: ${(props) => props.color};
  }
  b::first-letter,
  p::first-letter,
  span::first-letter {
    text-transform: uppercase;
  }
  .contents {
    max-width: 300px;
  }
  .stats {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }
  .power {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    margin: 0px;
    text-shadow: 2px 2px 0px var(--black);
  }
  .rarity {
    background-color: ${(props) => props.color};
    width: 100%;
    padding: 5px;
    color: white;
    vertical-align: middle;
    span {
      vertical-align: text-bottom;
    }
    p {
      color: white;
    }
  }
  .block-image-story {
    position: relative;
    max-width: 300px;
    .block_emblem {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: auto;
      filter: invert();
    }

    &.desactive {
      img {
        filter: brightness(0);
        -webkit-filter: brightness(0);
      }
    }
    width: 100%;
    height: 100%;
    max-height: 300px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 5px;
    clip-path: polygon(
      0 100%,
      25% 100%,
      75% 100%,
      100% 75%,
      100% 12%,
      100% 0,
      25% 0,
      0 25%
    );
    img {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    display: block;
    padding: 5px;
    .block-image-story {
      float: left;
      margin-right: 10px;
      width: 100%;
      height: 250px;
    }
    strong {
      display: inline-flex;
      flex-direction: row-reverse;
      span {
        padding: 2px;
      }
    }
  }
`;
